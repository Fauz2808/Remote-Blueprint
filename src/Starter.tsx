import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowRight, BookOpen, BriefcaseBusiness, CheckCircle2, Compass, ShieldAlert, Target } from 'lucide-react'
import { readinessOptions, readinessQuestions, scoreJobFit, scoreReadiness, securityRedFlags } from './starter'
import type { JobFitInput, JobFitResult, ReadinessResult } from './starter'
import { createLeadPayload, submitLead } from './lib/leads'
import type { LeadTool } from './lib/leads'

const READINESS_KEY = 'remote-blueprint-starter-readiness-v1'
const JOB_FIT_KEY = 'remote-blueprint-starter-job-fit-v1'
const READINESS_UNLOCK_KEY = 'remote-blueprint-starter-readiness-unlocked-v1'
const JOB_FIT_UNLOCK_KEY = 'remote-blueprint-starter-job-fit-unlocked-v1'

const guideSections = [
  ['01', 'Skill menjadi sistem', 'Urutannya: skill → proof → profile → job → proposal → contract. Jangan lompat ke proposal jika jasa dan proof belum jelas.'],
  ['02', 'Connects adalah biaya seleksi', 'Connects dipakai untuk mengirim proposal. Nilai kecocokan, kualitas klien, dan risiko sebelum membelanjakannya. Banyak apply bukan tujuan; keputusan yang bisa dijelaskan adalah tujuan.'],
  ['03', 'Ekspektasi realistis', 'Scanner dan checker membantu diagnosis, bukan sertifikasi atau prediksi menang. Respons klien dipengaruhi fit, timing, proof, komunikasi, dan pasar.'],
  ['04', 'Kerja aman di platform', 'Hindari pembayaran luar Upwork, permintaan data sensitif, free test bernilai produksi, dan ajakan pindah kanal sebelum kontrak. Gunakan fitur report saat perlu.'],
  ['05', 'Roadmap eksekusi', 'Bangun fondasi jasa, proof dan profil, seleksi job, proposal dan interview, lalu delivery dan reputasi. Perbaiki gap paling awal sebelum menambah volume apply.'],
]

const defaultJob: JobFitInput = {
  skillFit: .5, proof: .5, brief: .5, budget: .5, paymentVerified: false,
  clientHistory: .5, competition: .5, clientActive: false, connects: 8, redFlags: [],
}

function readLocal<T>(key: string): T | null {
  try { return JSON.parse(localStorage.getItem(key) ?? 'null') as T | null } catch { return null }
}

