import { useEffect } from 'react'
import { ArrowRight, BookOpen, Check, ExternalLink, Route, ShieldCheck, Target, X } from 'lucide-react'
import { articles, phases, startGuide } from './content/published/content'
import { badFit, curriculumPhases, goodFit, labs, paidProduct } from './data/landing'
import type { PublicRoute } from './routes'

const checkout = 'https://lynk.id/remote_blueprint/k93nyvv2roje'

function Header() {
  return <header className="platform-header">
    <a className="landing-brand" href="/" aria-label="Remote Blueprint beranda"><img src="/brand/remote-blueprint-avatar.svg" alt="" width="36" height="36" /><span>Remote Blueprint</span></a>
    <nav aria-label="Navigasi utama"><a href="/mulai">Mulai</a><a href="/artikel">Artikel</a><a href="/starter">Tools</a><a href="/jalur/upwork">Jalur Upwork</a></nav>
    <a className="platform-login" href="/app">Login <ArrowRight size={15} /></a>
  </header>
}

function Footer() {
  return <footer className="platform-footer">
    <div><a className="landing-brand" href="/"><img src="/brand/remote-blueprint-avatar.svg" alt="" width="34" height="34" /><span>Remote Blueprint</span></a><p>Blueprint untuk memahami, membangun, dan mengembangkan perjalanan kerja remote.</p></div>
    <nav aria-label="Navigasi footer"><a href="/mulai">Mulai di Sini</a><a href="/artikel">Artikel</a><a href="/starter">Tools</a><a href="/jalur/upwork">Upwork</a><a href="/legal">Privasi</a></nav>
    <small>Konten edukasi, bukan jaminan pekerjaan atau pendapatan.</small>
  </footer>
}

function Shell({ children }: { children: React.ReactNode }) {
  return <div className="platform-shell"><Header /><main>{children}</main><Footer /></div>
}

function Seo({ title, description, path }: { title: string; description: string; path: string }) {
  useEffect(() => {
    document.title = `${title} — Remote Blueprint`
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = `https://remoteblueprint.my.id${path}`
  }, [title, description, path])
  return null
}

export function PlatformHome() {
  return <Shell>
    <Seo title="Panduan Perjalanan Kerja Remote" description="Blueprint untuk memahami, membangun, dan mengembangkan perjalanan kerja remote." path="/" />
    <section className="platform-hero">
      <div><p className="platform-kicker">Remote Blueprint</p><h1>Pahami arah. Bangun kesiapan. Kembangkan kerja remote.</h1><p>Platform navigasi dan pembelajaran untuk perjalanan kerja remote, sebelum dan setelah pekerjaan pertama.</p><div className="platform-actions"><a className="platform-button primary" href="/mulai">Mulai dari posisimu <ArrowRight size={17} /></a><a className="platform-button secondary" href="/artikel">Baca panduan</a></div></div>
      <aside className="journey-map" aria-label="Lima fase perjalanan kerja remote">{phases.map((phase, index) => <a href={`/fase/${phase.slug}`} key={phase.slug}><span>{String(index + 1).padStart(2, '0')}</span><strong>{phase.name} <ArrowRight size={14} /></strong><p>{phase.question}</p></a>)}</aside>
    </section>

    <section className="platform-section start-strip"><div><p className="platform-kicker">Mulai di Sini</p><h2>Tak perlu membaca semuanya.</h2><p>Pilih fase berdasarkan keputusan yang sedang kamu hadapi.</p></div><a className="platform-button primary" href="/mulai">Temukan titik mulai <ArrowRight size={16} /></a></section>

    <section className="platform-section" aria-labelledby="phases-title"><header className="platform-title"><h2 id="phases-title">Lima fase, satu perjalanan.</h2><p>Setiap fase punya overview, panduan, dan tindakan yang bisa diperiksa.</p></header><div className="phase-grid">{phases.map((phase, index) => <a href={`/fase/${phase.slug}`} key={phase.slug}><span>{String(index + 1).padStart(2, '0')}</span><h3>{phase.name}</h3><p>{phase.description}</p><strong>Buka fase <ArrowRight size={15} /></strong></a>)}</div></section>

    <section className="platform-section tool-band"><div><Target size={28} /><h2>Diagnosis sebelum keputusan.</h2><p>Gunakan Quick Guide, Readiness Scanner, dan Job Fit Checker. Input diproses lokal.</p></div><a className="platform-button secondary" href="/starter">Buka tools gratis</a></section>

    <section className="platform-section"><header className="platform-title"><h2>Bacaan terbaru.</h2><a href="/artikel">Lihat semua <ArrowRight size={15} /></a></header><div className="article-grid">{articles.slice(0, 4).map((article) => <a href={`/artikel/${article.slug}`} key={article.slug}><small>{phases.find(({ slug }) => slug === article.phase)?.name}</small><h3>{article.title}</h3><p>{article.summary}</p><span>Baca artikel <ArrowRight size={14} /></span></a>)}</div></section>

    <section className="platform-section pathway-feature"><div><p className="platform-kicker">Featured pathway</p><h2>Upwork, dari kesiapan sampai repeat work.</h2><p>Jalur khusus untuk memahami fit, mencoba tools gratis, dan melihat kapan sistem berbayar relevan.</p><a className="platform-button primary" href="/jalur/upwork">Jelajahi jalur Upwork <ArrowRight size={16} /></a></div><div className="pathway-steps">{['Cek kesiapan', 'Bangun proof', 'Nilai job', 'Dapatkan pekerjaan', 'Jaga trust'].map((item, index) => <p key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</p>)}</div></section>
  </Shell>
}

