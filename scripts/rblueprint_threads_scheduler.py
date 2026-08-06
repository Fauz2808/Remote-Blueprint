#!/usr/bin/env python3
"""
rblueprint_threads_scheduler.py

Terima input draft dari Hermes (via stdin JSON atau --input file),
lakukan validasi, dan schedule ke Repliz.

Format input JSON (array of thread objects):
[
  {
    "slot": "pagi",          // pagi | siang | sore
    "time_wib": "08:07",    // jam:menit WIB
    "threads_topic": "Belajar Bahasa Inggris",
    "parts": [              // bagian thread, index 0 = post utama, sisanya = reply
      "Teks bagian pertama...",
      "Teks reply 1...",
      ...
    ]
  },
  ...
]

Output: JSON summary ke stdout.
Log idempotency ke Docs/threads-publish-log.json (skip kalau sudah terjadwal).
"""
from __future__ import annotations

import argparse
import base64
import json
import os
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timedelta
from pathlib import Path
from zoneinfo import ZoneInfo

WIB = ZoneInfo("Asia/Jakarta")
ROOT = Path(__file__).resolve().parents[1]
ENV_PATH = ROOT / ".env"
PUBLISH_LOG = ROOT / "Docs" / "threads-publish-log.json"
PERF_LOG = ROOT / "Docs" / "threads-performance-log.json"
THREADS_ACCOUNT_ID = ""
MIN_PARTS = 3
MAX_PARTS = 10
MAX_PART_LEN = 500


def load_env(path: Path) -> None:
    if not path.exists():
        return
    for raw in path.read_text().splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        os.environ.setdefault(key.strip(), value.strip())


def load_publish_log() -> dict:
    if PUBLISH_LOG.exists():
        try:
            return json.loads(PUBLISH_LOG.read_text())
        except Exception:
            return {}
    return {}


def save_publish_log(log: dict) -> None:
    PUBLISH_LOG.write_text(json.dumps(log, indent=2, ensure_ascii=False))


def already_scheduled(log: dict, date_str: str, slot: str) -> bool:
    return log.get(date_str, {}).get(slot) is not None


def mark_scheduled(log: dict, date_str: str, slot: str, schedule_id: str) -> None:
    log.setdefault(date_str, {})[slot] = schedule_id


def append_perf_log(item: dict) -> None:
    rows: list = []
    if PERF_LOG.exists():
        try:
            rows = json.loads(PERF_LOG.read_text())
        except Exception:
            pass
    sid = item.get("schedule_id")
    rows = [r for r in rows if r.get("schedule_id") != sid]
    rows.append(item)
    PERF_LOG.write_text(json.dumps(rows, indent=2, ensure_ascii=False))


class ReplizClient:
    def __init__(self, access_key: str, secret_key: str) -> None:
        auth = base64.b64encode(f"{access_key}:{secret_key}".encode()).decode()
        self.headers = {"Authorization": f"Basic {auth}", "Content-Type": "application/json"}

    def _request(self, method: str, path: str, payload: dict | None = None) -> dict:
        req = urllib.request.Request(
            f"https://api.repliz.com{path}",
            headers=self.headers,
            method=method,
            data=json.dumps(payload).encode() if payload is not None else None,
        )
        last_err: Exception | None = None
        for attempt in range(3):
            try:
                with urllib.request.urlopen(req, timeout=30) as r:
                    body = r.read().decode()
                return json.loads(body) if body else {}
            except urllib.error.HTTPError as e:
                last_err = e
                if e.code < 500 or attempt == 2:
                    raise
                time.sleep(1 + attempt)
            except Exception as e:
                last_err = e
                if attempt == 2:
                    raise
                time.sleep(1 + attempt)
        raise last_err or RuntimeError("Repliz request failed")

    def create_schedule(self, payload: dict) -> dict:
        return self._request("POST", "/public/schedule", payload)

    def get_schedule(self, schedule_id: str) -> dict:
        return self._request("GET", f"/public/schedule/{schedule_id}")


def schedule_iso(
    time_wib: str,
    run_date: datetime,
    skip_past: bool = False,
    recovery_offset_minutes: int = 3,
) -> str | None:
    hour, minute = map(int, time_wib.split(":"))
    target = run_date.replace(hour=hour, minute=minute, second=0, microsecond=0)
    now = datetime.now(WIB)
    if target <= now:
        if skip_past:
            return None
        # ponytail: recovery runs stagger overdue slots to avoid Repliz overload;
        # use a queue when concurrent publishing needs dynamic capacity control.
        target = (now + timedelta(minutes=recovery_offset_minutes)).replace(second=0, microsecond=0)
    return target.isoformat()


