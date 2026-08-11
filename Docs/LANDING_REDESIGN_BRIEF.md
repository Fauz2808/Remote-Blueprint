# Remote Blueprint Landing Redesign — Implementation Brief

## Page job
Explain one coherent product ecosystem, move visitors from diagnosis to action, and separate free Starter from paid Upwork Survival System without inventing a new Core tier.

## Visual foundation
- React 19 + TypeScript + existing CSS; no new dependency.
- Palette: Slate 950 `#020617`, Slate 900 `#0f172a`, line `#1e293b`, muted `#94a3b8`, Upwork green `#14a800`, highlighter lime `#d9f56f`, white `#ffffff`.
- Typography: Space Grotesk display, Inter body, JetBrains Mono metadata.
- 8px grid, max-width 1200px, 1px technical borders, restrained radius, no heavy shadow.
- Signature: real product-output rail (readiness score → gap → job decision), not decorative SaaS dashboard.

## Information architecture
1. Sticky header: Cara kerja, Starter gratis, Produk, FAQ, Login.
2. Hero: full-brand thesis, free primary CTA, product-preview secondary CTA, real output panel.
3. User problems.
4. Four-step journey: Diagnose → Decide → Execute → Improve.
5. Starter as one free product containing three sequential modules.
6. Example outputs.
7. Existing paid product: Remote Blueprint — Upwork Survival System.
8. Five-phase curriculum preview + one action schema.
9. Upwork Labs.
10. Fit / not-fit qualification.
11. Trust and privacy.
12. Product CTA with existing Lynk listing; do not invent/change price in website until listing price is confirmed.
13. FAQ.
14. Footer.

## Interaction and accessibility
- Semantic section headings and anchors.
- Native `<details>` FAQ.
- 44px minimum interactive targets.
- Visible focus states.
- Responsive stack below 760px; no horizontal page overflow.
- `prefers-reduced-motion` respected.
- No fake testimonial, user count, income claim, win probability, or urgency.

## v0.dev / Claude Artifacts prompt
Build a production-grade React 19 + TypeScript landing page for Remote Blueprint using only existing CSS and lucide-react. Use palette and typography above. Preserve exact information architecture and approved product names. Hero headline: “Bangun sistem Upwork-mu, bukan sekadar kirim proposal.” Supporting copy: “Cek kesiapan, pilih job dengan alasan, lalu jalankan langkah terarah dari profil sampai repeat client.” Primary CTA “Cek kesiapan gratis” routes `/starter/readiness`; secondary CTA “Lihat isi produk” anchors `#produk`. Use a real output rail showing readiness score, proof gap, and SKIP job decision. Render Starter as one free product with three connected modules: Quick Guide, Readiness Scanner, Job Fit Checker. Paid product must be named “Remote Blueprint — Upwork Survival System,” never “Core.” Show 5 phases, 17 lessons, 28 actions, Upwork Labs, fit/not-fit, privacy methodology, FAQ, checkout CTA to `https://lynk.id/remote_blueprint/k93nyvv2roje`, login `/app`, legal `/legal`. Do not display a price unless passed as verified data. No testimonials or metrics. Desktop max width 1200px, strong asymmetrical hero, technical 1px borders, restrained lime accent, mobile stack, 44px controls, visible focus, reduced motion. Return one `Landing.tsx` plus scoped CSS block and no placeholder content.
