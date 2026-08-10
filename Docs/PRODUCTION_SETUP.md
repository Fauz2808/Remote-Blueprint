# Setup Production — Remote Blueprint v2

Sebelum publish, isi checklist ini. Website tetap jalan tanpa ini (build sudah lulus), tapi login dan pembayaran otomatis TIDAK aktif sampai semua diisi.

## 1. Supabase (Rp0, Free Plan)

1. Buat project baru di https://supabase.com/dashboard — pilih Free.
2. Jalankan migration: buka SQL Editor, tempel isi `supabase/migrations/001_initial.sql`, Run.
3. Authentication → Providers → Email → aktifkan Magic Link, matikan sign-up dengan password.
4. Authentication → URL Configuration → Site URL: `https://remoteblueprint.my.id`, Redirect URLs tambahkan domain yang sama.
5. **Wajib sebelum publik:** Authentication → SMTP Settings → isi custom SMTP (Resend/Brevo/Postmark). Default Supabase cuma 2 email/jam.
6. Project Settings → API → salin:
   - `Project URL` → jadi `VITE_SUPABASE_URL` dan `SUPABASE_URL`
   - `anon public key` → `VITE_SUPABASE_ANON_KEY`
   - `service_role key` → `SUPABASE_SERVICE_ROLE_KEY` (rahasia, jangan taruh di frontend)

## 2. Lynk.id

1. Buat listing baru **Remote Blueprint Core** — Rp149.000. Jangan pakai listing lama.
2. Ambil `merchant key` (dipakai verifikasi signature webhook) → `LYNK_MERCHANT_KEY`.
3. Ambil `product uuid` listing Core → `LYNK_CORE_PRODUCT_UUID`.
4. Set webhook URL Lynk ke: `https://remoteblueprint.my.id/api/webhooks/lynk`.
5. Checkout URL listing → `VITE_LYNK_CORE_CHECKOUT_URL`.

## 3. Set environment variables di Vercel

Project Settings → Environment Variables, isi semua key di `.env.example`. `SUPABASE_SERVICE_ROLE_KEY` dan `LYNK_MERCHANT_KEY` HANYA di server (jangan pakai prefix `VITE_`).

## 4. Verifikasi setelah deploy

```bash
curl -X POST https://remoteblueprint.my.id/api/webhooks/lynk -d '{}' -H 'content-type: application/json'
# harus balas 400/401, bukan 500 — artinya endpoint hidup dan validasi jalan
```

Test end-to-end: beli via Lynk sandbox/real → cek user baru muncul di Supabase Authentication → login pakai email itu di `/app` → cek entitlement `core` aktif.

## Status kalau langkah di atas belum dikerjakan

- Website Starter (`/starter/*`) tetap berfungsi penuh tanpa Supabase/Lynk.
- Core (`/app`) akan menampilkan "Memeriksa akses…" lalu form login, tapi magic link akan gagal terkirim sampai SMTP dikonfigurasi.
- Webhook `/api/webhooks/lynk` membalas `503 Webhook not configured` sampai 4 env var Supabase/Lynk diisi — aman, tidak menerima pembayaran yang tidak bisa diproses.