export function PublicPage({ route }: { route: PublicRoute }) {
  if (route.kind === 'start') return <StartPage />
  if (route.kind === 'library') return <ArticleLibrary />
  if (route.kind === 'phase') return <PhasePage slug={route.slug} />
  if (route.kind === 'article') return <ArticlePage slug={route.slug} />
  if (route.kind === 'pathway') return <UpworkPathway />
  if (route.kind === 'product') return <ProductPage />
  return <NotFound />
}

function StartPage() {
  return <Shell><Seo title="Mulai di Sini" description={startGuide.summary} path="/mulai" /><article className="content-page"><header className="content-hero"><p className="platform-kicker">Orientasi</p><h1>{startGuide.title}</h1><p>{startGuide.summary}</p></header><ol className="start-steps">{startGuide.steps.map((step, index) => <li key={step}><span>{index + 1}</span><div><h2>{phases[index].name}</h2><p>{step}</p><a href={`/fase/${phases[index].slug}`}>Buka fase <ArrowRight size={14} /></a></div></li>)}</ol><aside className="content-callout"><Target /><div><h2>Belum tahu titik mulai?</h2><p>Readiness Scanner membantu menemukan tiga gap prioritas.</p></div><a className="platform-button primary" href="/starter/readiness">Cek kesiapan</a></aside></article></Shell>
}

function PhasePage({ slug }: { slug: string }) {
  const phase = phases.find((item) => item.slug === slug)!
  const phaseArticles = articles.filter((article) => article.phase === slug)
  const index = phases.findIndex((item) => item.slug === slug)
  return <Shell><Seo title={phase.name} description={phase.description} path={`/fase/${phase.slug}`} /><article className="content-page"><header className="content-hero"><p className="platform-kicker">Fase {index + 1}</p><h1>{phase.name}</h1><p>{phase.description}</p><blockquote>{phase.question}</blockquote></header><section className="phase-articles"><h2>Panduan fase ini</h2>{phaseArticles.map((article) => <a href={`/artikel/${article.slug}`} key={article.slug}><BookOpen size={19} /><div><h3>{article.title}</h3><p>{article.summary}</p><span>Hasil: {article.outcome}</span></div><ArrowRight size={18} /></a>)}</section>{index < phases.length - 1 && <aside className="content-callout"><Route /><div><small>Fase berikutnya</small><h2>{phases[index + 1].name}</h2></div><a className="platform-button primary" href={`/fase/${phases[index + 1].slug}`}>Lanjut</a></aside>}</article></Shell>
}

function ArticleLibrary() {
  return <Shell><Seo title="Artikel Kerja Remote" description="Panduan kerja remote dengan langkah, outcome, sumber, dan tanggal review." path="/artikel" /><section className="library-page"><header className="content-hero"><p className="platform-kicker">Perpustakaan</p><h1>Panduan kerja remote yang dapat dijalankan.</h1><p>Sepuluh artikel awal, dua untuk setiap fase. Sumber dan tanggal review tersedia pada setiap artikel.</p></header>{phases.map((phase) => <section className="library-group" key={phase.slug}><div><h2>{phase.name}</h2><p>{phase.description}</p></div><div>{articles.filter(({ phase: itemPhase }) => itemPhase === phase.slug).map((article) => <a href={`/artikel/${article.slug}`} key={article.slug}><h3>{article.title}</h3><p>{article.summary}</p><span>Baca <ArrowRight size={14} /></span></a>)}</div></section>)}</section></Shell>
}

