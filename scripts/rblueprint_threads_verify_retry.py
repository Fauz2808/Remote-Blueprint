#!/usr/bin/env python3
"""
rblueprint_threads_verify_retry.py

Cek schedule Threads yang seharusnya sudah tayang. Kalau status=success
tapi postId kosong (bug Repliz gagal chain reply), hapus & schedule ulang
otomatis (max 2x retry, delay 3 menit).

Dipanggil oleh cron ringan tanpa AI, hemat token, 3x sehari setelah tiap slot.

Usage:
  python3 scripts/rblueprint_threads_verify_retry.py --date 2026-07-28 --slot pagi
"""
from __future__ import annotations

import argparse
import base64
import json
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timedelta, timezone
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
ENV_PATH = REPO / ".env"
PUBLISH_LOG = REPO / "Docs" / "threads-publish-log.json"
RETRY_LOG = REPO / "Docs" / "threads-retry-log.json"
THREADS_ACCOUNT_ID = ""
WIB = timezone(timedelta(hours=7))
MAX_RETRIES = 2
RETRY_DELAY_SEC = 60


def load_env() -> dict:
    vals = {}
    for line in ENV_PATH.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        vals[k.strip()] = v.strip()
    return vals


def load_json(path: Path, default):
    if not path.exists():
        return default
    try:
        return json.loads(path.read_text())
    except Exception:
        return default


def save_json(path: Path, data) -> None:
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2))


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
        with urllib.request.urlopen(req, timeout=30) as r:
            body = r.read().decode()
        return json.loads(body) if body else {}

    def get_schedule(self, schedule_id: str) -> dict:
        return self._request("GET", f"/public/schedule/{schedule_id}")

    def delete_schedule(self, schedule_id: str) -> dict:
        return self._request("DELETE", f"/public/schedule/{schedule_id}")

    def create_schedule(self, payload: dict) -> dict:
        return self._request("POST", "/public/schedule", payload)


def is_broken(schedule: dict) -> bool:
    """True kalau status success tapi postId utama ATAU salah satu reply kosong."""
    if schedule.get("status") != "success":
        return False
    if not schedule.get("postId"):
        return True
    for rep in schedule.get("replies") or []:
        if rep.get("status") == "success" and not rep.get("postId"):
            return True
    return False


def rebuild_payload(schedule: dict, new_target_iso: str) -> dict:
    replies = [
        {"description": r.get("description", ""), "type": "text", "medias": []}
        for r in (schedule.get("replies") or [])
    ]
    return {
        "accountId": THREADS_ACCOUNT_ID,
        "scheduleAt": new_target_iso,
        "title": schedule.get("title", ""),
        "description": schedule.get("description", ""),
        "topic": schedule.get("topic", ""),
        "type": "text",
        "medias": [],
        "replies": replies,
    }


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--date", help="YYYY-MM-DD (default: today WIB)")
    parser.add_argument("--slot", required=True, choices=["pagi", "siang", "sore", "sore2", "malam"])
    args = parser.parse_args()

    date_str = args.date or datetime.now(WIB).date().isoformat()

    vals = load_env()
    global THREADS_ACCOUNT_ID
    THREADS_ACCOUNT_ID = vals.get("THREADS_ACCOUNT_ID", "")
    client = ReplizClient(vals["REPLIZ_ACCESS_KEY"], vals["REPLIZ_SECRET_KEY"])

    publish_log = load_json(PUBLISH_LOG, {})
    schedule_id = (publish_log.get(date_str) or {}).get(args.slot)
    if not schedule_id:
        print(json.dumps({"result": "no-schedule-found", "date": date_str, "slot": args.slot}))
        return 0

    retry_log = load_json(RETRY_LOG, {})
    retry_key = f"{date_str}:{args.slot}"
    retries_done = retry_log.get(retry_key, 0)

    schedule = client.get_schedule(schedule_id)

    if not is_broken(schedule):
        print(json.dumps({
            "result": "ok",
            "date": date_str,
            "slot": args.slot,
            "schedule_id": schedule_id,
            "post_id": schedule.get("postId"),
        }))
        return 0

    if retries_done >= MAX_RETRIES:
        print(json.dumps({
            "result": "broken-max-retries",
            "date": date_str,
            "slot": args.slot,
            "schedule_id": schedule_id,
            "retries_done": retries_done,
        }))
        return 1

    # Hapus schedule yang rusak, buat ulang 1 menit dari sekarang
    try:
        client.delete_schedule(schedule_id)
    except Exception as e:
        print(json.dumps({"result": "delete-failed", "error": str(e)}))
        return 1

    time.sleep(2)
    target = (datetime.now(WIB) + timedelta(seconds=RETRY_DELAY_SEC)).replace(microsecond=0)
    payload = rebuild_payload(schedule, target.isoformat())

    try:
        result = client.create_schedule(payload)
    except Exception as e:
        print(json.dumps({"result": "recreate-failed", "error": str(e)}))
        return 1

    new_id = result.get("scheduleId") or result.get("_id") or result.get("id", "")
    publish_log.setdefault(date_str, {})[args.slot] = new_id
    save_json(PUBLISH_LOG, publish_log)

    retry_log[retry_key] = retries_done + 1
    save_json(RETRY_LOG, retry_log)

    print(json.dumps({
        "result": "retried",
        "date": date_str,
        "slot": args.slot,
        "old_schedule_id": schedule_id,
        "new_schedule_id": new_id,
        "retry_number": retries_done + 1,
        "new_target_wib": target.strftime("%H:%M"),
    }))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
