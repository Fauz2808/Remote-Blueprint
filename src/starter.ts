export type ReadinessQuestion = {
  id: string
  dimension: string
  question: string
  action: string
}

export const readinessQuestions: ReadinessQuestion[] = [
  { id: 'skill-1', dimension: 'Skill yang dapat dijual', question: 'Saya dapat menyebutkan satu skill yang menghasilkan output jelas untuk klien.', action: 'Pilih satu skill dan tulis output yang dapat dibeli klien.' },
  { id: 'skill-2', dimension: 'Skill yang dapat dijual', question: 'Saya pernah memakai skill itu pada proyek nyata atau latihan terarah.', action: 'Selesaikan satu proyek latihan dengan brief dan batas waktu.' },
  { id: 'niche-1', dimension: 'Kejelasan jasa', question: 'Saya tahu tipe klien dan masalah spesifik yang ingin saya bantu.', action: 'Tulis satu kalimat: saya membantu [klien] menyelesaikan [masalah].' },
  { id: 'proof-1', dimension: 'Proof dan portofolio', question: 'Saya punya minimal satu contoh kerja yang relevan dan boleh ditampilkan.', action: 'Buat satu proof card: masalah, proses, output, dan hasil jujur.' },
  { id: 'proof-2', dimension: 'Proof dan portofolio', question: 'Contoh kerja saya menjelaskan kontribusi dan hasil tanpa klaim palsu.', action: 'Tambahkan konteks, peran, dan hasil terukur pada portofolio.' },
  { id: 'english-1', dimension: 'Bahasa Inggris kerja', question: 'Saya dapat memahami brief dan menulis balasan kerja singkat dalam bahasa Inggris.', action: 'Latih ringkasan brief dan balasan 5 kalimat setiap hari.' },
  { id: 'profile-1', dimension: 'Kesiapan profil', question: 'Headline dan overview saya fokus pada jasa, bukan daftar semua skill.', action: 'Susun headline dan opening profil berdasarkan satu jasa utama.' },
  { id: 'profile-2', dimension: 'Kesiapan profil', question: 'Profil saya memiliki foto, riwayat relevan, skill, dan proof yang konsisten.', action: 'Lengkapi elemen profil yang belum mendukung jasa utama.' },
  { id: 'delivery-1', dimension: 'Kapasitas delivery', question: 'Saya tahu jam kerja tersedia dan dapat memenuhi deadline realistis.', action: 'Tetapkan kapasitas mingguan dan buffer deadline.' },
  { id: 'delivery-2', dimension: 'Kapasitas delivery', question: 'Saya punya cara mencatat scope, revisi, dan progres pekerjaan.', action: 'Siapkan checklist scope, update, dan serah terima.' },
  { id: 'admin-1', dimension: 'Payout dan administrasi', question: 'Saya memahami identitas, metode payout, dan data pajak yang mungkin dibutuhkan.', action: 'Periksa dokumen identitas dan opsi payout resmi di akun.' },
  { id: 'safety-1', dimension: 'Keamanan platform', question: 'Saya mengenali larangan pembayaran luar platform, free test, dan permintaan data sensitif.', action: 'Pelajari red flag dan gunakan fitur report bila perlu.' },
]

export const readinessOptions = [
  { label: 'Belum sama sekali', value: 0 },
  { label: 'Baru mulai', value: 1 },
  { label: 'Hampir siap', value: 2 },
  { label: 'Sudah siap', value: 3 },
]

export type ReadinessResult = {
  score: number
  status: 'Belum siap' | 'Siap membangun profil' | 'Siap mencari job' | 'Siap apply'
  gaps: string[]
  actions: string[]
  phase: string
}

export function scoreReadiness(answers: number[]): ReadinessResult {
  const normalized = readinessQuestions.map((_, index) => Math.min(3, Math.max(0, Number(answers[index]) || 0)))
  const score = Math.round(normalized.reduce((sum, value) => sum + value, 0) / (readinessQuestions.length * 3) * 100)
  const status = score < 30 ? 'Belum siap' : score < 55 ? 'Siap membangun profil' : score < 80 ? 'Siap mencari job' : 'Siap apply'
  const ranked = readinessQuestions
    .map((question, index) => ({ ...question, value: normalized[index], index }))
    .sort((a, b) => a.value - b.value || a.index - b.index)
    .filter((item, index, all) => all.findIndex((candidate) => candidate.dimension === item.dimension) === index)
    .slice(0, 3)
  return {
    score,
    status,
    gaps: ranked.map((item) => `${item.dimension}: ${item.question}`),
    actions: ranked.map((item) => item.action),
    phase: score < 30 ? 'Fase 1 — fondasi dan offer' : score < 55 ? 'Fase 2 — proof dan profil' : score < 80 ? 'Fase 3 — pencarian dan seleksi job' : 'Fase 4 — proposal dan interview',
  }
}

export type JobFitInput = {
  skillFit: number
  proof: number
  brief: number
  budget: number
  paymentVerified: boolean
  clientHistory: number
  competition: number
  clientActive: boolean
  connects: number
  redFlags: string[]
}

export type JobFitResult = {
  score: number
  decision: 'APPLY' | 'SKIP' | 'AVOID/REPORT'
  reasons: string[]
  risk: 'Rendah' | 'Sedang' | 'Tinggi'
  clarify: string[]
  angle: string
}

export const securityRedFlags = [
  { id: 'off-platform', label: 'Meminta pindah ke Telegram/WhatsApp sebelum kontrak' },
  { id: 'free-test', label: 'Meminta tes kerja gratis yang bernilai produksi' },
  { id: 'sensitive-data', label: 'Meminta data sensitif, login, atau uang muka dari freelancer' },
  { id: 'outside-payment', label: 'Meminta pembayaran di luar Upwork' },
]

export function scoreJobFit(input: JobFitInput): JobFitResult {
  const redFlags = input.redFlags.filter((flag) => securityRedFlags.some((item) => item.id === flag))
  const weighted = input.skillFit * 20 + input.proof * 15 + input.brief * 15 + input.budget * 15 + input.clientHistory * 10 + input.competition * 10
    + (input.paymentVerified ? 8 : 0) + (input.clientActive ? 7 : 0)
  const score = Math.round(Math.min(100, Math.max(0, weighted)))
  const decision = redFlags.length ? 'AVOID/REPORT' : score >= 70 ? 'APPLY' : 'SKIP'
  const reasons = redFlags.length
    ? [`Red flag keamanan: ${redFlags.map((id) => securityRedFlags.find((item) => item.id === id)?.label).join('; ')}`]
    : [input.skillFit >= 0.75 ? 'Skill cocok dengan kebutuhan job.' : 'Kecocokan skill belum kuat.', input.proof >= 0.75 ? 'Proof relevan tersedia.' : 'Proof relevan masih lemah.']
  const clarify = [input.brief < 0.75 && 'Scope, output, dan deadline', input.budget < 0.75 && 'Kesesuaian budget dengan scope', !input.paymentVerified && 'Verifikasi pembayaran klien'].filter(Boolean) as string[]
  return {
    score,
    decision,
    reasons,
    risk: redFlags.length || input.connects > 12 ? 'Tinggi' : score >= 70 && input.connects <= 8 ? 'Rendah' : 'Sedang',
    clarify,
    angle: input.skillFit >= 0.75 && input.proof >= 0.75 ? 'Buka dengan masalah paling relevan, lalu tunjukkan proof serupa dan langkah pertama.' : 'Jelaskan skill yang paling dekat dengan scope dan tawarkan langkah awal kecil untuk memvalidasi kecocokan.',
  }
}