function ArticlePage({ slug }: { slug: string }) {
  const article = articles.find((item) => item.slug === slug)!
  const phase = phases.find(({ slug: phaseSlug }) => phaseSlug === article.phase)!
  return <Shell><Seo title={article.title} description={article.summary} path={`/artikel/${article.slug}`} /><article className="article-page"><header className="content-hero"><a className="back-link" href={`/fase/${phase.slug}`}>{phase.name}</a><h1>{article.title}</h1><p>{article.summary}</p><div className="article-meta"><span>Hasil akhir</span><strong>{article.outcome}</strong></div></header><div className="article-body">{article.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p>{section.steps && <ol>{section.steps.map((step) => <li key={step}>{step}</li>)}</ol>}</section>)}</div><footer className="article-sources"><h2>Sumber dan review</h2><p>Ditinjau: {article.reviewedAt}</p>{article.sources.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label}<ExternalLink size={14} /></a>)}</footer></article></Shell>
}

function UpworkPathway() {
  return <Shell><Seo title="Jalur Upwork" description="Peta kesiapan, proof, seleksi job, kontrak, dan repeat work melalui Upwork." path="/jalur/upwork" /><section className="pathway-page"><header className="content-hero"><p className="platform-kicker">Jalur khusus</p><h1>Upwork, tanpa lompat langsung ke proposal.</h1><p>Mulai dari kesiapan, proof, dan seleksi job. Lanjut ke sistem eksekusi hanya ketika fondasinya relevan.</p><div className="platform-actions"><a className="platform-button primary" href="/starter/readiness">Cek kesiapan</a><a className="platform-button secondary" href="/produk/upwork-survival-system">Lihat sistem lengkap</a></div></header><div className="pathway-timeline">{curriculumPhases.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h2>{title}</h2><p>{copy}</p></div></article>)}</div><section className="platform-section tool-band"><div><ShieldCheck size={28} /><h2>Tiga tools gratis.</h2><p>Quick Guide terbuka. Scanner dan Job Fit menampilkan hasil lengkap setelah email valid.</p></div><a className="platform-button secondary" href="/starter">Buka Starter</a></section><section className="pathway-labs"><h2>Upwork Labs</h2><div>{labs.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section></section></Shell>
}

function ProductPage() {
  return <Shell><Seo title={paidProduct.name} description={paidProduct.description} path="/produk/upwork-survival-system" /><section className="product-page"><header className="product-hero"><div><p className="platform-kicker">Produk berbayar flagship</p><h1>{paidProduct.name}</h1><p>{paidProduct.description}</p><ul>{paidProduct.stats.map((stat) => <li key={stat}>{stat}</li>)}</ul><a className="platform-button primary" href={checkout} target="_blank" rel="noreferrer">Lihat listing resmi <ExternalLink size={16} /></a></div><aside><small>Contoh action</small><h2>Buat batas apply mingguan</h2><dl><div><dt>Cara</dt><dd>Catat Connects, pilih kriteria job, lalu tetapkan batas pemakaian.</dd></div><div><dt>Selesai jika</dt><dd>Ada aturan apply tertulis yang bisa dipakai pada listing berikutnya.</dd></div></dl></aside></header><section className="product-curriculum"><h2>Lima fase, 17 lesson, 28 action.</h2>{curriculumPhases.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</section><section className="fit-section"><article><h2>Cocok jika</h2>{goodFit.map((item) => <p key={item}><Check size={15} />{item}</p>)}</article><article><h2>Tidak cocok jika</h2>{badFit.map((item) => <p key={item}><X size={15} />{item}</p>)}</article></section><aside className="content-callout"><ShieldCheck /><div><h2>Harga dan ketentuan terbaru</h2><p>Periksa listing resmi Lynk.id sebelum membeli. Tidak ada jaminan klien atau pendapatan.</p></div><a className="platform-button primary" href={checkout} target="_blank" rel="noreferrer">Buka Lynk.id</a></aside></section></Shell>
}

function NotFound() {
  return <Shell><section className="not-found"><h1>Halaman tidak ditemukan.</h1><p>Konten mungkin dipindahkan atau URL tidak tepat.</p><a className="platform-button primary" href="/">Kembali ke beranda</a></section></Shell>
}
