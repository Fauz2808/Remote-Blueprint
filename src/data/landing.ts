export const landingSections = [
  'problems', 'journey', 'starter', 'outputs', 'paid-product',
  'curriculum', 'labs', 'audience', 'trust', 'pricing', 'faq',
]

export const problems = [
  ['Connects habis tanpa strategi', 'Banyak apply tidak otomatis memperbesar peluang. Kamu perlu alasan jelas sebelum memakai Connects.'],
  ['Proposal sepi tanpa diagnosis', 'Saat proposal tidak dilihat atau dibalas, kamu perlu tahu apakah masalahnya ada di job, proof, positioning, atau proposal.'],
  ['Profil dan proof belum meyakinkan', 'Skill yang terlalu umum membuat klien sulit memahami masalah apa yang bisa kamu selesaikan.'],
  ['Job bagus sulit dibedakan dari risiko', 'Brief kabur, free test, atau ajakan keluar platform perlu dikenali sebelum kamu membuang waktu.'],
] as const

export const journey = [
  ['01', 'Diagnose', 'Ukur kesiapan dan temukan gap paling awal.'],
  ['02', 'Decide', 'Nilai job sebelum memakai Connects.'],
  ['03', 'Execute', 'Kerjakan langkah dari fondasi sampai delivery.'],
  ['04', 'Improve', 'Lihat progress, evaluasi, lalu perbaiki sistem.'],
] as const

export const starterModules = [
  { name: 'Quick Guide', meta: '15–20 menit', description: 'Pahami alur skill → proof → profile → job → proposal → contract.', href: '/starter/guide' },
  { name: 'Readiness Scanner', meta: '12 pertanyaan', description: 'Dapatkan skor kesiapan, tiga gap utama, dan tiga action prioritas.', href: '/starter/readiness' },
  { name: 'Job Fit Checker', meta: 'Input manual', description: 'Putuskan APPLY, SKIP, atau AVOID/REPORT dengan alasan sebelum memakai Connects.', href: '/starter/job-fit' },
]

export const sampleOutputs = [
  { label: 'Skor kesiapan', value: '64 / 100', detail: 'Siap membangun profil', accent: false },
  { label: 'Gap prioritas', value: 'Proof relevan', detail: 'Buat 2 studi kasus dengan proses dan hasil.', accent: false },
  { label: 'Keputusan job', value: 'SKIP', detail: 'Brief kabur · budget tidak sebanding · 16 Connects', accent: true },
]

export const paidProduct = {
  name: 'Remote Blueprint — Upwork Survival System',
  description: 'Guided execution tracker untuk mengubah skill menjadi proof, profil, proposal, dan rutinitas kerja yang bisa dievaluasi.',
  stats: ['5 fase', '17 lesson', '28 action'],
}

export const curriculumPhases = [
  ['00', 'Pre-Requisite', 'Pastikan skill, proof, komunikasi, akun, dan kapasitas delivery siap.'],
  ['01', 'Fondasi Profil', 'Bangun positioning dan profil yang mudah dinilai klien.'],
  ['02', 'Pecah Telor', 'Pilih job, kelola Connects, tulis proposal, dan siapkan interview.'],
  ['03', 'Delivery & Trust', 'Kunci scope, komunikasi, revisi, dan closeout secara aman.'],
  ['04', 'Scale & Referral', 'Bangun repeat project, referral, proof baru, dan evaluasi rate.'],
] as const

export const labs = [
  ['Proposal Framework', 'Pecah brief menjadi masalah, solusi, proof, dan pertanyaan penutup.'],
  ['Profile Optimization Lab', 'Susun headline dan overview berdasarkan layanan yang benar-benar kamu kuasai.'],
  ['Rate Calculator', 'Hitung floor rate dari kebutuhan bersih, jam billable, dan fee Upwork.'],
  ['Red Flag Checklist', 'Periksa tanda risiko job dan klien sebelum apply.'],
  ['Sumber resmi Upwork', 'Buka referensi aturan dan panduan platform yang perlu selalu current.'],
] as const

export const goodFit = [
  'Sudah punya atau sedang mematangkan satu skill digital.',
  'Ingin belajar mandiri lewat langkah yang terarah.',
  'Butuh sistem untuk mengurangi pemborosan Connects.',
  'Bersedia membangun proof, bukan mencari jalan pintas.',
]

export const badFit = [
  'Mencari jaminan cepat mendapat klien atau pendapatan.',
  'Menginginkan mentoring atau review manusia 1-on-1.',
  'Belum bersedia belajar skill dan membangun proof.',
  'Hanya ingin proposal generik untuk copy-paste.',
]

export const trustPoints = [
  ['Input manual', 'Tidak scraping listing atau mengambil data akun Upwork.'],
  ['Privasi jelas', 'Full job description tidak perlu ditempel atau disimpan.'],
  ['Sumber resmi', 'Aturan platform diarahkan ke dokumentasi resmi Upwork.'],
  ['Klaim jujur', 'Tidak menjamin kontrak, rating, atau pendapatan tertentu.'],
]

export const faqItems = [
  ['Apakah cocok untuk pemula?', 'Cocok jika kamu sudah punya atau sedang serius mematangkan satu skill. Jika belum, Starter membantu menunjukkan gap pertama yang perlu dibereskan.'],
  ['Apakah harus punya akun Upwork?', 'Starter bisa dipakai tanpa login. Untuk menjalankan materi produk berbayar, akun Upwork aktif akan membuat setiap action lebih relevan.'],
  ['Apakah ada mentoring 1-on-1?', 'Tidak. Produk ini adalah sistem belajar mandiri dan execution tracker, bukan mentoring atau review proposal oleh manusia.'],
  ['Apakah produk menjamin dapat klien?', 'Tidak. Produk membantu memperbaiki keputusan dan eksekusi; respons klien tetap dipengaruhi skill, proof, pasar, timing, dan kualitas kerja.'],
  ['Apakah Starter perlu login?', 'Tidak. Hasil terbaru Scanner dan Job Fit disimpan lokal di browser yang kamu pakai.'],
  ['Apakah job description disimpan?', 'Tidak perlu. Job Fit memakai pilihan manual dan tidak meminta full brief.'],
  ['Bagaimana akses setelah membeli?', 'Pembayaran Lynk.id yang berhasil mengaktifkan akses pada email pembelian. Gunakan email itu untuk meminta magic link di halaman login produk.'],
  ['Bagaimana kebijakan refund?', 'Refund berlaku 7 hari untuk masalah akses teknis atau fitur utama yang tidak sesuai listing, mengikuti syarat penggunaan pada halaman Refund & Privasi.'],
]

console.assert(starterModules.length === 3, 'Starter must keep exactly three modules')
console.assert(curriculumPhases.length === 5, 'Paid product must keep five phases')
console.assert(faqItems.length >= 8, 'Landing must answer key objections')
