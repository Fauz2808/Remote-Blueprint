export type Lesson = {
  id: string
  title: string
  duration: string
  summary: string
  outcome: string
  actions: string[]
}

export type Phase = {
  id: string
  number: string
  title: string
  shortTitle: string
  description: string
  milestone: string
  lessons: Lesson[]
}

export const curriculum: Phase[] = [
  {
    id: 'foundation',
    number: '01',
    title: 'Fondasi profil',
    shortTitle: 'Fondasi',
    description: 'Buat profil lengkap, spesifik, dan layak dipercaya sebelum mengirim proposal pertama.',
    milestone: 'Profil 100% siap ditemukan dan dinilai klien.',
    lessons: [
      {
        id: 'profile-100',
        title: 'Lengkapi profil sampai 100%',
        duration: '12 menit',
        summary: 'Profil kosong mengurangi sinyal kepercayaan dan peluang muncul di hasil pencarian.',
        outcome: 'Semua bagian wajib terisi tanpa filler.',
        actions: ['Isi riwayat kerja, pendidikan, bahasa, dan availability.', 'Pastikan judul, rate, lokasi, dan kategori konsisten.', 'Periksa indikator kelengkapan profil sebelum lanjut.'],
      },
      {
        id: 'market-benchmark',
        title: 'Benchmark pasar tanpa meniru profil',
        duration: '25 menit',
        summary: 'Data profil dan job yang relevan membantu memilih keyword, rate, serta bukti yang dicari pasar—tanpa menyalin kompetitor.',
        outcome: 'Punya benchmark niche berisi pola headline, skill, rate, dan tipe project yang sering muncul.',
        actions: ['Cari 10–15 profil freelancer sukses dalam niche yang sama lewat pencarian resmi Upwork.', 'Catat keyword dan skill yang berulang, lalu kelompokkan berdasarkan masalah klien.', 'Bandingkan rentang rate dan tipe project; gunakan median sebagai referensi, bukan angka wajib.', 'Pilih pola yang sesuai bukti pengalamanmu. Jangan menyalin headline atau overview orang lain.'],
      },
      {
        id: 'headshot',
        title: 'Bangun first impression profesional',
        duration: '8 menit',
        summary: 'Headshot bersih membuat profil terasa aman sebelum klien membaca satu kata pun.',
        outcome: 'Foto profil tajam, terang, dan tidak terlihat kasual.',
        actions: ['Gunakan framing kepala dan bahu.', 'Pilih latar polos dengan cahaya dari depan.', 'Hindari selfie, filter berat, dan foto grup.'],
      },
      {
        id: 'positioning',
        title: 'Tulis positioning yang spesifik',
        duration: '20 menit',
        summary: 'Klien mencari solusi spesifik, bukan daftar semua skill yang pernah dipelajari.',
        outcome: 'Headline dan overview menjawab: siapa yang dibantu, masalah apa, dan dengan skill apa.',
        actions: ['Pilih satu kategori masalah utama.', 'Masukkan keyword yang benar-benar dicari klien.', 'Buka overview dengan hasil yang bisa kamu bantu capai.'],
      },
      {
        id: 'portfolio',
        title: 'Ubah portfolio menjadi bukti',
        duration: '35 menit',
        summary: 'Portfolio kuat menjelaskan keputusan dan hasil, bukan hanya menampilkan gambar akhir.',
        outcome: 'Minimal tiga case study dengan alur masalah, tindakan, dan hasil.',
        actions: ['Pilih tiga karya paling relevan dengan positioning.', 'Tulis konteks masalah dan batasannya.', 'Tutup dengan hasil, angka, atau perubahan yang terjadi.'],
      },
    ],
  },
  {
    id: 'first-win',
    number: '02',
    title: 'Pecah telor',
    shortTitle: 'Pecah telor',
    description: 'Pilih peluang dengan disiplin, kirim proposal relevan, lalu kejar bukti sosial pertama.',
    milestone: 'Kontrak pertama selesai dengan review kuat.',
    lessons: [
      {
        id: 'job-filter',
        title: 'Filter job dengan peluang menang',
        duration: '15 menit',
        summary: 'Connects habis karena salah memilih job, bukan karena proposal kurang panjang.',
        outcome: 'Shortlist job yang cocok dengan level, skill, budget, dan timing.',
        actions: ['Prioritaskan job baru dengan scope jelas.', 'Cocokkan level experience dengan profil saat ini.', 'Lewati brief generik, budget tidak masuk akal, atau histori klien buruk.'],
      },
      {
        id: 'proposal',
        title: 'Tulis proposal problem-solving',
        duration: '25 menit',
        summary: 'Dua baris pertama harus membuktikan kamu membaca brief dan memahami risikonya.',
        outcome: 'Proposal singkat dengan hook, diagnosis, bukti, rencana, dan pertanyaan ringan.',
        actions: ['Sebut masalah spesifik dari brief.', 'Berikan satu insight atau langkah awal yang berguna.', 'Tutup dengan pertanyaan yang mudah dijawab.'],
      },
      {
        id: 'connects',
        title: 'Gunakan Connects dengan sadar',
        duration: '10 menit',
        summary: 'Boost bukan pengganti relevansi. Gunakan saat profil dan proposal memang cocok.',
        outcome: 'Punya batas harian dan catatan hasil setiap proposal.',
        actions: ['Tentukan budget Connects mingguan.', 'Boost hanya pada peluang dengan fit tinggi.', 'Catat sent, viewed, interview, dan hired.'],
      },
      {
        id: 'first-contract',
        title: 'Turunkan ego, bukan standar kerja',
        duration: '12 menit',
        summary: 'Job kecil boleh diambil jika scope aman dan bisa menghasilkan review pertama.',
        outcome: 'Kontrak awal dipilih sebagai investasi bukti sosial, bukan perang harga permanen.',
        actions: ['Pastikan scope bisa diselesaikan cepat dan baik.', 'Sepakati definisi selesai sebelum mulai.', 'Prioritaskan komunikasi dan review, bukan nominal awal.'],
      },
    ],
  },
  {
    id: 'delivery',
    number: '03',
    title: 'Delivery & trust',
    shortTitle: 'Delivery',
    description: 'Jadikan komunikasi dan problem solving sebagai alasan klien terus memperpanjang kontrak.',
    milestone: 'Klien merasa aman, mendapat hasil, dan ingin bekerja lagi.',
    lessons: [
      {
        id: 'onboarding',
        title: 'Mulai dengan ekspektasi yang jelas',
        duration: '18 menit',
        summary: 'Kontrak bermasalah biasanya dimulai dari asumsi yang tidak pernah ditulis.',
        outcome: 'Scope, timeline, channel, dan approval flow disepakati.',
        actions: ['Ringkas ulang brief dengan bahasamu.', 'Konfirmasi deliverable, deadline, dan PIC approval.', 'Tulis apa yang tidak termasuk dalam scope.'],
      },
      {
        id: 'english',
        title: 'Komunikasikan solusi dalam English',
        duration: '20 menit',
        summary: 'Skill teknis tidak cukup jika klien sulit memahami progres dan keputusanmu.',
        outcome: 'Update kerja ringkas, jelas, dan mudah ditindaklanjuti.',
        actions: ['Gunakan kalimat pendek dan active voice.', 'Pisahkan progress, blocker, dan next step.', 'Selalu beri rekomendasi, bukan hanya melaporkan masalah.'],
      },
      {
        id: 'overdeliver',
        title: 'Under-promise, over-deliver',
        duration: '16 menit',
        summary: 'Nilai ekstra harus relevan. Tiga opsi bagus lebih berguna daripada sepuluh file tanpa arah.',
        outcome: 'Delivery utama selesai, plus opsi atau insight yang mempercepat keputusan klien.',
        actions: ['Penuhi janji utama lebih dulu.', 'Tambahkan maksimal dua opsi relevan.', 'Jelaskan trade-off setiap opsi.'],
      },
      {
        id: 'review',
        title: 'Tutup kontrak dengan review sehat',
        duration: '10 menit',
        summary: 'Momen meminta feedback adalah setelah nilai pekerjaan terasa jelas.',
        outcome: 'Kontrak ditutup rapi dengan bukti hasil dan permintaan feedback yang natural.',
        actions: ['Kirim recap hasil dan file final.', 'Tanyakan apakah ada hal terakhir yang perlu dibereskan.', 'Minta feedback jujur setelah klien mengonfirmasi selesai.'],
      },
    ],
  },
  {
    id: 'scale',
    number: '04',
    title: 'Scale & referral',
    shortTitle: 'Scale',
    description: 'Ubah pekerjaan selesai menjadi repeat order, referral, dan rate yang lebih sehat.',
    milestone: 'Pipeline tidak lagi bergantung penuh pada proposal baru.',
    lessons: [
      {
        id: 'follow-up',
        title: 'Follow-up 30 dan 90 hari',
        duration: '10 menit',
        summary: 'Klien lama lebih mudah percaya, tetapi mereka tetap perlu diingatkan bahwa kamu tersedia.',
        outcome: 'Follow-up relevan tanpa terasa mengejar pekerjaan.',
        actions: ['Tanya perkembangan hasil pekerjaan sebelumnya.', 'Kirim insight yang terkait bisnis mereka.', 'Sebut availability hanya jika konteksnya pas.'],
      },
      {
        id: 'portfolio-loop',
        title: 'Bangun portfolio loop',
        duration: '15 menit',
        summary: 'Setiap project selesai harus memperkuat profil untuk project berikutnya.',
        outcome: 'Case study baru, positioning lebih tajam, dan bukti sosial bertambah.',
        actions: ['Dokumentasikan problem dan hasil selama project.', 'Minta izin memakai bagian yang tidak sensitif.', 'Update portfolio dan overview secara berkala.'],
      },
      {
        id: 'referral',
        title: 'Minta referral dengan konteks',
        duration: '8 menit',
        summary: 'Referral efektif ketika klien tahu tipe orang dan masalah yang paling cocok untukmu.',
        outcome: 'Permintaan referral spesifik, ringan, dan mudah diteruskan.',
        actions: ['Sebut profil klien idealmu.', 'Berikan satu kalimat intro yang bisa diteruskan.', 'Jangan menawarkan diskon sebagai imbalan default.'],
      },
      {
        id: 'rate',
        title: 'Naikkan rate berdasarkan bukti',
        duration: '12 menit',
        summary: 'Rate naik setelah positioning, demand, dan bukti hasil menguat—bukan karena kalender berganti.',
        outcome: 'Rate baru punya alasan yang bisa dijelaskan dengan percaya diri.',
        actions: ['Review win rate dan kapasitas kerja.', 'Naikkan rate untuk lead baru lebih dulu.', 'Pertahankan klien lama berdasarkan scope dan nilai kontrak.'],
      },
    ],
  },
]

