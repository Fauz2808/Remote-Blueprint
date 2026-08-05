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
  calculateProgress,
  curriculum,
  officialResources,
  proposalTemplate,
  sanitizeProgress,
  totalMinutes,
} from './data/curriculum'
import type { Lesson } from './data/curriculum'
import './App.css'

const PROGRESS_KEY = 'remote-blueprint-progress-v2'
const ACCESS_KEY = 'remote-blueprint-access-v1'

function readProgress() {
  try {
    return sanitizeProgress(JSON.parse(localStorage.getItem(PROGRESS_KEY) ?? '{}'))
  } catch {
    return {}
  }
}

function firstIncomplete(progress: Record<string, boolean>) {
  return curriculum.flatMap((phase) => phase.lessons).find((lesson) => !progress[lesson.id])?.id ?? curriculum[0].lessons[0].id
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

  const stats = calculateProgress(progress)
  const activePhase = curriculum.find((phase) => phase.lessons.some((lesson) => lesson.id === activeLessonId)) ?? curriculum[0]
  const activeLesson = activePhase.lessons.find((lesson) => lesson.id === activeLessonId) ?? activePhase.lessons[0]
  const orderedLessons = curriculum.flatMap((phase) => phase.lessons)
  const activeIndex = orderedLessons.findIndex((lesson) => lesson.id === activeLesson.id)
  const nextLesson = orderedLessons[activeIndex + 1]
  const profileDraft = useMemo(() => {
    const skills = profileInputs.skills.split(',').map((skill) => skill.trim()).filter(Boolean)
    const headline = [profileInputs.niche, skills.slice(0, 2).join(' & ')].filter(Boolean).join(' | ')
    const overview = profileInputs.client || profileInputs.problem
      ? `I help ${profileInputs.client || '[target client]'} solve ${profileInputs.problem || '[specific problem]'} using ${skills.slice(0, 3).join(', ') || '[relevant skills]'}. ${profileInputs.proof ? `Recent proof: ${profileInputs.proof}.` : 'Add one relevant, verifiable result here.'}`
      : ''
    return { headline, overview, skills }
  }, [profileInputs])

  useEffect(() => {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
  }, [progress])

  const phaseProgress = useMemo(
    () => Object.fromEntries(curriculum.map((phase) => [phase.id, phase.lessons.filter((lesson) => progress[lesson.id]).length])),
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
    setProgress((current) => ({ ...current, [lesson.id]: !current[lesson.id] }))
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
          <p>{stats.completed} dari {stats.total} lesson selesai</p>
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
                  <span className={`lesson-state ${progress[lesson.id] ? 'lesson-state-done' : ''}`}>
                    {progress[lesson.id] && <Check size={11} strokeWidth={3} />}
                  </span>
                  <span>{lesson.title}</span>
                </button>
              ))}
            </section>
          ))}
        </nav>

        <div className="sidebar-actions">
          <button onClick={() => setShowVault(true)}><FileText size={16} /> Template vault</button>
          <button onClick={resetProgress}><RotateCcw size={16} /> Reset progres</button>
          <button onClick={() => { sessionStorage.removeItem(ACCESS_KEY); setHasAccess(false) }}><LogOut size={16} /> Keluar</button>
        </div>
      </aside>
      {mobileNav && <button className="scrim" onClick={() => setMobileNav(false)} aria-label="Tutup navigasi" />}

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

          <section className="outcome-card">
            <div className="outcome-icon"><Target size={21} /></div>
            <div><span>Target hasil</span><strong>{activeLesson.outcome}</strong></div>
          </section>

          <section className="action-section">
            <div className="section-heading"><span>Action checklist</span><em>Kerjakan langsung di akun Upwork-mu</em></div>
            <ol className="action-list">
              {activeLesson.actions.map((action, index) => (
                <li key={action.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <div className="action-copy">
                    <h3>{action.title}</h3>
                    <div className="action-block">
                      <h4>Kenapa penting</h4>
                      <p>{action.why}</p>
                    </div>
                    <div className="action-block">
                      <h4>Cara mengerjakan</h4>
                      <ol className="action-steps">
                        {action.how.map((step) => <li key={step}>{step}</li>)}
                      </ol>
                    </div>
                    <div className="action-evidence">
                      <div><h4>Contoh konkret</h4><p>{action.example}</p></div>
                      <div><h4>Selesai jika</h4><p>{action.doneWhen}</p></div>
                    </div>
                  </div>
                </li>
              ))}
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
            <button className={`complete-button ${progress[activeLesson.id] ? 'complete-button-done' : ''}`} onClick={() => toggleLesson()}>
              {progress[activeLesson.id] ? <CheckCircle2 size={20} /> : <span className="complete-dot" />}
              {progress[activeLesson.id] ? 'Lesson selesai' : 'Tandai selesai'}
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

      {showVault && (
        <div className="modal-layer" role="dialog" aria-modal="true" aria-labelledby="vault-title">
          <button className="modal-scrim" onClick={() => setShowVault(false)} aria-label="Tutup template vault" />
          <section className="vault-panel">
            <header className="vault-header">
              <div><p className="eyebrow">Resource 01</p><h2 id="vault-title">Template vault</h2></div>
              <button className="icon-button" onClick={() => setShowVault(false)} aria-label="Tutup"><X size={20} /></button>
            </header>
            <div className="template-card">
              <div className="template-meta"><span>Proposal framework</span><button onClick={copyTemplate}>{copied ? <Check size={15} /> : <Copy size={15} />}{copied ? 'Tersalin' : 'Salin'}</button></div>
              <pre>{proposalTemplate}</pre>
            </div>
            <div className="resource-list">
              <h3><BookOpen size={17} /> Sumber resmi Upwork</h3>
              {officialResources.map((resource) => (
                <a key={resource.url} href={resource.url} target="_blank" rel="noreferrer"><span>{resource.label}</span><ExternalLink size={15} /></a>
              ))}
            </div>
            <div className="optimizer-lab">
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
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
