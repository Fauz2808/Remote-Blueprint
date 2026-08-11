export type PhaseSlug = 'kenali-arah' | 'siapkan-diri' | 'cari-peluang' | 'dapatkan-pekerjaan' | 'kerja-berkembang'

type Section = { heading: string; body: string; steps?: string[] }
type Source = { label: string; url: string }

export type Article = {
  slug: string
  phase: PhaseSlug
  title: string
  summary: string
  outcome: string
  sections: Section[]
  sources: Source[]
  reviewedAt: string
}

export const phases = [
  { slug: 'kenali-arah', name: 'Kenali Arah', question: 'Jalur kerja remote mana yang sesuai dengan kondisi dan tujuanmu?', description: 'Pahami model kerja, pilih arah, dan ukur kesiapan tanpa mengejar tren atau janji instan.' },
  { slug: 'siapkan-diri', name: 'Siapkan Diri', question: 'Apa yang perlu disiapkan agar kemampuanmu mudah dinilai?', description: 'Bangun skill, proof, komunikasi, perangkat, dan kebiasaan kerja yang dapat dibuktikan.' },
  { slug: 'cari-peluang', name: 'Cari Peluang', question: 'Di mana peluang yang relevan dan bagaimana menilainya?', description: 'Pilih kanal, baca kebutuhan, periksa risiko, dan gunakan waktu melamar secara terarah.' },
  { slug: 'dapatkan-pekerjaan', name: 'Dapatkan Pekerjaan', question: 'Bagaimana mengubah peluang menjadi kesepakatan yang aman?', description: 'Tulis respons relevan, jalani interview, selaraskan scope, dan periksa kontrak.' },
  { slug: 'kerja-berkembang', name: 'Kerja & Berkembang', question: 'Bagaimana menjaga trust dan membangun karier remote?', description: 'Kelola komunikasi, delivery, dokumentasi, reputasi, repeat work, dan perkembangan kemampuan.' },
] as const

const reviewedAt = '2026-08-11'
const ilo: Source = { label: 'ILO: Working from home', url: 'https://www.ilo.org/publications/working-home-estimating-worldwide-potential' }
const upworkSafety: Source = { label: 'Upwork: Safety and security', url: 'https://support.upwork.com/hc/en-us/categories/360001189193-Safety-and-Security' }
const upworkProfile: Source = { label: 'Upwork: Build your profile', url: 'https://support.upwork.com/hc/en-us/articles/211063208-Create-a-100-Complete-Freelancer-Profile' }
const upworkProposals: Source = { label: 'Upwork: Submit a proposal', url: 'https://support.upwork.com/hc/en-us/articles/211062998-Submit-a-proposal' }
const upworkContracts: Source = { label: 'Upwork: Contracts', url: 'https://support.upwork.com/hc/en-us/categories/360001181034-Contracts' }
const cisa: Source = { label: 'CISA: Recognize and report phishing', url: 'https://www.cisa.gov/secure-our-world/recognize-and-report-phishing' }

