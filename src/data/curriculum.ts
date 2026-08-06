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
        summary: 'Pilih layanan dari kemampuan, bukti, dan kebutuhan pasar nyata. Jika belum siap, bangun skill serta concept project secara terarah.',
        outcome: 'Satu layanan awal dengan target klien, deliverable, tools, dan dasar riset job yang jelas.',
        actions: [
          action({
            title: 'Petakan modal atau jalur belajar terarah',
            why: 'Label umum tidak menunjukkan pekerjaan yang mampu kamu selesaikan. Tugas, bukti, dan hasil konkret membantu menilai skill yang sudah siap dijual atau masih perlu dilatih.',
            how: [
              'Uraikan pengalaman: ubah jabatan, kuliah, organisasi, atau proyek pribadi menjadi tugas spesifik, tools, output, dan perubahan yang benar-benar terjadi.',
              'Kelompokkan kandidat: pilih maksimal tiga skill berdasarkan pengalaman, bukti, minat menjalankannya berulang, dan peluang permintaan yang akan divalidasi.',
              'Perkuat skill lemah: bandingkan hasilmu dengan portfolio profesional, pilih satu gap utama, lalu latihan terfokus sampai menghasilkan bukti baru.',
              'Mulai dari nol: pilih satu output sempit, pelajari dasar dari sumber fokus, lalu buat dua concept project tanpa mengarang klien atau hasil.',
            ],
            example: 'Pengalaman mengelola Instagram toko keluarga diurai menjadi perencanaan tiga konten mingguan, desain Canva, penjadwalan, dan balasan pesan. Kandidat layanan: content planning untuk bisnis F&B kecil.',
            doneWhen: 'Tersedia maksimal tiga kandidat skill, masing-masing dengan dua tugas konkret dan bukti atau rencana latihan yang jujur.',
          }),
          action({
            title: 'Validasi kebutuhan lewat job Upwork asli',
            why: 'Permintaan pasar dapat memakai tools, deliverable, dan standar berbeda dari dugaanmu. Riset job mencegah pilihan layanan dibangun hanya dari minat atau asumsi.',
            how: [
              'Cari job: gunakan beberapa variasi keyword untuk tiap kandidat agar hasil tidak bergantung pada satu istilah pencarian.',
              'Catat pola: rekam deliverable, tools, level pengalaman, budget yang terlihat, dan masalah klien tanpa menyalin data pribadi.',
              'Nilai kecocokan: bandingkan frekuensi kebutuhan dengan kemampuan serta bukti yang kamu miliki sekarang.',
              'Pilih arah: utamakan titik temu paling kuat antara kebutuhan berulang, kesiapan kerja, dan bukti yang dapat ditampilkan.',
            ],
            example: 'Dari sampel job social media, kebutuhan berulang adalah kalender konten, desain Canva, dan laporan sederhana. Pengalaman toko keluarga paling dekat dengan pola itu dibanding kandidat desain logo.',
            doneWhen: 'Catatan job nyata menunjukkan satu kandidat paling masuk akal beserta pola masalah, tools, dan deliverable yang mendukung pilihan tersebut.',
          }),
          action({
            title: 'Rumuskan layanan pertama',
            why: 'Satu definisi layanan menjaga profil, portfolio, dan proposal tetap konsisten. Tanpanya, kamu mudah mengejar job acak yang tidak memperkuat posisi pasar.',
            how: [
              'Pilih klien: tentukan satu kelompok yang paling cocok dengan pengalaman dan temuan risetmu.',
              'Pilih masalah: gunakan kebutuhan berulang yang mampu kamu selesaikan sekarang.',
              'Tentukan output: sebutkan deliverable konkret serta skill atau tools utama yang dipakai.',
              'Susun kalimat: gunakan format “Saya membantu [klien] menghasilkan [deliverable] dengan [skill/tools].”',
            ],
            example: 'Saya membantu bisnis F&B kecil menyiapkan konten Instagram mingguan berupa desain, caption, dan kalender publikasi menggunakan Canva.',
            doneWhen: 'Satu kalimat layanan menyebut target klien, deliverable, dan cara kerja tanpa membutuhkan penjelasan tambahan.',
          }),
        ],
        source: { label: 'Panduan resmi kategori skill Upwork', url: 'https://www.upwork.com/i/how-it-works/freelancer/' },
      },
      {
        id: 'build-initial-proof',
        title: 'Siapkan dua bukti kemampuan',
        duration: '90 menit',
        summary: 'Bukti dari kantor, kuliah, organisasi, atau proyek pribadi dapat dipakai jika relevan, aman dipublikasikan, dan disajikan jujur.',
        outcome: 'Minimal dua project relevan yang menunjukkan konteks, proses, kontribusi, dan hasil tanpa klaim palsu.',
        actions: [
          action({
            title: 'Audit bukti lama dan izin publikasi',
            why: 'Karya relevan mungkin sudah tersedia, tetapi kontrak, NDA, data pribadi, atau kontribusi tim membatasi penggunaannya. Audit mencegah portfolio merusak kepercayaan atau melanggar kewajiban.',
            how: [
              'Kumpulkan kandidat: inventarisasi project kantor, kuliah, organisasi, volunteer, dan pribadi yang mendukung layanan utama.',
              'Periksa hak: baca kontrak atau NDA, pastikan izin publikasi, dan minta persetujuan tertulis bila statusnya tidak jelas.',
              'Lindungi data: anonimkan nama, kontak, data pengguna, dan informasi finansial; gunakan data simulasi bila diperlukan.',
              'Jelaskan kontribusi: pisahkan pekerjaanmu dari hasil tim dan jangan mengklaim bagian yang dikerjakan orang lain.',
            ],
            example: 'Laporan kantor direkonstruksi memakai data simulasi, sedangkan rumus dan struktur analisis tetap menunjukkan kemampuan. Deskripsi menyebutnya rekonstruksi serta menjelaskan kontribusi pribadi.',
            doneWhen: 'Setiap bukti terpilih memiliki status izin jelas, data sensitif terlindungi, dan kontribusi pribadi dijelaskan proporsional.',
          }),
          action({
            title: 'Isi kekurangan dengan concept project',
            why: 'Portfolio kosong tidak perlu diisi dengan klien atau hasil palsu. Concept project dapat membuktikan proses bila masalahnya realistis, pengerjaannya serius, dan labelnya terbuka.',
            how: [
              'Ambil masalah: pilih kebutuhan berulang dari riset job, bukan brief yang tidak terkait pasar.',
              'Tulis brief: tetapkan target pengguna, scope, batasan, deliverable, dan standar kualitas seperti proyek berbayar.',
              'Kerjakan penuh: lakukan riset, draft, revisi mandiri, dan hasil akhir menggunakan proses kerja sebenarnya.',
              'Beri label: tulis “personal project” atau “concept project” tanpa nama klien, testimoni, maupun dampak bisnis rekaan.',
            ],
            example: 'Concept project toko kopi berisi brief satu minggu konten, tujuh desain, caption, dan kalender publikasi. Portfolio menyatakan bahwa proyek ini simulasi, bukan pekerjaan klien.',
            doneWhen: 'Bukti yang kurang diganti concept project lengkap dan berlabel jelas, tanpa klien, testimoni, atau hasil bisnis rekaan.',
          }),
          action({
            title: 'Susun bukti menjadi studi kasus',
            why: 'Hasil akhir saja tidak menunjukkan cara berpikir atau batas tanggung jawabmu. Studi kasus singkat membantu klien memahami masalah, keputusan, proses, dan kualitas hasil.',
            how: [
              'Tulis konteks: jelaskan situasi awal, kebutuhan, batasan, serta tujuan proyek dalam beberapa kalimat.',
              'Jelaskan proses: sebutkan peran, tools, satu keputusan penting, dan alasan memilihnya.',
              'Tampilkan hasil: prioritaskan deliverable akhir serta satu atau dua artefak proses yang membantu pemahaman.',
              'Batasi klaim: gunakan metrik terverifikasi bila tersedia; jika tidak, jelaskan hasil kualitatif spesifik tanpa mengarang angka.',
            ],
            example: 'Studi kasus kalender konten menjelaskan masalah publikasi tidak konsisten, keputusan membuat produksi batch, contoh draft, deliverable akhir, dan hasil kualitatif yang memang tercatat.',
            doneWhen: 'Dua studi kasus dapat dipahami cepat dan masing-masing memuat konteks, peran, keputusan, proses, serta hasil yang dapat dibuktikan.',
          }),
        ],
      },
      {
        id: 'work-english-check',
        title: 'Uji English untuk komunikasi kerja',
        duration: '40 menit',
        summary: 'English kerja tidak harus seperti penutur asli. Prioritasnya memahami scope dan menyampaikan pertanyaan, progres, serta serah terima tanpa salah tafsir.',
        outcome: 'Mampu membaca brief dan menulis empat jenis pesan kerja dalam English sederhana serta akurat.',
        actions: [
          action({
            title: 'Uji pemahaman job description',
            why: 'Kesalahan membaca jumlah output, deadline, revisi, atau tools dapat merusak proyek meski skill teknis memadai. Latihan dari job asli menguji pemahaman dalam konteks kerja.',
            how: [
              'Pilih brief: ambil tiga job description sesuai layanan yang ditargetkan.',
              'Ringkas isi: tulis tujuan, deliverable, deadline, tools, dan batasan dalam Bahasa Indonesia.',
              'Pelajari istilah: cari makna frasa asing sesuai konteks freelance, bukan hanya terjemahan kamus.',
              'Periksa ulang: bandingkan ringkasan dengan teks asli dan koreksi detail yang terlewat.',
            ],
            example: 'Brief meminta tiga script Reels per minggu dan revisi maksimal 24 jam. Ringkasan harus memuat kedua batas itu, bukan hanya kebutuhan menulis script.',
            doneWhen: 'Tiga brief diringkas akurat dengan tujuan, deliverable, tenggat, tools, dan batasan utama tanpa detail penting terlewat.',
          }),
          action({
            title: 'Siapkan empat pesan kerja inti',
            why: 'Komunikasi proyek berulang pada pola klarifikasi, konfirmasi, update, dan penyerahan. Template yang dipahami sendiri mempercepat respons tanpa mengorbankan kejelasan atau ketepatan makna.',
            how: [
              'Klarifikasi: tulis pertanyaan singkat tentang scope, audiens, referensi, atau prioritas yang belum jelas.',
              'Konfirmasi: ringkas pemahaman atas brief dan minta koreksi sebelum mulai bekerja.',
              'Update: gunakan struktur completed, blocker atau decision needed, lalu next step.',
              'Serah terima: sebutkan deliverable, lokasi file, instruksi penting, dan cara memberikan feedback.',
            ],
            example: '“Completed: two scripts drafted. Decision needed: casual or formal tone. Next: I will finalize all scripts after your confirmation.”',
            doneWhen: 'Empat template tersedia, dipahami kata per kata, dan dapat disesuaikan tanpa menerjemahkan ulang dari awal.',
          }),
          action({
            title: 'Latih penjelasan layanan secara lisan',
            why: 'Interview singkat membutuhkan jawaban jelas tanpa membaca naskah panjang. Latihan lisan mengungkap kosakata atau bagian proses yang belum benar-benar kamu pahami.',
            how: [
              'Rekam jawaban: jelaskan layanan, proses, dan contoh project dalam English selama satu hingga dua menit.',
              'Periksa makna: tandai kalimat yang ambigu, terlalu panjang, atau memakai kata yang tidak kamu kuasai.',
              'Sederhanakan bahasa: ganti istilah sulit dengan kosakata kerja yang tetap akurat dan natural.',
              'Ulangi latihan: rekam kembali sampai penjelasan runtut tanpa membaca seluruh naskah.',
            ],
            example: 'Saat menjelaskan content planning, freelancer menyebut target klien, langkah riset, kalender mingguan, dan contoh deliverable tanpa mengklaim hasil yang belum terjadi.',
            doneWhen: 'Rekaman menjelaskan layanan, proses, dan satu bukti dengan runtut memakai kalimat yang dipahami sendiri.',
          }),
        ],
      },
      {
        id: 'create-valid-upwork-account',
        title: 'Buat akun Upwork yang valid',
        duration: '25 menit',
        summary: 'Gunakan identitas asli dan data konsisten karena pemeriksaan keamanan atau verifikasi dapat terjadi. Satu akun yang valid lebih aman daripada jalan pintas.',
        outcome: 'Satu akun freelancer valid, aman, dan dapat mengakses seluruh bagian edit profil.',
        actions: [
          action({
            title: 'Daftar dengan identitas asli',
            why: 'Data yang tidak cocok dengan identitas atau metode pembayaran dapat memicu masalah verifikasi. Pendaftaran yang benar sejak awal melindungi akses akun dan proses pembayaran.',
            how: [
              'Samakan identitas: gunakan nama legal, negara, dan lokasi yang sesuai dokumen resmi.',
              'Gunakan kontak pribadi: siapkan email dan nomor telepon aktif yang kamu kuasai sendiri.',
              'Siapkan dokumen: pastikan identitas resmi tersedia jika platform meminta verifikasi.',
              'Ikuti alur resmi: buat hanya satu akun utama dan jangan memakai akun milik orang lain.',
            ],
            example: 'Nama panggilan berbeda dari KTP. Pendaftaran tetap memakai nama legal yang sama dengan dokumen dan metode pembayaran, sedangkan nama panggilan tidak menggantikannya.',
            doneWhen: 'Pendaftaran memakai data asli yang konsisten, kontak pribadi aktif, dan hanya satu akun freelancer utama dibuat.',
          }),
          action({
            title: 'Selesaikan verifikasi dan keamanan',
            why: 'Akun yang dapat login belum tentu siap digunakan bila verifikasi masih tertunda atau bagian profil terkunci. Pengamanan tambahan juga penting karena akun terhubung dengan kontrak dan pembayaran.',
            how: [
              'Periksa akses: buka menu edit headline, overview, skills, rate, employment history, dan portfolio.',
              'Tuntaskan onboarding: jawab permintaan verifikasi secara jujur dan jangan melewati langkah wajib.',
              'Aktifkan keamanan: nyalakan two-factor authentication dan simpan metode pemulihan secara aman.',
              'Jaga kepemilikan: jangan membagikan login atau meminta orang lain mengoperasikan akunmu.',
            ],
            example: 'Setelah daftar, menu portfolio masih terkunci karena verifikasi tambahan. Verifikasi diselesaikan melalui alur resmi sebelum profil mulai diisi.',
            doneWhen: 'Semua menu edit profil dapat diakses, verifikasi wajib selesai, dan two-factor authentication aktif.',
          }),
          action({
            title: 'Pahami batas penggunaan akun',
            why: 'Akun freelancer mewakili identitas dan pekerjaan pemiliknya. Berbagi akses, memalsukan lokasi, atau membuat akun tambahan dapat menimbulkan pemeriksaan serta pembatasan akun.',
            how: [
              'Gunakan sendiri: operasikan akun, komunikasi, dan pekerjaan melalui identitas pemilik yang terverifikasi.',
              'Jaga lokasi: perbarui informasi hanya ketika kondisi sebenarnya berubah dan ikuti alur resmi.',
              'Hindari duplikasi: gunakan pengaturan profil yang tersedia, bukan akun baru untuk layanan berbeda.',
              'Baca kebijakan: periksa panduan resmi sebelum memberi akses atau mengubah informasi sensitif.',
            ],
            example: 'Saat ingin menawarkan layanan kedua, freelancer memperbarui bagian profil yang tersedia dan tidak membuat akun baru dengan email berbeda.',
            doneWhen: 'Aturan pribadi tertulis menegaskan satu akun, data asli, akses pribadi, dan perubahan melalui alur resmi.',
          }),
        ],
        source: { label: 'Panduan membuat akun Upwork', url: 'https://support.upwork.com/hc/en-us/articles/211067788-Create-an-account' },
      },
      {
        id: 'prepare-work-system',
        title: 'Siapkan perangkat dan kapasitas kerja',
        duration: '30 menit',
        summary: 'Perangkat, koneksi, backup, dan waktu harus diuji sebelum kontrak. Kesiapan operasional mencegah deadline meleset akibat kapasitas yang hanya diasumsikan.',
        outcome: 'Sistem kerja teknis dan jadwal mingguan yang realistis untuk mencari job serta mengirim hasil.',
        actions: [
          action({
            title: 'Uji perangkat dan jalur cadangan',
            why: 'Perangkat yang cukup untuk aktivitas ringan belum tentu mampu menjalankan workflow proyek. Pengujian realistis menunjukkan hambatan sebelum deadline klien bergantung pada sistemmu.',
            how: [
              'Simulasikan workflow: jalankan tools utama bersamaan dengan file berukuran dan kompleksitas yang wajar untuk layananmu.',
              'Uji proses berat: lakukan export, render, build, upload, atau video call dan catat hambatan perangkat serta koneksi.',
              'Siapkan cadangan: tentukan alternatif perangkat, lokasi kerja, dan hotspot jika sistem utama gagal.',
              'Lindungi file: aktifkan backup otomatis serta gunakan struktur folder, nama file, dan versi yang konsisten.',
            ],
            example: 'Saat mengedit video sambil membuka browser dan chat, proses render terlalu berat. Workflow disesuaikan dan lokasi cadangan ditetapkan sebelum menerima job video.',
            doneWhen: 'Simulasi kerja selesai tanpa kegagalan fatal, backup file aktif, dan alternatif perangkat serta koneksi sudah ditentukan.',
          }),
          action({
            title: 'Tetapkan kapasitas mingguan',
            why: 'Overpromise memperbesar risiko keterlambatan dan kualitas buruk pada kontrak awal. Kapasitas berdasarkan waktu nyata membuat komitmen, komunikasi, dan delivery lebih konsisten.',
            how: [
              'Hitung waktu nyata: kurangi pekerjaan utama, keluarga, administrasi, dan istirahat dari jadwal mingguan.',
              'Pisahkan blok: alokasikan waktu untuk riset job, proposal, komunikasi, pengerjaan, dan revisi.',
              'Sisakan buffer: jangan menjual seluruh waktu kosong karena perubahan scope dan gangguan tetap mungkin terjadi.',
              'Batasi proyek: tetapkan jumlah pekerjaan aktif dari jam tersedia dan kompleksitas, bukan target pendapatan semata.',
            ],
            example: 'Delapan jam tersedia dibagi untuk pencarian, komunikasi, delivery, dan buffer. Dengan pembagian itu, hanya satu proyek kecil diterima pada waktu bersamaan.',
            doneWhen: 'Kalender memuat blok kerja, buffer, dan batas proyek aktif yang sesuai waktu kosong sebenarnya.',
          }),
          action({
            title: 'Siapkan ruang kerja dan handoff',
            why: 'Perangkat yang kuat belum menjamin file mudah ditemukan atau dikirim. Struktur kerja sederhana mengurangi kehilangan versi, kebingungan akses, dan keterlambatan saat handoff.',
            how: [
              'Buat struktur: pisahkan brief, aset klien, working files, review, dan final deliverables.',
              'Tetapkan versi: gunakan nama project, jenis file, status, dan tanggal secara konsisten.',
              'Uji berbagi: pastikan link, izin akses, format file, dan folder final dapat dibuka dari akun lain.',
              'Siapkan checklist: catat brief, deadline, backup, approval, dan handoff untuk setiap proyek.',
            ],
            example: 'Project simulasi disimpan dalam folder brief, assets, working, review, dan final. Link final diuji dari browser privat sebelum dikirim.',
            doneWhen: 'Template folder, aturan versi, checklist proyek, dan uji akses file final sudah siap digunakan.',
          }),
        ],
      },
      {
        id: 'payment-admin-readiness',
        title: 'Siapkan pembayaran dan administrasi',
        duration: '35 menit',
        summary: 'Nilai kontrak bukan dana bersih. Periksa potongan yang berlaku dan catat transaksi sejak awal agar keputusan rate, penarikan, serta pajak memakai data nyata.',
        outcome: 'Metode penarikan terpilih dan sistem pencatatan pendapatan siap digunakan sejak transaksi pertama.',
        actions: [
          action({
            title: 'Pilih metode penarikan dan hitung bersih',
            why: 'Metode, biaya, kurs, dan waktu proses dapat berbeda menurut akun serta negara. Perhitungan berdasarkan informasi terbaru mencegah nilai kontrak kotor dianggap sebagai uang yang tersedia.',
            how: [
              'Periksa opsi: lihat metode penarikan yang tersedia langsung di pengaturan akunmu.',
              'Bandingkan kondisi: catat biaya, waktu proses, kurs, batas penarikan, dan kecocokan nama penerima yang berlaku saat itu.',
              'Hitung bersih: kurangi fee platform, biaya penarikan, selisih kurs, tools, dan cadangan pajak dari nilai kotor.',
              'Simpan rumus: gunakan template yang mudah diperbarui ketika kebijakan atau biaya berubah.',
            ],
            example: 'Untuk skenario kontrak US$200, spreadsheet mengurangi fee yang tampil pada transaksi, biaya penarikan, konversi kurs, tools, dan cadangan pajak tanpa menganggap nilainya tetap.',
            doneWhen: 'Satu metode penarikan dipilih dan template menghitung nilai bersih memakai biaya serta kurs yang berlaku saat transaksi.',
          }),
          action({
            title: 'Bangun pencatatan transaksi',
            why: 'Merekonstruksi transaksi lama rawan kehilangan detail biaya, kurs, dan bukti. Pencatatan sejak transaksi pertama memberi dasar rapi untuk evaluasi pendapatan dan kewajiban administrasi.',
            how: [
              'Buat tabel: catat tanggal, klien, contract ID, nilai kotor, fee, kurs, biaya penarikan, dan nilai bersih.',
              'Arsipkan bukti: simpan invoice, laporan transaksi, dan bukti penarikan dalam folder per tahun.',
              'Perbarui langsung: isi catatan setiap transaksi terjadi agar detail tidak hilang atau tertukar.',
              'Cari bantuan: konsultasikan pajak lokal kepada profesional bila situasimu kompleks atau aturannya tidak dipahami.',
            ],
            example: 'Setelah dana cair, satu baris transaksi diisi memakai fee dan kurs aktual, lalu bukti penarikan disimpan pada folder tahun berjalan.',
            doneWhen: 'Spreadsheet dan folder bukti tersedia, dengan prosedur pengisian yang dapat dijalankan setiap transaksi.',
          }),
          action({
            title: 'Jadwalkan pemeriksaan biaya dan pajak',
            why: 'Biaya platform, metode penarikan, kurs, dan kewajiban lokal dapat berubah. Pemeriksaan berkala menjaga perhitungan tetap memakai informasi aktual tanpa menanam angka tetap dalam rencana.',
            how: [
              'Simpan sumber: bookmark halaman pembayaran resmi, laporan transaksi, dan rujukan pajak lokal yang relevan.',
              'Catat tanggal: tandai kapan biaya, metode, kurs, dan asumsi pajak terakhir diperiksa.',
              'Perbarui template: ubah rumus atau pilihan metode jika kondisi aktual berbeda.',
              'Dokumentasikan keputusan: tulis alasan perubahan agar perbandingan periode tetap dapat dipahami.',
            ],
            example: 'Sebelum penarikan, freelancer membuka biaya aktual pada akun, memperbarui asumsi spreadsheet, dan menyimpan tanggal pemeriksaan tanpa menganggap biaya lama masih berlaku.',
            doneWhen: 'Reminder pemeriksaan tersedia dan setiap asumsi biaya memiliki sumber serta tanggal pembaruan terakhir.',
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
        summary: 'Lengkapi profil dengan informasi relevan dan konsisten. Setelah itu, audit tampilan publik serta pastikan setiap klaim dapat dibuktikan.',
        outcome: 'Profil lengkap, fokus, mudah dipahami, dan bebas klaim yang tidak dapat diverifikasi.',
        actions: [
          action({
            title: 'Lengkapi riwayat profesional',
            why: 'Riwayat yang lengkap memberi konteks tentang kapasitas dan pengalamanmu. Setiap bagian harus akurat, relevan, serta mendukung layanan utama, bukan sekadar mengejar status lengkap.',
            how: [
              'Employment history: isi pengalaman relevan dengan tugas, kontribusi, tools, dan hasil yang benar-benar terjadi.',
              'Education dan certification: cantumkan pendidikan serta sertifikat relevan yang masih dapat diverifikasi.',
              'Language dan availability: pilih level komunikasi serta kapasitas kerja sesuai kemampuan dan jadwal nyata.',
              'Periksa konsistensi: samakan tanggal, jabatan, spesialisasi, dan informasi penting dengan dokumen sumber.',
            ],
            example: 'Riwayat product designer menjelaskan peran dalam redesign onboarding, kolaborasi dengan engineer, dan perubahan terverifikasi dari data internal, bukan label jabatan saja.',
            doneWhen: 'Riwayat, pendidikan, sertifikasi, bahasa, dan availability terisi akurat serta mendukung layanan yang sama.',
          }),
          action({
            title: 'Selaraskan identitas profil',
            why: 'Bagian profil yang mengarah ke layanan berbeda membuat spesialisasi sulit dipahami. Keselarasan membantu klien menghubungkan headline, skills, rate, dan portfolio sebagai satu penawaran.',
            how: [
              'Tetapkan fokus: pilih satu layanan utama dan satu kelompok klien berdasarkan riset serta bukti.',
              'Selaraskan copy: pastikan headline dan overview menyebut fokus yang sama dengan bahasa jelas.',
              'Kurasi bukti: pilih skills relevan dan tempatkan portfolio paling dekat dengan layanan di urutan awal.',
              'Tinjau rate: beri alasan berdasarkan pengalaman, kompleksitas, bukti, dan benchmark tanpa menganggap angka pasar sebagai aturan.',
            ],
            example: 'Headline “SaaS UX Designer | Onboarding & Dashboard” didukung skills UX Research dan Figma serta dua studi kasus SaaS pada urutan teratas.',
            doneWhen: 'Headline, overview, skills, portfolio, dan rate mendukung satu layanan serta target klien yang sama.',
          }),
          action({
            title: 'Audit tampilan dan akurasi',
            why: 'Tampilan publik menentukan apa yang benar-benar dilihat klien. Audit singkat juga menangkap klaim, angka, testimoni, atau sertifikat yang tidak konsisten sebelum dipublikasikan.',
            how: [
              'Buka profil publik: periksa tampilan desktop dan ponsel seperti klien baru.',
              'Uji pemahaman: minta peninjau menyebut target klien, masalah, dan satu bukti setelah membaca singkat.',
              'Telusuri klaim: cocokkan angka, tanggal, testimoni, sertifikat, dan hasil dengan bukti sumber.',
              'Perbaiki hambatan: ringkas, urutkan ulang, atau hapus informasi yang kabur, berulang, maupun tidak terbukti.',
            ],
            example: 'Peninjau mengenali fokus onboarding SaaS, tetapi tidak menemukan bukti cepat. Studi kasus relevan dipindahkan ke urutan pertama dan klaim tanpa sumber dihapus.',
            doneWhen: 'Peninjau memahami fokus dan satu bukti utama; seluruh klaim publik dapat ditelusuri ke sumber yang sah.',
          }),
        ],
      },
      {
        id: 'market-benchmark',
        title: 'Benchmark pasar tanpa meniru profil',
        duration: '35 menit',
        summary: 'Gunakan sampel profil dan job relevan untuk memahami bahasa pasar, kebutuhan, serta rate. Ambil pola, bukan kalimat atau identitas orang lain.',
        outcome: 'Catatan benchmark niche yang menghubungkan keyword, kebutuhan, bukti, dan alasan rate.',
        actions: [
          action({
            title: 'Tentukan niche dan kumpulkan sampel',
            why: 'Benchmark kategori umum mencampur layanan yang tidak sebanding. Niche sempit dan sampel manual memberi konteks yang lebih berguna tanpa otomatisasi berisiko atau pengambilan data pribadi.',
            how: [
              'Tentukan niche: gabungkan target klien, masalah utama, deliverable, dan level layanan menjadi satu frasa pencarian.',
              'Cari resmi: gunakan pencarian Upwork dan variasi istilah yang lazim muncul pada job target.',
              'Catat sampel: rekam headline, skills, rate, deliverable, dan masalah dari profil serta job relevan.',
              'Jaga batas: kumpulkan manual untuk analisis pribadi, tanpa scraper, penyalinan profil, atau data identitas.',
            ],
            example: 'Frasa “B2B SaaS UX onboarding” dipakai untuk membandingkan profil dan job yang benar-benar menawarkan audit onboarding serta prototype Figma.',
            doneWhen: 'Satu tabel manual berisi sampel profil dan job yang sebanding, tanpa data pribadi atau salinan kalimat.',
          }),
          action({
            title: 'Temukan pola dan benchmark rate',
            why: 'Pola istilah dan distribusi rate lebih berguna daripada satu profil populer. Analisis ini memberi referensi, bukan aturan harga atau alasan untuk meniru positioning orang lain.',
            how: [
              'Normalisasi istilah: kelompokkan keyword berbeda yang mewakili masalah atau deliverable serupa.',
              'Tandai pola: catat istilah, skills, kebutuhan, dan jenis bukti yang berulang dalam sampel.',
              'Analisis rate: urutkan rate profil sebanding dan gunakan nilai tengah sebagai referensi tahan pencilan.',
              'Tentukan alasan: sesuaikan rate dengan pengalaman, kompleksitas, bukti, komunikasi, dan kondisi profilmu.',
            ],
            example: 'Istilah “activation flow” dan “signup UX” dikelompokkan sebagai onboarding. Rate dipilih dari posisi pengalaman sendiri setelah melihat distribusi sampel, bukan menyalin angka tertinggi.',
            doneWhen: 'Pola niche dan referensi rate terdokumentasi, lengkap dengan alasan penyesuaian terhadap kondisi sendiri.',
          }),
          action({
            title: 'Pasangkan keyword dengan bukti',
            why: 'Keyword tanpa pengalaman membuat positioning terasa dibuat hanya untuk pencarian. Setiap istilah utama harus dapat dijelaskan melalui project, proses, hasil, atau pembelajaran yang nyata.',
            how: [
              'Daftar keyword: pilih istilah yang berulang dan relevan dari benchmark.',
              'Hubungkan bukti: pasangkan tiap istilah dengan project, pengalaman, sertifikat, atau hasil terverifikasi.',
              'Nilai kekuatan: tandai bukti kuat, lemah, atau belum ada agar batas kemampuan terlihat.',
              'Saring daftar: hapus keyword tanpa dasar dan prioritaskan yang paling dekat dengan layanan utama.',
            ],
            example: 'Keyword “mobile usability testing” dipakai karena ada project riset pengguna dan laporan temuan. “Fintech compliance” dihapus karena belum pernah dikerjakan.',
            doneWhen: 'Setiap keyword utama memiliki bukti spesifik yang dapat dijelaskan jujur saat interview.',
          }),
        ],
      },
      {
        id: 'headshot',
        title: 'Bangun first impression profesional',
        duration: '15 menit',
        summary: 'Foto profil harus jelas pada ukuran kecil, tampak profesional, dan tetap merepresentasikan dirimu. Peralatan sederhana cukup bila cahaya serta komposisi tepat.',
        outcome: 'Headshot terbaru, tajam, terang, autentik, dan mudah dikenali sebagai avatar.',
        actions: [
          action({
            title: 'Atur framing, cahaya, dan latar',
            why: 'Avatar kecil membutuhkan wajah yang dominan dan mudah dikenali. Cahaya merata serta latar sederhana mengurangi gangguan tanpa memerlukan kamera atau studio khusus.',
            how: [
              'Atur kamera: ambil kepala dan bahu dengan lensa sejajar mata serta ekspresi natural.',
              'Gunakan cahaya depan: hadap jendela atau sumber lembut dan hindari backlight yang menggelapkan wajah.',
              'Pilih latar: gunakan bidang sederhana yang cukup kontras dengan pakaian dan bebas objek pengganggu.',
              'Uji crop: pastikan kepala, mata, dan bahu tetap terbaca dalam bentuk persegi maupun lingkaran.',
            ],
            example: 'Foto ponsel di dekat jendela menampilkan kepala dan bahu, mata sejajar kamera, dinding polos, serta ruang tipis di atas kepala.',
            doneWhen: 'Wajah menjadi fokus, terang merata, dan komposisi tetap jelas setelah dipotong menjadi avatar.',
          }),
          action({
            title: 'Jaga autentisitas dan uji thumbnail',
            why: 'Foto terbaru membantu klien mengenali orang yang akan bekerja dengan mereka. Filter berat, gambar AI, logo, atau foto grup mengaburkan identitas dan menurunkan kepercayaan.',
            how: [
              'Pilih foto terbaru: gunakan penampilan yang masih sesuai dengan kondisi saat ini.',
              'Jaga kualitas: pakai file tajam tanpa blur, kompresi berat, atau perubahan bentuk wajah.',
              'Hindari pengganti: jangan gunakan logo, ilustrasi, foto grup, atau gambar AI sebagai identitas diri.',
              'Periksa kecil: uji sebagai thumbnail dan minta satu orang menilai kejelasan serta kesan profesional.',
            ],
            example: 'Potret terbaru dikoreksi warna ringan tanpa penghalusan wajah. Pada thumbnail, mata dan ekspresi tetap terbaca serta tidak tertutup crop.',
            doneWhen: 'Foto autentik tetap jelas pada thumbnail dan peninjau mengenali wajah serta kesan profesional tanpa melihat versi besar.',
          }),
          action({
            title: 'Unggah dan periksa hasil akhir',
            why: 'Crop atau kompresi platform dapat mengubah foto yang sebelumnya terlihat baik. Pemeriksaan setelah upload memastikan avatar publik tetap jelas dan tidak terpotong.',
            how: [
              'Unggah file: gunakan format dan ukuran yang diterima platform tanpa kompresi berulang.',
              'Atur crop: posisikan wajah tetap di tengah dengan ruang aman di sekeliling kepala.',
              'Buka publik: periksa avatar pada profil dan tampilan kecil setelah proses upload selesai.',
              'Ganti bila perlu: unggah crop lain jika mata, kepala, atau kontras tidak terbaca.',
            ],
            example: 'Crop awal memotong bagian atas kepala pada avatar lingkaran. Foto diunggah ulang dengan ruang lebih besar agar wajah tetap utuh.',
            doneWhen: 'Avatar publik menampilkan wajah utuh, tajam, dan mudah dikenali pada tampilan profil serta thumbnail.',
          }),
        ],
      },
      {
        id: 'positioning',
        title: 'Tulis positioning yang spesifik',
        duration: '35 menit',
        summary: 'Positioning mempertemukan masalah klien, layanan, dan bukti. Gunakan istilah pasar yang relevan, lalu tulis headline serta overview dari sudut pandang klien.',
        outcome: 'Headline dan overview menjelaskan target klien, masalah, layanan, proses, dan bukti secara konsisten.',
        actions: [
          action({
            title: 'Pilih kombinasi klien dan masalah',
            why: 'Profil untuk semua orang sulit terasa relevan bagi siapa pun. Fokus utama membantu klien yang tepat mengenali kecocokan tanpa melarangmu menerima pekerjaan lain.',
            how: [
              'Daftar kandidat: ambil kelompok klien dan masalah dari pengalaman, riset job, serta benchmark.',
              'Nilai kebutuhan: periksa nilai masalah bagi klien dan seberapa sering kebutuhan serupa muncul.',
              'Nilai bukti: cocokkan setiap kandidat dengan project, skill, serta hasil yang benar-benar tersedia.',
              'Pilih fokus: gunakan kombinasi dengan kebutuhan dan bukti terkuat sebagai pesan utama profil.',
            ],
            example: 'Content planning untuk bisnis F&B dipilih karena muncul berulang dan didukung pengalaman nyata; desain logo ditunda karena buktinya masih lemah.',
            doneWhen: 'Satu kombinasi target klien dan masalah dipilih dengan alasan kebutuhan pasar serta kekuatan bukti.',
          }),
          action({
            title: 'Bangun headline berbasis istilah klien',
            why: 'Headline harus cepat menjelaskan layanan dan memakai istilah yang dikenal klien. Label umum atau slogan kreatif menyulitkan penilaian kecocokan dan tidak menunjukkan masalah yang ditangani.',
            how: [
              'Ambil istilah: pilih role atau niche yang berulang pada job target dan sesuai kemampuanmu.',
              'Tambahkan konteks: sebutkan kelompok klien atau masalah bila membantu memperjelas spesialisasi.',
              'Pilih skill inti: masukkan satu atau dua skill yang didukung bukti, bukan daftar panjang.',
              'Uji kejelasan: pastikan orang baru memahami layanan tanpa membaca overview.',
            ],
            example: '“Social Media Content Manager for F&B Brands | Canva” menjelaskan role, target klien, dan skill lebih cepat daripada “Digital Marketing Enthusiast.”',
            doneWhen: 'Headline memuat role atau niche, konteks klien, dan skill terbukti dengan istilah yang digunakan pasar sasaran.',
          }),
          action({
            title: 'Tulis dan edit overview',
            why: 'Klien membaca overview untuk menilai apakah masalahnya dipahami dan dapat diselesaikan. Cerita diri panjang, filler, serta jargon menunda jawaban yang mereka butuhkan.',
            how: [
              'Buka dari klien: sebutkan target dan masalah utama pada kalimat awal.',
              'Jelaskan solusi: tulis deliverable, proses singkat, serta batas layanan dengan bahasa konkret.',
              'Tambahkan bukti: rujuk project atau hasil terverifikasi tanpa menjanjikan dampak yang belum diketahui.',
              'Edit ketat: hapus filler, pecah paragraf panjang, lalu tutup dengan ajakan diskusi spesifik.',
            ],
            example: 'Overview dibuka dengan kebutuhan bisnis F&B menjaga konten konsisten, lalu menjelaskan kalender publikasi, desain Canva, bukti project, dan ajakan membahas kebutuhan mingguan.',
            doneWhen: 'Overview mengikuti urutan klien, masalah, solusi, bukti, dan ajakan; setiap klaim didukung pengalaman nyata.',
          }),
        ],
      },
      {
        id: 'portfolio',
        title: 'Ubah portfolio menjadi bukti',
        duration: '50 menit',
        summary: 'Portfolio terkurasi menunjukkan relevansi dan cara berpikir, bukan sekadar jumlah karya. Setiap studi kasus harus jujur, aman dipublikasikan, serta mudah dipindai.',
        outcome: 'Tiga studi kasus relevan dengan konteks, kontribusi, keputusan, proses, dan hasil yang dapat dipertanggungjawabkan.',
        actions: [
          action({
            title: 'Pilih dan urutkan tiga karya',
            why: 'Karya yang tidak terkait mengaburkan positioning meski kualitasnya baik. Kurasi berdasarkan kedekatan masalah dan target klien membuat portfolio lebih mudah dinilai.',
            how: [
              'Inventarisasi karya: gunakan project yang sudah lolos audit izin dan relevansi.',
              'Nilai kesamaan: bandingkan target klien, masalah, deliverable, tools, dan tingkat kompleksitas.',
              'Pilih tiga: prioritaskan bukti paling dekat dengan positioning, bukan karya paling ramai atau estetik.',
              'Urutkan dan labeli: tampilkan yang terkuat dahulu serta jelaskan status klien, concept project, atau kerja tim.',
            ],
            example: 'Dari delapan karya, tiga project content planning F&B dipilih dan diurutkan berdasarkan relevansi. Karya logo serta administrasi tidak dimasukkan.',
            doneWhen: 'Tiga karya relevan terurut dari bukti terkuat dan masing-masing memiliki label status serta kontribusi yang jujur.',
          }),
          action({
            title: 'Tulis studi kasus ringkas',
            why: 'Gambar akhir tidak menjelaskan masalah, pilihan, atau tanggung jawabmu. Narasi ringkas menunjukkan cara berpikir tanpa membebani klien dengan seluruh kronologi proyek.',
            how: [
              'Konteks: jelaskan kondisi awal, tujuan, batasan, dan indikator keberhasilan yang memang disepakati.',
              'Peran: sebutkan scope, tools, timeline, kolaborator, serta batas kontribusimu.',
              'Proses: pilih satu atau dua keputusan penting, alternatif yang dipertimbangkan, dan alasan pemilihannya.',
              'Hasil: tampilkan deliverable serta metrik terverifikasi; gunakan perubahan kualitatif spesifik bila angka tidak tersedia.',
            ],
            example: 'Studi kasus menjelaskan keputusan produksi konten secara batch karena kapasitas approval klien terbatas, lalu menunjukkan kalender final dan hasil yang benar-benar terdokumentasi.',
            doneWhen: 'Tiga studi kasus memuat konteks, peran, keputusan, proses, dan hasil tanpa klaim yang tidak dapat dibuktikan.',
          }),
          action({
            title: 'Lindungi informasi sebelum publikasi',
            why: 'Portfolio tidak boleh mengorbankan kerahasiaan atau mengambil kredit tim. Pemeriksaan terakhir menjaga bukti tetap berguna tanpa membocorkan data atau melanggar persetujuan.',
            how: [
              'Periksa perjanjian: baca kontrak, NDA, dan izin publikasi untuk setiap project.',
              'Minta izin: dapatkan persetujuan tertulis bila hak menampilkan karya belum jelas.',
              'Anonimkan data: hapus identitas, kontak, data pengguna, serta informasi finansial sensitif.',
              'Batasi klaim: jelaskan kontribusi pribadi dan tandai data simulasi atau rekonstruksi secara terbuka.',
            ],
            example: 'Dashboard retail ditampilkan dengan nama perusahaan dihapus dan data transaksi diganti simulasi. Deskripsi menyebut kontribusi desain saja karena analisis dikerjakan anggota tim lain.',
            doneWhen: 'Setiap studi kasus memiliki izin jelas, data sensitif terlindungi, dan kontribusi pribadi dinyatakan proporsional.',
          }),
        ],
      },
      {
        id: 'reputation-roadmap',
        title: 'Pahami roadmap reputasi Upwork',
        duration: '25 menit',
        summary: 'Badge merupakan hasil performa dan kebijakan platform dapat berubah. Bangun kebiasaan kerja sehat, lalu periksa syarat terkini melalui sumber resmi serta dashboard akun.',
        outcome: 'Roadmap reputasi berbasis perilaku terkontrol, data kerja sendiri, dan informasi resmi terbaru.',
        actions: [
          action({
            title: 'Fokus pada perilaku yang dapat dikontrol',
            why: 'Badge tidak dapat dipaksa dengan satu trik dan dipengaruhi faktor di luar kendalimu. Fokus pada kecocokan job, komunikasi, delivery, dan kepatuhan membangun fondasi reputasi yang sehat.',
            how: [
              'Jaga relevansi: selesaikan profil dan lamar hanya job yang sesuai skill serta bukti.',
              'Jaga delivery: komunikasikan progres, penuhi kesepakatan, dan tangani risiko sebelum menjadi konflik.',
              'Patuhi aturan: gunakan kontrak serta pembayaran resmi dan hindari manipulasi review atau status.',
              'Pantau akun: baca indikator kesehatan dan notifikasi langsung dari dashboard secara berkala.',
            ],
            example: 'Alih-alih mencari trik badge, freelancer memeriksa kecocokan bukti sebelum melamar, memberi update sebelum deadline, dan menyelesaikan masalah melalui kontrak resmi.',
            doneWhen: 'Checklist rutin mencakup kecocokan job, komunikasi, delivery, kepatuhan, dan pemeriksaan dashboard akun.',
          }),
          action({
            title: 'Periksa syarat badge dari sumber resmi',
            why: 'Kriteria badge, status akun, dan tampilan eligibility dapat berubah. Menghafal angka dari artikel lama berisiko menghasilkan target yang sudah tidak berlaku atau tidak sesuai akunmu.',
            how: [
              'Buka sumber resmi: gunakan dokumentasi Upwork dan halaman eligibility pada akunmu.',
              'Catat kondisi terkini: simpan persyaratan yang tampil beserta tanggal pemeriksaan.',
              'Hindari angka tetap: jangan jadikan forum, artikel lama, atau catatan kursus sebagai sumber final.',
              'Jadwalkan ulang: periksa kembali sebelum menetapkan target atau mengambil keputusan berbasis badge.',
            ],
            example: 'Catatan eligibility menyimpan tautan resmi dan tanggal pemeriksaan. Saat merencanakan target berikutnya, syarat dibuka ulang alih-alih memakai tangkapan layar lama.',
            doneWhen: 'Tautan resmi, catatan bertanggal, dan jadwal pemeriksaan ulang tersedia tanpa hardcode syarat badge.',
          }),
          action({
            title: 'Susun milestone berbasis data sendiri',
            why: 'Milestone perilaku menunjukkan progres meski badge belum muncul. Data proposal, interview, kontrak, feedback, dan rate membantu menemukan hambatan tanpa menjanjikan hasil tertentu.',
            how: [
              'Urutkan tahap: profil siap, proposal berjalan, kontrak pertama, delivery sehat, repeat work, lalu penyesuaian rate.',
              'Pilih aktivitas: tetapkan ritme yang sesuai kapasitas mingguan, bukan angka sukses yang diklaim pasti tercapai.',
              'Catat funnel: rekam proposal, interview, kontrak, feedback, repeat work, dan rate aktual.',
              'Tinjau pola: evaluasi data berkala untuk menentukan bagian yang perlu diperbaiki berikutnya.',
            ],
            example: 'Catatan menunjukkan banyak proposal dibaca tetapi sedikit berlanjut ke interview. Fokus bulan berikutnya adalah memperbaiki relevansi bukti dan pembukaan proposal.',
            doneWhen: 'Roadmap berurutan, catatan funnel, dan jadwal review tersedia dengan target aktivitas sesuai kapasitas sendiri.',
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
        outcome: 'Shortlist job yang cocok dengan skill, scope, budget, timing, dan bukti yang tersedia.',
        actions: [
          action({
            title: 'Cocokkan masalah job dengan bukti yang dimiliki',
            why: 'Job di luar kemampuan menghabiskan Connects dan merusak kepercayaan saat interview. Pilih pekerjaan yang langkah awalnya sudah kamu pahami.',
            how: [
              'Uji kesiapan: pastikan kamu dapat menjelaskan dua langkah awal tanpa mempelajari konsep dasar terlebih dahulu.',
              'Baca requirement: bedakan kecocokan judul dari pengalaman spesifik, tools, skala, dan kompleksitas yang benar-benar diminta.',
              'Pasangkan bukti: pilih satu project paling mirip dari portfolio atau riwayat; lewati job bila tidak ada bukti relevan.',
            ],
            example: 'Job meminta automation abandoned cart memakai Klaviyo. Pengalamanmu hanya newsletter Mailchimp tanpa automation e-commerce, jadi job dilewati meski sama-sama berlabel email marketing.',
            doneWhen: 'Setiap job shortlist memiliki satu bukti relevan dan langkah awal yang dapat dijelaskan tanpa mempelajari konsep dasar.',
          }),
          action({
            title: 'Nilai kesehatan scope dan deliverable',
            why: 'Brief kabur menyulitkan proposal dan meningkatkan risiko scope creep. Informasi yang hilang harus bisa diklarifikasi tanpa menebak kebutuhan inti.',
            how: [
              'Petakan output: catat deliverable, format, deadline, tujuan bisnis, dan kriteria keberhasilan yang disebutkan.',
              'Pisahkan celah: tandai informasi operasional yang bisa ditanyakan dan celah fundamental yang membuat tujuan belum jelas.',
              'Putuskan status: lanjutkan brief sehat; beri label “tanya saat interview” atau keluarkan brief berisiko.',
            ],
            example: 'Brief landing page menyebut target waitlist, deadline dua minggu, dan referensi, tetapi belum menyebut format file. Job tetap layak dengan satu pertanyaan klarifikasi.',
            doneWhen: 'Setiap shortlist mencatat output, deadline, dan ukuran sukses, atau memiliki pertanyaan interview untuk informasi yang belum tersedia.',
          }),
          action({
            title: 'Screening kualitas klien dari profil',
            why: 'Profil klien memberi sinyal pembayaran dan pola kerja yang lebih kuat daripada kesan dari tulisan brief. Nilai kombinasi sinyal, bukan satu kekurangan.',
            how: [
              'Periksa profil: cek payment verification, total spend, riwayat hire, feedback freelancer, dan umur posting.',
              'Baca pola: klien baru belum otomatis buruk; waspadai beberapa sinyal lemah yang muncul bersamaan.',
              'Tentukan proteksi: pilih lanjut normal, milestone kecil lebih dahulu, atau lewati berdasarkan akumulasi risiko.',
            ],
            example: 'Klien baru belum punya riwayat tetapi komunikasinya jelas. Kamu lanjut dengan scope kecil dan funded milestone, bukan langsung menerima seluruh project.',
            doneWhen: 'Setiap klien shortlist memiliki keputusan lanjut, lanjut dengan proteksi, atau lewati berdasarkan lima sinyal profil.',
          }),
        ],
      },
      {
        id: 'client-screening',
        title: 'Screening klien sebelum kontrak',
        duration: '30 menit',
        summary: 'Menolak project buruk lebih murah daripada memperbaiki scope, pembayaran, dan reputasi setelah kontrak berjalan.',
        outcome: 'Punya checklist go/no-go untuk menilai ekspektasi, keputusan, pembayaran, dan risiko klien.',
        actions: [
          action({
            title: 'Validasi ekspektasi lewat pertanyaan langsung',
            why: 'Budget rendah bukan red flag tunggal. Risiko muncul ketika harga, kualitas, dan deadline tidak selaras serta klien menolak penyesuaian realistis.',
            how: [
              'Tanya prioritas: minta klien memilih fokus utama antara kecepatan, kualitas maksimal, atau biaya hemat.',
              'Uji deadline: tanyakan alasan bisnis dan input yang harus tersedia agar jadwal dapat dipenuhi.',
              'Tawarkan batas: jelaskan hasil realistis untuk waktu dan budget tersebut, lalu ajukan pengurangan scope atau perubahan jadwal.',
            ],
            example: 'Klien meminta logo, guideline, dan social kit dalam tiga hari. Kamu menawarkan paid phase pertama berupa logo dan satu aset, lalu scope sisanya dijadwalkan terpisah.',
            doneWhen: 'Prioritas, alasan deadline, dan scope realistis telah dikonfirmasi sebelum negosiasi kontrak dilanjutkan.',
          }),
          action({
            title: 'Pastikan keputusan jelas dan tolak kerja tanpa kontrak',
            why: 'Approver dan batas revisi yang kabur memicu konflik. Deliverable baru tanpa kontrak aktif atau funded milestone menempatkan seluruh risiko pada freelancer.',
            how: [
              'Tetapkan keputusan: konfirmasi PIC, approver final, jumlah revisi, dan cara menerima hasil sebelum kontrak.',
              'Tolak unpaid test: tunjukkan sample lama, tetapi jangan membuat deliverable khusus secara gratis.',
              'Gunakan proteksi: mulai fixed-price hanya setelah kontrak aktif dan milestone terkait sudah funded di Upwork.',
              'Tawarkan paid trial: kecilkan scope bila klien membutuhkan bukti tambahan sebelum project penuh.',
            ],
            example: 'Klien meminta satu konsep logo sebelum merekrut. Kamu mengirim portfolio relevan dan menawarkan paid trial untuk satu konsep melalui kontrak Upwork.',
            doneWhen: 'PIC, approver, revisi, kontrak aktif, dan funded milestone telah jelas sebelum deliverable baru dikerjakan.',
          }),
          action({
            title: 'Catat keputusan go atau no-go',
            why: 'Risiko kecil dapat menjadi masalah besar saat menumpuk. Keputusan tertulis mengurangi bias karena budget menarik atau keinginan mendapat kontrak pertama.',
            how: [
              'Nilai lima aspek: kecocokan skill, kejelasan scope, kewajaran budget, timeline, serta histori dan komunikasi klien.',
              'Cari mitigasi: perbaiki satu risiko dengan milestone kecil, batas revisi, atau scope tertulis bila memungkinkan.',
              'Ambil keputusan: pilih no-go ketika beberapa risiko penting tetap tidak terselesaikan setelah klarifikasi.',
            ],
            example: 'Skill cocok, tetapi scope kabur, budget tidak sepadan, dan approver tidak jelas. Kamu memilih no-go setelah klien menolak memperjelas ketiganya.',
            doneWhen: 'Setiap calon kontrak memiliki alasan go atau no-go tertulis berdasarkan lima aspek risiko.',
          }),
        ],
        source: { label: 'Panduan resmi mengenali red flags', url: 'https://support.upwork.com/hc/en-us/articles/35088484250003-Recognize-red-flags-and-avoid-scams' },
      },
      {
        id: 'proposal',
        title: 'Tulis proposal problem-solving',
        duration: '35 menit',
        summary: 'Dua baris pertama harus membuktikan kamu membaca brief dan memahami risikonya.',
        outcome: 'Proposal singkat berisi hook, diagnosis, bukti, rencana, dan pertanyaan ringan.',
        actions: [
          action({
            title: 'Buka dengan detail brief dan satu insight',
            why: 'Pembuka generik mudah dilewati. Detail brief dan diagnosis terbatas menunjukkan perhatian tanpa berpura-pura mengetahui solusi lengkap sebelum discovery.',
            how: [
              'Ambil detail: pilih tujuan, constraint, atau risiko spesifik yang hanya relevan untuk job tersebut.',
              'Tulis hook: mulai dari konteks klien, bukan sapaan panjang, minat pribadi, atau riwayat diri.',
              'Beri insight: sebut satu kemungkinan akar masalah dan tandai bahwa validasi masih diperlukan.',
            ],
            example: 'Untuk checkout dengan conversion rendah, pembuka menyorot kemungkinan friction form atau kurangnya trust signal, lalu meminta data drop-off untuk memvalidasi dugaan.',
            doneWhen: 'Dua kalimat pembuka tidak masuk akal bila dipindahkan ke job lain dan tidak mengklaim diagnosis sebagai kepastian.',
          }),
          action({
            title: 'Pasangkan bukti, rencana, dan pertanyaan',
            why: 'Satu bukti paling relevan lebih mudah dinilai daripada seluruh riwayat. Rencana ringkas menunjukkan cara kerja sekaligus membuka klarifikasi penting.',
            how: [
              'Pilih bukti: gunakan satu project terdekat dari sisi masalah, industri, atau deliverable; jelaskan kontribusimu secara jujur.',
              'Susun rencana: tulis dua atau tiga langkah yang mengurangi risiko dan tandai asumsi yang perlu dikonfirmasi.',
              'Tutup ringan: ajukan satu pertanyaan spesifik yang mudah dijawab dan membantu menentukan scope berikutnya.',
            ],
            example: 'Kamu merujuk audit checkout terdahulu, menawarkan audit funnel lalu redesign, dan bertanya apakah data analytics sudah tersedia.',
            doneWhen: 'Proposal memuat satu bukti relevan, rencana dua atau tiga langkah, asumsi terbuka, dan satu pertanyaan penutup.',
          }),
        ],
      },
      {
        id: 'connects',
        title: 'Gunakan Connects dengan sadar',
        duration: '20 menit',
        summary: 'Boost bukan pengganti relevansi. Gunakan hanya ketika profil dan proposal memang cocok.',
        outcome: 'Punya batas Connects mingguan dan catatan funnel setiap proposal.',
        actions: [
          action({
            title: 'Tetapkan budget Connects dan syarat boost',
            why: 'Batas mingguan mencegah keputusan impulsif setelah penolakan. Boost layak dipakai hanya ketika peluang, nilai kontrak, bukti, dan proposal sama-sama kuat.',
            how: [
              'Tentukan batas: sesuaikan Connects mingguan dengan kemampuan finansial, bukan dorongan melamar hari itu.',
              'Bagi alokasi: pisahkan proposal reguler, boost, dan eksperimen agar satu strategi tidak menghabiskan semuanya.',
              'Saring boost: gunakan hanya untuk job sangat cocok, bernilai layak, didukung bukti, dan proposal personal.',
            ],
            example: 'Dari alokasi mingguan, kamu menyisihkan bagian boost untuk job yang sangat sesuai portfolio; job cukup relevan tetap dikirim reguler.',
            doneWhen: 'Batas mingguan dan tiga alokasi tercatat; setiap boost memenuhi empat syarat sebelum dikirim.',
          }),
          action({
            title: 'Catat funnel dan uji satu variabel',
            why: 'Data funnel membedakan masalah pemilihan job, proposal, interview, dan pricing. Mengubah banyak variabel sekaligus membuat hasil eksperimen tidak terbaca.',
            how: [
              'Rekam proposal: catat tanggal, job, Connects, boost, view, interview, offer, hire, dan dugaan alasan kalah.',
              'Cari bottleneck: bandingkan perpindahan antar tahap setelah tersedia sampel yang cukup untuk melihat pola.',
              'Uji terpisah: ubah satu variabel, seperti hook atau rate, lalu bandingkan dengan catatan sebelumnya tanpa mengklaim kepastian dini.',
            ],
            example: 'Banyak proposal dilihat tetapi sedikit berlanjut ke interview. Kamu menguji hook lebih spesifik tanpa sekaligus mengubah niche dan rate.',
            doneWhen: 'Tabel funnel menunjukkan satu bottleneck yang didukung data dan satu eksperimen aktif dengan variabel tunggal.',
          }),
        ],
      },
      {
        id: 'first-contract',
        title: 'Turunkan ego, bukan standar kerja',
        duration: '20 menit',
        summary: 'Job kecil layak diambil bila scope aman dan dapat menghasilkan bukti sosial pertama.',
        outcome: 'Kontrak awal menjadi investasi bukti sosial, bukan perang harga permanen.',
        actions: [
          action({
            title: 'Pilih job kecil dan kunci definisi selesai',
            why: 'Kontrak awal membangun riwayat dan feedback, tetapi scope kabur dapat menghabiskan waktu tanpa batas. Relevansi tetap penting agar bukti memperkuat positioning.',
            how: [
              'Pilih relevan: utamakan job singkat yang sesuai niche dan dapat diselesaikan dengan kualitas tinggi.',
              'Batasi scope: sepakati deliverable, format, revisi, deadline, dan input yang wajib diberikan klien.',
              'Tulis kesepakatan: simpan detail tersebut di Upwork sebelum pekerjaan dimulai agar mudah dirujuk.',
            ],
            example: 'Untuk edit lima foto, kamu menyepakati ukuran JPG, latar putih, satu ronde revisi, deadline dua hari, dan waktu pengiriman file mentah.',
            doneWhen: 'Deliverable, format, revisi, deadline, dan input klien telah disepakati tertulis sebelum mulai kerja.',
          }),
          action({
            title: 'Jaga standar dan evaluasi kontrak',
            why: 'Harga awal yang rendah tidak mengurangi standar komunikasi dan delivery. Catatan setelah selesai membantu menyaring job dan memperbaiki pricing berikutnya.',
            how: [
              'Kirim profesional: berikan update, dokumentasi, dan file final dengan kerapian yang sama seperti project lebih besar.',
              'Bandingkan waktu: catat estimasi dan waktu aktual untuk mengetahui beban tersembunyi serta rate efektif.',
              'Evaluasi hasil: rekam feedback, pola komunikasi, peluang repeat work, dan perubahan filter atau harga berikutnya.',
            ],
            example: 'Edit foto diperkirakan satu jam tetapi memakan tiga jam karena revisi. Kamu memperketat batas revisi dan menyesuaikan quote untuk job serupa.',
            doneWhen: 'Catatan kontrak memuat waktu estimasi dan aktual, feedback, serta satu keputusan konkret untuk job berikutnya.',
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
        summary: 'Kontrak bermasalah sering bermula dari asumsi yang tidak pernah ditulis.',
        outcome: 'Scope, timeline, channel, milestone, dan approval flow disepakati.',
        actions: [
          action({
            title: 'Ringkas brief dan minta koreksi',
            why: 'Brief yang sama dapat menghasilkan tafsir berbeda. Konfirmasi tertulis sebelum kerja mencegah revisi besar akibat salah memahami tujuan atau output.',
            how: [
              'Tulis pemahaman: ringkas tujuan, audiens, masalah, output, dan ukuran keberhasilan dengan bahasamu sendiri.',
              'Kirim sebelum mulai: minta klien mengoreksi bagian yang tidak sesuai, bukan sekadar membalas “oke”.',
              'Simpan konfirmasi: jadikan balasan tertulis sebagai acuan scope untuk langkah berikutnya.',
            ],
            example: 'Klien meminta landing page untuk conversion. Ringkasanmu memicu koreksi bahwa target sebenarnya pengumpulan email, bukan penjualan langsung.',
            doneWhen: 'Klien telah mengonfirmasi atau mengoreksi ringkasan tertulis sebelum deliverable pertama dikerjakan.',
          }),
          action({
            title: 'Susun milestone, cara kerja, dan out-of-scope',
            why: 'Milestone menghubungkan pembayaran dengan hasil tiap tahap. Batas kerja tertulis mencegah tambahan kecil berubah menjadi scope tanpa biaya dan waktu baru.',
            how: [
              'Pecah tahap: beri setiap milestone deliverable, deadline, biaya, dan kriteria approval yang jelas.',
              'Amankan pembayaran: mulai fixed-price setelah milestone terkait funded; untuk hourly, sepakati batas jam dan pola update.',
              'Tetapkan operasi: pilih channel, frekuensi update, PIC, waktu respons, dan satu lokasi file utama.',
              'Tulis batas: sebut out-of-scope serta proses menyetujui dampak biaya dan timeline sebelum tambahan dikerjakan.',
            ],
            example: 'Redesign tiga halaman dibagi menjadi wireframe dan desain visual. Copywriting serta halaman tambahan dicatat out-of-scope dan membutuhkan quote terpisah.',
            doneWhen: 'Milestone, pembayaran, approval, cara kerja, dan out-of-scope disepakati tertulis sebelum tahap pertama dimulai.',
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
            title: 'Gunakan struktur update tetap',
            why: 'Klien sering membaca update dengan cepat. Struktur tetap dan English sederhana membuat status, hambatan, serta tindakan berikutnya mudah dipahami.',
            how: [
              'Bagi update: gunakan Completed, Blocker atau Decision Needed, lalu Next Step dengan kalimat aktif dan pendek.',
              'Jelaskan dampak: sebut konsekuensi blocker terhadap hasil atau timeline, bukan hanya menyatakan sedang menunggu.',
              'Bawa solusi: tawarkan dua opsi dan satu rekomendasi ketika keputusan klien diperlukan.',
            ],
            example: 'Foto produk belum tersedia. Kamu menawarkan placeholder agar jadwal bertahan atau menunggu file asli dengan konsekuensi mundur, lalu merekomendasikan opsi pertama.',
            doneWhen: 'Update terakhir memuat Completed, Blocker atau Decision Needed, Next Step, serta rekomendasi bila ada hambatan.',
          }),
          action({
            title: 'Konfirmasi keputusan verbal secara tertulis',
            why: 'Keputusan dari call mudah diingat berbeda, terutama saat ada gap bahasa. Recap tertulis menjadi acuan tanggung jawab dan deadline.',
            how: [
              'Kirim recap: tulis keputusan, PIC setiap tindakan, dan deadline segera setelah call atau voice message.',
              'Minta koreksi: undang klien memperbaiki istilah, warna, angka, atau detail yang mungkin salah dipahami.',
              'Simpan acuan: lanjutkan pekerjaan berdasarkan recap yang telah dikonfirmasi atau dikoreksi.',
            ],
            example: 'Setelah call, kamu merangkum pilihan warna, tugas pengiriman logo oleh klien, dan deadline masing-masing dalam satu pesan.',
            doneWhen: 'Setiap keputusan verbal penting memiliki recap keputusan, PIC, dan deadline yang dikirim dalam 24 jam.',
          }),
        ],
      },
      {
        id: 'overdeliver',
        title: 'Under-promise, over-deliver',
        duration: '25 menit',
        summary: 'Nilai ekstra harus relevan; beberapa opsi terarah lebih berguna daripada banyak file tanpa konteks.',
        outcome: 'Delivery utama selesai, plus insight yang membantu keputusan tanpa memperluas scope gratis.',
        actions: [
          action({
            title: 'Pastikan deliverable utama solid',
            why: 'Bonus tidak menutup kekurangan pada hasil wajib. Acceptance criteria, format, dan handoff rapi harus selesai sebelum tambahan dipertimbangkan.',
            how: [
              'Cek scope: cocokkan setiap deliverable dengan brief dan acceptance criteria yang disepakati.',
              'Uji file: pastikan format, akses, transparansi, resolusi, atau source file bekerja sesuai kebutuhan.',
              'Rapikan handoff: gunakan nama file, folder, dan versi yang jelas agar klien tidak menebak.',
            ],
            example: 'Tiga varian logo tersedia sebagai PNG transparan dan source AI yang dapat dibuka, berlayer rapi, serta bernama konsisten.',
            doneWhen: 'Semua acceptance criteria terpenuhi dan setiap file final dapat ditemukan, dibuka, serta digunakan sesuai permintaan.',
          }),
          action({
            title: 'Tambahkan insight relevan dan dokumentasi',
            why: 'Tambahan tanpa hubungan ke tujuan hanya membebani keputusan. Insight dengan trade-off dan rekomendasi memberi nilai tanpa membuka scope kerja baru.',
            how: [
              'Batasi tambahan: pilih maksimal dua risiko, quick win, atau alternatif yang dekat dengan tujuan project.',
              'Jelaskan trade-off: sebut dampak kualitas, waktu, biaya, atau maintenance lalu berikan satu rekomendasi.',
              'Satukan handoff: kirim file, akses, instruksi, keputusan penting, dan next step dalam satu dokumen atau pesan.',
            ],
            example: 'Kamu menandai risiko kontras warna pada dark mode, memberi satu alternatif, menjelaskan trade-off, lalu menyertakannya dalam dokumen handoff.',
            doneWhen: 'Klien menerima maksimal dua insight relevan dan satu handoff lengkap tanpa pekerjaan tambahan di luar scope.',
          }),
        ],
      },
      {
        id: 'reputation-jss',
        title: 'Jaga JSS melalui delivery sehat',
        duration: '35 menit',
        summary: 'JSS mencerminkan hubungan dan hasil kontrak; tidak ada satu trik yang menjamin skornya.',
        outcome: 'Punya sistem pencegahan risiko sejak screening sampai kontrak ditutup.',
        actions: [
          action({
            title: 'Kejar pengalaman klien yang sehat',
            why: 'Upwork tidak mempublikasikan formula pasti JSS. Fokus pada kepuasan, hasil, feedback, dan hubungan kerja sehat lebih berguna daripada mencoba memanipulasi skor.',
            how: [
              'Periksa pengalaman: nilai rutin apakah hasil, komunikasi, dan ekspektasi masih memuaskan dari sudut pandang klien.',
              'Perbaiki dini: klarifikasi masalah sebelum kontrak ditutup, bukan mengejar penyelesaian cepat demi rating.',
              'Hindari manipulasi: jangan meminta lima bintang, mempercepat review, atau menutup kontrak hanya untuk mengejar metrik.',
            ],
            example: 'Revisi melebar karena arah belum jelas. Kamu melakukan klarifikasi scope dan menyepakati langkah berikutnya, bukan buru-buru menutup kontrak demi feedback.',
            doneWhen: 'Setiap kontrak ditutup dengan alasan kepuasan klien yang dapat dijelaskan tanpa bergantung pada skor.',
          }),
          action({
            title: 'Deteksi risiko dan dokumentasikan keputusan',
            why: 'Scope creep, approval terlambat, atau pergantian PIC biasanya memberi sinyal awal. Dokumentasi membuat dampak dan solusi dapat dibahas sebelum masalah membesar.',
            how: [
              'Pantau mingguan: cek perubahan scope, keterlambatan input, pergantian PIC, dan perubahan pola komunikasi.',
              'Eskalasi terstruktur: sampaikan fakta, dampak, pilihan solusi, rekomendasi, dan keputusan yang dibutuhkan.',
              'Simpan jejak: rekam approval, perubahan milestone, update, dan file final di Upwork Messages atau dokumen bersama.',
            ],
            example: 'Klien meminta dua halaman tambahan. Kamu menyebutnya di luar scope, menawarkan biaya dan waktu baru atau fase lanjutan, lalu menyimpan pilihannya.',
            doneWhen: 'Setiap perubahan scope, keterlambatan, dan keputusan penting memiliki jejak tertulis yang dapat dirujuk.',
          }),
          action({
            title: 'Baca JSS Insights sebagai tren',
            why: 'Bobot formula JSS tidak dibuka Upwork, sehingga satu perubahan skor tidak membuktikan penyebab tertentu. Tren beberapa kontrak lebih berguna untuk evaluasi.',
            how: [
              'Cek berkala: buka JSS Insights bila tersedia, termasuk saat skor stabil, untuk memahami tren.',
              'Catat konteks: rekam kontrak berisiko, kejadian, dan tindakan perbaikan tanpa menebak bobotnya.',
              'Tunggu pola: ubah strategi besar hanya bila beberapa kontrak menunjukkan masalah serupa.',
            ],
            example: 'Satu kontrak terasa buruk, tetapi tren beberapa kontrak lain stabil. Kamu mencatat kasusnya tanpa langsung mengubah seluruh proses kerja.',
            doneWhen: 'Catatan berkala membedakan kejadian tunggal dari pola beberapa kontrak tanpa mengklaim formula JSS.',
          }),
        ],
        source: { label: 'Penjelasan resmi Job Success Score', url: 'https://support.upwork.com/hc/en-us/articles/211068358-All-about-your-Job-Success-Score' },
      },
      {
        id: 'review',
        title: 'Tutup kontrak dengan feedback sehat',
        duration: '20 menit',
        summary: 'Minta feedback setelah nilai pekerjaan jelas dan seluruh kewajiban selesai.',
        outcome: 'Kontrak ditutup rapi dengan bukti hasil dan permintaan feedback netral.',
        actions: [
          action({
            title: 'Kirim final recap sebelum meminta feedback',
            why: 'Recap membantu klien menilai hasil berdasarkan pekerjaan nyata, bukan ingatan samar. Konfirmasi akhir juga menutup celah scope sebelum kontrak selesai.',
            how: [
              'Ringkas hasil: cantumkan deliverable, hasil terverifikasi bila ada, link file, keputusan penting, dan instruksi handoff.',
              'Pisahkan status: bedakan item selesai dari tindakan yang masih menjadi tanggung jawab klien.',
              'Minta pemeriksaan: tanyakan apakah scope awal sudah terpenuhi dan beri waktu wajar untuk pengecekan.',
            ],
            example: 'Kamu mengirim link halaman live dan source file, menjelaskan akses hosting, lalu meminta klien memastikan seluruh scope telah terpenuhi.',
            doneWhen: 'Klien mengonfirmasi tertulis bahwa deliverable sesuai scope dan tidak ada item freelancer yang menggantung.',
          }),
          action({
            title: 'Minta feedback netral dan catat pelajaran',
            why: 'Permintaan rating tertentu atau imbalan melanggar kebijakan dan mengurangi nilai pembelajaran. Feedback netral memberi sinyal lebih jujur untuk project berikutnya.',
            how: [
              'Minta netral: undang feedback tentang pengalaman kerja tanpa menyebut rating atau menawarkan imbalan.',
              'Bandingkan eksekusi: catat estimasi dan waktu aktual, perubahan scope, penyebab, serta feedback yang diterima.',
              'Tentukan perbaikan: pilih satu atau dua hal untuk diulang, dihindari, atau dimasukkan ke proposal dan pricing.',
            ],
            example: 'Approval memperpanjang project satu minggu. Kamu menambahkan aturan bahwa keterlambatan approval akan menggeser timeline project berikutnya.',
            doneWhen: 'Feedback diminta tanpa arahan, dan catatan kontrak memuat pelajaran konkret untuk proposal atau delivery berikutnya.',
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
            title: 'Batasi work-in-progress dan gunakan board',
            why: 'Kalender penuh tidak menyisakan ruang untuk revisi, meeting, atau gangguan. Batas project aktif melindungi kualitas seluruh kontrak.',
            how: [
              'Hitung kapasitas: nilai jam fokus, kompleksitas, dan kebutuhan komunikasi; sisakan buffer untuk pekerjaan tak terduga.',
              'Batasi WIP: tentukan jumlah project aktif maksimal berdasarkan kapasitas tersebut, bukan jumlah lead masuk.',
              'Gunakan board: catat status, owner, deadline, link file, dan definisi selesai setiap task dalam satu tempat.',
            ],
            example: 'Kapasitasmu enam jam fokus per hari. Kamu membatasi tiga project aktif agar revisi dan call mendadak tetap tertampung.',
            doneWhen: 'Semua project aktif terlihat dalam satu board dan kalender memiliki buffer yang sengaja disisakan.',
          }),
          action({
            title: 'Time-block dan gunakan template',
            why: 'Context switching menguras fokus meski total jam cukup. Pengelompokan aktivitas dan template menghemat energi untuk keputusan yang benar-benar unik.',
            how: [
              'Blok energi: tempatkan deep work pada jam fokus terbaik dan kelompokkan meeting, chat, serta admin.',
              'Beri transisi: sisakan jeda antarproject untuk menutup catatan dan menyiapkan konteks berikutnya.',
              'Buat template: siapkan onboarding, recap, status update, QA, dan handoff; personalisasi sebelum digunakan.',
            ],
            example: 'Pagi dipakai untuk desain, siang untuk chat tiga klien, dan template update diisi dengan progress, blocker, serta rencana.',
            doneWhen: 'Jadwal memiliki blok per jenis aktivitas dan minimal tiga template komunikasi atau QA siap dipersonalisasi.',
          }),
          action({
            title: 'Eskalasi risiko keterlambatan lebih awal',
            why: 'Peringatan dini memberi ruang untuk memilih solusi. Kabar pada hari deadline menghilangkan kontrol klien dan memperbesar dampak keterlambatan.',
            how: [
              'Pantau proyeksi: bandingkan progres, sisa scope, input klien, dan waktu tersedia sebelum risiko menjadi kepastian.',
              'Kirim konteks: jelaskan status, penyebab, dan dampak terhadap deadline tanpa menyalahkan pihak lain.',
              'Ajukan pilihan: tawarkan pengurangan scope, tambahan bantuan, atau jadwal baru beserta rekomendasimu.',
            ],
            example: 'Revisi besar membuat progres tertinggal. Kamu menawarkan versi lebih sederhana sesuai deadline atau versi lengkap dengan tambahan tiga hari.',
            doneWhen: 'Setiap risiko keterlambatan disampaikan sebelum deadline dengan dampak, opsi, rekomendasi, dan timeline realistis.',
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
        summary: 'Klien lama sudah mengenal kualitasmu, tetapi tetap perlu follow-up yang relevan dan terjadwal.',
        outcome: 'Follow-up berguna tanpa terkesan mengejar pekerjaan.',
        actions: [
          action({
            title: 'Catat konteks project sebelum kontrak ditutup',
            why: 'Follow-up spesifik membutuhkan detail project yang mudah terlupa. Catat saat konteks masih segar agar pesan berikutnya tetap relevan.',
            how: [
              'Tujuan: Ringkas masalah awal, sasaran bisnis, dan hasil akhir; gunakan angka hanya bila tersedia dan sudah terverifikasi.',
              'Konteks: Catat stakeholder utama, keputusan penting, kendala implementasi, serta peluang lanjutan yang pernah disebut klien.',
              'Pemicu: Simpan momen bisnis relevan, seperti peluncuran, ekspansi, atau evaluasi kuartal, sebagai alasan follow-up yang wajar.',
            ],
            example: 'Setelah redesign checkout selesai, klien menyebut halaman produk sebagai prioritas berikutnya. Catat tujuan, keputusan desain, hasil terverifikasi, stakeholder, dan rencana tersebut di client tracker.',
            doneWhen: 'Setiap kontrak selesai memiliki catatan ringkas yang dapat ditemukan kembali untuk follow-up 30 dan 90 hari.',
          }),
          action({
            title: 'Follow-up terjadwal di hari ke-30 dan ke-90, lalu berhenti kalau tak direspon',
            why: 'Hari ke-30 cocok untuk memeriksa implementasi; hari ke-90 untuk menawarkan insight baru. Berhenti setelah dua pesan tanpa respons agar tidak menjadi spam.',
            how: [
              'Hari ke-30: Tanyakan hasil implementasi dan hambatan yang muncul, lalu berikan satu bantuan kecil terkait scope sebelumnya.',
              'Hari ke-90: Bagikan observasi atau ide baru yang relevan, kemudian sebutkan ketersediaan setelah alasan bisnisnya jelas.',
              'Batas kontak: Hentikan follow-up setelah dua pesan berkualitas tanpa respons; jangan mengirim pesan ketiga atau keempat.',
            ],
            example: 'Hari ke-30, tanyakan kendala checkout setelah implementasi. Hari ke-90, kirim ide untuk halaman produk yang pernah disebut klien, lalu tawarkan diskusi bila relevan.',
            doneWhen: 'Setiap klien memiliki reminder hari ke-30 dan ke-90, dengan status berhenti setelah dua pesan tanpa respons.',
          }),
        ],
      },
      {
        id: 'portfolio-loop',
        title: 'Bangun portfolio loop',
        duration: '25 menit',
        summary: 'Setiap project dapat memperkuat profil melalui dokumentasi akurat dan publikasi yang berizin.',
        outcome: 'Case study konsisten yang mendukung positioning dan bukti sosial.',
        actions: [
          action({
            title: 'Dokumentasikan selama project berjalan, minta izin sebelum publikasi',
            why: 'Kondisi awal, keputusan, dan bukti hasil mudah hilang setelah project selesai. Dokumentasi berjalan menjaga akurasi, sedangkan izin tertulis melindungi kerahasiaan klien.',
            how: [
              'Bukti: Simpan kondisi awal, versi penting, keputusan beserta alasannya, feedback, dan hasil terverifikasi selama project berjalan.',
              'Izin: Minta persetujuan tertulis tentang materi, nama, logo, kutipan, dan angka yang boleh dipublikasikan atau harus disamarkan.',
              'NDA: Periksa batas perjanjian sebelum menulis case study; jangan publikasikan materi yang dilarang meski project sudah selesai.',
            ],
            example: 'Selama redesign checkout, simpan versi awal, alasan perubahan alur, dan data yang diberikan klien. Klien mengizinkan logo, tetapi meminta angka pendapatan disamarkan; case study mengikuti batas tersebut.',
            doneWhen: 'Folder project berisi bukti dan keputusan penting, disertai izin tertulis serta pemeriksaan NDA sebelum publikasi.',
          }),
          action({
            title: 'Tulis case study sesuai positioning, lalu sebarkan ke semua channel',
            why: 'Sudut cerita boleh menyesuaikan audiens, tetapi fakta harus konsisten. Perbedaan angka atau narasi antar-kanal merusak kredibilitas.',
            how: [
              'Struktur: Jelaskan masalah, peranmu, keputusan utama, proses, dan hasil yang dapat dibuktikan tanpa melebihkan kontribusi.',
              'Positioning: Tonjolkan kemampuan yang ingin dijual kepada klien berikutnya; framing boleh berubah, tetapi fakta dasar tetap sama.',
              'Distribusi: Perbarui portfolio Upwork, profil, proposal, dan kanal personal dari satu sumber data agar narasi konsisten.',
            ],
            example: 'Versi Upwork menyoroti optimasi checkout; versi LinkedIn menyoroti kolaborasi tim. Keduanya memakai hasil terverifikasi dan batas publikasi yang sama.',
            doneWhen: 'Case study tayang di Upwork dan satu kanal lain dengan fakta, angka, serta izin publikasi yang konsisten.',
          }),
        ],
      },
      {
        id: 'referral',
        title: 'Minta referral dengan konteks',
        duration: '15 menit',
        summary: 'Referral lebih mudah diberikan ketika klien memahami masalah dan tipe bisnis yang paling cocok untukmu.',
        outcome: 'Permintaan referral spesifik dan siap diteruskan.',
        actions: [
          action({
            title: 'Pilih momen yang tepat dan jelaskan klien ideal secara spesifik',
            why: 'Permintaan sebelum hasil terlihat atau pembayaran selesai terasa dipaksakan. Profil klien ideal yang spesifik membantu klien mengingat kontak yang relevan.',
            how: [
              'Waktu: Minta setelah hasil terlihat, klien menyatakan puas, dan urusan pembayaran selesai; hindari saat project bermasalah.',
              'Target: Sebutkan industri, tahap atau ukuran bisnis, dan masalah utama yang paling cocok kamu tangani.',
              'Nada: Jadikan permintaan ringan dan beri ruang untuk menolak tanpa tekanan atau kewajiban membalas.',
            ],
            example: 'Setelah project dan pembayaran selesai, minta dikenalkan kepada pemilik toko online yang kesulitan menyederhanakan checkout karena masalah itu sesuai spesialisasimu.',
            doneWhen: 'Permintaan dikirim setelah hasil dan pembayaran jelas, serta menyebut tipe bisnis dan masalah yang spesifik.',
          }),
          action({
            title: 'Siapkan intro siap teruskan, jangan pakai insentif sebagai default',
            why: 'Teks siap teruskan mengurangi usaha klien saat mengenalkanmu. Insentif bukan fondasi referral; program formal harus transparan dan mengikuti kebijakan platform.',
            how: [
              'Isi: Tulis layanan, masalah yang diselesaikan, satu bukti yang diizinkan, dan tautan profil Upwork dalam dua kalimat.',
              'Format: Buat pesan siap salin yang tetap terdengar alami bila diteruskan lewat email atau chat.',
              'Insentif: Jangan tawarkan hadiah secara default; bila memakai program formal, jelaskan aturan dan pastikan sesuai kebijakan Upwork.',
            ],
            example: 'Pesan siap teruskan: “Untuk penyederhanaan checkout toko online, [Nama] membantu project kami dengan proses rapi. Profil Upwork: [link].”',
            doneWhen: 'Klien menerima intro singkat berisi layanan, bukti yang diizinkan, dan tautan profil yang siap diteruskan.',
          }),
        ],
      },
      {
        id: 'rate',
        title: 'Naikkan rate berdasarkan bukti',
        duration: '25 menit',
        summary: 'Naikkan rate ketika demand, positioning, dan bukti hasil menguat, bukan hanya karena masa kerja bertambah.',
        outcome: 'Rate baru didukung bukti dan proses transisi jelas.',
        actions: [
          action({
            title: 'Review data 3 bulan terakhir dan hubungkan rate dengan value nyata',
            why: 'Masa kerja dan rate kompetitor bukan alasan yang cukup. Data demand, kapasitas, kompleksitas, dan hasil memberi dasar kenaikan yang dapat dijelaskan.',
            how: [
              'Demand: Tinjau proposal, interview, kualitas lead, repeat client, dan antrean kerja selama tiga bulan terakhir.',
              'Kapasitas: Bandingkan waktu terpakai, margin project, serta pekerjaan yang ditolak karena jadwal penuh atau scope tidak cocok.',
              'Value: Hubungkan rate dengan kompleksitas, risiko, spesialisasi, kecepatan delivery, dan hasil terverifikasi yang menjadi tanggung jawabmu.',
            ],
            example: 'Dalam evaluasi tiga bulan, kalender sering penuh dan beberapa klien kembali. Gunakan catatan tersebut bersama kompleksitas scope dan hasil terverifikasi untuk menilai rate baru.',
            doneWhen: 'Keputusan rate didukung catatan tiga bulan tentang demand, kapasitas, kompleksitas, dan hasil kerja yang terverifikasi.',
          }),
          action({
            title: 'Uji di lead baru dulu, baru renegosiasi klien lama dengan konteks jelas',
            why: 'Pengujian bertahap membatasi risiko terhadap pipeline. Klien lama membutuhkan alasan, waktu pemberitahuan, dan kepastian bahwa kesepakatan berjalan tidak berubah sepihak.',
            how: [
              'Lead baru: Terapkan rate baru pada beberapa proposal, lalu pantau respons dan kualitas lead sebelum memperluas penggunaannya.',
              'Klien lama: Bahas perubahan scope, tanggung jawab, atau value sebelum menyampaikan angka dan tanggal berlaku baru.',
              'Transisi: Hormati milestone yang sudah disepakati; beri pemberitahuan sebelum siklus berikutnya dan tawarkan masa transisi bila perlu.',
            ],
            example: 'Uji rate baru pada lima proposal. Untuk klien lama, jelaskan perluasan scope dan tanggal berlaku, sementara milestone aktif tetap memakai harga yang disepakati.',
            doneWhen: 'Rate diuji pada lead baru; klien lama diberi alasan dan pemberitahuan sebelum kontrak atau milestone berikutnya.',
          }),
        ],
      },
      {
        id: 'scale-path',
        title: 'Pilih jalur scale yang sehat',
        duration: '35 menit',
        summary: 'Scale bukan selalu agency. Pilih model berdasarkan bottleneck, kekuatan, risiko, dan pola kerja yang ingin dipertahankan.',
        outcome: 'Satu prioritas 90 hari: premium specialist, retainer, atau tim kecil.',
        actions: [
          action({
            title: 'Cari tahu bottleneck sebenarnya sebelum pilih arah scale',
            why: 'Tim tidak memperbaiki positioning atau pipeline yang lemah. Bedakan masalah demand dan kapasitas sebelum menambah biaya serta kompleksitas.',
            how: [
              'Demand: Jika pipeline sepi atau proposal jarang mendapat respons, perbaiki positioning, target klien, dan akuisisi sebelum scale.',
              'Kapasitas: Jika lead berkualitas ditolak karena jadwal penuh, pertimbangkan rate, retainer, productized service, atau delegasi.',
              'Bukti: Gunakan tracker pipeline dan jadwal kerja untuk membedakan persepsi sibuk dari bottleneck yang berulang.',
            ],
            example: 'Tracker menunjukkan beberapa inquiry cocok ditolak karena kalender penuh. Itu bottleneck kapasitas, sehingga rate atau delegasi lebih relevan daripada menambah aktivitas proposal.',
            doneWhen: 'Tracker menunjukkan bottleneck utama berada pada demand atau kapasitas, beserta pilihan tindakan yang sesuai.',
          }),
          action({
            title: 'Pilih 1 dari 3 model scale sesuai kekuatan dan gaya hidup yang diinginkan',
            why: 'Setiap model mengubah waktu, risiko, dan pekerjaan harian secara berbeda. Pilih sesuai kemampuan mengelola dan pola kerja yang diinginkan, bukan tren.',
            how: [
              'Premium specialist: Perdalam niche, bukti, pricing, dan personal brand bila ingin tetap mengerjakan craft dengan kompleksitas terkontrol.',
              'Repeat atau retainer: Tetapkan output, kapasitas bulanan, response time, revisi, dan rollover agar layanan tidak menjadi akses tanpa batas.',
              'Tim kecil: Delegasikan tugas terdokumentasi berisiko rendah, siapkan QA dan komunikasi, serta patuhi kebijakan Upwork untuk agency dan kontrak.',
            ],
            example: 'Kamu menikmati pekerjaan teknis dan tidak ingin mengelola orang. Pilih premium specialist selama 90 hari dengan fokus pada optimasi checkout e-commerce, bukan membuka agency.',
            doneWhen: 'Satu model dipilih untuk 90 hari dengan alasan yang terkait bottleneck, kekuatan, risiko, dan pola kerja.',
          }),
          action({
            title: 'Review hasil di hari ke-90 dengan ukuran keberlanjutan, bukan cuma omzet',
            why: 'Kenaikan omzet tidak cukup bila margin, kualitas, waktu, atau kesehatan kerja memburuk. Evaluasi keberlanjutan sebelum mempertahankan model.',
            how: [
              'Bisnis: Bandingkan revenue, margin, kualitas pipeline, dan kepuasan klien sebelum serta sesudah percobaan 90 hari.',
              'Operasi: Tinjau jam kerja, revisi, kualitas delivery, dan beban koordinasi yang muncul dari model tersebut.',
              'Keberlanjutan: Catat stres dan ruang pemulihan, lalu pilih lanjut, sesuaikan, atau hentikan berdasarkan gambaran lengkap.',
            ],
            example: 'Setelah 90 hari, retainer menambah pendapatan tetapi juga memperpanjang jam kerja dan revisi. Batasi jumlah klien atau ubah scope sebelum melanjutkan.',
            doneWhen: 'Review 90 hari membandingkan bisnis, operasi, kualitas, dan stres, lalu menetapkan keputusan lanjut, sesuaikan, atau hentikan.',
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
export const actionId = (lessonId: string, actionIndex: number) => `${lessonId}::${actionIndex}`
export const allActionIds = curriculum.flatMap((phase) => phase.lessons.flatMap((lesson) => lesson.actions.map((_, index) => actionId(lesson.id, index))))

export const totalMinutes = curriculum.reduce(
  (total, phase) => total + phase.lessons.reduce((phaseTotal, lesson) => phaseTotal + Number.parseInt(lesson.duration), 0),
  0,
)

export function lessonIsComplete(lesson: Lesson, progress: Record<string, boolean>) {
  return lesson.actions.every((_, index) => progress[actionId(lesson.id, index)])
}

export function sanitizeActionProgress(value: unknown): Record<string, boolean> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {}
  const source = value as Record<string, unknown>
  const migrated: Record<string, boolean> = {}
  curriculum.forEach((phase) => phase.lessons.forEach((lesson) => {
    lesson.actions.forEach((_, index) => {
      const id = actionId(lesson.id, index)
      if (source[id] === true || source[lesson.id] === true) migrated[id] = true
    })
  }))
  return migrated
}

export function calculateActionProgress(progress: Record<string, boolean>) {
  const completed = allActionIds.filter((id) => progress[id]).length
  return { completed, total: allActionIds.length, percentage: Math.round((completed / allActionIds.length) * 100) }
}

if (import.meta.env.DEV) {
  console.assert(new Set(allLessonIds).size === allLessonIds.length, 'Lesson IDs must be unique')
  console.assert(new Set(allActionIds).size === allActionIds.length, 'Action IDs must be unique')
  console.assert(allLessonIds.length === 28, 'Curriculum must contain 28 lessons')
  console.assert(calculateActionProgress({}).percentage === 0, 'Empty progress must be 0%')
  console.assert(calculateActionProgress(Object.fromEntries(allActionIds.map((id) => [id, true]))).percentage === 100, 'Full progress must be 100%')
}

export default curriculum
