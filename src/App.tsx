import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Copy,
  ExternalLink,
  FileText,
  KeyRound,
  LogOut,
  Menu,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Target,
  WandSparkles,
  X,
} from 'lucide-react'
import {
  actionId,
  calculateActionProgress,
  curriculum,
  lessonIsComplete,
  officialResources,
  proposalTemplate,
  redFlags,
  sanitizeActionProgress,
  totalMinutes,
} from './data/curriculum'
import type { Lesson } from './data/curriculum'
import './App.css'

const PROGRESS_KEY = 'remote-blueprint-progress-v2'
const ACCESS_KEY = 'remote-blueprint-access-v1'

function readProgress() {
  try {
    return sanitizeActionProgress(JSON.parse(localStorage.getItem(PROGRESS_KEY) ?? '{}'))
  } catch {
    return {}
  }
}

function firstIncomplete(progress: Record<string, boolean>) {
  return curriculum.flatMap((phase) => phase.lessons).find((lesson) => !lessonIsComplete(lesson, progress))?.id ?? curriculum[0].lessons[0].id
}

export default function App() {
  const [hasAccess, setHasAccess] = useState(() => sessionStorage.getItem(ACCESS_KEY) === 'granted')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [progress, setProgress] = useState<Record<string, boolean>>(readProgress)
  const [activeLessonId, setActiveLessonId] = useState(() => firstIncomplete(readProgress()))
  const [mobileNav, setMobileNav] = useState(false)
  const [showVault, setShowVault] = useState(false)
  const [copied, setCopied] = useState(false)
  const [profileInputs, setProfileInputs] = useState({ niche: '', client: '', problem: '', skills: '', proof: '', rate: '' })
  const [rateInputs, setRateInputs] = useState({ livingCost: '', otherCosts: '', savingsPercent: '20', billableHours: '20', platformFeePercent: '10' })

  const stats = calculateActionProgress(progress)
  const activePhase = curriculum.find((phase) => phase.lessons.some((lesson) => lesson.id === activeLessonId)) ?? curriculum[0]
  const activeLesson = activePhase.lessons.find((lesson) => lesson.id === activeLessonId) ?? activePhase.lessons[0]
  const orderedLessons = curriculum.flatMap((phase) => phase.lessons)
  const activeIndex = orderedLessons.findIndex((lesson) => lesson.id === activeLesson.id)
  const nextLesson = orderedLessons[activeIndex + 1]
  const activeLessonDone = lessonIsComplete(activeLesson, progress)
  const activeActionCount = activeLesson.actions.filter((_, index) => progress[actionId(activeLesson.id, index)]).length
  const prerequisite = curriculum[0]
  const prerequisiteReady = prerequisite.lessons.filter((lesson) => lessonIsComplete(lesson, progress)).length
  const profileDraft = useMemo(() => {
    const skills = profileInputs.skills.split(',').map((skill) => skill.trim()).filter(Boolean)
    const headline = [profileInputs.niche, skills.slice(0, 2).join(' & ')].filter(Boolean).join(' | ')
    const overview = profileInputs.client || profileInputs.problem
      ? `I help ${profileInputs.client || '[target client]'} solve ${profileInputs.problem || '[specific problem]'} using ${skills.slice(0, 3).join(', ') || '[relevant skills]'}. ${profileInputs.proof ? `Recent proof: ${profileInputs.proof}.` : 'Add one relevant, verifiable result here.'}`
      : ''
    return { headline, overview, skills }
  }, [profileInputs])

  const rateDraft = useMemo(() => {
    const living = Number(rateInputs.livingCost) || 0
    const other = Number(rateInputs.otherCosts) || 0
    const savingsPercent = Number(rateInputs.savingsPercent) || 0
    const billableHours = Number(rateInputs.billableHours) || 0
    const feePercent = Number(rateInputs.platformFeePercent) || 0
    const monthlyBaseline = living + other
    const withSavings = monthlyBaseline * (1 + savingsPercent / 100)
    const weeklyTarget = withSavings / 4.33
    const grossHourly = billableHours > 0 ? weeklyTarget / billableHours : 0
    const netAfterFee = grossHourly * (1 - feePercent / 100)
    const minProjectRate = grossHourly * 10
    return { monthlyBaseline, withSavings, grossHourly, netAfterFee, minProjectRate, billableHours }
  }, [rateInputs])

  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
  }, [progress])

  const phaseProgress = useMemo(
    () => Object.fromEntries(curriculum.map((phase) => [phase.id, phase.lessons.filter((lesson) => lessonIsComplete(lesson, progress)).length])),
    [progress],
  )

  const login = (event: FormEvent) => {
    event.preventDefault()
    if (password !== 'GTM2026') {
      setLoginError('Access key salah. Periksa kembali kode pembelianmu.')
      return
    }
    sessionStorage.setItem(ACCESS_KEY, 'granted')
    setHasAccess(true)
    setLoginError('')
  }

  const chooseLesson = (id: string) => {
    setActiveLessonId(id)
    setMobileNav(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleLesson = (lesson: Lesson = activeLesson) => {
    setProgress((current) => {
      const complete = lessonIsComplete(lesson, current)
      const next = { ...current }
      lesson.actions.forEach((_, index) => { next[actionId(lesson.id, index)] = !complete })
      return next
    })
  }

  const toggleAction = (lesson: Lesson, index: number) => {
    const id = actionId(lesson.id, index)
    setProgress((current) => ({ ...current, [id]: !current[id] }))
  }

  const resetProgress = () => {
    if (!window.confirm('Reset seluruh progres di perangkat ini?')) return
    setProgress({})
    setActiveLessonId(curriculum[0].lessons[0].id)
  }

  const copyTemplate = async () => {
    await navigator.clipboard.writeText(proposalTemplate)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  if (!hasAccess) {
    return (
      <main className="login-shell">
        <section className="login-story" aria-labelledby="login-title">
          <div className="wordmark wordmark-light" aria-label="Remote Blueprint">
            <span className="wordmark-mark">RB</span>
            <span>Remote Blueprint</span>
          </div>
          <div className="login-copy">
            <p className="eyebrow">Field guide 01 — Upwork</p>
            <h1 id="login-title">Skill sudah ada. Sekarang bangun sistem untuk menang.</h1>
            <p>Tracker praktis bagi profesional Indonesia yang ingin mengubah pengalaman kerja menjadi profil, proposal, dan reputasi yang dipercaya klien global.</p>
          </div>
          <div className="login-proof">
            <div><strong>4</strong><span>fase terarah</span></div>
            <div><strong>{stats.total}</strong><span>lesson praktis</span></div>
            <div><strong>{totalMinutes}</strong><span>menit estimasi</span></div>
          </div>
        </section>

        <section className="login-panel" aria-label="Masuk ke tracker">
          <form className="access-card" onSubmit={login}>
            <div className="access-icon"><KeyRound size={22} /></div>
            <p className="eyebrow">Member access</p>
            <h2>Lanjutkan blueprint-mu</h2>
            <p className="muted">Masukkan access key yang diterima setelah pembelian.</p>
            <label htmlFor="access-key">Access key</label>
            <input
              id="access-key"
              type="password"
              value={password}
              onChange={(event) => { setPassword(event.target.value); setLoginError('') }}
              placeholder="Masukkan access key"
              autoComplete="current-password"
              aria-describedby={loginError ? 'login-error' : 'device-note'}
              autoFocus
            />
            {loginError && <p className="form-error" id="login-error">{loginError}</p>}
            <button className="button button-primary button-wide" type="submit">
              Buka tracker <ArrowRight size={17} />
            </button>
            <p className="device-note" id="device-note"><ShieldCheck size={15} /> Progres tersimpan hanya di perangkat ini.</p>
          </form>
        </section>
      </main>
    )
  }

  return (
    <div className="app-shell">
      <header className="mobile-header">
        <button className="icon-button" onClick={() => setMobileNav(true)} aria-label="Buka navigasi"><Menu size={20} /></button>
        <div className="wordmark"><span className="wordmark-mark">RB</span><span>Remote Blueprint</span></div>
        <span className="mobile-progress">{stats.percentage}%</span>
      </header>

      <aside className={`sidebar ${mobileNav ? 'sidebar-open' : ''}`} aria-label="Navigasi kurikulum">
        <div className="sidebar-top">
          <div className="wordmark"><span className="wordmark-mark">RB</span><span>Remote Blueprint</span></div>
          <button className="icon-button sidebar-close" onClick={() => setMobileNav(false)} aria-label="Tutup navigasi"><X size={20} /></button>
          <p className="sidebar-subtitle">Upwork survival system</p>
        </div>

        <div className="sidebar-progress">
          <div className="progress-meta"><span>Blueprint progress</span><strong>{stats.percentage}%</strong></div>
          <div className="progress-track" aria-label={`${stats.percentage}% selesai`}><span style={{ width: `${stats.percentage}%` }} /></div>
          <p>{stats.completed} dari {stats.total} action selesai</p>
        </div>

        <nav className="phase-nav">
          {curriculum.map((phase) => (
            <section className="phase-group" key={phase.id}>
              <div className="phase-label">
                <span>{phase.number}</span>
                <strong>{phase.shortTitle}</strong>
                <em>{phaseProgress[phase.id]}/{phase.lessons.length}</em>
              </div>
              {phase.lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  className={`lesson-link ${activeLesson.id === lesson.id ? 'lesson-link-active' : ''}`}
                  onClick={() => chooseLesson(lesson.id)}
                  aria-current={activeLesson.id === lesson.id ? 'page' : undefined}
                >
                  <span className={`lesson-state ${lessonIsComplete(lesson, progress) ? 'lesson-state-done' : ''}`}>
                    {lessonIsComplete(lesson, progress) && <Check size={11} strokeWidth={3} />}
                  </span>
                  <span>{lesson.title}</span>
                </button>
              ))}
            </section>
          ))}
        </nav>

        <div className="sidebar-actions">
          <button onClick={() => setShowVault(true)}><FileText size={16} /> Upwork Labs</button>
          <button onClick={resetProgress}><RotateCcw size={16} /> Reset progres</button>
          <button onClick={() => { sessionStorage.removeItem(ACCESS_KEY); setHasAccess(false) }}><LogOut size={16} /> Keluar</button>
        </div>
      </aside>
      {mobileNav && <button className="scrim" onClick={() => setMobileNav(false)} aria-label="Tutup navigasi" />}

      {showVault ? (
      <main className="labs-page">
        <div className="lesson-toolbar">
          <div className="breadcrumbs"><strong>Upwork Labs</strong></div>
          <button className="vault-button" onClick={() => setShowVault(false)}><X size={16} /> Kembali ke lesson</button>
        </div>

        <header className="labs-hero">
          <p className="eyebrow">Resource center</p>
          <h1>Upwork Labs</h1>
          <p>Kumpulan tools dan referensi siap pakai di luar kurikulum utama — dipakai kapan saja saat kamu butuh template, benchmark, atau sumber resmi.</p>
        </header>

        <section className="template-card labs-resource">
          <div className="template-meta"><span><p className="eyebrow">Resource 01</p>Proposal framework</span><button onClick={copyTemplate}>{copied ? <Check size={15} /> : <Copy size={15} />}{copied ? 'Tersalin' : 'Salin'}</button></div>
          <pre>{proposalTemplate}</pre>
        </section>

        <section className="optimizer-lab labs-resource">
          <div className="optimizer-heading">
            <div><p className="eyebrow">Resource 02</p><h3><WandSparkles size={18} /> Profile Optimization Lab</h3></div>
            <span>Diproses lokal · tanpa scraping</span>
          </div>
          <p className="optimizer-intro">Rangkai positioning dari niche, masalah klien, skill, dan bukti milikmu sendiri. Gunakan benchmark pasar sebagai referensi, bukan bahan salin-tempel.</p>
          <div className="optimizer-form">
            <label>Niche atau role<input value={profileInputs.niche} onChange={(event) => setProfileInputs({ ...profileInputs, niche: event.target.value })} placeholder="Contoh: SaaS UX Designer" /></label>
            <label>Target klien<input value={profileInputs.client} onChange={(event) => setProfileInputs({ ...profileInputs, client: event.target.value })} placeholder="Contoh: early-stage SaaS teams" /></label>
            <label>Masalah utama<input value={profileInputs.problem} onChange={(event) => setProfileInputs({ ...profileInputs, problem: event.target.value })} placeholder="Contoh: confusing onboarding flows" /></label>
            <label>Skill utama<input value={profileInputs.skills} onChange={(event) => setProfileInputs({ ...profileInputs, skills: event.target.value })} placeholder="Figma, UX Research, Prototyping" /></label>
            <label className="optimizer-wide">Bukti hasil<input value={profileInputs.proof} onChange={(event) => setProfileInputs({ ...profileInputs, proof: event.target.value })} placeholder="Contoh: reduced onboarding drop-off by 18%" /></label>
            <label>Benchmark rate<input value={profileInputs.rate} onChange={(event) => setProfileInputs({ ...profileInputs, rate: event.target.value })} placeholder="$25–$35/hour" /></label>
          </div>
          <div className="profile-preview">
            <div className="profile-preview-title"><BriefcaseBusiness size={17} /><span>Profile draft</span></div>
            <dl>
              <div><dt>Headline</dt><dd>{profileDraft.headline || 'Isi niche dan skill untuk membuat headline.'}</dd></div>
              <div><dt>Overview opening</dt><dd>{profileDraft.overview || 'Isi target klien dan masalah utama untuk membuat opening.'}</dd></div>
              <div><dt>Skills</dt><dd>{profileDraft.skills.join(' · ') || 'Belum ada skill dipilih.'}</dd></div>
              <div><dt>Rate reference</dt><dd>{profileInputs.rate || 'Bandingkan median niche, lalu sesuaikan dengan bukti dan pengalaman.'}</dd></div>
            </dl>
          </div>
        </section>

        <section className="resource-list labs-resource">
          <p className="eyebrow">Resource 03</p>
          <h3><BookOpen size={17} /> Sumber resmi Upwork</h3>
          {officialResources.map((resource) => (
            <a key={resource.url} href={resource.url} target="_blank" rel="noreferrer"><span>{resource.label}</span><ExternalLink size={15} /></a>
          ))}
        </section>

        <section className="optimizer-lab labs-resource">
          <div className="optimizer-heading">
            <div><p className="eyebrow">Resource 04</p><h3><WandSparkles size={18} /> Rate Calculator</h3></div>
            <span>Diproses lokal · tanpa scraping</span>
          </div>
          <p className="optimizer-intro">Hitung target hourly rate dari biaya hidup, tabungan, dan kapasitas jam billable-mu — bukan menebak-nebak angka dari rate orang lain.</p>
          <div className="optimizer-form">
            <label>Biaya hidup bulanan (US$)<input value={rateInputs.livingCost} onChange={(event) => setRateInputs({ ...rateInputs, livingCost: event.target.value })} placeholder="Contoh: 500" inputMode="decimal" /></label>
            <label>Biaya lain per bulan (US$)<input value={rateInputs.otherCosts} onChange={(event) => setRateInputs({ ...rateInputs, otherCosts: event.target.value })} placeholder="Software, internet, dll" inputMode="decimal" /></label>
            <label>Target tabungan (%)<input value={rateInputs.savingsPercent} onChange={(event) => setRateInputs({ ...rateInputs, savingsPercent: event.target.value })} placeholder="20" inputMode="decimal" /></label>
            <label>Jam billable per minggu<input value={rateInputs.billableHours} onChange={(event) => setRateInputs({ ...rateInputs, billableHours: event.target.value })} placeholder="20" inputMode="decimal" /></label>
            <label className="optimizer-wide">Fee Upwork (%)<input value={rateInputs.platformFeePercent} onChange={(event) => setRateInputs({ ...rateInputs, platformFeePercent: event.target.value })} placeholder="10" inputMode="decimal" /></label>
          </div>
          <div className="profile-preview">
            <div className="profile-preview-title"><BriefcaseBusiness size={17} /><span>Rate draft</span></div>
            <dl>
              <div><dt>Kebutuhan bulanan + tabungan</dt><dd>{rateDraft.withSavings > 0 ? `US$${rateDraft.withSavings.toFixed(0)}/bulan` : 'Isi biaya hidup dan target tabungan.'}</dd></div>
              <div><dt>Target hourly rate (kotor)</dt><dd>{rateDraft.grossHourly > 0 ? `US$${rateDraft.grossHourly.toFixed(1)}/jam untuk ${rateDraft.billableHours} jam billable per minggu` : 'Isi jam billable untuk menghitung rate.'}</dd></div>
              <div><dt>Estimasi setelah fee Upwork</dt><dd>{rateDraft.netAfterFee > 0 ? `US$${rateDraft.netAfterFee.toFixed(1)}/jam bersih` : 'Isi fee untuk melihat estimasi bersih.'}</dd></div>
              <div><dt>Minimal project rate (quote ke klien)</dt><dd>{rateDraft.minProjectRate > 0 ? `US$${rateDraft.minProjectRate.toFixed(0)} untuk project setara 10 jam kerja — fee Upwork dipotong dari angka ini, bukan ditambah di luar` : 'Lengkapi input di atas dulu.'}</dd></div>
            </dl>
          </div>
        </section>
        <section className="labs-resource resource-list">
          <p className="eyebrow">Resource 05</p>
          <h3><ShieldCheck size={17} /> Red flag checklist</h3>
          <p className="optimizer-intro">Periksa job dan klien sebelum apply atau sebelum kontrak dimulai. Satu red flag bukan berarti otomatis skip — tapi tiga atau lebih dari satu klien layak dipertimbangkan ulang.</p>
          {redFlags.map((group) => (
            <div key={group.category} className="redflag-group">
              <h4>{group.category}</h4>
              <ul>
                {group.signs.map((sign) => (
                  <li key={sign}>{sign}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
      ) : (
      <main className="lesson-page">
        <div className="lesson-toolbar">
          <div className="breadcrumbs"><span>Fase {activePhase.number}</span><ChevronRight size={14} /><strong>{activeLesson.title}</strong></div>
          <button className="vault-button" onClick={() => setShowVault(true)}><FileText size={16} /> Template vault</button>
        </div>

        <article className="lesson-article">
          <header className="lesson-hero">
            <div className="lesson-kicker">
              <span>Fase {activePhase.number}</span>
              <span><Clock3 size={14} /> {activeLesson.duration}</span>
            </div>
            <h1>{activeLesson.title}</h1>
            <p>{activeLesson.summary}</p>
          </header>

          {activePhase.id === 'prerequisite' && (
            <section className="fast-track" aria-labelledby="fast-track-title">
              <div className="fast-track-heading">
                <div><p className="eyebrow">Fast track · 2 menit</p><h2 id="fast-track-title">Sudah berpengalaman? Periksa kesiapanmu.</h2></div>
                <button className="button button-secondary" onClick={() => {
                  setProgress((current) => {
                    const next = { ...current }
                    prerequisite.lessons.forEach((lesson) => lesson.actions.forEach((_, index) => { next[actionId(lesson.id, index)] = true }))
                    return next
                  })
                }}>Tandai semua siap</button>
              </div>
              <p className="fast-track-intro">Centang hanya bagian yang memang sudah kamu kuasai. Lesson terkait akan langsung selesai; sisanya tetap menjadi panduanmu. <strong>{prerequisiteReady}/{prerequisite.lessons.length} siap</strong></p>
              <div className="readiness-grid">
                {prerequisite.lessons.map((lesson) => {
                  const ready = lessonIsComplete(lesson, progress)
                  return (
                    <button key={lesson.id} className={`readiness-item ${ready ? 'readiness-item-done' : ''}`} onClick={() => toggleLesson(lesson)} aria-pressed={ready}>
                      <span>{ready ? <Check size={14} strokeWidth={3} /> : null}</span>
                      <div><strong>{lesson.title}</strong><small>{lesson.outcome}</small></div>
                    </button>
                  )
                })}
              </div>
            </section>
          )}

          <section className="outcome-card">
            <div className="outcome-icon"><Target size={21} /></div>
            <div><span>Target hasil</span><strong>{activeLesson.outcome}</strong></div>
          </section>

          <section className="action-section">
            <div className="section-heading"><span>Action checklist</span><em>{activeActionCount}/{activeLesson.actions.length} action selesai</em></div>
            <ol className="action-list">
              {activeLesson.actions.map((action, index) => {
                const done = Boolean(progress[actionId(activeLesson.id, index)])
                return (
                  <li key={action.title} className={done ? 'action-done' : ''}>
                    <button className="action-check" onClick={() => toggleAction(activeLesson, index)} aria-pressed={done} aria-label={`${done ? 'Batalkan' : 'Tandai'} ${action.title}`}>
                      {done ? <Check size={15} strokeWidth={3} /> : String(index + 1).padStart(2, '0')}
                    </button>
                    <div className="action-copy">
                      <div className="action-title-row"><h3>{action.title}</h3></div>
                      <div className="layered-action">
                        <p className="action-summary">{action.why}</p>
                        <div className="action-guide">
                          <div className="action-guide-body">
                            <h4>Cara mengerjakan</h4>
                            <ol className="action-steps">{action.how.map((step) => <li key={step}>{step}</li>)}</ol>
                            <div className="action-example"><h4>Contoh konkret</h4><p>{action.example}</p></div>
                          </div>
                        </div>
                        <div className="action-done-when"><h4>Selesai jika</h4><p>{action.doneWhen}</p></div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ol>
            {activeLesson.source && (
              <a className="lesson-source" href={activeLesson.source.url} target="_blank" rel="noreferrer">
                <span><BookOpen size={16} /> Sumber resmi: {activeLesson.source.label}</span><ExternalLink size={15} />
              </a>
            )}
          </section>

          {activeLesson.id === 'proposal' && (
            <section className="inline-template">
              <div><span className="eyebrow">Included resource</span><h2>Proposal problem-solving</h2><p>Template awal. Personalisasi setiap bagian berdasarkan brief.</p></div>
              <button className="button button-secondary" onClick={() => setShowVault(true)}>Buka template <ArrowRight size={16} /></button>
            </section>
          )}

          <footer className="lesson-footer">
            <button className={`complete-button ${activeLessonDone ? 'complete-button-done' : ''}`} onClick={() => toggleLesson()}>
              {activeLessonDone ? <CheckCircle2 size={20} /> : <span className="complete-dot" />}
              {activeLessonDone ? 'Lesson selesai' : 'Selesaikan semua action'}
            </button>
            {nextLesson ? (
              <button className="next-button" onClick={() => chooseLesson(nextLesson.id)}>
                <span>Selanjutnya</span><strong>{nextLesson.title}</strong><ArrowRight size={18} />
              </button>
            ) : (
              <div className="finish-note"><Sparkles size={18} /><span>Blueprint selesai. Saatnya eksekusi.</span></div>
            )}
          </footer>
        </article>
      </main>
      )}

    </div>
  )
}