export const officialResources = [
  { label: 'Cara kerja Upwork untuk freelancer', url: 'https://www.upwork.com/i/how-it-works/freelancer/' },
  { label: 'Cara menjadi freelancer', url: 'https://www.upwork.com/resources/how-to-become-a-freelancer' },
  { label: 'Panduan proposal dari Upwork', url: 'https://www.upwork.com/resources/how-to-create-a-proposal-that-wins-jobs' },
]

export const proposalTemplate = `Hi [Client name],

I noticed [specific problem from the brief]. The main risk here is [short diagnosis].

A practical first step would be [useful idea]. I have handled similar work using [relevant proof or skill], and I would approach this in three steps:
1. [Step one]
2. [Step two]
3. [Step three]

If useful, I can send a quick outline for [specific deliverable] before we start. Is [low-friction question] the priority right now?

Best,
[Your name]`

export const allLessonIds = curriculum.flatMap((phase) => phase.lessons.map((lesson) => lesson.id))

export const totalMinutes = curriculum.reduce(
  (total, phase) => total + phase.lessons.reduce((phaseTotal, lesson) => phaseTotal + Number.parseInt(lesson.duration), 0),
  0,
)

export function sanitizeProgress(value: unknown): Record<string, boolean> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {}
  return Object.fromEntries(
    Object.entries(value).filter(([id, done]) => allLessonIds.includes(id) && typeof done === 'boolean'),
  )
}

export function calculateProgress(progress: Record<string, boolean>) {
  const completed = allLessonIds.filter((id) => progress[id]).length
  return { completed, total: allLessonIds.length, percentage: Math.round((completed / allLessonIds.length) * 100) }
}

if (import.meta.env.DEV) {
  console.assert(new Set(allLessonIds).size === allLessonIds.length, 'Lesson IDs must be unique')
  console.assert(calculateProgress({}).percentage === 0, 'Empty progress must be 0%')
  console.assert(calculateProgress(Object.fromEntries(allLessonIds.map((id) => [id, true]))).percentage === 100, 'Full progress must be 100%')
}

export default curriculum