def validate_thread(thread: dict, idx: int) -> list[str]:
    errors = []
    parts = thread.get("parts") or []
    if not thread.get("slot") in ("pagi", "siang", "sore", "malam"):
        errors.append(f"[{idx}] slot harus pagi/siang/sore/malam")
    if not thread.get("time_wib"):
        errors.append(f"[{idx}] time_wib wajib ada (HH:MM)")
    if len(parts) < MIN_PARTS:
        errors.append(f"[{idx}] minimal {MIN_PARTS} bagian, dapat {len(parts)}")
    if len(parts) > MAX_PARTS:
        errors.append(f"[{idx}] maksimal {MAX_PARTS} bagian, dapat {len(parts)}")
    for i, p in enumerate(parts):
        if len(p) > MAX_PART_LEN:
            errors.append(f"[{idx}] bagian {i} terlalu panjang ({len(p)} > {MAX_PART_LEN} karakter)")
        if not p.strip():
            errors.append(f"[{idx}] bagian {i} kosong")
    return errors


def main() -> int:
    load_env(ENV_PATH)
    global THREADS_ACCOUNT_ID
    THREADS_ACCOUNT_ID = os.getenv("THREADS_ACCOUNT_ID", "")
    access_key = os.getenv("REPLIZ_ACCESS_KEY")
    secret_key = os.getenv("REPLIZ_SECRET_KEY")
    if not access_key or not secret_key:
        print(json.dumps({"error": "Missing REPLIZ_ACCESS_KEY / REPLIZ_SECRET_KEY"}))
        return 1
    if not THREADS_ACCOUNT_ID:
        print(json.dumps({"error": "Missing THREADS_ACCOUNT_ID in .env"}))
        return 1

    parser = argparse.ArgumentParser()
    parser.add_argument("--input", help="Path ke file JSON draft (default: stdin)")
    parser.add_argument("--date", help="YYYY-MM-DD (default: today WIB)")
    parser.add_argument("--skip-past", action="store_true", help="Skip slot yang sudah lewat")
    parser.add_argument("--dry-run", action="store_true", help="Validasi saja, tidak schedule")
    args = parser.parse_args()

    # Baca input
    if args.input:
        try:
            raw = Path(args.input).read_text()
        except Exception as e:
            print(json.dumps({"error": f"Gagal baca input file: {e}"}))
            return 1
    else:
        raw = sys.stdin.read()

    try:
        threads: list[dict] = json.loads(raw)
        if not isinstance(threads, list):
            threads = [threads]
    except Exception as e:
        print(json.dumps({"error": f"Invalid JSON input: {e}"}))
        return 1

    # Validasi
    all_errors = []
    for i, t in enumerate(threads):
        all_errors.extend(validate_thread(t, i))
    if all_errors:
        print(json.dumps({"error": "Validasi gagal", "details": all_errors}))
        return 1

    # Tanggal run
    run_date = (
        datetime.strptime(args.date, "%Y-%m-%d").replace(tzinfo=WIB)
        if args.date
        else datetime.now(WIB)
    )
    date_str = run_date.date().isoformat()

    if args.dry_run:
        print(json.dumps({"dry_run": True, "threads": len(threads), "date": date_str, "valid": True}))
        return 0

    client = ReplizClient(access_key, secret_key)
    publish_log = load_publish_log()
    scheduled = []
    skipped = []

    for thread_index, thread in enumerate(threads):
        slot = thread["slot"]

        # Idempotency guard
        if already_scheduled(publish_log, date_str, slot):
            skipped.append({"slot": slot, "reason": f"already-scheduled:{publish_log[date_str][slot]}"})
            continue

        iso = schedule_iso(
            thread["time_wib"],
            run_date,
            args.skip_past,
            recovery_offset_minutes=3 + (thread_index * 20),
        )
        if iso is None:
            skipped.append({"slot": slot, "reason": "past-slot"})
            continue

        parts = thread["parts"]
        replies = [{"description": p, "type": "text", "medias": []} for p in parts[1:]]

        payload = {
            "accountId": THREADS_ACCOUNT_ID,
            "scheduleAt": iso,
            "title": "",
            "description": parts[0],
            "topic": thread.get("threads_topic", ""),
            "type": "text",
            "medias": [],
            "replies": replies,
        }

        try:
            result = client.create_schedule(payload)
            schedule_id = result.get("scheduleId") or result.get("_id") or result.get("id", "")
        except Exception as e:
            skipped.append({"slot": slot, "reason": f"api-error:{e}"})
            continue

        # Verifikasi
        try:
            verify = client.get_schedule(schedule_id)
        except Exception:
            verify = {}

        item = {
            "date": date_str,
            "slot": slot,
            "time_wib": thread["time_wib"],
            "threads_topic": thread.get("threads_topic", ""),
            "schedule_id": schedule_id,
            "status": verify.get("status", "pending"),
            "reply_count": len(verify.get("replies") or []),
            "post_id": verify.get("postId"),
        }
        mark_scheduled(publish_log, date_str, slot, schedule_id)
        append_perf_log(item)
        scheduled.append(item)

    save_publish_log(publish_log)

    summary = {"date": date_str, "scheduled": scheduled, "skipped": skipped}
    print(json.dumps(summary, indent=2, ensure_ascii=False))

    print("\n=== SCHEDULED ===", file=sys.stderr)
    for s in scheduled:
        print(f"[{s['slot']}] {s['time_wib']} WIB -> {s['schedule_id']} ({s['status']})", file=sys.stderr)
    for sk in skipped:
        print(f"[skip] {sk['slot']} -> {sk['reason']}", file=sys.stderr)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