export default function Starter({ path }: { path: string }) {
  const module = path.endsWith('/guide') ? 'guide' : path.endsWith('/readiness') ? 'readiness' : path.endsWith('/job-fit') ? 'job-fit' : 'home'
  const [answers, setAnswers] = useState<(number | undefined)[]>(Array(readinessQuestions.length).fill(undefined))
  const [readiness, setReadiness] = useState<ReadinessResult | null>(() => localStorage.getItem(READINESS_UNLOCK_KEY) === '1' ? readLocal(READINESS_KEY) : null)
  const [pendingReadiness, setPendingReadiness] = useState<ReadinessResult | null>(null)
  const [job, setJob] = useState(defaultJob)
  const [jobResult, setJobResult] = useState<JobFitResult | null>(() => localStorage.getItem(JOB_FIT_UNLOCK_KEY) === '1' ? readLocal(JOB_FIT_KEY) : null)
  const [pendingJobResult, setPendingJobResult] = useState<JobFitResult | null>(null)

  const submitReadiness = (event: FormEvent) => {
    event.preventDefault()
    if (answers.some((answer) => answer === undefined)) return
    const result = scoreReadiness(answers as number[])
    setReadiness(null)
    setPendingReadiness(result)
  }

  const submitJob = (event: FormEvent) => {
    event.preventDefault()
    const result = scoreJobFit(job)
    setJobResult(null)
    setPendingJobResult(result)
  }

  const unlockReadiness = () => {
    if (!pendingReadiness) return
    setReadiness(pendingReadiness)
    try { localStorage.setItem(READINESS_KEY, JSON.stringify(pendingReadiness)); localStorage.setItem(READINESS_UNLOCK_KEY, '1') } catch { /* local saving is optional */ }
    setPendingReadiness(null)
  }

  const unlockJob = () => {
    if (!pendingJobResult) return
    setJobResult(pendingJobResult)
    try { localStorage.setItem(JOB_FIT_KEY, JSON.stringify(pendingJobResult)); localStorage.setItem(JOB_FIT_UNLOCK_KEY, '1') } catch { /* local saving is optional */ }
    setPendingJobResult(null)
  }

  return <div className="starter-shell">
    <header className="starter-header">
      <a className="wordmark wordmark-light" href="/starter"><img className="wordmark-mark" src="/brand/remote-blueprint-avatar.svg" alt="" width="34" height="34" /><span>Remote Blueprint</span></a>
      <nav aria-label="Navigasi Starter">
        <a aria-current={module === 'guide' ? 'page' : undefined} href="/starter/guide">Quick Guide</a>
        <a aria-current={module === 'readiness' ? 'page' : undefined} href="/starter/readiness">Scanner</a>
        <a aria-current={module === 'job-fit' ? 'page' : undefined} href="/starter/job-fit">Job Fit</a>
        <a href="/legal">Refund & Privasi</a>
        <a className="starter-core-link" href="/produk/upwork-survival-system">Produk</a>
      </nav>
    </header>

    {module === 'home' && <main>
      <section className="starter-hero">
        <div><p className="eyebrow">Remote Blueprint Starter · Rp0</p><h1>Jangan habiskan Connects tanpa arah.</h1><p>Nilai kesiapanmu, periksa job secara manual, lalu tahu langkah berikutnya. Tanpa login. Tanpa scraping. Tanpa janji palsu.</p><a className="button starter-cta" href="/starter/guide">Mulai Quick Guide <ArrowRight size={17} /></a></div>
        <div className="starter-map" aria-label="Alur Starter"><span>Skill</span><i /><span>Proof</span><i /><span>Profile</span><i /><strong>Apply?</strong></div>
      </section>
      <section className="starter-modules" aria-label="Modul Starter">
        <a href="/starter/guide"><BookOpen /><small>15–20 menit</small><h2>Quick Guide</h2><p>Pahami alur kerja, Connects, ekspektasi, dan keamanan dasar.</p><span>Mulai dari sini <ArrowRight size={15} /></span></a>
        <a href="/starter/readiness"><Target /><small>12 pertanyaan</small><h2>Readiness Scanner</h2><p>Temukan skor, tiga gap utama, dan tiga action prioritas.</p><span>Periksa kesiapan <ArrowRight size={15} /></span></a>
        <a href="/starter/job-fit"><BriefcaseBusiness /><small>Input manual</small><h2>Job Fit Checker</h2><p>Dapatkan keputusan APPLY, SKIP, atau AVOID/REPORT dengan alasan.</p><span>Nilai job <ArrowRight size={15} /></span></a>
      </section>
    </main>}

    {module === 'guide' && <main className="starter-content">
      <header className="starter-title"><p className="eyebrow">Modul 1 · Quick Guide</p><h1>Model kerja sebelum mulai apply.</h1><p>Baca berurutan. Targetnya bukan hafal, tetapi tahu keputusan apa yang dibuat di setiap tahap.</p></header>
      <div className="guide-list">{guideSections.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h2>{title}</h2><p>{copy}</p></div></article>)}</div>
      <aside className="starter-next"><Compass /><div><small>Langkah berikutnya</small><h2>Ukur posisi awalmu.</h2><p>Jawab 12 pertanyaan terstruktur untuk menemukan tiga gap prioritas.</p></div><a className="button starter-cta" href="/starter/readiness">Mulai Scanner <ArrowRight size={16} /></a></aside>
    </main>}

    {module === 'readiness' && <main className="starter-content">
      <header className="starter-title"><p className="eyebrow">Modul 2 · Readiness Scanner</p><h1>Seberapa siap sistemmu?</h1><p>Jawab sesuai kondisi sekarang. Hasil adalah diagnosis, bukan sertifikasi atau jaminan mendapat klien.</p></header>
      <form className="scanner-form" onSubmit={submitReadiness}>
        {readinessQuestions.map((item, index) => <fieldset key={item.id}><legend><span>{String(index + 1).padStart(2, '0')}</span>{item.question}</legend><div>{readinessOptions.map((option) => <label key={option.value}><input required type="radio" name={item.id} value={option.value} checked={answers[index] === option.value} onChange={() => setAnswers((current) => current.map((value, i) => i === index ? option.value : value))} /><span>{option.label}</span></label>)}</div></fieldset>)}
        <button className="button starter-cta" type="submit">Lihat hasil kesiapan <ArrowRight size={16} /></button>
      </form>
      {pendingReadiness && <LeadGate tool="readiness" onUnlock={unlockReadiness} />}
      {readiness && <section className="starter-result" aria-live="polite" tabIndex={-1}>
        <div className="result-score"><span>{readiness.score}</span><small>/ 100</small></div><div><p className="eyebrow">Status kesiapan</p><h2>{readiness.status}</h2><p>Rekomendasi fase: <strong>{readiness.phase}</strong></p></div>
        <div className="result-columns"><section><h3>Tiga gap prioritas</h3><ol>{readiness.gaps.map((gap) => <li key={gap}>{gap}</li>)}</ol></section><section><h3>Tiga next action</h3><ol>{readiness.actions.map((action) => <li key={action}>{action}</li>)}</ol></section></div>
        <div className="result-footer"><span>Hasil terbaru tersimpan lokal di perangkat ini.</span><a className="button starter-cta" href="/starter/job-fit">Periksa job <ArrowRight size={16} /></a></div>
      </section>}
    </main>}

    {module === 'job-fit' && <main className="starter-content">
      <header className="starter-title"><p className="eyebrow">Modul 3 · Job Fit Checker</p><h1>Job ini layak memakai Connects?</h1><p>Masukkan penilaianmu dari listing. Jangan tempel full job description; data tidak dikirim atau di-scrape.</p></header>
      <form className="job-form" onSubmit={submitJob}>
        <div className="job-grid">
          {([
            ['skillFit', 'Kecocokan skill'], ['proof', 'Proof relevan'], ['brief', 'Kejelasan brief/scope'], ['budget', 'Kesesuaian budget'], ['clientHistory', 'Hire rate dan spending/history'], ['competition', 'Kompetisi/proposal count'],
          ] as const).map(([key, label]) => <label key={key}>{label}<select value={job[key]} onChange={(event) => setJob({ ...job, [key]: Number(event.target.value) })}><option value="0">Buruk / tidak cocok</option><option value="0.25">Lemah</option><option value="0.5">Cukup</option><option value="0.75">Baik</option><option value="1">Sangat kuat</option></select></label>)}
          <label>Connects yang diperlukan<input min="0" max="100" required type="number" value={job.connects} onChange={(event) => setJob({ ...job, connects: Number(event.target.value) })} /></label>
        </div>
        <div className="job-checks"><label><input type="checkbox" checked={job.paymentVerified} onChange={(event) => setJob({ ...job, paymentVerified: event.target.checked })} /> Payment method terverifikasi</label><label><input type="checkbox" checked={job.clientActive} onChange={(event) => setJob({ ...job, clientActive: event.target.checked })} /> Client aktif melihat/interview</label></div>
        <fieldset className="redflag-field"><legend><ShieldAlert size={18} /> Red flag keamanan</legend>{securityRedFlags.map((flag) => <label key={flag.id}><input type="checkbox" checked={job.redFlags.includes(flag.id)} onChange={(event) => setJob({ ...job, redFlags: event.target.checked ? [...job.redFlags, flag.id] : job.redFlags.filter((id) => id !== flag.id) })} />{flag.label}</label>)}</fieldset>
        <button className="button starter-cta" type="submit">Nilai job <ArrowRight size={16} /></button>
      </form>
      {pendingJobResult?.decision === 'AVOID/REPORT' && <p className="safety-stop" role="alert"><ShieldAlert size={18} /> Red flag keamanan terdeteksi. Jangan lanjut, jangan kirim data atau uang, dan gunakan fitur report bila perlu.</p>}
      {pendingJobResult && <LeadGate tool="job-fit" onUnlock={unlockJob} />}
      {jobResult && <section className={`starter-result decision-${jobResult.decision.replace('/REPORT', '').toLowerCase()}`} aria-live="polite">
        <div className="result-score"><span>{jobResult.score}</span><small>/ 100 fit</small></div><div><p className="eyebrow">Keputusan</p><h2>{jobResult.decision}</h2><p>Risiko Connects: <strong>{jobResult.risk}</strong></p></div>
        <div className="result-columns"><section><h3>Alasan</h3><ul>{jobResult.reasons.map((reason) => <li key={reason}>{reason}</li>)}</ul></section><section><h3>Perlu diklarifikasi</h3>{jobResult.clarify.length ? <ul>{jobResult.clarify.map((item) => <li key={item}>{item}</li>)}</ul> : <p>Tidak ada klarifikasi utama dari input ini.</p>}</section></div>
        <div className="proposal-angle"><CheckCircle2 /><div><h3>Sudut proposal</h3><p>{jobResult.angle}</p></div></div>
        <div className="core-callout"><div><small>Butuh sistem eksekusi?</small><h3>Upwork Survival System membantumu menyelesaikan {readiness?.phase ?? 'gap dari positioning sampai delivery'}.</h3></div><a className="button starter-cta" href="/produk/upwork-survival-system">Lihat Upwork Survival System <ArrowRight size={16} /></a></div>
      </section>}
    </main>}
  </div>
}

