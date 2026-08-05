export type Action = {
  title: string
  why: string
  how: string[]
  example: string
  doneWhen: string
}

export type Lesson = {
  id: string
  title: string
  duration: string
  summary: string
  outcome: string
  actions: Action[]
  source?: { label: string; url: string }
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

const action = (value: Action): Action => value

export const curriculum: Phase[] = [
  {
    id: 'prerequisite',
    number: '00',
    title: 'Pre-Requisite',
    shortTitle: 'Pre-Requisite',
    description: 'Pastikan skill, bukti, komunikasi, akun, perangkat, dan administrasi siap sebelum masuk ke optimasi profil.',
    milestone: 'Siap menawarkan dan mengirim pekerjaan secara profesional di Upwork.',
    lessons: [
      {
        id: 'choose-digital-skill',
        title: 'Pilih skill digital yang layak dijual',
        duration: '45 menit',
        summary: 'Upwork bukan tempat belajar skill dari nol. Kamu perlu satu kemampuan yang sudah bisa menghasilkan deliverable untuk klien.',
        outcome: 'Punya satu layanan awal dengan target klien, deliverable, dan tools yang jelas.',
        actions: [
          action({
            title: 'Petakan modal yang sudah dimiliki',
            why: 'Skill yang berangkat dari pengalaman nyata lebih cepat dijual daripada memilih profesi hanya karena terlihat populer.',
            how: ['Daftar pekerjaan yang pernah kamu lakukan di kantor, kuliah, organisasi, bisnis, atau project pribadi.', 'Catat software, metode, dan jenis masalah yang sudah bisa kamu tangani tanpa selalu dibimbing.', 'Tandai pekerjaan yang hasil akhirnya dapat dikirim sebagai file, sistem, laporan, atau layanan terukur.', 'Pilih tiga kandidat skill yang paling kuat berdasarkan pengalaman dan minat latihan jangka panjang.'],
            example: 'Pengalaman mengelola Instagram kantor menghasilkan kandidat skill content planning, copywriting, dan short-form video editing—bukan sekadar “social media”.',
            doneWhen: 'Ada tiga kandidat skill, masing-masing disertai pengalaman nyata, tools yang dikuasai, dan contoh deliverable.',
          }),
          action({
            title: 'Validasi kebutuhan lewat job nyata',
            why: 'Skill baru layak dijual jika klien benar-benar mencari deliverable tersebut dan kamu memahami standar hasilnya.',
            how: ['Cari sedikitnya 20 job Upwork menggunakan kata kunci dari tiga kandidat skill.', 'Catat deliverable, tools, level pengalaman, budget, dan masalah yang berulang.', 'Hitung kandidat mana yang paling sering muncul dan paling sesuai dengan kemampuanmu saat ini.', 'Jangan melamar dulu; tahap ini hanya membaca pasar dan memilih arah.'],
            example: 'Dari 20 job video editing, 13 meminta short-form vertical video, 10 meminta captions, dan 8 menyebut CapCut atau Premiere Pro.',
            doneWhen: 'Ada tabel 20 job dan satu kandidat skill terpilih berdasarkan permintaan pasar serta kemampuan nyata.',
          }),
          action({
            title: 'Rumuskan layanan pertama',
            why: 'Klien membeli hasil yang jelas, bukan daftar software atau label skill yang terlalu umum.',
            how: ['Pilih satu kelompok klien yang paling masuk akal untuk dilayani.', 'Pilih satu masalah berulang dari hasil riset job.', 'Tentukan satu deliverable yang bisa kamu selesaikan dengan standar konsisten.', 'Tulis rumus: Saya membantu [target klien] menghasilkan [deliverable/hasil] menggunakan [skill atau tools].'],
            example: 'Saya membantu personal brand mengubah video panjang menjadi lima short-form video lengkap dengan captions menggunakan Premiere Pro.',
            doneWhen: 'Kalimat layanan menyebut target klien, deliverable, dan kemampuan yang digunakan tanpa istilah seperti “bisa apa saja”.',
          }),
        ],
      },
      {
        id: 'build-initial-proof',
        title: 'Siapkan dua bukti kemampuan',
        duration: '90 menit',
        summary: 'Tanpa bukti, klien hanya melihat klaim. Pengalaman non-Upwork tetap bisa menjadi portfolio jika disajikan jujur.',
        outcome: 'Punya minimal dua project relevan yang menunjukkan proses dan kualitas deliverable.',
        actions: [
          action({
            title: 'Audit pekerjaan yang boleh ditampilkan',
            why: 'Pekerjaan lama dapat mempercepat portfolio, tetapi kerahasiaan dan hak penggunaan tetap harus dijaga.',
            how: ['Kumpulkan project kantor, kuliah, organisasi, volunteer, dan pribadi yang relevan.', 'Periksa kontrak, NDA, data pribadi, dan izin penggunaan setiap project.', 'Minta izin tertulis bila kepemilikan atau kerahasiaannya tidak jelas.', 'Anonimkan data sensitif atau keluarkan project yang tidak boleh dipublikasikan.'],
            example: 'Dashboard internal ditampilkan sebagai alur dan komponen generik; nama perusahaan, data pengguna, serta metrik rahasia dihapus setelah mendapat izin.',
            doneWhen: 'Ada daftar project yang aman ditampilkan beserta status izin dan bagian yang harus dianonimkan.',
          }),
          action({
            title: 'Buat concept project jika bukti belum cukup',
            why: 'Concept project membuktikan kemampuan tanpa mengarang klien, testimoni, atau hasil bisnis.',
            how: ['Ambil masalah realistis dari job yang sudah diriset.', 'Tulis brief simulasi dengan target pengguna, batas scope, dan deliverable.', 'Kerjakan memakai proses yang sama seperti project berbayar.', 'Labeli dengan jelas sebagai personal atau concept project.'],
            example: 'Concept project: redesign onboarding aplikasi invoice untuk UMKM, mencakup audit lima layar, user flow, dan prototype Figma—tanpa mengklaim aplikasi tersebut sebagai klien.',
            doneWhen: 'Setidaknya dua project relevan tersedia; project simulasi diberi label jujur dan tidak memuat hasil palsu.',
          }),
          action({
            title: 'Susun bukti sebagai studi kasus',
            why: 'Gambar akhir saja tidak menjelaskan cara berpikir, kontribusi, atau alasan klien harus percaya.',
            how: ['Jelaskan konteks dan masalah dalam dua sampai tiga kalimat.', 'Nyatakan peran, batas scope, tools, dan keputusan utama.', 'Tampilkan proses secukupnya lalu prioritaskan deliverable akhir.', 'Cantumkan hasil terverifikasi; bila belum ada metrik, jelaskan indikator kualitas tanpa mengarang angka.'],
            example: 'Masalah: proses checkout membingungkan. Peran: UX designer. Deliverable: audit, flow, dan prototype. Hasil: prototype lolos lima skenario uji internal; tidak mengklaim kenaikan conversion.',
            doneWhen: 'Dua studi kasus menjelaskan masalah, peran, proses, deliverable, dan hasil atau indikator kualitas yang dapat dibuktikan.',
          }),
        ],
      },
      {
        id: 'work-english-check',
        title: 'Uji English untuk komunikasi kerja',
        duration: '40 menit',
        summary: 'Tidak perlu terdengar seperti native speaker. Kamu perlu memahami scope dan berkomunikasi jelas tanpa menimbulkan salah tafsir.',
        outcome: 'Mampu membaca brief, bertanya, memberi update, dan menjelaskan layanan dalam English sederhana.',
        actions: [
          action({
            title: 'Uji pemahaman job description',
            why: 'Salah memahami deliverable atau deadline dapat merusak project bahkan sebelum kontrak dimulai.',
            how: ['Pilih tiga job description yang sesuai skill.', 'Tulis ulang tujuan, deliverable, deadline, tools, dan batasan setiap job dalam Bahasa Indonesia.', 'Tandai istilah yang belum dipahami lalu cari artinya dalam konteks pekerjaan.', 'Bandingkan ringkasan dengan brief asli untuk memastikan tidak ada syarat penting yang hilang.'],
            example: '“Create five 30-second reels from one podcast episode” diringkas menjadi lima video vertikal, masing-masing maksimal 30 detik, bersumber dari satu episode podcast.',
            doneWhen: 'Ringkasan tiga job memuat semua deliverable, deadline, tools, dan batasan tanpa salah arti utama.',
          }),
          action({
            title: 'Latih pesan kerja inti',
            why: 'Template kalimat dasar mengurangi panik dan membuat komunikasi tetap profesional saat project berjalan.',
            how: ['Tulis tiga pertanyaan klarifikasi tentang scope, target audience, dan referensi.', 'Tulis satu pesan konfirmasi pemahaman sebelum mulai.', 'Tulis satu update progres singkat berisi status, blocker, dan langkah berikutnya.', 'Tulis satu pesan penyerahan hasil dan permintaan review deliverable.'],
            example: 'Progress update: “The first three reels are ready for review. I matched the reference pacing and added captions. Please confirm the caption style before I finish the remaining two.”',
            doneWhen: 'Empat jenis pesan dapat ditulis dengan kalimat sederhana, spesifik, dan tidak bergantung pada terjemahan kata per kata.',
          }),
          action({
            title: 'Simulasikan penjelasan lisan',
            why: 'Beberapa klien memakai video call; kemampuan menjelaskan proses lebih penting daripada aksen sempurna.',
            how: ['Siapkan struktur 60 detik: perkenalan, layanan, proses, dan satu contoh hasil.', 'Rekam penjelasan tanpa membaca naskah penuh.', 'Dengarkan ulang dan tandai bagian yang tidak jelas atau terlalu panjang.', 'Ulangi sampai pesan utama dapat dipahami dalam satu kali dengar.'],
            example: '“I edit long-form podcasts into short videos. I select strong hooks, add captions, and deliver platform-ready files. A typical batch of five reels takes three working days.”',
            doneWhen: 'Rekaman 60–90 detik menjelaskan layanan, proses, dan estimasi delivery secara dapat dipahami meski grammar belum sempurna.',
          }),
        ],
      },
      {
        id: 'create-valid-upwork-account',
        title: 'Buat akun Upwork yang valid',
        duration: '25 menit',
        summary: 'Akun harus memakai identitas asli dan informasi konsisten agar siap menghadapi pemeriksaan keamanan atau verifikasi.',
        outcome: 'Bisa login ke satu akun freelancer yang valid dan mengakses halaman edit profil.',
        actions: [
          action({
            title: 'Siapkan identitas dan kontak asli',
            why: 'Perbedaan nama, negara, atau data kontak dapat menghambat verifikasi dan penarikan dana.',
            how: ['Gunakan nama legal yang konsisten dengan identitas dan rekening pembayaran.', 'Siapkan email serta nomor telepon yang aktif dan hanya kamu kuasai.', 'Masukkan negara dan lokasi tempat tinggal sebenarnya.', 'Siapkan dokumen identitas resmi bila Upwork meminta verifikasi.'],
            example: 'Nama profil, dokumen identitas, dan rekening menggunakan ejaan yang sama; nickname tidak menggantikan nama legal.',
            doneWhen: 'Nama, kontak, negara, dan dokumen pendukung konsisten serta dapat diakses sendiri.',
          }),
          action({
            title: 'Daftar lewat alur resmi',
            why: 'Akun duplikat atau informasi palsu meningkatkan risiko pembatasan akun.',
            how: ['Buka Upwork melalui situs atau aplikasi resmi.', 'Pilih tipe akun freelancer dan ikuti tahapan pendaftaran.', 'Gunakan satu akun utama; jangan membuat akun tambahan untuk mencoba niche berbeda.', 'Aktifkan pengamanan akun yang tersedia dan simpan recovery method dengan aman.'],
            example: 'Satu akun freelancer dipakai untuk seluruh layanan; variasi spesialisasi dikelola lewat profil dan portfolio, bukan akun baru.',
            doneWhen: 'Login berhasil ke satu akun freelancer dan tidak ada akun duplikat yang sengaja dibuat.',
          }),
          action({
            title: 'Pastikan akses profil tersedia',
            why: 'Section Fondasi membutuhkan akses penuh ke editor profil, kategori, skills, rate, dan portfolio.',
            how: ['Masuk ke halaman profil freelancer.', 'Buka menu edit profil dan cek bagian headline, overview, skills, rate, employment, serta portfolio.', 'Selesaikan permintaan verifikasi atau onboarding yang muncul secara jujur.', 'Jangan membeli, meminjam, atau memakai akun milik orang lain.'],
            example: 'Pengguna dapat membuka editor headline dan portfolio dari akun sendiri tanpa memakai login pihak ketiga.',
            doneWhen: 'Halaman edit profil terbuka dan semua perubahan nantinya dilakukan melalui akun milik sendiri.',
          }),
        ],
        source: { label: 'Panduan membuat akun Upwork', url: 'https://support.upwork.com/hc/en-us/articles/211067788-Create-an-account' },
      },
      {
        id: 'prepare-work-system',
        title: 'Siapkan perangkat dan kapasitas kerja',
        duration: '30 menit',
        summary: 'Menang job tanpa kapasitas delivery hanya memindahkan masalah ke deadline, kualitas, dan reputasi.',
        outcome: 'Punya perangkat, koneksi, backup, dan blok waktu yang cukup untuk mencari serta mengerjakan project.',
        actions: [
          action({
            title: 'Uji perangkat dengan workflow nyata',
            why: 'Spesifikasi tinggi tidak wajib, tetapi perangkat harus sanggup menyelesaikan deliverable tanpa kegagalan berulang.',
            how: ['Jalankan tools utama secara bersamaan seperti saat bekerja.', 'Buka file project yang ukurannya realistis dan lakukan export atau build.', 'Catat bottleneck pada RAM, storage, rendering, atau kompatibilitas.', 'Siapkan alternatif jika perangkat utama gagal, seperti backup device atau tempat kerja cadangan.'],
            example: 'Editor menguji export video 1080p berdurasi satu menit sambil membuka browser dan cloud storage, bukan hanya memastikan aplikasinya bisa dibuka.',
            doneWhen: 'Satu simulasi pekerjaan selesai dari file mentah sampai deliverable tanpa kegagalan yang menghambat deadline.',
          }),
          action({
            title: 'Siapkan internet dan backup',
            why: 'Koneksi putus dan file hilang tetap menjadi tanggung jawab freelancer ketika deadline berjalan.',
            how: ['Uji kecepatan dan kestabilan untuk upload file serta video call.', 'Siapkan hotspot atau koneksi cadangan yang benar-benar bisa digunakan.', 'Aktifkan penyimpanan cloud atau backup berkala untuk file aktif.', 'Tetapkan struktur folder dan penamaan versi agar file tidak tertukar.'],
            example: 'Folder project memiliki `01-brief`, `02-working`, dan `03-delivery`; file aktif tersinkron ke cloud dan hotspot ponsel sudah diuji.',
            doneWhen: 'File kerja memiliki backup, koneksi cadangan berfungsi, dan satu video call percobaan berjalan stabil.',
          }),
          action({
            title: 'Tetapkan kapasitas mingguan',
            why: 'Availability yang tidak realistis menyebabkan proposal berlebihan, respons lambat, dan deadline terlewat.',
            how: ['Hitung waktu kosong setelah pekerjaan utama, keluarga, perjalanan, dan istirahat.', 'Sediakan blok khusus untuk riset job, proposal, komunikasi, dan delivery.', 'Mulai dengan kapasitas konservatif minimal lima sampai sepuluh jam per minggu.', 'Batasi jumlah project aktif berdasarkan waktu tersebut, bukan ambisi pendapatan.'],
            example: 'Pekerja kantor menyediakan Selasa dan Kamis 20.00–22.00 untuk proposal, lalu Sabtu 09.00–14.00 untuk delivery: total sembilan jam per minggu.',
            doneWhen: 'Kalender memuat blok kerja realistis selama empat minggu dan kapasitas project maksimum sudah ditentukan.',
          }),
        ],
      },
      {
        id: 'payment-admin-readiness',
        title: 'Siapkan pembayaran dan administrasi',
        duration: '35 menit',
        summary: 'Pendapatan kotor bukan pendapatan bersih. Metode penarikan, fee, kurs, catatan transaksi, dan kewajiban lokal perlu dipahami sejak awal.',
        outcome: 'Punya rencana penarikan dana dan pencatatan pendapatan yang konsisten.',
        actions: [
          action({
            title: 'Pilih metode penarikan yang tersedia',
            why: 'Nama dan ketersediaan metode berbeda menurut negara; kesalahan data dapat menunda dana.',
            how: ['Periksa metode penarikan yang tersedia langsung di pengaturan Upwork.', 'Bandingkan fee, waktu proses, kurs, dan batas minimum setiap metode.', 'Pastikan nama penerima konsisten dengan akun serta dokumen.', 'Siapkan satu metode utama dan satu alternatif bila tersedia.'],
            example: 'Pengguna membandingkan transfer bank lokal dengan penyedia pembayaran yang tersedia berdasarkan total biaya dan waktu cair, bukan hanya fee yang terlihat.',
            doneWhen: 'Satu metode utama dipilih dengan nama penerima cocok dan estimasi biaya serta waktu pencairan tercatat.',
          }),
          action({
            title: 'Hitung pendapatan bersih',
            why: 'Rate yang terlihat cukup dapat menjadi terlalu rendah setelah fee platform, konversi mata uang, pajak, tools, dan waktu non-billable.',
            how: ['Catat rate atau nilai project kotor.', 'Kurangi fee Upwork sesuai kontrak yang berlaku saat itu.', 'Masukkan biaya penarikan, selisih kurs, software, dan biaya operasional.', 'Sisihkan estimasi kewajiban pajak berdasarkan kondisi pribadi dan aturan lokal.'],
            example: 'Project US$300 dicatat sebagai pendapatan kotor; spreadsheet mengurangi fee aktual, biaya transfer, software proporsional, dan cadangan pajak sebelum menghitung uang yang dapat dipakai.',
            doneWhen: 'Ada kalkulasi sederhana yang membedakan pendapatan kotor, biaya, cadangan, dan pendapatan bersih.',
          }),
          action({
            title: 'Buat pencatatan transaksi',
            why: 'Catatan sejak transaksi pertama memudahkan evaluasi rate, arus kas, bukti pembayaran, dan pelaporan pajak.',
            how: ['Buat spreadsheet dengan tanggal, klien, contract ID, nilai kotor, fee, kurs, biaya, dan nilai bersih.', 'Simpan invoice, laporan transaksi, dan bukti penarikan dalam folder per tahun.', 'Perbarui catatan setiap kali pembayaran masuk atau dana ditarik.', 'Konsultasikan kewajiban pajak dengan profesional lokal bila situasimu kompleks.'],
            example: 'Baris transaksi menghubungkan contract ID Upwork dengan laporan pembayaran dan nilai rupiah yang benar-benar masuk ke rekening.',
            doneWhen: 'Template pencatatan siap dipakai dan satu transaksi simulasi berhasil dihitung dari nilai kotor sampai bersih.',
          }),
        ],
        source: { label: 'Metode penarikan dana Upwork', url: 'https://support.upwork.com/hc/en-us/articles/211060918-Manage-how-you-get-paid' },
      },
    ],
  },
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
        duration: '20 menit',
        summary: 'Profil kosong mengurangi sinyal kepercayaan dan membuat klien harus menebak kemampuanmu.',
        outcome: 'Semua bagian profil terisi dengan informasi relevan, konsisten, dan dapat diverifikasi.',
        actions: [
          action({
            title: "Lengkapi riwayat profesional",
            why: "Riwayat yang relevan memperkuat kredibilitas dan membantu klien memahami kapasitas kerjamu.",
            how: ["Isi employment history, pendidikan, bahasa, availability, dan sertifikasi yang masih relevan.", "Tulis dua sampai empat poin tanggung jawab dan hasil untuk setiap pengalaman utama.", "Gunakan angka yang dapat diverifikasi jika tersedia.", "Hapus pengalaman atau detail yang mengaburkan spesialisasi target."],
            example: "Product Designer, PT Aruna Digital, 2022–2025: merancang ulang alur onboarding aplikasi B2B, berkolaborasi dengan dua engineer, dan mengurangi waktu penyelesaian aktivasi dari 12 menjadi 8 menit berdasarkan data internal.",
            doneWhen: "Semua bagian riwayat terisi akurat, setiap pengalaman utama memuat kontribusi atau hasil, dan tidak ada informasi yang bertentangan dengan positioning.",
          }),
          action({
            title: "Selaraskan identitas profil",
            why: "Identitas yang konsisten membuat spesialisasi lebih cepat dipahami dan didukung bukti yang tepat.",
            how: ["Tetapkan satu layanan utama dan satu kelompok klien target.", "Samakan pesan pada headline, kategori, skill, overview, portfolio, dan rate.", "Tempatkan bukti paling relevan pada urutan pertama.", "Singkirkan layanan acak yang tidak mendukung fokus profil."],
            example: "Headline “SaaS UX Designer | Onboarding & Dashboard”; skill utama UX Research, Figma, dan Product Design; dua portfolio teratas membahas onboarding SaaS dan dashboard analitik.",
            doneWhen: "Setiap bagian profil mengarah pada spesialisasi yang sama dan tiga bukti pertama mendukung layanan utama.",
          }),
          action({
            title: "Audit dari sudut pandang klien",
            why: "Tampilan publik menunjukkan informasi yang benar-benar dilihat klien sebelum membuka detail lebih jauh.",
            how: ["Buka profil dalam mode publik melalui desktop dan ponsel.", "Batasi peninjauan pertama hingga 15 detik.", "Catat apakah target klien, masalah, dan bukti kemampuan langsung terlihat.", "Ubah urutan atau ringkas bagian yang menghambat pemahaman."],
            example: "Dalam 15 detik terlihat: “SaaS UX Designer”, fokus pada onboarding, serta studi kasus yang menunjukkan penurunan drop-off registrasi sebesar 18%.",
            doneWhen: "Seorang peninjau baru dapat menyebut target klien, masalah utama, dan satu bukti kemampuan dengan benar setelah melihat profil selama 15 detik.",
          }),
          action({
            title: "Periksa akurasi dan kepatuhan",
            why: "Klaim yang akurat menjaga kepercayaan dan mengurangi risiko pelanggaran aturan platform.",
            how: ["Cocokkan tanggal, jabatan, angka, dan deskripsi dengan dokumen sumber.", "Pastikan testimoni dan sertifikat memiliki asal yang sah.", "Hapus keyword atau klaim yang tidak didukung pengalaman nyata.", "Periksa kembali ketentuan resmi Upwork yang berlaku sebelum menerbitkan perubahan sensitif."],
            example: "Klaim “menaikkan conversion 24%” dipakai karena tercatat dalam laporan proyek; klaim “expert CRO” dihapus karena belum memiliki bukti kerja yang cukup.",
            doneWhen: "Setiap pengalaman, angka, testimoni, sertifikat, dan keyword dapat ditelusuri ke bukti yang sah serta tidak ada klaim yang diketahui menyesatkan.",
          }),
        ],
      },
      {
        id: 'market-benchmark',
        title: 'Benchmark pasar tanpa meniru profil',
        duration: '35 menit',
        summary: 'Data profil dan job relevan membantu memilih keyword, rate, dan bukti yang dicari pasar tanpa menyalin kompetitor.',
        outcome: 'Punya catatan benchmark niche berisi pola headline, skill, rate, dan tipe project yang sering muncul.',
        actions: [
          action({
            title: "Tentukan satu niche pembanding",
            why: "Benchmark yang sempit menghasilkan perbandingan pasar yang lebih berguna daripada kategori umum.",
            how: ["Pilih satu kelompok klien yang ingin dilayani.", "Tentukan satu masalah utama dan jenis deliverable yang dijual.", "Buat frasa pencarian yang memuat niche atau konteks industri.", "Gunakan frasa yang sama saat membandingkan profil dan job."],
            example: "Benchmark: “B2B SaaS UX Designer” untuk klien SaaS tahap awal yang membutuhkan audit onboarding dan prototype perbaikan di Figma.",
            doneWhen: "Tersedia satu frasa pencarian yang secara eksplisit mewakili target klien, masalah, dan level layanan.",
          }),
          action({
            title: "Kumpulkan sampel secara manual",
            why: "Sampel profil dan job memberi gambaran nyata tentang bahasa pasar, kebutuhan, dan kisaran harga tanpa otomatisasi berisiko.",
            how: ["Cari melalui fitur pencarian resmi Upwork menggunakan niche terpilih.", "Buka 10–15 profil yang menunjukkan rekam kerja relevan dan 10 job terbaru.", "Catat headline, skill, rate, deliverable, dan masalah dalam tabel pribadi.", "Abaikan data pribadi serta jangan gunakan scraper atau alat pengambilan otomatis."],
            example: "Tabel berisi 12 profil dan 10 job “B2B SaaS UX”; tujuh job meminta onboarding audit, lima meminta prototype Figma, dan rate profil yang terlihat berkisar US$35–US$90 per jam.",
            doneWhen: "Tabel memuat sedikitnya 10 profil dan 10 job relevan, semua dicatat manual, tanpa salinan data pribadi.",
          }),
          action({
            title: "Cari pola, bukan kalimat",
            why: "Pola membantu memakai kosakata pasar tanpa menjiplak materi freelancer lain.",
            how: ["Normalisasikan variasi istilah yang bermakna sama.", "Hitung kemunculan keyword, skill, masalah, dan deliverable.", "Kelompokkan istilah berdasarkan kebutuhan klien.", "Pilih hanya istilah yang sesuai dengan kemampuan dan bukti sendiri."],
            example: "“User onboarding”, “activation flow”, dan “signup UX” dikelompokkan sebagai masalah aktivasi; istilah “onboarding audit” dipilih karena didukung dua proyek terdahulu.",
            doneWhen: "Tersedia daftar pola berfrekuensi beserta kelompok masalahnya, dan tidak ada kalimat profil lain yang disalin.",
          }),
          action({
            title: "Tentukan benchmark rate",
            why: "Nilai tengah sampel memberi referensi pasar yang lebih tahan terhadap rate sangat rendah atau sangat tinggi.",
            how: ["Ambil rate dari profil pembanding yang benar-benar relevan.", "Urutkan nilainya dari terendah ke tertinggi.", "Hitung median dan catat rentang kuartil jika sampel cukup.", "Tetapkan rate sendiri berdasarkan pengalaman, kompleksitas, bukti hasil, dan komunikasi."],
            example: "Dari 12 profil, median rate tercatat US$55 per jam; rate awal dipilih US$45 karena pengalaman niche masih terbatas tetapi dua studi kasus sudah relevan.",
            doneWhen: "Median sampel terdokumentasi, rate profil memiliki alasan tertulis, dan nilainya tidak diperlakukan sebagai kewajiban pasar.",
          }),
          action({
            title: "Uji relevansi pada bukti sendiri",
            why: "Keyword yang memiliki bukti membuat positioning lebih kredibel dan tidak terasa dibuat untuk mesin pencarian.",
            how: ["Daftar semua keyword yang akan dimasukkan.", "Pasangkan setiap keyword dengan project, pengalaman, sertifikasi, atau hasil.", "Hapus istilah yang tidak memiliki bukti memadai.", "Tempatkan bukti terkuat dekat dengan klaim terkait."],
            example: "Keyword “mobile usability testing” didukung proyek pengujian terhadap delapan pengguna dan laporan berisi 14 temuan; “fintech compliance” tidak dipakai karena belum pernah dikerjakan.",
            doneWhen: "Setiap keyword utama memiliki sedikitnya satu bukti spesifik yang dapat dijelaskan saat interview.",
          }),
        ],
      },
      {
        id: 'headshot',
        title: 'Bangun first impression profesional',
        duration: '15 menit',
        summary: 'Headshot bersih membantu profil terasa aman sebelum klien membaca satu kata pun.',
        outcome: 'Foto profil tajam, terang, mudah dikenali, dan konsisten dengan posisi profesional.',
        actions: [
          action({
            title: "Gunakan framing yang jelas",
            why: "Framing yang tepat menjaga wajah mudah dikenali saat foto tampil sebagai avatar kecil.",
            how: ["Ambil foto kepala dan bahu dengan kamera sejajar mata.", "Isi sebagian besar frame dengan wajah tanpa memotong kepala secara janggal.", "Tatap kamera dan gunakan ekspresi natural.", "Pilih komposisi yang tetap jelas setelah dipotong menjadi persegi atau lingkaran."],
            example: "Foto 1200×1200 piksel menampilkan kepala dan bahu, mata sejajar kamera, ekspresi ramah, serta ruang tipis di atas kepala.",
            doneWhen: "Wajah menjadi fokus utama, kedua mata terlihat jelas, dan komposisi tetap utuh dalam thumbnail avatar.",
          }),
          action({
            title: "Atur cahaya dan latar",
            why: "Cahaya merata dan latar sederhana membuat wajah terlihat jelas tanpa gangguan visual.",
            how: ["Hadap ke jendela atau sumber cahaya lembut dari depan.", "Gunakan latar polos yang kontras dengan warna pakaian.", "Matikan sumber cahaya belakang yang membuat wajah gelap.", "Periksa bayangan keras, pantulan kacamata, dan objek pengganggu sebelum memotret."],
            example: "Foto diambil satu meter dari jendela pada pagi hari, dengan dinding abu muda dan pakaian biru tua; wajah terang merata tanpa objek di belakang.",
            doneWhen: "Wajah memiliki pencahayaan seimbang, batas tubuh terlihat dari latar, dan tidak ada elemen belakang yang menarik perhatian.",
          }),
          action({
            title: "Jaga tampilan autentik",
            why: "Foto yang terbaru dan representatif membantu klien mengenali orang yang akan mereka ajak bekerja.",
            how: ["Gunakan foto terbaru yang masih menyerupai penampilan saat ini.", "Pilih berkas tajam tanpa blur atau kompresi berat.", "Hapus filter yang mengubah bentuk wajah atau warna kulit secara berlebihan.", "Jangan gunakan foto grup, logo, ilustrasi, atau gambar AI yang tidak merepresentasikan dirimu."],
            example: "Potret diambil dua bulan lalu dengan kamera ponsel, warna dikoreksi ringan, tanpa penghalusan wajah, filter artistik, atau penggantian latar generatif.",
            doneWhen: "Foto tajam, menampilkan dirimu sendiri, sesuai penampilan terkini, dan tidak mengandung representasi palsu.",
          }),
          action({
            title: "Uji pada ukuran kecil",
            why: "Foto profil sering muncul sebagai thumbnail sehingga kualitas ukuran penuh saja tidak cukup.",
            how: ["Kecilkan foto ke ukuran avatar sekitar 64×64 piksel.", "Periksa ketajaman wajah, mata, dan kontras terhadap latar.", "Bandingkan dua atau tiga crop bila wajah kurang terbaca.", "Minta satu orang memberi penilaian terpisah untuk profesional, ramah, dan dapat dipercaya."],
            example: "Pada ukuran 64×64 piksel, wajah masih terbaca jelas; peninjau memberi nilai 4/5 untuk profesional, 5/5 untuk ramah, dan 4/5 untuk dapat dipercaya.",
            doneWhen: "Wajah tetap jelas pada ukuran avatar dan peninjau memberi penilaian positif pada ketiga atribut tanpa perlu melihat versi besar.",
          }),
        ],
      },
      {
        id: 'positioning',
        title: 'Tulis positioning yang spesifik',
        duration: '35 menit',
        summary: 'Klien mencari solusi spesifik, bukan daftar semua skill yang pernah dipelajari.',
        outcome: 'Headline dan overview menjawab siapa yang dibantu, masalah apa, dan dengan keahlian apa.',
        actions: [
          action({
            title: "Pilih masalah utama",
            why: "Fokus pada satu masalah bernilai membuat layanan lebih mudah dibedakan dan dibeli.",
            how: ["Daftar kelompok klien yang pernah atau mampu kamu layani.", "Nilai masalah mereka berdasarkan nilai bisnis, frekuensi, dan bukti kemampuanmu.", "Pilih satu kombinasi klien dan masalah sebagai fokus utama.", "Turunkan layanan yang tidak terkait menjadi sekunder atau hapus dari profil."],
            example: "Fokus terpilih: membantu SaaS B2B tahap awal memperbaiki onboarding agar pengguna baru mencapai aktivasi lebih cepat.",
            doneWhen: "Profil menyebut satu kelompok klien dan satu masalah utama secara eksplisit, tanpa daftar layanan yang saling tidak terkait.",
          }),
          action({
            title: "Bangun headline yang dapat dicari",
            why: "Headline yang memakai istilah pasar membantu klien memahami layanan dan menemukan profil melalui pencarian relevan.",
            how: ["Ambil role atau niche yang sering muncul pada job target.", "Tambahkan satu atau dua skill inti yang didukung bukti.", "Susun headline dengan bahasa yang lazim dipakai klien.", "Hapus slogan abstrak, pengulangan, dan skill sekunder."],
            example: "“B2B SaaS UX Designer | Onboarding Audits & Figma Prototypes” menggantikan “Creative Ninja Who Makes Digital Magic”.",
            doneWhen: "Headline memuat role atau niche dan maksimal dua skill inti, serta dapat dipahami tanpa membaca overview.",
          }),
          action({
            title: "Buka overview dari sisi klien",
            why: "Bagian awal menentukan apakah klien melihat kecocokan sebelum melanjutkan membaca.",
            how: ["Sebutkan target klien pada kalimat pertama.", "Jelaskan masalah dan hasil yang dibantu pada dua kalimat awal.", "Ringkas proses kerja dan bukti relevan pada paragraf berikutnya.", "Tutup dengan ajakan diskusi yang spesifik tetapi tidak memaksa."],
            example: "“Saya membantu tim SaaS B2B memperbaiki onboarding yang membuat pengguna baru berhenti sebelum aktivasi. Melalui audit UX dan prototype Figma, saya mengubah temuan menjadi alur yang siap diuji bersama tim produk.”",
            doneWhen: "Dua kalimat pertama memuat target klien, masalah, dan hasil; bagian berikutnya memuat proses, bukti, serta ajakan diskusi.",
          }),
          action({
            title: "Edit untuk kejelasan",
            why: "Tulisan ringkas dan spesifik mengurangi beban baca serta membuat klaim lebih mudah dipercaya.",
            how: ["Hapus filler, jargon internal, dan sifat umum tanpa bukti.", "Ubah kalimat pasif menjadi active voice bila pelakunya jelas.", "Pecah paragraf panjang menjadi bagian pendek.", "Baca teks keras-keras dan revisi bagian yang tersendat atau ambigu."],
            example: "“Saya pekerja keras yang berorientasi hasil” diubah menjadi “Saya menyelesaikan audit onboarding dalam lima hari dan menyerahkan prioritas perbaikan beserta prototype Figma.”",
            doneWhen: "Tidak ada klaim umum tanpa contoh, paragraf mudah dipindai, dan pembacaan keras tidak menemukan kalimat kaku atau ambigu.",
          }),
        ],
      },
      {
        id: 'portfolio',
        title: 'Ubah portfolio menjadi bukti',
        duration: '50 menit',
        summary: 'Portfolio kuat menjelaskan keputusan dan hasil, bukan hanya menampilkan gambar akhir.',
        outcome: 'Minimal tiga case study relevan dengan alur masalah, tindakan, dan hasil.',
        actions: [
          action({
            title: "Pilih tiga karya paling relevan",
            why: "Tiga karya yang dekat dengan kebutuhan target memberi sinyal kemampuan lebih kuat daripada galeri yang luas tetapi acak.",
            how: ["Daftar seluruh project yang boleh ditampilkan.", "Nilai tiap project berdasarkan kesamaan klien, masalah, deliverable, dan level layanan.", "Pilih tiga skor tertinggi dan tempatkan yang paling relevan di awal.", "Labeli project personal, simulasi, atau pekerjaan tim secara jujur."],
            example: "Portfolio terpilih: audit onboarding SaaS HR, redesign dashboard analitik B2B, dan simulasi activation flow untuk aplikasi invoicing yang diberi label “self-initiated concept”.",
            doneWhen: "Tepat tiga karya utama mendukung layanan target, urutannya berdasarkan relevansi, dan konteks tiap karya dinyatakan akurat.",
          }),
          action({
            title: "Tulis konteks dan batasan",
            why: "Konteks menunjukkan kemampuan mengambil keputusan, bukan hanya kemampuan menghasilkan visual akhir.",
            how: ["Jelaskan kondisi awal dan masalah yang dihadapi.", "Nyatakan tujuan proyek serta indikator keberhasilan.", "Tulis peran, timeline, kolaborator, dan bagian yang bukan tanggung jawabmu.", "Sebutkan batasan penting yang memengaruhi keputusan."],
            example: "“Dalam proyek enam minggu ini, saya menangani riset dan UX; visual design dikerjakan desainer lain. Tim harus mempertahankan backend lama dan menyelesaikan prototype sebelum demo investor.”",
            doneWhen: "Setiap studi kasus memuat masalah, tujuan, peran, timeline, batasan, dan batas kontribusi pribadi.",
          }),
          action({
            title: "Jelaskan proses secukupnya",
            why: "Proses yang terpilih membantu klien menilai cara berpikir tanpa menutupi hasil dengan dokumentasi berlebihan.",
            how: ["Pilih langkah yang mengubah keputusan atau hasil.", "Hubungkan setiap temuan dengan alternatif yang dipertimbangkan.", "Jelaskan alasan memilih solusi akhir.", "Tampilkan tools hanya saat relevan terhadap pekerjaan atau kolaborasi."],
            example: "Lima wawancara menemukan pengguna tidak memahami istilah “workspace”; dua alternatif diuji, lalu label “team account” dipilih setelah memperoleh tingkat keberhasilan tugas lebih tinggi pada pengujian kedua.",
            doneWhen: "Setiap langkah proses memiliki hubungan jelas dengan masalah, keputusan, atau hasil dan tidak ada gambar proses tanpa penjelasan fungsi.",
          }),
          action({
            title: "Tutup dengan hasil terukur",
            why: "Hasil konkret membantu klien menilai dampak pekerjaan, bukan hanya kualitas output.",
            how: ["Cari metrik sebelum dan sesudah dari sumber proyek.", "Pilih angka yang paling terkait dengan tujuan awal.", "Jelaskan periode, cakupan, atau metode pengukuran.", "Gunakan perubahan kualitatif yang spesifik jika angka tidak tersedia atau bersifat rahasia."],
            example: "“Dalam empat minggu setelah rilis, penyelesaian onboarding naik dari 61% menjadi 74% berdasarkan dashboard internal.” Jika data rahasia: “Tim support menerima lebih sedikit pertanyaan tentang langkah aktivasi menurut laporan mingguan klien.”",
            doneWhen: "Setiap studi kasus berakhir dengan hasil terverifikasi atau perubahan kualitatif konkret, tanpa metrik buatan.",
          }),
          action({
            title: "Lindungi informasi klien",
            why: "Perlindungan data menjaga kepercayaan, kewajiban kontrak, dan keamanan informasi bisnis.",
            how: ["Periksa kontrak, NDA, dan izin publikasi sebelum mengunggah karya.", "Minta persetujuan tertulis jika hak publikasi belum jelas.", "Sensor nama, kontak, kredensial, data pengguna, dan angka bisnis sensitif.", "Jelaskan kontribusi pribadi serta kredit tim secara proporsional."],
            example: "Studi kasus menyebut “platform logistik regional”, menyamarkan data pelanggan pada screenshot, dan menulis bahwa riset dilakukan bersama product manager klien.",
            doneWhen: "Ada dasar izin untuk setiap karya, tidak ada data sensitif yang terbaca, dan kontribusi individu maupun tim dijelaskan akurat.",
          }),
        ],
      },
      {
        id: 'reputation-roadmap',
        title: 'Pahami roadmap reputasi Upwork',
        duration: '25 menit',
        summary: 'Badge adalah hasil performa konsisten, bukan target yang bisa dipaksa dengan satu trik.',
        outcome: 'Punya milestone realistis dari profil siap jual menuju reputasi dan kontrak bernilai lebih tinggi.',
        actions: [
          action({
            title: "Mulai dari indikator yang bisa dikontrol",
            why: "Badge ditentukan oleh kebijakan dan sinyal akun yang tidak seluruhnya dapat dikendalikan secara langsung.",
            how: ["Selesaikan bagian profil yang relevan dan pastikan seluruh isinya akurat.", "Kirim proposal hanya pada job yang cocok dengan kemampuan dan bukti.", "Jaga komunikasi, kepatuhan ToS, kualitas delivery, dan kesehatan akun.", "Pantau indikator resmi di dashboard tanpa menganggap kelengkapan profil menjamin Rising Talent."],
            example: "Target 30 hari: profil lengkap, delapan proposal relevan yang dipersonalisasi, seluruh pesan dibalas dalam satu hari kerja, dan tidak ada pelanggaran akun; Rising Talent dicatat sebagai kemungkinan, bukan hasil pasti.",
            doneWhen: "Dashboard menunjukkan profil lengkap sesuai indikator akun, aktivitas relevan terdokumentasi, delivery memenuhi kesepakatan, dan tidak ada pelanggaran ToS yang diketahui.",
          }),
          action({
            title: "Pahami Top Rated secara dinamis",
            why: "Syarat Top Rated dapat berubah dan kelayakan bergantung pada beberapa indikator akun, bukan satu angka saja.",
            how: ["Buka dokumentasi resmi Upwork dan dashboard eligibility sebelum menetapkan target.", "Catat syarat JSS atau status Rising Talent, periode kelayakan, earnings, aktivitas, dan account standing yang berlaku saat pemeriksaan.", "Bandingkan setiap syarat dengan data akun sendiri.", "Jadwalkan pemeriksaan ulang bulanan atau setelah Upwork mengumumkan perubahan."],
            example: "Catatan pemeriksaan bertanggal 5 Agustus 2026 menyimpan tautan resmi dan status dashboard. Dokumentasi yang dilihat saat itu menyebut Rising Talent atau JSS minimal 90% selama 13 dari 16 minggu sebagai salah satu syarat, tetapi keputusan tetap mengikuti eligibility akun terbaru.",
            doneWhen: "Semua syarat yang sedang berlaku tercatat bersama tanggal dan sumber resmi, lalu status tiap syarat cocok dengan dashboard akun.",
          }),
          action({
            title: "Jangan hardcode target Top Rated Plus",
            why: "Kelayakan Top Rated Plus dapat bergantung pada kontrak besar atau jangka panjang, sementara ambang dan definisinya dapat berbeda menurut kategori atau berubah.",
            how: ["Periksa dashboard eligibility Top Rated Plus pada akunmu.", "Baca dokumentasi resmi untuk kategori layanan yang digunakan.", "Catat ambang kontrak, periode, earnings, dan syarat lain yang ditampilkan saat itu.", "Perbarui milestone saat dashboard atau dokumentasi resmi berubah."],
            example: "Rencana tidak menetapkan angka universal. Catatan akun menulis: “Gunakan ambang kontrak besar yang tampil untuk kategori Design & Creative pada dashboard tanggal 5 Agustus 2026; verifikasi ulang sebelum evaluasi kuartal berikutnya.”",
            doneWhen: "Target memakai nilai dan status dari dashboard atau dokumentasi resmi terbaru, bukan angka tetap yang diasumsikan berlaku untuk semua kategori.",
          }),
          action({
            title: "Buat milestone berbasis perilaku",
            why: "Milestone perilaku mengubah tujuan badge yang tidak pasti menjadi tindakan dan hasil yang dapat dievaluasi.",
            how: ["Susun urutan dari profil siap hingga peningkatan rate.", "Tetapkan ukuran dan tenggat untuk setiap tahap.", "Catat proposal, interview, kontrak, feedback, repeat work, dan rate aktual.", "Tinjau data setiap bulan lalu ubah tindakan yang tidak menghasilkan kemajuan."],
            example: "Bulan 1: profil dan tiga studi kasus siap; bulan 2: kirim 12 proposal relevan dan raih dua interview; bulan 3: selesaikan kontrak pertama dengan hasil sesuai scope; rate dinaikkan setelah dua kontrak berhasil dan satu repeat client.",
            doneWhen: "Setiap tahap memiliki metrik, tenggat, dan status; review bulanan menghasilkan keputusan mempertahankan, mengubah, atau menghentikan tindakan berdasarkan data akun.",
          }),
        ],
        source: { label: 'Panduan resmi talent badges Upwork', url: 'https://support.upwork.com/hc/en-us/articles/360049702614-Learn-about-Upwork-s-talent-badges' },
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
        duration: '25 menit',
        summary: 'Connects sering habis karena salah memilih job, bukan karena proposal kurang panjang.',
        outcome: 'Shortlist job yang cocok dengan level, skill, budget, timing, dan bukti yang tersedia.',
        actions: [
          action({
            title: "Nilai kecocokan masalah",
            why: "Pastikan kamu memahami problem dan bisa menjelaskan langkah awal tanpa riset berlebihan. Lewati job yang hanya cocok pada satu keyword tetapi membutuhkan pengalaman inti yang belum kamu miliki.",
            how: ["Pastikan kamu memahami problem dan bisa menjelaskan langkah awal tanpa riset berlebihan.", "Lewati job yang hanya cocok pada satu keyword tetapi membutuhkan pengalaman inti yang belum kamu miliki.", "Cocokkan satu project terdahulu yang membuktikan pengalaman inti tersebut."],
            example: "Contoh penerapan: Pastikan kamu memahami problem dan bisa menjelaskan langkah awal tanpa riset berlebihan.",
            doneWhen: "Selesai jika nilai kecocokan masalah sudah diterapkan dan dapat dibuktikan: lewati job yang hanya cocok pada satu keyword tetapi membutuhkan pengalaman inti yang belum kamu miliki.",
          }),
          action({
            title: "Baca scope dan deliverable",
            why: "Cari brief yang menjelaskan output, deadline, konteks, dan kriteria sukses. Jika masih ada celah, pastikan pertanyaannya bisa diselesaikan lewat interview—bukan tanda bahwa klien sendiri belum tahu apa yang dibutuhkan.",
            how: ["Cari brief yang menjelaskan output, deadline, konteks.", "dan kriteria sukses.", "Jika masih ada celah.", "pastikan pertanyaannya bisa diselesaikan lewat interview—bukan tanda bahwa klien sendiri belum tahu apa yang dibutuhkan."],
            example: "Contoh penerapan: Cari brief yang menjelaskan output, deadline, konteks.",
            doneWhen: "Selesai jika baca scope dan deliverable sudah diterapkan dan dapat dibuktikan: pastikan pertanyaannya bisa diselesaikan lewat interview—bukan tanda bahwa klien sendiri belum tahu apa yang dibutuhkan.",
          }),
          action({
            title: "Periksa kualitas klien",
            why: "Lihat payment verification, histori hire, total spend, feedback dari freelancer, average hourly rate, dan project yang masih terbuka. Satu sinyal buruk belum tentu masalah, tetapi beberapa sinyal buruk sekaligus harus menaikkan standar kehati-hatian.",
            how: ["Lihat payment verification, histori hire, total spend, feedback dari freelancer, average hourly rate.", "dan project yang masih terbuka.", "Satu sinyal buruk belum tentu masalah.", "tetapi beberapa sinyal buruk sekaligus harus menaikkan standar kehati-hatian."],
            example: "Contoh penerapan: Lihat payment verification, histori hire, total spend, feedback dari freelancer, average hourly rate.",
            doneWhen: "Selesai jika periksa kualitas klien sudah diterapkan dan dapat dibuktikan: tetapi beberapa sinyal buruk sekaligus harus menaikkan standar kehati-hatian.",
          }),
          action({
            title: "Hitung economics proposal",
            why: "Bandingkan jumlah Connects, peluang interview, nilai kontrak, durasi, dan risiko revisi. Prioritaskan job dengan fit tinggi dan upside masuk akal; jangan melamar hanya karena job baru diposting.",
            how: ["Bandingkan jumlah Connects, peluang interview, nilai kontrak, durasi, dan risiko revisi.", "Prioritaskan job dengan fit tinggi dan upside masuk akal.", "jangan melamar hanya karena job baru diposting."],
            example: "Contoh penerapan: Bandingkan jumlah Connects, peluang interview, nilai kontrak, durasi, dan risiko revisi.",
            doneWhen: "Selesai jika hitung economics proposal sudah diterapkan dan dapat dibuktikan: jangan melamar hanya karena job baru diposting.",
          }),
        ],
      },
      {
        id: 'client-screening',
        title: 'Screening klien sebelum kontrak',
        duration: '30 menit',
        summary: 'Menolak project buruk lebih murah daripada memperbaiki scope, pembayaran, dan reputasi setelah kontrak berjalan.',
        outcome: 'Punya checklist go/no-go untuk menilai kejelasan, profesionalitas, pembayaran, dan risiko klien.',
        actions: [
          action({
            title: "Validasi budget dan ekspektasi",
            why: "Tanyakan prioritas, kualitas yang diharapkan, dan alasan deadline. Budget rendah bukan otomatis red flag, tetapi hasil premium, deadline ekstrem, serta scope besar dengan budget minim adalah kombinasi berisiko.",
            how: ["Tanyakan prioritas, kualitas yang diharapkan.", "dan alasan deadline.", "Budget rendah bukan otomatis red flag.", "tetapi hasil premium, deadline ekstrem.", "serta scope besar dengan budget minim adalah kombinasi berisiko."],
            example: "Contoh penerapan: Tanyakan prioritas, kualitas yang diharapkan.",
            doneWhen: "Selesai jika validasi budget dan ekspektasi sudah diterapkan dan dapat dibuktikan: serta scope besar dengan budget minim adalah kombinasi berisiko.",
          }),
          action({
            title: "Uji kejelasan pengambilan keputusan",
            why: "Pastikan siapa PIC, siapa pemberi approval, berapa ronde revisi, dan apa definisi selesai. Brief yang belum matang masih bisa diterima jika klien terbuka pada discovery berbayar.",
            how: ["Pastikan siapa PIC, siapa pemberi approval, berapa ronde revisi.", "dan apa definisi selesai.", "Brief yang belum matang masih bisa diterima jika klien terbuka pada discovery berbayar."],
            example: "Contoh penerapan: Pastikan siapa PIC, siapa pemberi approval, berapa ronde revisi.",
            doneWhen: "Selesai jika uji kejelasan pengambilan keputusan sudah diterapkan dan dapat dibuktikan: brief yang belum matang masih bisa diterima jika klien terbuka pada discovery berbayar.",
          }),
          action({
            title: "Tolak permintaan kerja gratis",
            why: "Sample kecil yang sudah ada boleh ditunjukkan. Jangan mengerjakan tes berjam-jam tanpa bayaran atau memulai deliverable sebelum kontrak aktif dan milestone funded. Tawarkan paid trial dengan scope kecil jika perlu validasi.",
            how: ["Sample kecil yang sudah ada boleh ditunjukkan.", "Jangan mengerjakan tes berjam-jam tanpa bayaran atau memulai deliverable sebelum kontrak aktif dan milestone funded.", "Tawarkan paid trial dengan scope kecil jika perlu validasi."],
            example: "Contoh penerapan: Sample kecil yang sudah ada boleh ditunjukkan.",
            doneWhen: "Selesai jika tolak permintaan kerja gratis sudah diterapkan dan dapat dibuktikan: tawarkan paid trial dengan scope kecil jika perlu validasi.",
          }),
          action({
            title: "Jaga komunikasi dan pembayaran di Upwork",
            why: "Sebelum kontrak aktif, ikuti aturan komunikasi Upwork. Setelah kontrak aktif, tetap gunakan sistem pembayaran Upwork sesuai ToS. Pindah ke luar platform memerlukan proses conversion resmi jika hubungan belum melewati periode wajib.",
            how: ["Sebelum kontrak aktif, ikuti aturan komunikasi Upwork.", "Setelah kontrak aktif, tetap gunakan sistem pembayaran Upwork sesuai ToS.", "Pindah ke luar platform memerlukan proses conversion resmi jika hubungan belum melewati periode wajib."],
            example: "Contoh penerapan: Sebelum kontrak aktif, ikuti aturan komunikasi Upwork.",
            doneWhen: "Selesai jika jaga komunikasi dan pembayaran di upwork sudah diterapkan dan dapat dibuktikan: pindah ke luar platform memerlukan proses conversion resmi jika hubungan belum melewati periode wajib.",
          }),
          action({
            title: "Catat keputusan go/no-go",
            why: "Nilai fit skill, scope, budget, timeline, histori klien, komunikasi, dan potensi reputasi. Jika dua risiko besar tidak bisa dikurangi lewat kontrak atau milestone, pilih no-go.",
            how: ["Nilai fit skill, scope, budget, timeline, histori klien, komunikasi.", "dan potensi reputasi.", "Jika dua risiko besar tidak bisa dikurangi lewat kontrak atau milestone.", "pilih no-go."],
            example: "Contoh penerapan: Nilai fit skill, scope, budget, timeline, histori klien, komunikasi.",
            doneWhen: "Selesai jika catat keputusan go/no-go sudah diterapkan dan dapat dibuktikan: pilih no-go.",
          }),
        ],
        source: { label: 'Panduan resmi mengenali red flags', url: 'https://support.upwork.com/hc/en-us/articles/35088484250003-Recognize-red-flags-and-avoid-scams' },
      },
      {
        id: 'proposal',
        title: 'Tulis proposal problem-solving',
        duration: '35 menit',
        summary: 'Dua baris pertama harus membuktikan kamu membaca brief dan memahami risikonya.',
        outcome: 'Proposal singkat dengan hook, diagnosis, bukti, rencana, dan pertanyaan ringan.',
        actions: [
          action({
            title: "Tulis hook dari brief",
            why: "Sebut masalah, tujuan, atau constraint spesifik yang ditulis klien. Hindari pembuka “I am interested” dan perkenalan panjang; klien perlu melihat relevansi sebelum membaca kredensialmu.",
            how: ["Sebut masalah, tujuan, atau constraint spesifik yang ditulis klien.", "Hindari pembuka “I am interested” dan perkenalan panjang.", "klien perlu melihat relevansi sebelum membaca kredensialmu."],
            example: "Contoh penerapan: Sebut masalah, tujuan, atau constraint spesifik yang ditulis klien.",
            doneWhen: "Selesai jika tulis hook dari brief sudah diterapkan dan dapat dibuktikan: klien perlu melihat relevansi sebelum membaca kredensialmu.",
          }),
          action({
            title: "Berikan diagnosis singkat",
            why: "Jelaskan risiko atau akar masalah yang mungkin terlewat, tetapi jangan berpura-pura mengetahui seluruh solusi sebelum discovery. Satu insight tajam lebih kuat daripada daftar tips generik.",
            how: ["Jelaskan risiko atau akar masalah yang mungkin terlewat.", "tetapi jangan berpura-pura mengetahui seluruh solusi sebelum discovery.", "Satu insight tajam lebih kuat daripada daftar tips generik."],
            example: "Contoh penerapan: Jelaskan risiko atau akar masalah yang mungkin terlewat.",
            doneWhen: "Selesai jika berikan diagnosis singkat sudah diterapkan dan dapat dibuktikan: satu insight tajam lebih kuat daripada daftar tips generik.",
          }),
          action({
            title: "Pasangkan bukti paling dekat",
            why: "Pilih satu pengalaman atau portfolio yang mirip berdasarkan masalah, industri, atau deliverable. Jelaskan kontribusi dan hasilmu dalam satu sampai dua kalimat; jangan menempel seluruh riwayat kerja.",
            how: ["Pilih satu pengalaman atau portfolio yang mirip berdasarkan masalah, industri, atau deliverable.", "Jelaskan kontribusi dan hasilmu dalam satu sampai dua kalimat.", "jangan menempel seluruh riwayat kerja."],
            example: "Contoh penerapan: Pilih satu pengalaman atau portfolio yang mirip berdasarkan masalah, industri, atau deliverable.",
            doneWhen: "Selesai jika pasangkan bukti paling dekat sudah diterapkan dan dapat dibuktikan: jangan menempel seluruh riwayat kerja.",
          }),
          action({
            title: "Tawarkan rencana kerja ringkas",
            why: "Berikan dua sampai tiga langkah yang menunjukkan cara berpikir dan mengurangi risiko klien. Sesuaikan detail dengan informasi yang tersedia dan tandai asumsi yang masih perlu dikonfirmasi.",
            how: ["Berikan dua sampai tiga langkah yang menunjukkan cara berpikir dan mengurangi risiko klien.", "Sesuaikan detail dengan informasi yang tersedia dan tandai asumsi yang masih perlu dikonfirmasi.", "Urutkan langkah dari validasi input, pengerjaan, hingga pemeriksaan hasil."],
            example: "Contoh penerapan: Berikan dua sampai tiga langkah yang menunjukkan cara berpikir dan mengurangi risiko klien.",
            doneWhen: "Selesai jika tawarkan rencana kerja ringkas sudah diterapkan dan dapat dibuktikan: sesuaikan detail dengan informasi yang tersedia dan tandai asumsi yang masih perlu dikonfirmasi.",
          }),
          action({
            title: "Tutup dengan pertanyaan mudah",
            why: "Ajukan satu pertanyaan yang membantu menentukan scope atau prioritas. Tujuannya membuka percakapan, bukan memaksa call. Baca ulang dan potong semua kalimat yang tidak menambah relevansi.",
            how: ["Ajukan satu pertanyaan yang membantu menentukan scope atau prioritas.", "Tujuannya membuka percakapan, bukan memaksa call.", "Baca ulang dan potong semua kalimat yang tidak menambah relevansi."],
            example: "Contoh penerapan: Ajukan satu pertanyaan yang membantu menentukan scope atau prioritas.",
            doneWhen: "Selesai jika tutup dengan pertanyaan mudah sudah diterapkan dan dapat dibuktikan: baca ulang dan potong semua kalimat yang tidak menambah relevansi.",
          }),
        ],
      },
      {
        id: 'connects',
        title: 'Gunakan Connects dengan sadar',
        duration: '20 menit',
        summary: 'Boost bukan pengganti relevansi. Gunakan hanya ketika profil dan proposal memang cocok.',
        outcome: 'Punya batas mingguan dan catatan conversion setiap proposal.',
        actions: [
          action({
            title: "Tetapkan budget dan batas",
            why: "Tentukan alokasi Connects mingguan berdasarkan kemampuan, bukan emosi setelah ditolak. Pisahkan budget proposal reguler, boost, dan eksperimen agar pengeluaran dapat dievaluasi.",
            how: ["Tentukan alokasi Connects mingguan berdasarkan kemampuan, bukan emosi setelah ditolak.", "Pisahkan budget proposal reguler, boost.", "dan eksperimen agar pengeluaran dapat dievaluasi."],
            example: "Contoh penerapan: Tentukan alokasi Connects mingguan berdasarkan kemampuan, bukan emosi setelah ditolak.",
            doneWhen: "Selesai jika tetapkan budget dan batas sudah diterapkan dan dapat dibuktikan: dan eksperimen agar pengeluaran dapat dievaluasi.",
          }),
          action({
            title: "Gunakan boost secara selektif",
            why: "Boost hanya ketika fit sangat tinggi, nilai job layak, profile proof kuat, dan proposal sudah dipersonalisasi. Posisi teratas tidak membantu jika profil tidak menjawab kebutuhan klien.",
            how: ["Boost hanya ketika fit sangat tinggi, nilai job layak, profile proof kuat.", "dan proposal sudah dipersonalisasi.", "Posisi teratas tidak membantu jika profil tidak menjawab kebutuhan klien."],
            example: "Contoh penerapan: Boost hanya ketika fit sangat tinggi, nilai job layak, profile proof kuat.",
            doneWhen: "Selesai jika gunakan boost secara selektif sudah diterapkan dan dapat dibuktikan: posisi teratas tidak membantu jika profil tidak menjawab kebutuhan klien.",
          }),
          action({
            title: "Catat funnel proposal",
            why: "Simpan tanggal, job, Connects, boost, viewed, interview, offer, hired, dan alasan kalah jika diketahui. Setelah 15–20 proposal, cari bottleneck: pemilihan job, hook, profile view, interview, atau pricing.",
            how: ["Simpan tanggal, job, Connects, boost, viewed, interview, offer, hired.", "dan alasan kalah jika diketahui.", "Setelah 15–20 proposal, cari bottleneck: pemilihan job, hook, profile view, interview, atau pricing."],
            example: "Contoh penerapan: Simpan tanggal, job, Connects, boost, viewed, interview, offer, hired.",
            doneWhen: "Selesai jika catat funnel proposal sudah diterapkan dan dapat dibuktikan: setelah 15–20 proposal, cari bottleneck: pemilihan job, hook, profile view, interview, atau pricing.",
          }),
          action({
            title: "Ubah satu variabel per eksperimen",
            why: "Uji satu perubahan—misalnya niche job, gaya hook, atau rate—selama sampel yang cukup. Mengubah semuanya sekaligus membuatmu tidak tahu faktor mana yang memperbaiki hasil.",
            how: ["Uji satu perubahan—misalnya niche job, gaya hook, atau rate—selama sampel yang cukup.", "Mengubah semuanya sekaligus membuatmu tidak tahu faktor mana yang memperbaiki hasil.", "Catat hasil pada periode yang sama sebelum memutuskan perubahan berikutnya."],
            example: "Contoh penerapan: Uji satu perubahan—misalnya niche job, gaya hook, atau rate—selama sampel yang cukup.",
            doneWhen: "Selesai jika ubah satu variabel per eksperimen sudah diterapkan dan dapat dibuktikan: mengubah semuanya sekaligus membuatmu tidak tahu faktor mana yang memperbaiki hasil.",
          }),
        ],
      },
      {
        id: 'first-contract',
        title: 'Turunkan ego, bukan standar kerja',
        duration: '20 menit',
        summary: 'Job kecil boleh diambil jika scope aman dan bisa menghasilkan bukti sosial pertama.',
        outcome: 'Kontrak awal dipilih sebagai investasi bukti sosial, bukan perang harga permanen.',
        actions: [
          action({
            title: "Pilih job kecil yang tetap relevan",
            why: "Utamakan pekerjaan singkat yang memperkuat positioning dan bisa diselesaikan dengan kualitas tinggi. Hindari job murah yang scope-nya kabur, penuh revisi, atau tidak bisa masuk portfolio.",
            how: ["Utamakan pekerjaan singkat yang memperkuat positioning dan bisa diselesaikan dengan kualitas tinggi.", "Hindari job murah yang scope-nya kabur, penuh revisi, atau tidak bisa masuk portfolio.", "Pastikan hasil akhirnya dapat menjadi bukti untuk niche yang kamu tuju."],
            example: "Contoh penerapan: Utamakan pekerjaan singkat yang memperkuat positioning dan bisa diselesaikan dengan kualitas tinggi.",
            doneWhen: "Selesai jika pilih job kecil yang tetap relevan sudah diterapkan dan dapat dibuktikan: hindari job murah yang scope-nya kabur, penuh revisi, atau tidak bisa masuk portfolio.",
          }),
          action({
            title: "Kunci definisi selesai",
            why: "Tuliskan deliverable, format file, jumlah revisi, deadline, serta input yang harus diberikan klien. Job kecil tanpa batas bisa berubah menjadi kontrak paling mahal dari sisi waktu.",
            how: ["Tuliskan deliverable, format file, jumlah revisi, deadline.", "serta input yang harus diberikan klien.", "Job kecil tanpa batas bisa berubah menjadi kontrak paling mahal dari sisi waktu."],
            example: "Contoh penerapan: Tuliskan deliverable, format file, jumlah revisi, deadline.",
            doneWhen: "Selesai jika kunci definisi selesai sudah diterapkan dan dapat dibuktikan: job kecil tanpa batas bisa berubah menjadi kontrak paling mahal dari sisi waktu.",
          }),
          action({
            title: "Pertahankan standar komunikasi",
            why: "Berikan update, dokumentasi, dan file final seperti pada project besar. Harga awal boleh lebih rendah, tetapi profesionalitas tidak boleh turun.",
            how: ["Berikan update, dokumentasi.", "dan file final seperti pada project besar.", "Harga awal boleh lebih rendah.", "tetapi profesionalitas tidak boleh turun."],
            example: "Contoh penerapan: Berikan update, dokumentasi.",
            doneWhen: "Selesai jika pertahankan standar komunikasi sudah diterapkan dan dapat dibuktikan: tetapi profesionalitas tidak boleh turun.",
          }),
          action({
            title: "Evaluasi nilai setelah selesai",
            why: "Catat waktu aktual, kualitas klien, hasil, feedback, dan potensi repeat work. Gunakan data ini untuk memperbaiki filter job dan menaikkan harga berikutnya.",
            how: ["Catat waktu aktual, kualitas klien, hasil, feedback.", "dan potensi repeat work.", "Gunakan data ini untuk memperbaiki filter job dan menaikkan harga berikutnya."],
            example: "Contoh penerapan: Catat waktu aktual, kualitas klien, hasil, feedback.",
            doneWhen: "Selesai jika evaluasi nilai setelah selesai sudah diterapkan dan dapat dibuktikan: gunakan data ini untuk memperbaiki filter job dan menaikkan harga berikutnya.",
          }),
        ],
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
        duration: '30 menit',
        summary: 'Kontrak bermasalah biasanya dimulai dari asumsi yang tidak pernah ditulis.',
        outcome: 'Scope, timeline, channel, milestone, dan approval flow disepakati.',
        actions: [
          action({
            title: "Ringkas ulang brief",
            why: "Tulis pemahamanmu dengan bahasa sendiri: tujuan, audiens, masalah, output, dan ukuran sukses. Minta klien mengoreksi sebelum pekerjaan dimulai agar asumsi tidak berubah menjadi revisi.",
            how: ["Tulis pemahamanmu dengan bahasa sendiri: tujuan, audiens, masalah, output.", "dan ukuran sukses.", "Minta klien mengoreksi sebelum pekerjaan dimulai agar asumsi tidak berubah menjadi revisi."],
            example: "Contoh penerapan: Tulis pemahamanmu dengan bahasa sendiri: tujuan, audiens, masalah, output.",
            doneWhen: "Selesai jika ringkas ulang brief sudah diterapkan dan dapat dibuktikan: minta klien mengoreksi sebelum pekerjaan dimulai agar asumsi tidak berubah menjadi revisi.",
          }),
          action({
            title: "Pecah pekerjaan menjadi milestone",
            why: "Setiap milestone harus punya deliverable, deadline, biaya, dan kriteria approval. Untuk fixed price, pastikan milestone funded sebelum mulai. Untuk hourly, sepakati batas jam dan pola update.",
            how: ["Setiap milestone harus punya deliverable, deadline, biaya, dan kriteria approval.", "Untuk fixed price, pastikan milestone funded sebelum mulai.", "Untuk hourly, sepakati batas jam dan pola update."],
            example: "Contoh penerapan: Setiap milestone harus punya deliverable, deadline, biaya, dan kriteria approval.",
            doneWhen: "Selesai jika pecah pekerjaan menjadi milestone sudah diterapkan dan dapat dibuktikan: untuk hourly, sepakati batas jam dan pola update.",
          }),
          action({
            title: "Tentukan cara bekerja",
            why: "Sepakati channel komunikasi, frekuensi update, PIC, waktu respons, format feedback, dan sumber file utama. Satu source of truth mencegah instruksi tercecer.",
            how: ["Sepakati channel komunikasi, frekuensi update, PIC, waktu respons, format feedback.", "dan sumber file utama.", "Satu source of truth mencegah instruksi tercecer."],
            example: "Contoh penerapan: Sepakati channel komunikasi, frekuensi update, PIC, waktu respons, format feedback.",
            doneWhen: "Selesai jika tentukan cara bekerja sudah diterapkan dan dapat dibuktikan: satu source of truth mencegah instruksi tercecer.",
          }),
          action({
            title: "Tulis out-of-scope",
            why: "Sebutkan hal yang belum termasuk, asumsi dependency, dan cara menangani change request. Gunakan bahasa netral: perubahan boleh dilakukan setelah dampak biaya dan timeline disepakati.",
            how: ["Sebutkan hal yang belum termasuk, asumsi dependency.", "dan cara menangani change request.", "Gunakan bahasa netral: perubahan boleh dilakukan setelah dampak biaya dan timeline disepakati."],
            example: "Contoh penerapan: Sebutkan hal yang belum termasuk, asumsi dependency.",
            doneWhen: "Selesai jika tulis out-of-scope sudah diterapkan dan dapat dibuktikan: gunakan bahasa netral: perubahan boleh dilakukan setelah dampak biaya dan timeline disepakati.",
          }),
        ],
      },
      {
        id: 'english',
        title: 'Komunikasikan solusi dalam English',
        duration: '30 menit',
        summary: 'Skill teknis tidak cukup jika klien sulit memahami progres dan keputusanmu.',
        outcome: 'Update kerja ringkas, jelas, profesional, dan mudah ditindaklanjuti.',
        actions: [
          action({
            title: "Gunakan struktur update tetap",
            why: "Tulis tiga bagian: completed, blocker atau decision needed, dan next step. Struktur konsisten membuat klien cepat memahami status tanpa meeting tambahan.",
            how: ["Tulis tiga bagian: completed, blocker atau decision needed.", "dan next step.", "Struktur konsisten membuat klien cepat memahami status tanpa meeting tambahan."],
            example: "Contoh penerapan: Tulis tiga bagian: completed, blocker atau decision needed.",
            doneWhen: "Selesai jika gunakan struktur update tetap sudah diterapkan dan dapat dibuktikan: struktur konsisten membuat klien cepat memahami status tanpa meeting tambahan.",
          }),
          action({
            title: "Gunakan kalimat pendek dan active voice",
            why: "Tulis “I completed the onboarding wireframes” bukan kalimat pasif yang panjang. Pilih kosakata sederhana dan spesifik; tujuan komunikasi adalah kejelasan, bukan terdengar seperti native speaker.",
            how: ["Tulis “I completed the onboarding wireframes” bukan kalimat pasif yang panjang.", "Pilih kosakata sederhana dan spesifik.", "tujuan komunikasi adalah kejelasan, bukan terdengar seperti native speaker."],
            example: "Contoh penerapan: Tulis “I completed the onboarding wireframes” bukan kalimat pasif yang panjang.",
            doneWhen: "Selesai jika gunakan kalimat pendek dan active voice sudah diterapkan dan dapat dibuktikan: tujuan komunikasi adalah kejelasan, bukan terdengar seperti native speaker.",
          }),
          action({
            title: "Bawa rekomendasi, bukan hanya masalah",
            why: "Saat ada blocker, jelaskan dampak, dua opsi, rekomendasi, dan keputusan yang dibutuhkan. Ini menempatkanmu sebagai problem solver tanpa mengambil keputusan bisnis yang bukan wewenangmu.",
            how: ["Saat ada blocker.", "jelaskan dampak, dua opsi, rekomendasi.", "dan keputusan yang dibutuhkan.", "Ini menempatkanmu sebagai problem solver tanpa mengambil keputusan bisnis yang bukan wewenangmu."],
            example: "Contoh penerapan: Saat ada blocker.",
            doneWhen: "Selesai jika bawa rekomendasi, bukan hanya masalah sudah diterapkan dan dapat dibuktikan: ini menempatkanmu sebagai problem solver tanpa mengambil keputusan bisnis yang bukan wewenangmu.",
          }),
          action({
            title: "Konfirmasi keputusan tertulis",
            why: "Setelah call, kirim recap singkat berisi keputusan, pemilik action, serta deadline. Minta koreksi jika ada yang keliru agar diskusi lisan punya jejak yang sama-sama dipahami.",
            how: ["Setelah call, kirim recap singkat berisi keputusan, pemilik action.", "serta deadline.", "Minta koreksi jika ada yang keliru agar diskusi lisan punya jejak yang sama-sama dipahami."],
            example: "Contoh penerapan: Setelah call, kirim recap singkat berisi keputusan, pemilik action.",
            doneWhen: "Selesai jika konfirmasi keputusan tertulis sudah diterapkan dan dapat dibuktikan: minta koreksi jika ada yang keliru agar diskusi lisan punya jejak yang sama-sama dipahami.",
          }),
        ],
      },
      {
        id: 'overdeliver',
        title: 'Under-promise, over-deliver',
        duration: '25 menit',
        summary: 'Nilai ekstra harus relevan. Tiga opsi bagus lebih berguna daripada sepuluh file tanpa arah.',
        outcome: 'Delivery utama selesai, plus insight yang mempercepat keputusan klien tanpa merusak scope.',
        actions: [
          action({
            title: "Penuhi janji utama lebih dulu",
            why: "Jangan menambah bonus ketika deliverable utama belum stabil. Cek kembali brief, acceptance criteria, naming file, dan format handoff sebelum memikirkan nilai ekstra.",
            how: ["Jangan menambah bonus ketika deliverable utama belum stabil.", "Cek kembali brief, acceptance criteria, naming file.", "dan format handoff sebelum memikirkan nilai ekstra."],
            example: "Contoh penerapan: Jangan menambah bonus ketika deliverable utama belum stabil.",
            doneWhen: "Selesai jika penuhi janji utama lebih dulu sudah diterapkan dan dapat dibuktikan: dan format handoff sebelum memikirkan nilai ekstra.",
          }),
          action({
            title: "Tambahkan insight yang relevan",
            why: "Pilih maksimal satu atau dua tambahan yang dekat dengan tujuan project—misalnya risiko implementasi, quick win, atau opsi alternatif. Jangan membuka scope baru secara gratis.",
            how: ["Pilih maksimal satu atau dua tambahan yang dekat dengan tujuan project—misalnya risiko implementasi, quick win, atau opsi alternatif.", "Jangan membuka scope baru secara gratis.", "Kaitkan setiap tambahan dengan tujuan atau risiko yang tertulis di brief."],
            example: "Contoh penerapan: Pilih maksimal satu atau dua tambahan yang dekat dengan tujuan project—misalnya risiko implementasi, quick win, atau opsi alternatif.",
            doneWhen: "Selesai jika tambahkan insight yang relevan sudah diterapkan dan dapat dibuktikan: jangan membuka scope baru secara gratis.",
          }),
          action({
            title: "Jelaskan trade-off",
            why: "Jika memberi beberapa opsi, jelaskan dampak pada kualitas, waktu, biaya, dan maintainability. Rekomendasikan satu pilihan agar klien tidak menerima tumpukan opsi tanpa arah.",
            how: ["Jika memberi beberapa opsi.", "jelaskan dampak pada kualitas, waktu, biaya.", "dan maintainability.", "Rekomendasikan satu pilihan agar klien tidak menerima tumpukan opsi tanpa arah."],
            example: "Contoh penerapan: Jika memberi beberapa opsi.",
            doneWhen: "Selesai jika jelaskan trade-off sudah diterapkan dan dapat dibuktikan: rekomendasikan satu pilihan agar klien tidak menerima tumpukan opsi tanpa arah.",
          }),
          action({
            title: "Dokumentasikan handoff",
            why: "Susun file final, akses, instruksi penggunaan, keputusan penting, dan next step. Handoff rapi sering lebih bernilai daripada bonus visual yang tidak diminta.",
            how: ["Susun file final, akses, instruksi penggunaan, keputusan penting.", "dan next step.", "Handoff rapi sering lebih bernilai daripada bonus visual yang tidak diminta."],
            example: "Contoh penerapan: Susun file final, akses, instruksi penggunaan, keputusan penting.",
            doneWhen: "Selesai jika dokumentasikan handoff sudah diterapkan dan dapat dibuktikan: handoff rapi sering lebih bernilai daripada bonus visual yang tidak diminta.",
          }),
        ],
      },
      {
        id: 'reputation-jss',
        title: 'Jaga JSS melalui delivery sehat',
        duration: '35 menit',
        summary: 'JSS mencerminkan hubungan dan hasil kontrak; tidak ada satu trik yang dapat menjamin skornya.',
        outcome: 'Punya sistem pencegahan risiko sejak screening sampai kontrak ditutup.',
        actions: [
          action({
            title: "Fokus pada kepuasan dan hasil",
            why: "Upwork menjelaskan bahwa feedback, riwayat kontrak berakhir, project bernilai lebih tinggi, dan hubungan jangka panjang dapat memengaruhi JSS. Kejar pengalaman klien yang sehat, bukan memanipulasi metrik.",
            how: ["Upwork menjelaskan bahwa feedback, riwayat kontrak berakhir, project bernilai lebih tinggi.", "dan hubungan jangka panjang dapat memengaruhi JSS.", "Kejar pengalaman klien yang sehat, bukan memanipulasi metrik."],
            example: "Contoh penerapan: Upwork menjelaskan bahwa feedback, riwayat kontrak berakhir, project bernilai lebih tinggi.",
            doneWhen: "Selesai jika fokus pada kepuasan dan hasil sudah diterapkan dan dapat dibuktikan: kejar pengalaman klien yang sehat, bukan memanipulasi metrik.",
          }),
          action({
            title: "Deteksi risiko lebih awal",
            why: "Pantau scope creep, keterlambatan input, perubahan PIC, komunikasi yang memburuk, dan ketidakpuasan kecil. Angkat masalah dengan fakta, dampak, opsi, dan keputusan yang dibutuhkan sebelum menumpuk.",
            how: ["Pantau scope creep, keterlambatan input, perubahan PIC, komunikasi yang memburuk.", "dan ketidakpuasan kecil.", "Angkat masalah dengan fakta, dampak, opsi.", "dan keputusan yang dibutuhkan sebelum menumpuk."],
            example: "Contoh penerapan: Pantau scope creep, keterlambatan input, perubahan PIC, komunikasi yang memburuk.",
            doneWhen: "Selesai jika deteksi risiko lebih awal sudah diterapkan dan dapat dibuktikan: dan keputusan yang dibutuhkan sebelum menumpuk.",
          }),
          action({
            title: "Jaga dokumentasi kontrak",
            why: "Simpan approval, perubahan scope, milestone, update, dan file final di channel yang dapat dirujuk. Dokumentasi bukan untuk berkonflik, tetapi memastikan kedua pihak bekerja dari kesepakatan yang sama.",
            how: ["Simpan approval, perubahan scope, milestone, update.", "dan file final di channel yang dapat dirujuk.", "Dokumentasi bukan untuk berkonflik.", "tetapi memastikan kedua pihak bekerja dari kesepakatan yang sama."],
            example: "Contoh penerapan: Simpan approval, perubahan scope, milestone, update.",
            doneWhen: "Selesai jika jaga dokumentasi kontrak sudah diterapkan dan dapat dibuktikan: tetapi memastikan kedua pihak bekerja dari kesepakatan yang sama.",
          }),
          action({
            title: "Utamakan hubungan jangka panjang yang sehat",
            why: "Repeat work dan pembayaran selama hubungan jangka panjang dapat berdampak positif. Jangan mempertahankan kontrak toxic hanya demi durasi; kualitas hubungan tetap lebih penting.",
            how: ["Repeat work dan pembayaran selama hubungan jangka panjang dapat berdampak positif.", "Jangan mempertahankan kontrak toxic hanya demi durasi.", "kualitas hubungan tetap lebih penting."],
            example: "Contoh penerapan: Repeat work dan pembayaran selama hubungan jangka panjang dapat berdampak positif.",
            doneWhen: "Selesai jika utamakan hubungan jangka panjang yang sehat sudah diterapkan dan dapat dibuktikan: kualitas hubungan tetap lebih penting.",
          }),
          action({
            title: "Pelajari JSS Insights",
            why: "Gunakan panel Job Success Insights bila tersedia untuk memahami faktor akunmu. Jangan menyimpulkan penyebab dari satu kontrak saja karena formula JSS mempertimbangkan beberapa faktor.",
            how: ["Gunakan panel Job Success Insights bila tersedia untuk memahami faktor akunmu.", "Jangan menyimpulkan penyebab dari satu kontrak saja karena formula JSS mempertimbangkan beberapa faktor.", "Catat faktor yang ditampilkan tanpa menebak bobot formula yang tidak dipublikasikan."],
            example: "Contoh penerapan: Gunakan panel Job Success Insights bila tersedia untuk memahami faktor akunmu.",
            doneWhen: "Selesai jika pelajari jss insights sudah diterapkan dan dapat dibuktikan: jangan menyimpulkan penyebab dari satu kontrak saja karena formula JSS mempertimbangkan beberapa faktor.",
          }),
        ],
        source: { label: 'Penjelasan resmi Job Success Score', url: 'https://support.upwork.com/hc/en-us/articles/211068358-All-about-your-Job-Success-Score' },
      },
      {
        id: 'review',
        title: 'Tutup kontrak dengan feedback sehat',
        duration: '20 menit',
        summary: 'Momen meminta feedback adalah setelah nilai pekerjaan terasa jelas dan semua kewajiban selesai.',
        outcome: 'Kontrak ditutup rapi dengan bukti hasil dan permintaan feedback yang netral.',
        actions: [
          action({
            title: "Kirim final recap",
            why: "Ringkas deliverable, hasil, link file, keputusan, dan instruksi handoff. Nyatakan bagian yang sudah selesai dan hal yang masih membutuhkan tindakan klien.",
            how: ["Ringkas deliverable, hasil, link file, keputusan.", "dan instruksi handoff.", "Nyatakan bagian yang sudah selesai dan hal yang masih membutuhkan tindakan klien."],
            example: "Contoh penerapan: Ringkas deliverable, hasil, link file, keputusan.",
            doneWhen: "Selesai jika kirim final recap sudah diterapkan dan dapat dibuktikan: nyatakan bagian yang sudah selesai dan hal yang masih membutuhkan tindakan klien.",
          }),
          action({
            title: "Minta final check",
            why: "Tanyakan apakah ada hal dalam scope yang belum terpenuhi. Beri batas waktu wajar untuk pemeriksaan tanpa menekan klien menutup kontrak segera.",
            how: ["Tanyakan apakah ada hal dalam scope yang belum terpenuhi.", "Beri batas waktu wajar untuk pemeriksaan tanpa menekan klien menutup kontrak segera.", "Daftar ulang deliverable dalam scope agar klien dapat memeriksa satu per satu."],
            example: "Contoh penerapan: Tanyakan apakah ada hal dalam scope yang belum terpenuhi.",
            doneWhen: "Selesai jika minta final check sudah diterapkan dan dapat dibuktikan: beri batas waktu wajar untuk pemeriksaan tanpa menekan klien menutup kontrak segera.",
          }),
          action({
            title: "Minta feedback secara netral",
            why: "Setelah klien mengonfirmasi selesai, minta feedback jujur tentang proses dan hasil. Jangan meminta “5-star review”, mengarahkan isi review, atau menawarkan imbalan.",
            how: ["Setelah klien mengonfirmasi selesai.", "minta feedback jujur tentang proses dan hasil.", "Jangan meminta “5-star review”, mengarahkan isi review, atau menawarkan imbalan."],
            example: "Contoh penerapan: Setelah klien mengonfirmasi selesai.",
            doneWhen: "Selesai jika minta feedback secara netral sudah diterapkan dan dapat dibuktikan: jangan meminta “5-star review”, mengarahkan isi review, atau menawarkan imbalan.",
          }),
          action({
            title: "Simpan pelajaran project",
            why: "Catat estimasi versus waktu aktual, perubahan scope, feedback, dan hal yang akan diulang atau dihindari. Gunakan catatan ini untuk proposal, pricing, dan onboarding berikutnya.",
            how: ["Catat estimasi versus waktu aktual, perubahan scope, feedback.", "dan hal yang akan diulang atau dihindari.", "Gunakan catatan ini untuk proposal, pricing.", "dan onboarding berikutnya."],
            example: "Contoh penerapan: Catat estimasi versus waktu aktual, perubahan scope, feedback.",
            doneWhen: "Selesai jika simpan pelajaran project sudah diterapkan dan dapat dibuktikan: dan onboarding berikutnya.",
          }),
        ],
      },
      {
        id: 'multi-project',
        title: 'Kelola beberapa project tanpa kehilangan kualitas',
        duration: '35 menit',
        summary: 'Multi-project membutuhkan batas kapasitas dan sistem kerja, bukan menambah jam tanpa kontrol.',
        outcome: 'Punya workflow sederhana untuk prioritas, komunikasi, template, dan risiko kapasitas.',
        actions: [
          action({
            title: "Batasi work in progress",
            why: "Tentukan jumlah project aktif berdasarkan jam fokus, kompleksitas, dan kebutuhan komunikasi. Jangan mengisi 100% kalender; sisakan buffer untuk revisi, meeting, dan masalah tak terduga.",
            how: ["Tentukan jumlah project aktif berdasarkan jam fokus, kompleksitas, dan kebutuhan komunikasi.", "Jangan mengisi 100% kalender.", "sisakan buffer untuk revisi, meeting, dan masalah tak terduga."],
            example: "Contoh penerapan: Tentukan jumlah project aktif berdasarkan jam fokus, kompleksitas, dan kebutuhan komunikasi.",
            doneWhen: "Selesai jika batasi work in progress sudah diterapkan dan dapat dibuktikan: sisakan buffer untuk revisi, meeting, dan masalah tak terduga.",
          }),
          action({
            title: "Gunakan board Kanban sederhana",
            why: "Kelompokkan pekerjaan ke backlog, ready, in progress, review, dan done. Satu task harus punya owner, deadline, link file, dan definisi selesai. Hindari memindahkan terlalu banyak task ke in progress.",
            how: ["Kelompokkan pekerjaan ke backlog, ready, in progress, review, dan done.", "Satu task harus punya owner, deadline, link file, dan definisi selesai.", "Hindari memindahkan terlalu banyak task ke in progress."],
            example: "Contoh penerapan: Kelompokkan pekerjaan ke backlog, ready, in progress, review, dan done.",
            doneWhen: "Selesai jika gunakan board kanban sederhana sudah diterapkan dan dapat dibuktikan: hindari memindahkan terlalu banyak task ke in progress.",
          }),
          action({
            title: "Time-block berdasarkan energi",
            why: "Jadwalkan deep work pada jam terbaikmu, lalu kelompokkan meeting, chat, admin, dan revisi. Beri waktu transisi agar satu project tidak mencuri fokus project lain.",
            how: ["Jadwalkan deep work pada jam terbaikmu.", "lalu kelompokkan meeting, chat, admin.", "dan revisi.", "Beri waktu transisi agar satu project tidak mencuri fokus project lain."],
            example: "Contoh penerapan: Jadwalkan deep work pada jam terbaikmu.",
            doneWhen: "Selesai jika time-block berdasarkan energi sudah diterapkan dan dapat dibuktikan: beri waktu transisi agar satu project tidak mencuri fokus project lain.",
          }),
          action({
            title: "Bangun template yang berulang",
            why: "Siapkan template onboarding, recap meeting, status update, QA checklist, handoff, dan project retrospective. Template mempercepat konsistensi, tetapi tetap harus dipersonalisasi.",
            how: ["Siapkan template onboarding, recap meeting, status update, QA checklist, handoff.", "dan project retrospective.", "Template mempercepat konsistensi.", "tetapi tetap harus dipersonalisasi."],
            example: "Contoh penerapan: Siapkan template onboarding, recap meeting, status update, QA checklist, handoff.",
            doneWhen: "Selesai jika bangun template yang berulang sudah diterapkan dan dapat dibuktikan: tetapi tetap harus dipersonalisasi.",
          }),
          action({
            title: "Eskalasi risiko kapasitas",
            why: "Jika deadline berpotensi terlambat, beri tahu lebih awal dengan status, penyebab, pilihan, dan timeline baru. Jangan menunggu sampai hari delivery untuk mengakui masalah.",
            how: ["Jika deadline berpotensi terlambat, beri tahu lebih awal dengan status, penyebab, pilihan.", "dan timeline baru.", "Jangan menunggu sampai hari delivery untuk mengakui masalah."],
            example: "Contoh penerapan: Jika deadline berpotensi terlambat, beri tahu lebih awal dengan status, penyebab, pilihan.",
            doneWhen: "Selesai jika eskalasi risiko kapasitas sudah diterapkan dan dapat dibuktikan: jangan menunggu sampai hari delivery untuk mengakui masalah.",
          }),
        ],
      },
    ],
  },
  {
    id: 'scale',
    number: '04',
    title: 'Scale & referral',
    shortTitle: 'Scale',
    description: 'Ubah pekerjaan selesai menjadi repeat order, referral, rate sehat, dan kapasitas berkelanjutan.',
    milestone: 'Pipeline tidak lagi bergantung penuh pada proposal baru.',
    lessons: [
      {
        id: 'follow-up',
        title: 'Follow-up 30 dan 90 hari',
        duration: '20 menit',
        summary: 'Klien lama lebih mudah percaya, tetapi mereka tetap perlu diingatkan bahwa kamu tersedia.',
        outcome: 'Follow-up relevan tanpa terasa mengejar pekerjaan.',
        actions: [
          action({
            title: "Catat konteks sebelum project ditutup",
            why: "Simpan objective, hasil, stakeholder, peluang lanjutan, dan waktu bisnis yang relevan. Follow-up kuat dimulai dari konteks, bukan pesan “ada project lagi?” yang dikirim massal.",
            how: ["Simpan objective, hasil, stakeholder, peluang lanjutan.", "dan waktu bisnis yang relevan.", "Follow-up kuat dimulai dari konteks, bukan pesan “ada project lagi?” yang dikirim massal."],
            example: "Contoh penerapan: Simpan objective, hasil, stakeholder, peluang lanjutan.",
            doneWhen: "Selesai jika catat konteks sebelum project ditutup sudah diterapkan dan dapat dibuktikan: follow-up kuat dimulai dari konteks, bukan pesan “ada project lagi?” yang dikirim massal.",
          }),
          action({
            title: "Follow-up sekitar 30 hari",
            why: "Tanyakan perkembangan hasil pekerjaan sebelumnya dan apakah ada kendala implementasi. Tawarkan satu bantuan kecil atau insight yang masih terkait dengan scope awal.",
            how: ["Tanyakan perkembangan hasil pekerjaan sebelumnya dan apakah ada kendala implementasi.", "Tawarkan satu bantuan kecil atau insight yang masih terkait dengan scope awal.", "Rujuk satu hasil atau deliverable spesifik agar pesan tidak terasa massal."],
            example: "Contoh penerapan: Tanyakan perkembangan hasil pekerjaan sebelumnya dan apakah ada kendala implementasi.",
            doneWhen: "Selesai jika follow-up sekitar 30 hari sudah diterapkan dan dapat dibuktikan: tawarkan satu bantuan kecil atau insight yang masih terkait dengan scope awal.",
          }),
          action({
            title: "Follow-up sekitar 90 hari",
            why: "Kirim insight baru, observasi industri, atau peluang perbaikan yang relevan. Sebut availability hanya setelah menunjukkan alasan bisnis untuk kembali berdiskusi.",
            how: ["Kirim insight baru, observasi industri, atau peluang perbaikan yang relevan.", "Sebut availability hanya setelah menunjukkan alasan bisnis untuk kembali berdiskusi.", "Hubungkan insight dengan tujuan bisnis yang pernah dibahas bersama klien."],
            example: "Contoh penerapan: Kirim insight baru, observasi industri, atau peluang perbaikan yang relevan.",
            doneWhen: "Selesai jika follow-up sekitar 90 hari sudah diterapkan dan dapat dibuktikan: sebut availability hanya setelah menunjukkan alasan bisnis untuk kembali berdiskusi.",
          }),
          action({
            title: "Hormati sinyal klien",
            why: "Jika klien tidak merespons setelah satu atau dua follow-up berkualitas, hentikan. Jaga hubungan tanpa spam dan masukkan kembali ke daftar hanya ketika ada konteks baru.",
            how: ["Jika klien tidak merespons setelah satu atau dua follow-up berkualitas, hentikan.", "Jaga hubungan tanpa spam dan masukkan kembali ke daftar hanya ketika ada konteks baru.", "Catat tanggal follow-up terakhir agar pesan yang sama tidak terkirim lagi."],
            example: "Contoh penerapan: Jika klien tidak merespons setelah satu atau dua follow-up berkualitas, hentikan.",
            doneWhen: "Selesai jika hormati sinyal klien sudah diterapkan dan dapat dibuktikan: jaga hubungan tanpa spam dan masukkan kembali ke daftar hanya ketika ada konteks baru.",
          }),
        ],
      },
      {
        id: 'portfolio-loop',
        title: 'Bangun portfolio loop',
        duration: '25 menit',
        summary: 'Setiap project selesai harus memperkuat profil untuk project berikutnya.',
        outcome: 'Case study baru, positioning lebih tajam, dan bukti sosial bertambah.',
        actions: [
          action({
            title: "Dokumentasikan selama project",
            why: "Simpan kondisi awal, keputusan, versi penting, feedback, dan hasil ketika masih mudah diingat. Menunggu project selesai sering membuat detail penting hilang.",
            how: ["Simpan kondisi awal, keputusan, versi penting, feedback.", "dan hasil ketika masih mudah diingat.", "Menunggu project selesai sering membuat detail penting hilang."],
            example: "Contoh penerapan: Simpan kondisi awal, keputusan, versi penting, feedback.",
            doneWhen: "Selesai jika dokumentasikan selama project sudah diterapkan dan dapat dibuktikan: menunggu project selesai sering membuat detail penting hilang.",
          }),
          action({
            title: "Minta izin penggunaan",
            why: "Tanyakan bagian mana yang boleh dipublikasikan dan apakah nama, logo, angka, atau screenshot perlu disensor. Hormati NDA dan jangan menganggap project berbayar otomatis boleh dipamerkan.",
            how: ["Tanyakan bagian mana yang boleh dipublikasikan dan apakah nama, logo, angka, atau screenshot perlu disensor.", "Hormati NDA dan jangan menganggap project berbayar otomatis boleh dipamerkan.", "Simpan persetujuan tertulis beserta batas penggunaan yang diberikan klien."],
            example: "Contoh penerapan: Tanyakan bagian mana yang boleh dipublikasikan dan apakah nama, logo, angka, atau screenshot perlu disensor.",
            doneWhen: "Selesai jika minta izin penggunaan sudah diterapkan dan dapat dibuktikan: hormati NDA dan jangan menganggap project berbayar otomatis boleh dipamerkan.",
          }),
          action({
            title: "Tulis case study sesuai positioning",
            why: "Tekankan masalah dan kontribusi yang ingin kamu jual berikutnya. Satu project dapat dibuat menjadi case study berbeda, tetapi setiap versi harus tetap akurat.",
            how: ["Tekankan masalah dan kontribusi yang ingin kamu jual berikutnya.", "Satu project dapat dibuat menjadi case study berbeda.", "tetapi setiap versi harus tetap akurat."],
            example: "Contoh penerapan: Tekankan masalah dan kontribusi yang ingin kamu jual berikutnya.",
            doneWhen: "Selesai jika tulis case study sesuai positioning sudah diterapkan dan dapat dibuktikan: tetapi setiap versi harus tetap akurat.",
          }),
          action({
            title: "Distribusikan bukti",
            why: "Perbarui portfolio Upwork, overview, proposal proof, dan kanal personal branding. Gunakan satu sumber case study agar angka dan narasi tetap konsisten.",
            how: ["Perbarui portfolio Upwork, overview, proposal proof.", "dan kanal personal branding.", "Gunakan satu sumber case study agar angka dan narasi tetap konsisten."],
            example: "Contoh penerapan: Perbarui portfolio Upwork, overview, proposal proof.",
            doneWhen: "Selesai jika distribusikan bukti sudah diterapkan dan dapat dibuktikan: gunakan satu sumber case study agar angka dan narasi tetap konsisten.",
          }),
        ],
      },
      {
        id: 'referral',
        title: 'Minta referral dengan konteks',
        duration: '15 menit',
        summary: 'Referral efektif ketika klien tahu tipe orang dan masalah yang paling cocok untukmu.',
        outcome: 'Permintaan referral spesifik, ringan, dan mudah diteruskan.',
        actions: [
          action({
            title: "Pilih momen yang tepat",
            why: "Minta referral setelah hasil terlihat dan klien menyatakan puas—bukan saat project bermasalah atau pembayaran belum selesai.",
            how: ["Minta referral setelah hasil terlihat dan klien menyatakan puas—bukan saat project bermasalah atau pembayaran belum selesai.", "Pastikan deliverable, revisi, dan pembayaran yang disepakati sudah selesai sebelum meminta referral.", "Rujuk hasil yang diapresiasi klien sebagai konteks permintaan referral."],
            example: "Contoh penerapan: Minta referral setelah hasil terlihat dan klien menyatakan puas—bukan saat project bermasalah atau pembayaran belum selesai.",
            doneWhen: "Selesai jika pilih momen yang tepat sudah diterapkan dan dapat dibuktikan: minta referral setelah hasil terlihat dan klien menyatakan puas—bukan saat project bermasalah atau pembayaran belum selesai.",
          }),
          action({
            title: "Jelaskan klien ideal",
            why: "Sebut industri, ukuran bisnis, dan masalah yang paling cocok. Permintaan “kenalkan ke siapa saja” membuat klien sulit memikirkan orang yang relevan.",
            how: ["Sebut industri, ukuran bisnis.", "dan masalah yang paling cocok.", "Permintaan “kenalkan ke siapa saja” membuat klien sulit memikirkan orang yang relevan."],
            example: "Contoh penerapan: Sebut industri, ukuran bisnis.",
            doneWhen: "Selesai jika jelaskan klien ideal sudah diterapkan dan dapat dibuktikan: permintaan “kenalkan ke siapa saja” membuat klien sulit memikirkan orang yang relevan.",
          }),
          action({
            title: "Berikan intro siap teruskan",
            why: "Tulis satu atau dua kalimat yang menjelaskan layanan, bukti, dan kontak Upwork-mu. Kurangi beban klien saat membuat perkenalan.",
            how: ["Tulis satu atau dua kalimat yang menjelaskan layanan, bukti.", "dan kontak Upwork-mu.", "Kurangi beban klien saat membuat perkenalan."],
            example: "Contoh penerapan: Tulis satu atau dua kalimat yang menjelaskan layanan, bukti.",
            doneWhen: "Selesai jika berikan intro siap teruskan sudah diterapkan dan dapat dibuktikan: kurangi beban klien saat membuat perkenalan.",
          }),
          action({
            title: "Jangan membeli referral",
            why: "Hindari menjanjikan diskon atau hadiah sebagai default. Fokus pada hubungan dan value; jika ada program referral, buat aturan transparan dan patuh pada kebijakan platform.",
            how: ["Hindari menjanjikan diskon atau hadiah sebagai default.", "Fokus pada hubungan dan value.", "jika ada program referral, buat aturan transparan dan patuh pada kebijakan platform."],
            example: "Contoh penerapan: Hindari menjanjikan diskon atau hadiah sebagai default.",
            doneWhen: "Selesai jika jangan membeli referral sudah diterapkan dan dapat dibuktikan: jika ada program referral, buat aturan transparan dan patuh pada kebijakan platform.",
          }),
        ],
      },
      {
        id: 'rate',
        title: 'Naikkan rate berdasarkan bukti',
        duration: '25 menit',
        summary: 'Rate naik setelah positioning, demand, dan bukti hasil menguat—bukan karena kalender berganti.',
        outcome: 'Rate baru punya alasan yang dapat dijelaskan dengan percaya diri.',
        actions: [
          action({
            title: "Review data tiga bulan",
            why: "Lihat win rate, interview rate, utilization, repeat client, margin, dan kualitas lead. Jika demand tinggi dan kapasitas penuh, rate mungkin terlalu rendah.",
            how: ["Lihat win rate, interview rate, utilization, repeat client, margin.", "dan kualitas lead.", "Jika demand tinggi dan kapasitas penuh, rate mungkin terlalu rendah."],
            example: "Contoh penerapan: Lihat win rate, interview rate, utilization, repeat client, margin.",
            doneWhen: "Selesai jika review data tiga bulan sudah diterapkan dan dapat dibuktikan: jika demand tinggi dan kapasitas penuh, rate mungkin terlalu rendah.",
          }),
          action({
            title: "Hubungkan rate dengan value",
            why: "Gunakan kompleksitas, risiko, kecepatan, spesialisasi, dan hasil sebagai alasan. Jangan mendasarkan harga hanya pada jumlah tahun pengalaman atau rate kompetitor.",
            how: ["Gunakan kompleksitas, risiko, kecepatan, spesialisasi.", "dan hasil sebagai alasan.", "Jangan mendasarkan harga hanya pada jumlah tahun pengalaman atau rate kompetitor."],
            example: "Contoh penerapan: Gunakan kompleksitas, risiko, kecepatan, spesialisasi.",
            doneWhen: "Selesai jika hubungkan rate dengan value sudah diterapkan dan dapat dibuktikan: jangan mendasarkan harga hanya pada jumlah tahun pengalaman atau rate kompetitor.",
          }),
          action({
            title: "Uji pada lead baru",
            why: "Naikkan rate secara bertahap untuk proposal baru, lalu pantau kualitas lead dan conversion. Hindari perubahan besar tanpa bukti pasar.",
            how: ["Naikkan rate secara bertahap untuk proposal baru.", "lalu pantau kualitas lead dan conversion.", "Hindari perubahan besar tanpa bukti pasar."],
            example: "Contoh penerapan: Naikkan rate secara bertahap untuk proposal baru.",
            doneWhen: "Selesai jika uji pada lead baru sudah diterapkan dan dapat dibuktikan: hindari perubahan besar tanpa bukti pasar.",
          }),
          action({
            title: "Renegosiasi klien lama dengan konteks",
            why: "Bahas perubahan scope, tanggung jawab, atau value sebelum menaikkan rate. Beri pemberitahuan dan pilihan transisi; jangan mengubah harga di tengah milestone yang sudah disepakati.",
            how: ["Bahas perubahan scope, tanggung jawab, atau value sebelum menaikkan rate.", "Beri pemberitahuan dan pilihan transisi.", "jangan mengubah harga di tengah milestone yang sudah disepakati."],
            example: "Contoh penerapan: Bahas perubahan scope, tanggung jawab, atau value sebelum menaikkan rate.",
            doneWhen: "Selesai jika renegosiasi klien lama dengan konteks sudah diterapkan dan dapat dibuktikan: jangan mengubah harga di tengah milestone yang sudah disepakati.",
          }),
        ],
      },
      {
        id: 'scale-path',
        title: 'Pilih jalur scale yang sehat',
        duration: '35 menit',
        summary: 'Scale tidak selalu berarti membangun agency. Pilih model yang sesuai kekuatan, risiko, dan kehidupan yang kamu inginkan.',
        outcome: 'Memilih prioritas 90 hari: premium specialist, repeat/retainer, atau tim kecil.',
        actions: [
          action({
            title: "Nilai bottleneck saat ini",
            why: "Jika demand rendah, perbaiki positioning dan pipeline. Jika demand tinggi tetapi waktu penuh, pilih menaikkan rate, membuat retainer, productized service, atau delegasi. Jangan membangun tim untuk menutupi masalah penjualan.",
            how: ["Jika demand rendah, perbaiki positioning dan pipeline.", "Jika demand tinggi tetapi waktu penuh, pilih menaikkan rate, membuat retainer, productized service, atau delegasi.", "Jangan membangun tim untuk menutupi masalah penjualan."],
            example: "Contoh penerapan: Jika demand rendah, perbaiki positioning dan pipeline.",
            doneWhen: "Selesai jika nilai bottleneck saat ini sudah diterapkan dan dapat dibuktikan: jangan membangun tim untuk menutupi masalah penjualan.",
          }),
          action({
            title: "Pilih premium specialist",
            why: "Cocok jika kamu menikmati craft dan ingin margin tinggi dengan kompleksitas organisasi rendah. Investasi utama: niche, expertise, proof, pricing, dan personal brand.",
            how: ["Cocok jika kamu menikmati craft dan ingin margin tinggi dengan kompleksitas organisasi rendah.", "Investasi utama: niche, expertise, proof, pricing.", "dan personal brand."],
            example: "Contoh penerapan: Cocok jika kamu menikmati craft dan ingin margin tinggi dengan kompleksitas organisasi rendah.",
            doneWhen: "Selesai jika pilih premium specialist sudah diterapkan dan dapat dibuktikan: dan personal brand.",
          }),
          action({
            title: "Pilih repeat atau retainer",
            why: "Cocok jika kebutuhan klien berulang dan dapat direncanakan. Tentukan kapasitas, output, response time, batas revisi, dan rollover agar retainer tidak berubah menjadi akses tanpa batas.",
            how: ["Cocok jika kebutuhan klien berulang dan dapat direncanakan.", "Tentukan kapasitas, output, response time, batas revisi.", "dan rollover agar retainer tidak berubah menjadi akses tanpa batas."],
            example: "Contoh penerapan: Cocok jika kebutuhan klien berulang dan dapat direncanakan.",
            doneWhen: "Selesai jika pilih repeat atau retainer sudah diterapkan dan dapat dibuktikan: dan rollover agar retainer tidak berubah menjadi akses tanpa batas.",
          }),
          action({
            title: "Bangun tim kecil secara bertahap",
            why: "Mulai dari task yang terdokumentasi dan berisiko rendah. Pilih orang yang kompeten, buat QA dan komunikasi jelas, lalu pastikan struktur agency serta kontrak Upwork mematuhi kebijakan platform.",
            how: ["Mulai dari task yang terdokumentasi dan berisiko rendah.", "Pilih orang yang kompeten, buat QA dan komunikasi jelas.", "lalu pastikan struktur agency serta kontrak Upwork mematuhi kebijakan platform."],
            example: "Contoh penerapan: Mulai dari task yang terdokumentasi dan berisiko rendah.",
            doneWhen: "Selesai jika bangun tim kecil secara bertahap sudah diterapkan dan dapat dibuktikan: lalu pastikan struktur agency serta kontrak Upwork mematuhi kebijakan platform.",
          }),
          action({
            title: "Review setelah 90 hari",
            why: "Ukur revenue, margin, jam kerja, kualitas, stres, dan kepuasan klien. Pertahankan model yang memperbaiki bisnis sekaligus keberlanjutan kerja—bukan hanya omzet.",
            how: ["Ukur revenue, margin, jam kerja, kualitas, stres.", "dan kepuasan klien.", "Pertahankan model yang memperbaiki bisnis sekaligus keberlanjutan kerja—bukan hanya omzet."],
            example: "Contoh penerapan: Ukur revenue, margin, jam kerja, kualitas, stres.",
            doneWhen: "Selesai jika review setelah 90 hari sudah diterapkan dan dapat dibuktikan: pertahankan model yang memperbaiki bisnis sekaligus keberlanjutan kerja—bukan hanya omzet.",
          }),
        ],
      },
    ],
  },
]

