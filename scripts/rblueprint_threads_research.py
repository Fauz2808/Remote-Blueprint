#!/usr/bin/env python3
"""
rblueprint_threads_research.py

Ambil riset harian dari Repliz buat Remote Blueprint (niche: kerja remote/
freelance nambah penghasilan). Simpan output ke:
  Docs/threads-daily/YYYY-MM-DD-research-data.json

4 pilar rotasi (bukan lane bahasa kayak LogyFun):
  profil, bidding, eksekusi, scale
"""
from __future__ import annotations

import argparse
import base64
import json
import os
import re
import time
import urllib.error
import urllib.parse
import urllib.request
from datetime import datetime, timedelta
from pathlib import Path
from zoneinfo import ZoneInfo

WIB = ZoneInfo("Asia/Jakarta")
ROOT = Path(__file__).resolve().parents[1]
DOCS_DIR = ROOT / "Docs" / "threads-daily"
ENV_PATH = ROOT / ".env"
PERF_LOG_PATH = ROOT / "Docs" / "threads-performance-log.json"
COOLDOWN_FILE = ROOT / "Docs" / "threads-angle-cooldown.json"
COOLDOWN_DAYS = 2

KEYWORDS = {
    "profil": ["profil upwork", "freelance profile", "cara bikin profil freelance"],
    "bidding": ["proposal upwork", "connects upwork", "cover letter freelance"],
    "eksekusi": ["komunikasi klien freelance", "freelancer profesional", "update progress klien"],
    "scale": ["referral freelance", "klien repeat order", "income freelance rutin"],
}

PILLAR_BY_DAY = {
    0: "profil",
    1: "bidding",
    2: "eksekusi",
    3: "scale",
    4: "profil",
    5: "bidding",
    6: "eksekusi",
}

TOPIC_MAP = {
    "profil": "Profil Freelance",
    "bidding": "Strategi Bidding Freelance",
    "eksekusi": "Komunikasi Klien Freelance",
    "scale": "Scale Freelance",
}

SLOTS = [
    {"slot": "pagi", "hour": 8, "suggested_minute": 8},
    {"slot": "siang", "hour": 12, "suggested_minute": 8},
    {"slot": "sore", "hour": 16, "suggested_minute": 8},
    {"slot": "sore2", "hour": 18, "suggested_minute": 8},
    {"slot": "malam", "hour": 20, "suggested_minute": 8},
]


def load_env(path: Path) -> None:
    if not path.exists():
        return
    for raw in path.read_text().splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip())


def load_cooldown() -> dict:
    if COOLDOWN_FILE.exists():
        try:
            return json.loads(COOLDOWN_FILE.read_text())
        except Exception:
            pass
    return {}


def save_cooldown(data: dict) -> None:
    COOLDOWN_FILE.parent.mkdir(parents=True, exist_ok=True)
    COOLDOWN_FILE.write_text(json.dumps(data, ensure_ascii=False, indent=2))


def is_on_cooldown(pillar: str, run_date: datetime) -> bool:
    data = load_cooldown()
    last_str = data.get(pillar)
    if not last_str:
        return False
    last = datetime.fromisoformat(last_str).date()
    return (run_date.date() - last).days < COOLDOWN_DAYS


def mark_cooldown(pillar: str, run_date: datetime) -> None:
    data = load_cooldown()
    data[pillar] = run_date.date().isoformat()
    save_cooldown(data)


class ReplizClient:
    def __init__(self, access_key: str, secret_key: str) -> None:
        auth = base64.b64encode(f"{access_key}:{secret_key}".encode()).decode()
        self.headers = {"Authorization": f"Basic {auth}", "Content-Type": "application/json"}

    def _request(self, method: str, path: str) -> dict:
        req = urllib.request.Request(f"https://api.repliz.com{path}", headers=self.headers, method=method)
        for attempt in range(3):
            try:
                with urllib.request.urlopen(req, timeout=30) as r:
                    body = r.read().decode()
                return json.loads(body) if body else {}
            except urllib.error.HTTPError as e:
                if e.code < 500 or attempt == 2:
                    raise
                time.sleep(1 + attempt)
            except Exception as e:
                if attempt == 2:
                    raise
                time.sleep(1 + attempt)
        return {}

    def search_threads(self, keyword: str, account_id: str) -> list[dict]:
        path = (
            "/public/research/threads/content/search?accountId="
            + account_id
            + "&search="
            + urllib.parse.quote(keyword)
        )
        return self._request("GET", path).get("docs", [])

    def get_schedule(self, schedule_id: str) -> dict:
        return self._request("GET", f"/public/schedule/{schedule_id}")


def normalize_text(doc: dict) -> str:
    text = (doc.get("description") or doc.get("title") or "").replace("\n", " ")
    return re.sub(r"\s+", " ", text).strip()