export const articles: Article[] = [
  {
    slug: 'memilih-model-kerja-remote', phase: 'kenali-arah', title: 'Memilih model kerja remote yang sesuai',
    summary: 'Remote bukan satu jenis pekerjaan. Bedakan hubungan kerja, cara dibayar, ritme, dan risikonya sebelum memilih jalur.',
    outcome: 'Satu pilihan model kerja utama dan satu alternatif yang sesuai kebutuhanmu.', reviewedAt, sources: [ilo],
    sections: [
      { heading: 'Mulai dari hubungan kerja', body: 'Remote menjelaskan lokasi kerja, bukan bentuk kontrak. Kamu bisa menjadi pegawai, kontraktor, freelancer berbasis proyek, atau pemilik layanan. Masing-masing punya tingkat kepastian, kendali waktu, dan tanggung jawab administrasi berbeda.' },
      { heading: 'Bandingkan kebutuhan nyata', body: 'Nilai kebutuhan pendapatan stabil, fleksibilitas, toleransi mencari klien, jam lintas zona waktu, dan tanggung jawab pajak. Jangan memilih hanya karena konten keberhasilan orang lain.', steps: ['Tulis kebutuhan minimum bulanan.', 'Tentukan jam dan zona waktu yang bisa dijaga.', 'Nilai toleransi terhadap pendapatan yang berubah.', 'Pilih model utama dan alternatif.'] },
      { heading: 'Uji dengan eksperimen kecil', body: 'Sebelum mengganti arah besar, uji satu aktivitas yang menyerupai pekerjaan target: proyek latihan dengan deadline, percakapan async, atau satu minggu pencarian lowongan.' },
      { heading: 'Kriteria selesai', body: 'Kamu dapat menjelaskan model pilihan, alasan, risiko utama, dan eksperimen 14 hari tanpa menjanjikan hasil pekerjaan.' },
    ],
  },
  {
    slug: 'audit-kesiapan-kerja-remote', phase: 'kenali-arah', title: 'Audit kesiapan kerja remote tanpa menebak',
    summary: 'Kesiapan remote terlihat dari bukti kerja, komunikasi, kapasitas, perangkat, dan administrasi, bukan rasa percaya diri saja.',
    outcome: 'Daftar gap prioritas yang dapat dikerjakan dalam urutan jelas.', reviewedAt, sources: [ilo],
    sections: [
      { heading: 'Pisahkan skill dan kesiapan kerja', body: 'Menguasai tool belum berarti siap menerima pekerjaan. Kesiapan juga mencakup memahami brief, membuat estimasi, memberi update, menjaga file, dan menyerahkan output.' },
      { heading: 'Periksa enam bukti', body: 'Cari bukti untuk skill, contoh output, komunikasi tertulis, kapasitas waktu, perangkat dan internet, serta metode pembayaran atau administrasi.', steps: ['Tandai bukti yang sudah ada.', 'Tulis risiko dari setiap gap.', 'Urutkan gap yang menghambat paling awal.', 'Pilih maksimal tiga tindakan minggu ini.'] },
      { heading: 'Hindari skor sebagai sertifikat', body: 'Scanner membantu mengurutkan tindakan. Skor tinggi tidak menjamin diterima karena kebutuhan pasar, persaingan, timing, dan penilaian pemberi kerja tetap berubah.' },
      { heading: 'Kriteria selesai', body: 'Ada tiga gap prioritas, pemilik tindakan, deadline, dan bukti yang akan menunjukkan gap tersebut selesai.' },
    ],
  },
  {
    slug: 'membangun-proof-tanpa-klien', phase: 'siapkan-diri', title: 'Membangun proof sebelum punya klien',
    summary: 'Proof awal dapat berasal dari latihan berbatas jelas, kontribusi nyata, atau perbaikan aset sendiri tanpa membuat klaim klien palsu.',
    outcome: 'Satu studi kasus jujur yang menunjukkan cara berpikir dan kualitas output.', reviewedAt, sources: [upworkProfile],
    sections: [
      { heading: 'Pilih masalah yang realistis', body: 'Ambil masalah yang benar-benar dikerjakan oleh role target. Hindari proyek raksasa atau brand terkenal seolah kamu mendapat mandat resmi.' },
      { heading: 'Buat brief dan batas', body: 'Tulis pengguna, masalah, output, batas waktu, dan asumsi. Labeli proyek sebagai latihan atau proyek mandiri.', steps: ['Pilih satu masalah spesifik.', 'Batasi output yang selesai dalam 3-7 hari.', 'Catat keputusan dan revisi.', 'Simpan artefak proses dan hasil.'] },
      { heading: 'Tulis studi kasus jujur', body: 'Jelaskan konteks, peran, proses, output, dan pelajaran. Jika tidak ada data pengguna, jangan menciptakan metrik. Gunakan kriteria kualitas yang bisa diperiksa.' },
      { heading: 'Kriteria selesai', body: 'Studi kasus dapat dibuka, status latihan jelas, kontribusi tidak ambigu, dan file akhir bisa dinilai tanpa penjelasan lisan.' },
    ],
  },
  {
    slug: 'komunikasi-async-yang-bisa-dipercaya', phase: 'siapkan-diri', title: 'Komunikasi async yang bisa dipercaya',
    summary: 'Pesan kerja yang baik mengurangi pertanyaan ulang dengan konteks, status, keputusan, risiko, dan langkah berikutnya yang jelas.',
    outcome: 'Template update kerja singkat yang dapat dipakai lintas proyek.', reviewedAt, sources: [ilo],
    sections: [
      { heading: 'Tulis untuk pembaca yang tidak hadir', body: 'Pesan async harus berdiri sendiri. Sebutkan proyek, perubahan, alasan, dampak, dan tindakan yang dibutuhkan.' },
      { heading: 'Gunakan struktur konsisten', body: 'Format sederhana lebih berguna daripada bahasa rumit.', steps: ['Status: apa yang sudah selesai.', 'Bukti: tautan atau file terbaru.', 'Risiko: hambatan dan dampaknya.', 'Next: tindakan, pemilik, dan waktu.'] },
      { heading: 'Tetapkan ekspektasi respons', body: 'Bedakan pesan informatif, permintaan keputusan, dan kondisi mendesak. Jangan memakai label urgent untuk semua hal.' },
      { heading: 'Kriteria selesai', body: 'Seseorang yang tidak mengikuti pekerjaan hari itu dapat memahami status dan tahu apakah ia perlu bertindak.' },
    ],
  },
  {
    slug: 'memilih-kanal-peluang-remote', phase: 'cari-peluang', title: 'Memilih kanal peluang remote',
    summary: 'Job board, marketplace, jaringan, komunitas, dan outreach punya mekanisme serta biaya pencarian yang berbeda.',
    outcome: 'Portofolio kanal pencarian yang fokus dan dapat dievaluasi.', reviewedAt, sources: [ilo, upworkProposals],
    sections: [
      { heading: 'Pahami mekanisme kanal', body: 'Job board berpusat pada lowongan, marketplace pada profil dan proposal, jaringan pada trust, sedangkan outreach pada relevansi masalah yang kamu temukan.' },
      { heading: 'Pilih berdasarkan aset', body: 'Cocokkan kanal dengan proof, pengalaman, kemampuan komunikasi, waktu, dan anggaran.', steps: ['Pilih satu kanal utama.', 'Pilih satu kanal pendukung.', 'Tetapkan aktivitas mingguan.', 'Catat respons selama empat minggu.'] },
      { heading: 'Ukur sinyal sebelum pendapatan', body: 'Pantau kualitas peluang, respons, interview, dan alasan penolakan. Pendapatan terlalu lambat untuk menjadi satu-satunya indikator awal.' },
      { heading: 'Kriteria selesai', body: 'Ada dua kanal, alasan pemilihan, aktivitas mingguan, dan tanggal evaluasi dengan data yang sama.' },
    ],
  },
  {
    slug: 'mendeteksi-lowongan-remote-berisiko', phase: 'cari-peluang', title: 'Mendeteksi lowongan remote berisiko',
    summary: 'Risiko terlihat dari pola komunikasi, permintaan uang atau data, tes produksi gratis, dan tekanan keluar dari kanal resmi.',
    outcome: 'Checklist keputusan lanjut, klarifikasi, atau laporkan.', reviewedAt, sources: [cisa, upworkSafety],
    sections: [
      { heading: 'Kenali sinyal kuat', body: 'Permintaan membayar biaya, mengirim credential, menerima cek lalu mengirim uang kembali, atau memindahkan pembayaran keluar platform adalah alasan berhenti.' },
      { heading: 'Periksa identitas dan konteks', body: 'Cocokkan domain email, profil perusahaan, riwayat, bahasa lowongan, dan kanal komunikasi. Satu elemen meyakinkan tidak menghapus sinyal lain.', steps: ['Jangan buka file atau tautan mencurigakan.', 'Jangan kirim data sensitif.', 'Simpan bukti komunikasi.', 'Gunakan report pada platform terkait.'] },
      { heading: 'Bedakan brief lemah dan penipuan', body: 'Brief kabur dapat diklarifikasi. Permintaan uang, akses rahasia, identitas palsu, atau pembayaran tidak aman memerlukan penghentian, bukan negosiasi.' },
      { heading: 'Kriteria selesai', body: 'Keputusan memiliki alasan tertulis dan red flag keamanan selalu mengalahkan skor kecocokan tinggi.' },
    ],
  },
  {
    slug: 'menulis-respons-yang-relevan', phase: 'dapatkan-pekerjaan', title: 'Menulis respons yang relevan',
    summary: 'Respons yang kuat menunjukkan pemahaman masalah, bukti terdekat, pendekatan awal, dan pertanyaan yang membantu keputusan.',
    outcome: 'Draft proposal atau application yang spesifik tanpa klaim palsu.', reviewedAt, sources: [upworkProposals],
    sections: [
      { heading: 'Mulai dari kebutuhan', body: 'Ringkas masalah dengan kata sendiri. Jangan membuka dengan riwayat panjang atau pujian generik.' },
      { heading: 'Pilih proof terdekat', body: 'Gunakan satu contoh yang paling mirip dalam masalah, industri, output, atau batasan.', steps: ['Sebut masalah yang dipahami.', 'Hubungkan satu proof relevan.', 'Jelaskan langkah awal.', 'Tutup dengan pertanyaan scope.'] },
      { heading: 'Jaga klaim', body: 'Sebut kontribusi pribadi dan hasil yang dapat diverifikasi. Jika hasil dipengaruhi tim, jelaskan peranmu.' },
      { heading: 'Kriteria selesai', body: 'Draft dapat ditelusuri ke brief, tidak generik, tidak menjamin hasil, dan memiliki pertanyaan yang membantu menentukan fit.' },
    ],
  },
  {
    slug: 'mengunci-scope-sebelum-mulai', phase: 'dapatkan-pekerjaan', title: 'Mengunci scope sebelum mulai bekerja',
    summary: 'Scope yang jelas menyatukan output, batas, timeline, revisi, akses, pembayaran, dan kriteria penerimaan sebelum pekerjaan dimulai.',
    outcome: 'Ringkasan kesepakatan yang dapat diperiksa kedua pihak.', reviewedAt, sources: [upworkContracts],
    sections: [
      { heading: 'Ubah percakapan menjadi item', body: 'Pisahkan tujuan bisnis dari deliverable. Tujuan bisa luas, tetapi output dan penerimaan harus dapat diamati.' },
      { heading: 'Tutup area rawan', body: 'Dokumentasikan isi dan batas pekerjaan.', steps: ['Daftar output dan format.', 'Tentukan milestone dan deadline.', 'Batasi putaran revisi.', 'Catat akses dan dependency.', 'Selaraskan pembayaran serta acceptance.'] },
      { heading: 'Konfirmasi perubahan', body: 'Perubahan setelah mulai perlu dampak waktu dan biaya yang jelas. Jangan mengandalkan ingatan percakapan.' },
      { heading: 'Kriteria selesai', body: 'Kedua pihak dapat menjawab apa yang dikirim, kapan, berapa revisi, siapa menyediakan apa, dan bagaimana pekerjaan dinyatakan selesai.' },
    ],
  },
  {
    slug: 'ritme-update-kerja-remote', phase: 'kerja-berkembang', title: 'Membangun ritme update kerja remote',
    summary: 'Ritme update membuat progres terlihat, memunculkan hambatan lebih awal, dan mengurangi kebutuhan klien mengejar status.',
    outcome: 'Jadwal dan format update yang proporsional dengan proyek.', reviewedAt, sources: [ilo],
    sections: [
      { heading: 'Pilih ritme berdasarkan risiko', body: 'Proyek singkat atau kritis butuh update lebih sering. Proyek stabil berdurasi panjang dapat memakai ringkasan mingguan.' },
      { heading: 'Kirim bukti, bukan aktivitas', body: 'Sebut output yang berubah dan tautkan versi terbaru.', steps: ['Apa yang selesai.', 'Apa yang sedang dikerjakan.', 'Hambatan atau keputusan.', 'Rencana hingga update berikutnya.'] },
      { heading: 'Naikkan masalah lebih awal', body: 'Jangan menunggu deadline untuk melaporkan dependency atau asumsi salah. Sertakan opsi dan dampaknya.' },
      { heading: 'Kriteria selesai', body: 'Jadwal update disepakati dan setiap update memungkinkan pembaca memahami progres tanpa rapat tambahan.' },
    ],
  },
  {
    slug: 'mengubah-proyek-menjadi-aset-karier', phase: 'kerja-berkembang', title: 'Mengubah proyek menjadi aset karier',
    summary: 'Setelah delivery, dokumentasikan bukti, pelajaran, feedback netral, peluang lanjutan, dan kemampuan baru secara etis.',
    outcome: 'Satu paket closeout yang memperkuat pekerjaan berikutnya.', reviewedAt, sources: [upworkContracts, upworkProfile],
    sections: [
      { heading: 'Tutup pekerjaan dengan rapi', body: 'Pastikan file, akses, dokumentasi, keputusan, dan batas support setelah serah terima sudah jelas.' },
      { heading: 'Minta feedback secara netral', body: 'Tanyakan pengalaman kerja dan bagian yang dapat diperbaiki. Jangan meminta rating tertentu atau mengarahkan isi review.', steps: ['Konfirmasi acceptance.', 'Kirim ringkasan closeout.', 'Minta feedback netral.', 'Minta izin memakai hasil.', 'Catat peluang lanjutan.'] },
      { heading: 'Perbarui proof secara aman', body: 'Gunakan hanya materi yang boleh ditampilkan. Hilangkan data sensitif dan jelaskan kontribusi serta konteks.' },
      { heading: 'Kriteria selesai', body: 'Ada arsip closeout, feedback, keputusan penggunaan portofolio, dan satu perubahan konkret pada sistem kerja berikutnya.' },
    ],
  },
]

export const startGuide = {
  title: 'Mulai di Sini',
  summary: 'Pilih fase berdasarkan keputusan yang sedang kamu hadapi, bukan berdasarkan label pemula atau berpengalaman.',
  steps: [
    'Kenali tujuan dan model kerja remote yang sesuai.',
    'Periksa bukti kesiapan sebelum mencari peluang.',
    'Pilih kanal dan nilai peluang dengan alasan.',
    'Selaraskan respons, interview, scope, dan kontrak.',
    'Bangun ritme delivery, trust, dan perkembangan karier.',
  ],
}

export const coreSurfaceCount = 1 + phases.length + articles.length + 1 + 1
console.assert(coreSurfaceCount === 18, 'Launch gate must contain 18 core surfaces')
