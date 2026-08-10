# Remote Blueprint Platform v2 — Roadmap

> Turunan dari `PRD.md`, approved 10 Agustus 2026.

## Phase 0 — Alignment & product lock

**Tujuan:** menghentikan perubahan arah saat build.

Deliverables:

- Approval PRD ini.
- Lock nama tier dan modul.
- Lock harga v1/pilot.
- Lock Supabase sebagai auth/DB atau pilih alternatif.
- Dapatkan Lynk Core product UUID.
- Tentukan support email dan sender email.
- Audit curriculum terhadap 17 pain point riset.
- Mapping desain halaman dan states.

Exit criteria:

- Semua open decision bagian 19 dijawab.
- PRD status berubah menjadi `APPROVED`.

## Phase 1 — Foundation & backend contract

**Tujuan:** menyiapkan data, auth, dan payment entitlement sebelum UI besar.

Deliverables:

- Supabase project/env.
- Schema User/Purchase/Entitlement/ActionProgress/SavedAssessment.
- RLS policies.
- Magic-link auth.
- Lynk webhook endpoint.
- Signature validation + idempotency tests.
- Product UUID mapping.
- Access recovery flow.

Exit criteria:

- Payload test Lynk menciptakan satu entitlement.
- Duplicate payload tetap satu entitlement.
- Invalid signature ditolak.
- User berhak login dan akses Core.

## Phase 2 — Starter free tier

**Tujuan:** membuat acquisition product yang memberi nilai sebelum checkout.

Deliverables:

- Starter landing/overview.
- Quick Guide.
- Readiness Scanner + scoring/test.
- Job Fit Checker + safety override/test.
- Contextual Core CTA.
- Optional save-to-account.
- Mobile and accessibility pass.

Exit criteria:

- Pengguna baru dapat menyelesaikan tiga modul tanpa bantuan.
- Hasil scanner/checker jelas dan tidak membuat klaim probabilitas palsu.
- Free flow production-tested.

## Phase 3 — Core migration

**Tujuan:** memindahkan tracker existing ke akun dan entitlement v2 tanpa kehilangan curriculum/progress.

Deliverables:

- Core route protection.
- Curriculum 5/17/28 tetap utuh.
- Server-backed action progress.
- Local progress import.
- Dashboard progress.
- Upwork Labs dipertahankan.
- Static password gate dihapus setelah migration window.

Exit criteria:

- Cross-device progress berhasil.
- Unauthorized Core access ditolak.
- Existing progress berhasil diimpor.
- Seluruh 28 action tetap dapat ditandai.

## Phase 4 — Checkout production integration

**Tujuan:** membuktikan flow pembelian nyata end-to-end.

Deliverables:

- Website CTA ke listing Lynk.
- Production webhook URL di Lynk.
- Merchant key secret.
- Automation Lynk copy baru.
- Real low-value/test transaction jika Lynk mendukung.
- Purchase/access support SOP.

Exit criteria:

- Pembelian nyata membuat entitlement.
- Buyer bisa login tanpa shared code.
- Kegagalan email bisa dipulihkan lewat `/access`.

## Phase 5 — QA, compliance, and launch

**Tujuan:** launch kecil yang dapat diukur.

Deliverables:

- Functional/security tests.
- Accessibility/mobile QA.
- Policy claim audit.
- Terms/privacy/refund/license.
- Analytics funnel minimum.
- Production smoke test.
- Pilot launch maksimal 20 buyer bila dipilih.

Exit criteria:

- Semua acceptance criteria bagian 17 lulus.
- Tidak ada critical security/access bug.
- Fauzan menyetujui production launch.

## Phase 6 — Learn and improve

**Tujuan:** keputusan v1.1 berdasarkan perilaku nyata.

Evaluasi setelah 10–20 buyer atau 30 hari:

- Completion per action/fase.
- Drop-off Starter.
- Purchase conversion.
- Support issues.
- Refund.
- Pain point hasil assessment agregat.

Kandidat v1.1 hanya jika data mendukung:

- Connect budget tracker.
- Application funnel analytics.
- Saved job history lebih lengkap.
- Core + Review Rp299.000–Rp399.000.
- Admin dashboard.
- Changelog notification.

Bukan roadmap committed: AI generator, scraping, native app, community, subscription.

---