def detect_hook_pattern(text: str) -> str:
    text_low = text.lower()
    if "?" in text[:60]:
        return "pertanyaan langsung"
    if any(w in text_low for w in ["pernah", "dulu", "waktu itu", "cerita", "aku", "saya"]):
        return "pengalaman pribadi / curhat"
    if any(w in text_low for w in ["stop", "jangan", "hati-hati", "salah"]):
        return "kontra / peringatan"
    return "fakta / data"


def gather_topic(pillar: str, keyword: str, docs: list[dict]) -> dict:
    hooks = []
    for doc in docs[:8]:
        text = normalize_text(doc)
        if not text:
            continue
        hooks.append({"text": text[:200], "pattern": detect_hook_pattern(text), "url": doc.get("url", "")})
    samples = [normalize_text(d) for d in docs[:5] if normalize_text(d)]
    return {"pillar": pillar, "keyword": keyword, "score": min(len(docs), 5), "hooks": hooks[:5], "viral_samples": samples[:3]}


def get_recent_perf() -> list[dict]:
    if not PERF_LOG_PATH.exists():
        return []
    try:
        rows = json.loads(PERF_LOG_PATH.read_text())
    except Exception:
        return []
    return sorted(rows, key=lambda r: r.get("date", ""), reverse=True)[:8]


def main() -> int:
    load_env(ENV_PATH)
    access_key = os.getenv("REPLIZ_ACCESS_KEY")
    secret_key = os.getenv("REPLIZ_SECRET_KEY")
    account_id = os.getenv("THREADS_ACCOUNT_ID")
    if not access_key or not secret_key or not account_id:
        print("Missing REPLIZ_ACCESS_KEY / REPLIZ_SECRET_KEY / THREADS_ACCOUNT_ID")
        return 1

    parser = argparse.ArgumentParser()
    parser.add_argument("--date", help="YYYY-MM-DD (default: today WIB)")
    args = parser.parse_args()

    run_date = (
        datetime.strptime(args.date, "%Y-%m-%d").replace(tzinfo=WIB)
        if args.date
        else datetime.now(WIB)
    )

    client = ReplizClient(access_key, secret_key)
    base_pillar = PILLAR_BY_DAY[run_date.weekday()]
    # skip pillar on cooldown -> rotate to next
    order = ["profil", "bidding", "eksekusi", "scale"]
    start_idx = order.index(base_pillar)
    pillar = base_pillar
    for i in range(4):
        candidate = order[(start_idx + i) % 4]
        if not is_on_cooldown(candidate, run_date):
            pillar = candidate
            break

    keywords = KEYWORDS[pillar]
    print(f"[research] {run_date.date()} | pillar={pillar} | keywords={len(keywords)}")

    topics = []
    for kw in keywords:
        try:
            docs = client.search_threads(kw, account_id)
            topics.append(gather_topic(pillar, kw, docs))
        except Exception as e:
            print(f"  [warn] {kw}: {e}")

    mark_cooldown(pillar, run_date)

    # Refresh metrik post terakhir
    try:
        updated = 0
        if PERF_LOG_PATH.exists():
            rows = json.loads(PERF_LOG_PATH.read_text())
            cutoff = (run_date.date() - timedelta(days=7)).isoformat()
            for row in rows:
                if (row.get("date") or "") < cutoff:
                    continue
                sid = row.get("schedule_id")
                if not sid:
                    continue
                try:
                    live = client.get_schedule(sid)
                    row["reply_count"] = len(live.get("replies") or [])
                    row["status"] = live.get("status")
                    updated += 1
                except Exception:
                    pass
            PERF_LOG_PATH.write_text(json.dumps(rows, indent=2, ensure_ascii=False))
        print(f"[research] metrik diperbarui: {updated} post")
    except Exception as e:
        print(f"[warn] refresh metrik: {e}")

    output = {
        "date": run_date.date().isoformat(),
        "pillar": pillar,
        "topics": topics,
        "recent_perf": get_recent_perf(),
        "slots": SLOTS,
        "threads_topic": TOPIC_MAP[pillar],
        "cta_link": "https://lynk.id/remote_blueprint/k93nyvv2roje",
        "cta_rule": "Link langsung HANYA di slot 'sore' dan 'siang' (2 titik high-intent). Slot lain pakai reply-keyword (PROFIL/PROPOSAL/BIDDING/UPDATE/KOMUNIKASI/SCALE/BLUEPRINT), TANPA link/harga.",
    }

    DOCS_DIR.mkdir(parents=True, exist_ok=True)
    out_path = DOCS_DIR / f"{run_date.date().isoformat()}-research-data.json"
    out_path.write_text(json.dumps(output, indent=2, ensure_ascii=False))
    print(f"[research] output -> {out_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