export const officialResources = [
  { label: 'Cara kerja Upwork untuk freelancer', url: 'https://www.upwork.com/i/how-it-works/freelancer/' },
  { label: 'Panduan talent badges', url: 'https://support.upwork.com/hc/en-us/articles/360049702614-Learn-about-Upwork-s-talent-badges' },
  { label: 'Penjelasan Job Success Score', url: 'https://support.upwork.com/hc/en-us/articles/211068358-All-about-your-Job-Success-Score' },
  { label: 'Kenali red flags dan scam', url: 'https://support.upwork.com/hc/en-us/articles/35088484250003-Recognize-red-flags-and-avoid-scams' },
  { label: 'Aturan pindah ke luar Upwork', url: 'https://support.upwork.com/hc/en-us/articles/360043723533-The-Upwork-Conversion-Fee' },
  { label: 'Panduan proposal dari Upwork', url: 'https://www.upwork.com/resources/how-to-create-a-proposal-that-wins-jobs' },
]

export const redFlags = [
  {
    category: 'Job post',
    signs: [
      'Minta kerja contoh gratis (unpaid test task) di luar Upwork sebelum kontrak resmi jalan.',
      'Ajak lanjut komunikasi lewat WhatsApp, Telegram, atau email pribadi sebelum kontrak dibuat.',
      'Budget sangat rendah untuk scope yang besar, atau deskripsi job asal copy-paste tanpa detail.',
      'Deadline sangat mepet dikombinasikan dengan permintaan akses penuh (password, kartu, akun bank) di awal.',
    ],
  },
  {
    category: 'Klien',
    signs: [
      'Profil klien baru dibuat, belum ada riwayat pembayaran (payment unverified), atau job pertama.',
      'Riwayat banyak kontrak berakhir cepat dengan rating rendah dari freelancer sebelumnya.',
      'Buka bagian review/feedback di profil klien: banyak keluhan soal telat bayar, komunikasi buruk, atau scope creep dari freelancer lain adalah sinyal kuat, bukan cuma lihat angka rating.',
      'Menolak menggunakan Upwork Messages/kontrak resmi, minta transaksi di luar platform.',
      'Menjanjikan bonus besar atau proyek jangka panjang tapi menekan supaya mulai kerja sebelum kontrak aktif.',
    ],
  },
  {
    category: 'Saat proses',
    signs: [
      'Klien minta refund setelah milestone dirilis tanpa alasan jelas terkait deliverable.',
      'Komunikasi berubah drastis jadi menekan/tidak sabar begitu kontrak dimulai.',
      'Diminta menyetujui perubahan scope besar tanpa penyesuaian rate atau timeline.',
    ],
  },
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
  console.assert(allLessonIds.length === 28, 'Curriculum must contain 28 lessons')
  console.assert(calculateProgress({}).percentage === 0, 'Empty progress must be 0%')
  console.assert(calculateProgress(Object.fromEntries(allLessonIds.map((id) => [id, true]))).percentage === 100, 'Full progress must be 100%')
}

export default curriculum
