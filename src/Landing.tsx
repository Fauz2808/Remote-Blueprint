import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  CircleGauge,
  ClipboardCheck,
  ExternalLink,
  FlaskConical,
  LockKeyhole,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import {
  badFit,
  curriculumPhases,
  faqItems,
  goodFit,
  journey,
  labs,
  paidProduct,
  problems,
  sampleOutputs,
  starterModules,
  trustPoints,
} from './data/landing'

const moduleIcons = [BookOpen, CircleGauge, BriefcaseBusiness]
const trustIcons = [ClipboardCheck, LockKeyhole, BookOpen, ShieldCheck]

export default function Landing() {
  return (
    <div className="landing-shell">
      <header className="landing-header">
        <a className="landing-brand" href="/" aria-label="Remote Blueprint — beranda">
          <img src="/brand/remote-blueprint-avatar.svg" alt="" width="36" height="36" />
          <span>Remote Blueprint</span>
        </a>
        <nav aria-label="Navigasi utama">
          <a href="#cara-kerja">Cara kerja</a>
          <a href="#starter">Starter gratis</a>
          <a href="#produk">Produk</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="landing-login" href="/app">Login <ArrowRight size={15} /></a>
      </header>

      <main>
        <section className="landing-hero" aria-labelledby="landing-title">
          <div className="landing-hero-copy">
            <p className="landing-kicker"><span>Remote Blueprint</span> Sistem eksekusi Upwork</p>
            <h1 id="landing-title">Bangun sistem Upwork-mu, <em>bukan sekadar kirim proposal.</em></h1>
            <p className="landing-lead">Cek kesiapan, pilih job dengan alasan, lalu jalankan langkah terarah dari profil sampai repeat client.</p>
            <div className="landing-actions">
              <a className="landing-button landing-button-primary" href="/starter/readiness">Cek kesiapan gratis <ArrowRight size={17} /></a>
              <a className="landing-button landing-button-ghost" href="#produk">Lihat isi produk</a>
            </div>
            <p className="landing-assurance"><ShieldCheck size={16} /> Starter tanpa login · input diproses lokal · tanpa scraping</p>
          </div>
          <div className="landing-output-rail" aria-label="Contoh output Remote Blueprint">
            <div className="landing-rail-head"><span>OUTPUT / DIAGNOSIS</span><i>Contoh</i></div>
            {sampleOutputs.map((output, index) => (
              <article className={output.accent ? 'is-accent' : ''} key={output.label}>
                <span>{String(index + 1).padStart(2, '0')} · {output.label}</span>
                <strong>{output.value}</strong>
                <p>{output.detail}</p>
              </article>
            ))}
            <div className="landing-rail-foot"><span>Diagnose</span><i /><span>Decide</span><i /><span>Execute</span></div>
          </div>
        </section>

        <section className="landing-section landing-problems" id="problems" aria-labelledby="problems-title">
          <div className="landing-section-intro">
            <p className="landing-kicker">Masalah yang sering terjadi</p>
            <h2 id="problems-title">Bukan kurang sibuk. Sistem keputusanmu belum terlihat.</h2>
          </div>
          <div className="landing-problem-grid">
            {problems.map(([title, copy], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </section>

        <section className="landing-section landing-journey" id="cara-kerja" aria-labelledby="journey-title">
          <div className="landing-section-intro">
            <p className="landing-kicker">Cara kerja</p>
            <h2 id="journey-title">Satu alur dari gap sampai perbaikan.</h2>
          </div>
          <ol>
            {journey.map(([number, title, copy]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></li>)}
          </ol>
        </section>

        <section className="landing-section landing-starter" id="starter" aria-labelledby="starter-title">
          <div className="landing-starter-head">
            <div className="landing-section-intro">
              <p className="landing-kicker">Remote Blueprint Starter · Gratis</p>
              <h2 id="starter-title">Tiga modul. Dipakai berurutan. Satu keputusan lebih jernih.</h2>
            </div>
            <a className="landing-text-link" href="/starter">Buka Starter <ArrowRight size={16} /></a>
          </div>
          <div className="landing-module-grid">
            {starterModules.map((module, index) => {
              const Icon = moduleIcons[index]
              return <a href={module.href} key={module.name}><div className="landing-module-top"><span>0{index + 1}</span><Icon size={21} /></div><small>{module.meta}</small><h3>{module.name}</h3><p>{module.description}</p><strong>Mulai modul <ArrowRight size={15} /></strong></a>
            })}
          </div>
        </section>

        <section className="landing-section landing-outputs" id="outputs" aria-labelledby="outputs-title">
          <div className="landing-section-intro">
            <p className="landing-kicker">Output, bukan motivasi kosong</p>
            <h2 id="outputs-title">Setiap langkah berakhir dengan sesuatu yang bisa dipakai.</h2>
          </div>
          <div className="landing-output-grid">
            {sampleOutputs.map((output) => <article key={output.label}><span>{output.label}</span><strong>{output.value}</strong><p>{output.detail}</p></article>)}
          </div>
        </section>

        <section className="landing-section landing-product" id="produk" aria-labelledby="product-title">
          <div className="landing-product-copy" id="paid-product">
            <p className="landing-kicker">Sistem eksekusi berbayar</p>
            <h2 id="product-title">{paidProduct.name}</h2>
            <p>{paidProduct.description}</p>
            <ul>{paidProduct.stats.map((stat) => <li key={stat}>{stat}</li>)}</ul>
            <a className="landing-button landing-button-primary" href="https://lynk.id/remote_blueprint/k93nyvv2roje" target="_blank" rel="noreferrer">Lihat produk di Lynk.id <ExternalLink size={16} /></a>
          </div>
          <div className="landing-action-card">
            <div className="landing-action-meta"><span>ACTION / 02.04</span><i>15 menit</i></div>
            <p>Connects strategy</p>
            <h3>Buat batas apply mingguan</h3>
            <dl>
              <div><dt>Cara mengerjakan</dt><dd>Catat Connects tersedia, pilih kriteria job, lalu tetapkan batas pemakaian.</dd></div>
              <div><dt>Contoh konkret</dt><dd>Apply hanya jika skill fit, brief jelas, dan risiko Connects masuk batas.</dd></div>
              <div><dt>Selesai jika</dt><dd>Ada aturan apply tertulis yang bisa dipakai pada listing berikutnya.</dd></div>
            </dl>
          </div>
        </section>

        <section className="landing-section landing-curriculum" id="curriculum" aria-labelledby="curriculum-title">
          <div className="landing-section-intro">
            <p className="landing-kicker">Kurikulum eksekusi</p>
            <h2 id="curriculum-title">Lima fase mengikuti urutan kerja nyata.</h2>
          </div>
          <ol>{curriculumPhases.map(([number, title, copy]) => <li key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
        </section>

        <section className="landing-section landing-labs" id="labs" aria-labelledby="labs-title">
          <div className="landing-labs-title"><FlaskConical size={30} /><div><p className="landing-kicker">Upwork Labs</p><h2 id="labs-title">Tools untuk keputusan yang muncul di tengah jalan.</h2></div></div>
          <div>{labs.map(([title, copy]) => <article key={title}><SearchCheck size={18} /><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </section>

        <section className="landing-section landing-audience" id="audience" aria-labelledby="audience-title">
          <div className="landing-section-intro"><p className="landing-kicker">Sebelum lanjut</p><h2 id="audience-title">Pastikan cara kerjanya cocok.</h2></div>
          <div className="landing-fit-grid">
            <article><p>Cocok untukmu jika</p><ul>{goodFit.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></article>
            <article className="landing-not-fit"><p>Tidak cocok jika</p><ul>{badFit.map((item) => <li key={item}><X size={16} />{item}</li>)}</ul></article>
          </div>
        </section>

        <section className="landing-section landing-trust" id="trust" aria-labelledby="trust-title">
          <div className="landing-section-intro"><p className="landing-kicker">Metode & privasi</p><h2 id="trust-title">Keputusanmu dibantu. Datamu tidak dieksploitasi.</h2></div>
          <div>{trustPoints.map(([title, copy], index) => { const Icon = trustIcons[index]; return <article key={title}><Icon size={20} /><h3>{title}</h3><p>{copy}</p></article> })}</div>
        </section>

        <section className="landing-section landing-pricing" id="pricing" aria-labelledby="pricing-title">
          <div><p className="landing-kicker">Lanjutkan sistemmu</p><h2 id="pricing-title">Siap mengubah diagnosis menjadi rutinitas eksekusi?</h2><p>Lihat isi, ketentuan, dan informasi pembelian terbaru di listing resmi Lynk.id.</p></div>
          <a className="landing-button landing-button-light" href="https://lynk.id/remote_blueprint/k93nyvv2roje" target="_blank" rel="noreferrer">Lihat Upwork Survival System <ExternalLink size={16} /></a>
        </section>

        <section className="landing-section landing-faq" id="faq" aria-labelledby="faq-title">
          <div className="landing-section-intro"><p className="landing-kicker">FAQ</p><h2 id="faq-title">Pertanyaan sebelum mulai.</h2></div>
          <div>{faqItems.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
        </section>
      </main>

      <footer className="landing-footer">
        <a className="landing-brand" href="/"><img src="/brand/remote-blueprint-avatar.svg" alt="" width="36" height="36" /><span>Remote Blueprint</span></a>
        <p>Sistem belajar mandiri untuk pekerja digital Indonesia di Upwork.</p>
        <nav aria-label="Navigasi footer"><a href="/starter">Starter</a><a href="/app">Login</a><a href="/legal">Refund & Privasi</a></nav>
        <small>Remote Blueprint tidak berafiliasi dengan Upwork. <Sparkles size={13} /> Dibangun untuk eksekusi yang lebih jernih.</small>
      </footer>
    </div>
  )
}
