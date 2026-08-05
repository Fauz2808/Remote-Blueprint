import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import {
  ArrowRight,
  BookOpen,
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

  const stats = calculateProgress(progress)
  const activePhase = curriculum.find((phase) => phase.lessons.some((lesson) => lesson.id === activeLessonId)) ?? curriculum[0]
  const activeLesson = activePhase.lessons.find((lesson) => lesson.id === activeLessonId) ?? activePhase.lessons[0]
  const orderedLessons = curriculum.flatMap((phase) => phase.lessons)
  const activeIndex = orderedLessons.findIndex((lesson) => lesson.id === activeLesson.id)
  const nextLesson = orderedLessons[activeIndex + 1]

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
          <a className="wordmark wordmark-light" href="#login-title" aria-label="Remote Blueprint">
            <span className="wordmark-mark">RB</span>
            <span>Remote Blueprint</span>
          </a>
          <div className="login-copy">
            <p className="eyebrow">Field guide 01 — Upwork</p>
            <h1 id="login-title">Skill sudah ada. Sekarang bangun sistem untuk menang.</h1>
            <p>Tracker praktis bagi profesional Indonesia yang ingin mengubah pengalaman kerja menjadi profil, proposal, dan reputasi yang dipercaya klien global.</p>
          </div>
          <div className="login-proof">
            <div><strong>4</strong><span>fase terarah</span></div>
            <div><strong>16</strong><span>lesson praktis</span></div>
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
            <div><span>Outcome lesson</span><strong>{activeLesson.outcome}</strong></div>
          </section>

          <section className="action-section">
            <div className="section-heading"><span>Action checklist</span><em>Kerjakan langsung di akun Upwork-mu</em></div>
            <ol className="action-list">
              {activeLesson.actions.map((action, index) => (
                <li key={action}><span>{String(index + 1).padStart(2, '0')}</span><p>{action}</p></li>
              ))}
            </ol>
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
          </section>
        </div>
      )}
    </div>
  )
}