function LeadGate({ tool, onUnlock }: { tool: LeadTool; onUnlock: () => void }) {
  const [email, setEmail] = useState('')
  const [newsletter, setNewsletter] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (event: FormEvent) => {
    event.preventDefault()
    setError('')
    setLoading(true)
    try {
      await submitLead(createLeadPayload(email, tool, newsletter))
      onUnlock()
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : 'Email belum dapat disimpan. Coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return <section className="lead-gate" aria-labelledby={`${tool}-gate-title`}>
    <div><p className="eyebrow">Hasil sudah siap</p><h2 id={`${tool}-gate-title`}>Masukkan email untuk membuka hasil lengkap.</h2><p>Email disimpan sebagai syarat akses hasil. Hasil lengkap tetap tampil dan tersimpan lokal di perangkat ini. Newsletter pilihan terpisah.</p></div>
    <form onSubmit={submit}>
      <label htmlFor={`${tool}-email`}>Email</label>
      <input id={`${tool}-email`} type="email" required autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="nama@email.com" />
      <label className="newsletter-choice"><input type="checkbox" checked={newsletter} onChange={(event) => setNewsletter(event.target.checked)} /> Kirim juga bacaan terbaru Remote Blueprint. Bisa berhenti kapan saja.</label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button starter-cta" type="submit" disabled={loading}>{loading ? 'Menyimpan…' : 'Buka hasil lengkap'} <ArrowRight size={16} /></button>
      <small>Tidak memilih newsletter tidak menghalangi hasil. <a href="/legal">Lihat privasi dan penghapusan data.</a></small>
    </form>
  </section>
}
