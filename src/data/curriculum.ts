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
        summary: 'Upwork bukan tempat belajar skill dari nol — klien bayar untuk hasil, bukan proses belajarmu. Sebelum bikin akun, kamu perlu tahu persis satu kemampuan yang sudah bisa menghasilkan deliverable nyata dan memang dicari klien.',
        outcome: 'Punya satu layanan awal dengan target klien, deliverable, dan tools yang jelas — tervalidasi lewat riset job asli, bukan tebakan.',
        actions: [
          action({
            title: 'Petakan modal yang sudah dimiliki, atau bangun dari nol secara terarah',
            why: 'Kebanyakan orang gagal di sini karena nyebut skill terlalu umum ("saya bisa admin", "saya suka desain") — ini nggak ngasih klien bayangan konkret soal apa yang bisa kamu kerjakan. Semakin spesifik kamu bisa uraikan pengalaman jadi tugas nyata, semakin gampang kamu (dan klien) menilai apakah kamu layak dibayar untuk itu.',
            how: [
              'Uraikan pengalaman jadi tugas spesifik: jangan tulis "pernah jadi admin", tulis "kelola spreadsheet stok 50+ item, bikin kalender konten mingguan, balas 20-30 chat customer per hari". Detail ini yang nanti jadi bahan CV dan portfolio.',
              'Catat pola kondisi awal → tindakan → hasil: untuk tiap pengalaman, tulis kondisi sebelum kamu masuk, apa yang kamu lakukan, dan apa yang berubah. Kalau ada angka (followers naik, waktu kerja lebih cepat, komplain turun), catat — kalau nggak ada, catat perubahan kualitatif yang jujur.',
              'Kelompokkan jadi maksimal 3 kandidat skill: nilai tiap kandidat dari 4 sisi — pengalaman nyata, bukti yang bisa ditunjukkan, minat kamu sendiri (karena ini bakal dikerjakan berulang), dan demand di pasar (nanti divalidasi di action berikutnya).',
              'Kalau skill masih dasar: bandingkan hasil kerjamu dengan 3-5 portfolio profesional di bidang sama, cari gap paling jelas (komposisi, kecepatan, konsistensi), latih spesifik untuk nutup gap itu — bukan belajar random dari tutorial ke tutorial.',
              'Kalau belum punya skill sama sekali: pilih 1 bidang dari minat, persempit jadi output spesifik (bukan "desain" tapi "desain carousel Instagram untuk UMKM"), pelajari dasarnya lewat 1-2 sumber fokus, lalu langsung bikin 2-3 concept project untuk latihan sekaligus bahan portfolio.',
            ],
            example: 'Kamu pernah pegang akun Instagram toko roti keluarga selama setahun: bikin 3 konten/minggu, atur jadwal posting, balas komentar dan DM. Followers naik dari 800 ke 2.100. Ini bukan "pengalaman social media" yang generik — ini "content planning + community management untuk bisnis F&B skala kecil", lengkap dengan angka hasil yang bisa kamu tunjukkan.',
            doneWhen: 'Kamu punya daftar maksimal 3 kandidat skill, masing-masing dengan minimal 2 bukti tugas konkret (bukan judul jabatan) dan catatan hasil/perubahan yang bisa kamu ceritakan dalam 1-2 kalimat tanpa mengarang.',
          }),
          action({
            title: 'Validasi kebutuhan lewat job Upwork asli, sebelum melamar',
            why: 'Skill yang menurutmu bagus belum tentu ada permintaannya di Upwork — atau ada, tapi dengan ekspektasi tools/deliverable yang beda dari yang kamu kira. Riset ini murah (cuma waktu) dan mencegah kamu salah arah berbulan-bulan sebelum melamar job pertama.',
            how: [
              'Cari minimal 20 job pakai keyword dari 3 kandidat skill: gunakan variasi keyword (misal "Instagram content", "social media management", "content calendar") biar dapat gambaran luas, bukan cuma dari satu sudut.',
              'Catat pola dari tiap job: deliverable yang diminta, tools yang disebut (Canva, Notion, Later, dll), level pengalaman yang dicari, rentang budget, dan masalah yang berulang disebut klien (misal "engagement rendah", "nggak sempat posting konsisten").',
              'Hitung kandidat mana yang paling sering muncul DAN paling cocok dengan kemampuanmu: kalau satu skill muncul di 15 dari 20 job tapi kamu jauh dari kualifikasinya, itu bukan pilihan realistis untuk sekarang — cari titik temu antara demand dan kemampuan.',
            ],
            example: 'Dari 20 job dengan keyword "social media" dan "content", 12 di antaranya minta pengalaman kelola akun F&B/UMKM, pakai Canva, dan minta laporan mingguan sederhana — bukan strategi marketing kompleks. Ini cocok banget sama pengalaman toko roti tadi, jadi kandidat ini yang dipilih, bukan kandidat "desain logo" yang cuma muncul di 3 job dan minta portfolio branding tingkat lanjut.',
            doneWhen: 'Kamu punya catatan dari minimal 20 job nyata (bukan asumsi) yang menunjukkan satu skill paling sering diminta dan paling masuk akal buat kamu kerjakan sekarang, lengkap dengan pola tools dan deliverable yang biasa diminta.',
          }),
          action({
            title: 'Rumuskan layanan pertama dalam satu kalimat',
            why: 'Tanpa rumusan yang jelas, kamu bakal melamar job secara acak dan profilmu jadi campur aduk. Satu kalimat definisi ini yang nanti jadi acuan buat isi profil, portfolio, dan proposal — semua harus konsisten nunjuk ke sini.',
            how: [
              'Pilih satu kelompok klien dari hasil riset: bukan "semua orang yang butuh media sosial", tapi spesifik seperti "UMKM F&B" atau "toko online skala kecil".',
              'Pilih satu masalah berulang yang paling sering muncul di riset job dan paling bisa kamu selesaikan.',
              'Tentukan satu deliverable konkret yang kamu tawarkan sebagai solusi masalah itu.',
              'Susun jadi rumus: "Saya membantu [target klien] menghasilkan [deliverable] menggunakan [skill/tools]" — dan tes apakah kalimat ini masuk akal dibaca orang yang nggak kenal kamu sama sekali.',
            ],
            example: '"Saya membantu UMKM F&B menghasilkan konten Instagram konsisten (3 post/minggu + caption) menggunakan Canva dan content calendar." Kalimat ini langsung jelas: siapa kliennya, apa hasilnya, dan bagaimana caranya — bukan "saya jago social media" yang nggak nunjuk ke mana-mana.',
            doneWhen: 'Kamu punya satu kalimat layanan yang mengisi rumus di atas secara spesifik, dan kalimat itu langsung ketebak arahnya oleh orang lain tanpa kamu perlu jelasin lagi.',
          }),
        ],
        source: { label: 'Panduan resmi kategori skill Upwork', url: 'https://www.upwork.com/i/how-it-works/freelancer/' },
      },
      {
        id: 'build-initial-proof',
        title: 'Siapkan dua bukti kemampuan',
        duration: '90 menit',
        summary: 'Klien Upwork nggak bisa melihat kerjamu langsung — mereka cuma punya profil dan portfolio sebagai bukti. Tanpa itu, klaim sebagus apapun cuma jadi kata-kata kosong. Pengalaman non-Upwork (kantor, kuliah, project pribadi) tetap sah dipakai selama disajikan jujur.',
        outcome: 'Punya minimal dua project relevan yang menunjukkan proses kerja dan kualitas deliverable, siap dipakai sebagai portfolio.',
        actions: [
          action({
            title: 'Audit dan pilih pekerjaan lama yang boleh ditampilkan',
            why: 'Banyak orang punya bukti bagus tapi nggak sadar bisa dipakai — atau sebaliknya, pakai project yang sebenarnya terikat NDA/kontrak kerahasiaan tanpa sadar risikonya. Audit ini soal memilah mana yang aman dan relevan sebelum ditampilkan ke publik.',
            how: [
              'Kumpulkan semua kandidat: project kantor, tugas kuliah, kerja organisasi, volunteer, atau project pribadi yang relevan dengan layanan yang sudah kamu rumuskan.',
              'Cek status legal tiap project: apakah ada kontrak kerja atau NDA yang melarang publikasi, apakah ada data pribadi orang lain di dalamnya, apakah kamu benar-benar punya izin memakainya sebagai contoh.',
              'Kalau kepemilikan atau izin nggak jelas, minta izin tertulis dulu (chat/email singkat ke atasan atau klien lama sudah cukup) sebelum menampilkannya — jangan asumsikan boleh.',
              'Anonimkan data sensitif: ganti nama klien/perusahaan dengan sebutan umum ("klien retail skala menengah"), hapus angka finansial internal atau data pengguna yang bisa mengidentifikasi orang.',
            ],
            example: 'Kamu pernah bikin laporan penjualan bulanan pakai spreadsheet untuk kantor lama. Data penjualan itu rahasia perusahaan, tapi TEMPLATE dan STRUKTUR laporan (rumus, layout, cara visualisasi) bukan rahasia — jadi kamu bikin ulang versi dengan angka dummy yang realistis untuk ditampilkan, sambil jujur menyebut ini rekonstruksi dari pekerjaan asli.',
            doneWhen: 'Kamu punya daftar project yang sudah dicek status izinnya, dengan data sensitif sudah dianonimkan atau diganti, dan kamu yakin nggak melanggar kontrak/kepercayaan siapa pun kalau ditampilkan.',
          }),
          action({
            title: 'Isi kekurangan bukti dengan concept project yang jujur',
            why: 'Kalau bukti dari pengalaman lama belum cukup (kurang dari 2 project relevan), jangan berhenti di situ atau mengarang klien palsu — bikin project simulasi yang dikerjakan dengan standar sama seperti kerja berbayar. Ini jauh lebih kredibel daripada portofolio kosong atau portofolio bohong.',
            how: [
              'Ambil masalah realistis dari job yang sudah kamu riset sebelumnya (bukan masalah karangan sendiri yang nggak nyambung pasar).',
              'Tulis brief simulasi singkat: siapa target pengguna/kliennya, apa scope kerjanya, apa deliverable akhirnya — perlakukan ini seperti brief asli dari klien.',
              'Kerjakan dengan proses yang sama seperti kalau ini project berbayar: riset, draft, revisi, hasil akhir — jangan asal-asalan karena "cuma latihan".',
              'Labeli dengan jujur sebagai "personal project" atau "concept project" di deskripsinya. JANGAN mengarang nama klien, testimoni, atau hasil bisnis (misal "meningkatkan penjualan 300%") yang nggak pernah benar-benar terjadi — ini bisa ketahuan dan menghancurkan kredibilitas.',
            ],
            example: 'Kamu belum pernah kerja untuk klien F&B beneran. Kamu ambil brief fiktif "toko kopi lokal butuh 1 minggu konten Instagram untuk promo menu baru", lalu bikin 7 desain post + caption + jadwal posting lengkap seperti project sungguhan. Di portfolio kamu tulis jelas: "Concept project — simulasi brief untuk toko kopi lokal (bukan klien nyata)".',
            doneWhen: 'Kamu punya minimal 1 concept project dengan brief, proses, dan hasil akhir yang lengkap dan dikerjakan serius, dan label "personal/concept project"-nya jelas tertulis tanpa klaim palsu.',
          }),
          action({
            title: 'Susun kedua bukti jadi studi kasus, bukan sekadar galeri gambar',
            why: 'Gambar hasil akhir doang nggak cerita apa-apa soal cara berpikirmu. Klien yang mau bayar mahal justru mau tahu bagaimana kamu mengambil keputusan saat kerja — itu yang membedakan kamu dari orang yang cuma niru template.',
            how: [
              'Jelaskan konteks dan masalah dalam 2-3 kalimat: apa situasi awalnya, apa yang klien/pengguna butuhkan.',
              'Nyatakan peranmu secara jelas: scope kerja, tools yang dipakai, dan keputusan utama yang kamu ambil (misal "saya pilih warna kontras tinggi karena target audiens generasi 45+").',
              'Tampilkan proses secukupnya (1-2 draft/iterasi cukup, jangan banjiri dengan semua versi), lalu prioritaskan menampilkan deliverable akhir dengan jelas.',
              'Cantumkan hasil terverifikasi kalau ada metrik (followers naik, engagement naik, waktu kerja lebih cepat). Kalau belum ada angka, jelaskan indikator kualitas secara spesifik tanpa mengarang — misal "konten ini dipakai konsisten oleh klien selama 3 bulan tanpa revisi besar".',
            ],
            example: 'Studi kasus toko roti: "Toko roti keluarga posting nggak konsisten dan followers stuck di 800. Saya susun kalender konten 3x/minggu dengan campuran promo, behind-the-scenes, dan testimoni pelanggan, pakai Canva untuk konsistensi visual. Dalam 6 bulan followers naik ke 2.100 dan ada peningkatan pesan masuk lewat DM." — ini jauh lebih meyakinkan daripada cuma pajang 5 foto post Instagram.',
            doneWhen: 'Kedua bukti (dari project lama dan/atau concept project) sudah ditulis dalam format konteks → proses → hasil, masing-masing bisa dibaca dan dipahami dalam kurang dari 1 menit oleh orang yang nggak tahu apa-apa soal project itu.',
          }),
        ],
      },
      {
        id: 'work-english-check',
        title: 'Uji English untuk komunikasi kerja',
        duration: '40 menit',
        summary: 'Kamu nggak perlu terdengar seperti native speaker. Yang klien butuhkan adalah kamu bisa memahami scope kerja dengan akurat dan menyampaikan status/pertanyaan tanpa menimbulkan salah tafsir yang bikin project berantakan.',
        outcome: 'Mampu membaca brief kerja, mengajukan pertanyaan klarifikasi, memberi update progres, dan menjelaskan layananmu dalam English sederhana yang jelas.',
        actions: [
          action({
            title: 'Uji pemahamanmu terhadap job description asli',
            why: 'Salah paham soal scope adalah salah satu penyebab paling umum konflik dengan klien — bukan karena skill teknis kurang, tapi karena salah baca apa yang sebenarnya diminta. Latihan ini melatih kamu menangkap detail penting dari teks English yang sering ditulis buru-buru atau nggak terlalu rapi oleh klien.',
            how: [
              'Pilih 3 job description asli sesuai skill yang kamu incar (dari riset job sebelumnya).',
              'Tulis ulang dalam Bahasa Indonesia: apa tujuan project, apa deliverable yang diminta, kapan deadline, tools apa yang dipakai, dan batasan/exclusion apa yang disebut (misal "revisi maksimal 2x").',
              'Tandai istilah yang belum kamu pahami, cari artinya dalam KONTEKS kerja (bukan arti kamus umum) — misal "turnaround time" di konteks freelance beda nuansa dari terjemahan kamus biasa.',
              'Bandingkan ringkasanmu dengan brief asli: cek apakah ada detail penting yang kelewat atau salah tangkap.',
            ],
            example: 'Job description bilang "Looking for someone who can turn around 3 Reels scripts per week, with quick revision cycle (24hr max)." Kalau kamu cuma nangkap "butuh bikin script Reels" tanpa nangkap "3 per minggu" dan "revisi maksimal 24 jam", kamu bakal salah kasih ekspektasi waktu ke klien nanti.',
            doneWhen: 'Kamu bisa meringkas 3 job description asli dengan akurat (tujuan, deliverable, deadline, tools, batasan) tanpa kelewat detail penting, dan sudah paham istilah kerja yang tadinya asing.',
          }),
          action({
            title: 'Latih 4 pesan kerja inti yang bakal kamu pakai berulang',
            why: 'Sebagian besar komunikasi kerja di Upwork berputar di pola yang sama: klarifikasi, konfirmasi, update, dan serah terima. Kalau kamu sudah punya struktur untuk 4 hal ini, kamu nggak perlu mikir dari nol tiap kali harus menulis pesan ke klien — dan pesanmu lebih jelas, lebih profesional.',
            how: [
              'Tulis 3 pertanyaan klarifikasi standar: soal scope ("Does this include X or only Y?"), target audience ("Who is the primary audience for this?"), dan referensi ("Do you have examples of style you like?").',
              'Tulis 1 pesan konfirmasi pemahaman sebelum mulai kerja: ringkas apa yang kamu pahami dari brief, minta klien konfirmasi sebelum kamu lanjut — ini mencegah kerja ulang kalau ada salah paham.',
              'Tulis 1 template update progres: status saat ini, ada blocker atau tidak, dan langkah selanjutnya — 3 poin pendek, bukan paragraf panjang.',
              'Tulis 1 pesan penyerahan hasil: sebutkan apa yang diserahkan, di mana filenya, dan ajakan untuk memberi feedback.',
            ],
            example: 'Update progres: "Status: 2 of 3 Reels scripts drafted. Blocker: waiting on your confirmation for the tone (casual vs formal) before finalizing. Next: will finish all 3 within 24hrs of your reply." — singkat, jelas statusnya, dan langsung kasih tahu apa yang klien perlu lakukan.',
            doneWhen: 'Kamu punya 4 template pesan (klarifikasi, konfirmasi, update, serah terima) dalam English yang sudah kamu tulis sendiri dan pahami tiap katanya, siap dipakai/disesuaikan tanpa perlu translate dari nol tiap kali.',
          }),
        ],
      },
      {
        id: 'create-valid-upwork-account',
        title: 'Buat akun Upwork yang valid',
        duration: '25 menit',
        summary: 'Akun harus memakai identitas asli dan data yang konsisten di semua bagian, karena Upwork bisa melakukan pemeriksaan keamanan atau verifikasi kapan saja — dan akun yang bermasalah di tahap ini bisa mengunci semua usaha kamu sebelum sempat mulai.',
        outcome: 'Bisa login ke satu akun freelancer yang valid, sudah lolos verifikasi dasar, dan bisa mengakses halaman edit profil.',
        actions: [
          action({
            title: 'Siapkan identitas asli, lalu daftar lewat alur resmi',
            why: 'Upwork ketat soal identitas karena ini platform pembayaran lintas negara — akun dengan data nggak konsisten (nama beda dari rekening, lokasi palsu) berisiko ditangguhkan saat verifikasi, biasanya justru pas kamu baru dapat kontrak pertama. Lebih baik benar dari awal daripada kena masalah di waktu paling krusial.',
            how: [
              'Gunakan nama legal yang sama persis dengan identitas resmi dan rekening/metode pembayaran yang nanti dipakai — jangan pakai nama panggung atau nama bisnis.',
              'Siapkan email dan nomor telepon aktif milik sendiri (bukan pinjam punya orang lain), karena ini dipakai untuk verifikasi berkelanjutan.',
              'Masukkan negara dan lokasi yang sebenarnya — jangan diubah untuk terlihat "lebih strategis", karena ini bisa terdeteksi dan berisiko akun ditangguhkan.',
              'Siapkan dokumen identitas resmi (KTP/paspor) sebelum mendaftar, supaya kalau diminta verifikasi kamu nggak perlu terburu-buru.',
              'Daftar lewat situs atau app resmi Upwork, pilih tipe akun freelancer, dan pastikan hanya buat SATU akun utama — jangan bikin akun kedua untuk "niche berbeda" karena ini melanggar kebijakan dan berisiko kena banned semua akun.',
            ],
            example: 'Nama di KTP kamu "Siti Aminah", tapi kamu biasa dipanggil "Amy" di media sosial. Saat daftar Upwork, pakai "Siti Aminah" — bukan "Amy" — karena ini yang harus cocok dengan rekening bank/dompet digital saat proses penarikan dana nanti.',
            doneWhen: 'Kamu sudah submit pendaftaran dengan nama, email, nomor telepon, dan lokasi yang semuanya sesuai identitas asli dan konsisten satu sama lain, dan hanya punya satu akun freelancer aktif.',
          }),
          action({
            title: 'Pastikan akses profil dan amankan akun',
            why: 'Akun yang bisa login doang belum tentu siap dipakai — kamu perlu pastikan semua bagian edit profil bisa diakses dan verifikasi/keamanan sudah beres, supaya nggak ada kejutan pas mau mulai isi profil di lesson berikutnya.',
            how: [
              'Masuk ke halaman profil setelah pendaftaran selesai, cek apakah kamu bisa membuka menu edit untuk semua bagian: headline, overview, skills, rate, employment history, dan portfolio.',
              'Selesaikan proses verifikasi atau onboarding yang diminta Upwork dengan jujur — jangan lewati atau isi asal supaya cepat selesai.',
              'Aktifkan pengamanan tambahan seperti two-factor authentication (2FA) supaya akun nggak gampang diambil alih orang lain, terutama karena akun ini nantinya terhubung ke pembayaran.',
              'Jangan pernah pakai akun milik orang lain atau membiarkan orang lain login pakai akunmu, meskipun cuma "dibantu isi profil" — ini melanggar aturan platform.',
            ],
            example: 'Setelah daftar, kamu login dan cek satu-satu: bisa buka form edit headline (bisa), bisa upload portfolio (bisa), tapi ada notifikasi minta verifikasi identitas tambahan — kamu selesaikan itu dulu sebelum lanjut isi profil, supaya nggak ada bagian yang terkunci di tengah jalan nanti.',
            doneWhen: 'Kamu bisa login dan membuka semua menu edit profil tanpa hambatan, 2FA sudah aktif, dan tidak ada notifikasi verifikasi yang masih menggantung.',
          }),
        ],
        source: { label: 'Panduan membuat akun Upwork', url: 'https://support.upwork.com/hc/en-us/articles/211067788-Create-an-account' },
      },
      {
        id: 'prepare-work-system',
        title: 'Siapkan perangkat dan kapasitas kerja',
        duration: '30 menit',
        summary: 'Menang kontrak tanpa kapasitas untuk mengerjakannya cuma memindahkan masalah ke belakang — jadi masalah deadline meleset, kualitas turun, dan reputasi rusak di kontrak pertama. Cek kesiapan teknis dan waktu dulu sebelum mulai kirim proposal.',
        outcome: 'Punya perangkat, koneksi, backup, dan blok waktu mingguan yang realistis untuk mencari job dan mengerjakan project.',
        actions: [
          action({
            title: 'Uji perangkat dan siapkan jalur backup teknis',
            why: 'Perangkat yang "kelihatannya baik-baik saja" untuk browsing bisa keteteran begitu dipakai kerja beneran — file besar, render, atau multitasking. Lebih baik ketahuan sekarang saat belum ada deadline klien yang taruhannya, daripada saat kontrak sudah jalan.',
            how: [
              'Jalankan tools utama yang bakal kamu pakai kerja secara bersamaan, seperti kondisi kerja nyata (misal: browser + Canva + spreadsheet + aplikasi chat sekaligus terbuka).',
              'Buka file project dengan ukuran/kompleksitas realistis, coba proses export atau build sampai selesai, catat kalau ada bottleneck (RAM penuh, storage hampir habis, rendering lambat).',
              'Siapkan alternatif kalau perangkat utama gagal di tengah kerja — misal warnet/coworking terdekat, atau laptop pinjaman dari kenalan.',
              'Uji kecepatan dan kestabilan internet untuk upload file besar dan video call, siapkan hotspot HP sebagai cadangan, aktifkan cloud backup otomatis, dan tetapkan struktur folder + penamaan versi file yang konsisten (misal "ClientName_ProjectName_v2_2024-06-10") supaya nggak kehilangan progres.',
            ],
            example: 'Kamu coba edit video 5 menit resolusi HD sambil browser terbuka 10 tab dan aplikasi chat aktif — laptop lag parah dan render butuh 40 menit. Ini kamu temukan SEBELUM ambil kontrak, jadi kamu tahu perlu tutup aplikasi lain saat render, atau upgrade RAM sebelum ambil job video yang lebih berat.',
            doneWhen: 'Kamu sudah menjalankan simulasi kerja nyata di perangkatmu tanpa kegagalan fatal, punya rencana cadangan kalau perangkat/internet bermasalah, dan sistem backup file sudah aktif jalan otomatis.',
          }),
          action({
            title: 'Tetapkan kapasitas mingguan yang realistis, bukan ambisius',
            why: 'Overpromise soal berapa banyak project yang bisa kamu handle adalah jalan tercepat menuju keterlambatan dan review buruk di kontrak pertama. Kapasitas yang jujur dari awal justru bikin kamu bisa deliver konsisten dan membangun reputasi baik.',
            how: [
              'Hitung waktu kosong yang benar-benar tersisa setelah kerja utama, tanggung jawab keluarga, dan waktu istirahat — jangan hitung "waktu ideal" yang sebenarnya nggak realistis.',
              'Sediakan blok waktu khusus terpisah untuk riset job, menulis proposal, komunikasi dengan klien, dan mengerjakan deliverable — jangan digabung jadi satu waktu "kerja freelance" yang samar.',
              'Mulai dengan target konservatif, sekitar 5-10 jam per minggu untuk pemula, supaya ada ruang untuk belajar proses tanpa tekanan berlebihan.',
              'Batasi jumlah project aktif berdasarkan waktu yang benar-benar tersedia, bukan berdasarkan target pendapatan yang kamu inginkan — dua hal ini sering nggak sinkron di awal.',
            ],
            example: 'Kamu kerja kantor 9-5 dan punya waktu luang realistis cuma 8 jam/minggu (weekend + malam hari 2 jam). Kamu alokasikan: 2 jam riset+proposal, 5 jam pengerjaan project, 1 jam komunikasi/revisi. Dengan itu, kamu cuma ambil 1 project kecil per minggu dulu — bukan 3 project sekaligus yang bikin semua telat.',
            doneWhen: 'Kamu punya angka jam mingguan yang sudah dihitung dari waktu kosong asli (bukan angan-angan), dengan pembagian blok untuk riset/kerja/komunikasi yang jelas, dan batas jumlah project aktif yang sesuai kapasitas itu.',
          }),
        ],
      },
      {
        id: 'payment-admin-readiness',
        title: 'Siapkan pembayaran dan administrasi',
        duration: '35 menit',
        summary: 'Pendapatan kotor dari kontrak bukan pendapatan yang benar-benar masuk ke rekeningmu. Fee Upwork, biaya penarikan, selisih kurs, dan kewajiban pajak lokal semua memotong angka itu — dan kalau nggak dipahami dari awal, kamu bisa kaget lihat selisihnya.',
        outcome: 'Punya rencana penarikan dana yang jelas dan sistem pencatatan pendapatan yang konsisten sejak kontrak pertama.',
        actions: [
          action({
            title: 'Pilih metode penarikan dan hitung pendapatan bersih riil',
            why: 'Rate yang kamu pasang di proposal bukan angka yang akhirnya kamu terima — ada beberapa lapis potongan sebelum uang benar-benar sampai ke rekeningmu. Kalau nggak dihitung dari awal, kamu bisa salah menetapkan rate yang ternyata nggak cukup menutupi biaya hidup setelah semua potongan.',
            how: [
              'Cek metode penarikan yang tersedia di pengaturan akun Upwork (transfer bank lokal, PayPal, Payoneer, dll) — nggak semua metode tersedia di semua negara.',
              'Bandingkan fee, waktu proses, kurs yang dipakai, dan batas minimum penarikan tiap metode — selisihnya bisa cukup besar terutama untuk penarikan kecil.',
              'Pastikan nama penerima di metode pembayaran konsisten dengan nama di akun Upwork dan identitas resmi, supaya nggak ada penolakan transaksi.',
              'Hitung pendapatan bersih riil: mulai dari nilai project kotor, kurangi fee Upwork, kurangi biaya penarikan, kurangi potensi selisih kurs, kurangi biaya software/tools yang dipakai kerja, dan sisihkan cadangan untuk pajak — baru itu angka yang benar-benar jadi milikmu.',
            ],
            example: 'Kontrak senilai $200. Kurangi fee yang ditampilkan Upwork untuk kontrak tersebut, biaya penarikan yang berlaku, dan selisih kurs saat konversi USD ke Rupiah. Setelah semua potongan itu dan sisihkan untuk pajak, angka yang benar-benar bisa kamu pakai jauh di bawah $200 — inilah yang harus kamu hitung di depan, bukan setelah uang cair dan kaget.',
            doneWhen: 'Kamu sudah memilih satu metode penarikan yang cocok dengan situasimu, dan punya rumus perhitungan pendapatan bersih (kotor dikurangi semua potongan) yang bisa langsung kamu pakai tiap kali dapat kontrak baru.',
          }),
          action({
            title: 'Bangun sistem pencatatan transaksi sejak kontrak pertama',
            why: 'Menunda pencatatan sampai "nanti kalau sudah banyak kontrak" hampir selalu berakhir dengan data berantakan atau hilang. Mencatat dari kontrak pertama jauh lebih ringan daripada merekonstruksi riwayat transaksi belakangan, dan ini juga jadi dasar kalau nanti perlu lapor pajak.',
            how: [
              'Buat spreadsheet sederhana dengan kolom: tanggal, nama klien, contract ID, nilai kotor, fee Upwork, kurs saat itu, biaya penarikan, dan nilai bersih akhir.',
              'Simpan invoice, laporan transaksi, dan bukti penarikan dana, dikelompokkan per tahun supaya gampang dicari saat dibutuhkan.',
              'Update spreadsheet setiap kali ada transaksi masuk — jangan ditumpuk untuk diisi sekaligus di akhir bulan, karena detail (kurs, fee spesifik) gampang lupa atau salah catat.',
              'Kalau situasi pajak kamu kompleks (penghasilan dari luar negeri, jumlah signifikan, dll), konsultasikan dengan konsultan pajak lokal — jangan menebak sendiri aturan yang berlaku.',
            ],
            example: 'Tiap kali dana cair dari Upwork, kamu langsung buka spreadsheet, isi baris baru: "10 Juni 2024 | Klien A | Contract #12345 | $200 kotor | fee sesuai kebijakan saat itu | kurs Rp15.600 | biaya tarik $2 | bersih diterima Rp[hasil hitung]". Prosesnya cuma 2 menit tiap transaksi, tapi setelah setahun kamu punya data lengkap dan rapi buat lihat total penghasilan atau lapor pajak.',
            doneWhen: 'Kamu punya spreadsheet pencatatan yang sudah dibuat dengan kolom lengkap, kebiasaan mengisi tiap ada transaksi baru sudah jadi rutinitas, dan folder penyimpanan bukti transaksi per tahun sudah tersedia.',
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
            how: ["Employment history: isi semua pengalaman relevan, tiap posisi minimal dua poin tanggung jawab + hasil.", "Education: isi jenjang terakhir walau tidak linear dengan skill yang dijual.", "Language: cantumkan level bahasa (khususnya Inggris) sesuai kemampuan komunikasi kerja nyata.", "Availability: set jam kerja dan kapasitas per minggu agar sesuai ekspektasi klien.", "Certification: upload sertifikat yang masih relevan dan bisa diverifikasi, buang yang kadaluarsa atau tidak nyambung."],
            example: "Product Designer, PT Aruna Digital, 2022–2025: merancang ulang alur onboarding aplikasi B2B, berkolaborasi dengan dua engineer, dan mengurangi waktu penyelesaian aktivasi dari 12 menjadi 8 menit berdasarkan data internal.",
            doneWhen: "Kelima bagian (employment history, education, language, availability, certification) terisi akurat, setiap pengalaman utama memuat hasil, dan tidak ada informasi yang bertentangan dengan positioning.",
          }),
          action({
            title: "Selaraskan identitas profil",
            why: "Identitas yang konsisten membuat spesialisasi lebih cepat dipahami dan didukung bukti yang tepat.",
            how: ["Layanan utama: tetapkan satu layanan dan satu kelompok klien target.", "Headline & overview: tulis ulang agar menyebut layanan utama dan target klien secara eksplisit.", "Skill list: pilih skill yang mendukung layanan utama, buang skill acak yang mengaburkan fokus.", "Portfolio order: tempatkan bukti paling relevan di urutan pertama.", "Rate: pastikan angka rate masuk akal untuk layanan dan level bukti yang ditampilkan."],
            example: "Headline \"SaaS UX Designer | Onboarding & Dashboard\"; skill utama UX Research, Figma, dan Product Design; dua portfolio teratas membahas onboarding SaaS dan dashboard analitik.",
            doneWhen: "Kelima bagian (layanan utama, headline/overview, skill list, urutan portfolio, rate) mengarah pada spesialisasi yang sama.",
          }),
          action({
            title: "Audit dari sudut pandang klien",
            why: "Tampilan publik menunjukkan informasi yang benar-benar dilihat klien sebelum membuka detail lebih jauh.",
            how: ["Buka mode publik: cek tampilan lewat desktop dan ponsel.", "Batasi waktu: beri diri sendiri maksimal 15 detik membaca sekilas.", "Catat tiga hal: apakah target klien, masalah, dan bukti kemampuan langsung terlihat.", "Perbaiki urutan: pindahkan atau ringkas bagian yang menghambat pemahaman cepat."],
            example: "Dalam 15 detik terlihat: \"SaaS UX Designer\", fokus pada onboarding, serta studi kasus yang menunjukkan penurunan drop-off registrasi sebesar 18%.",
            doneWhen: "Seorang peninjau baru dapat menyebut target klien, masalah utama, dan satu bukti kemampuan dengan benar setelah melihat profil selama 15 detik.",
          }),
          action({
            title: "Periksa akurasi dan kepatuhan",
            why: "Klaim yang akurat menjaga kepercayaan dan mengurangi risiko pelanggaran aturan platform.",
            how: ["Cocokkan data: tanggal, jabatan, angka, dan deskripsi harus sesuai dokumen sumber.", "Verifikasi testimoni & sertifikat: pastikan keduanya punya asal yang sah.", "Hapus klaim kosong: buang keyword atau klaim yang tidak didukung pengalaman nyata.", "Cek aturan platform: baca ulang ketentuan resmi Upwork sebelum menerbitkan perubahan sensitif."],
            example: "Klaim \"menaikkan conversion 24%\" dipakai karena tercatat dalam laporan proyek; klaim \"expert CRO\" dihapus karena belum memiliki bukti kerja yang cukup.",
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
            how: ["Target klien: pilih satu kelompok klien yang ingin dilayani.", "Masalah utama: tentukan satu masalah dan jenis deliverable yang dijual.", "Frasa pencarian: buat kata kunci yang memuat niche atau konteks industri.", "Konsistensi: gunakan frasa yang sama saat membandingkan profil dan job."],
            example: "Benchmark: \"B2B SaaS UX Designer\" untuk klien SaaS tahap awal yang membutuhkan audit onboarding dan prototype perbaikan di Figma.",
            doneWhen: "Tersedia satu frasa pencarian yang secara eksplisit mewakili target klien, masalah, dan level layanan.",
          }),
          action({
            title: "Kumpulkan sampel secara manual",
            why: "Sampel profil dan job memberi gambaran nyata tentang bahasa pasar, kebutuhan, dan kisaran harga tanpa otomatisasi berisiko.",
            how: ["Pencarian resmi: cari lewat fitur pencarian Upwork memakai niche terpilih.", "Buka sampel: telaah 10–15 profil relevan dan 10 job terbaru.", "Catat data: rekam headline, skill, rate, deliverable, dan masalah dalam tabel pribadi.", "Batasan: catat manual saja, jangan gunakan scraper atau data pribadi orang lain."],
            example: "Tabel berisi 12 profil dan 10 job \"B2B SaaS UX\"; tujuh job meminta onboarding audit, lima meminta prototype Figma, dan rate profil yang terlihat berkisar US$35–US$90 per jam.",
            doneWhen: "Tabel memuat sedikitnya 10 profil dan 10 job relevan, semua dicatat manual, tanpa salinan data pribadi.",
          }),
          action({
            title: "Cari pola, bukan kalimat",
            why: "Pola membantu memakai kosakata pasar tanpa menjiplak materi freelancer lain.",
            how: ["Normalisasi istilah: satukan variasi istilah yang bermakna sama.", "Hitung frekuensi: tandai keyword, skill, masalah, dan deliverable yang paling sering muncul.", "Kelompokkan: susun istilah berdasarkan kebutuhan klien.", "Saring: pilih hanya istilah yang sesuai kemampuan dan bukti sendiri."],
            example: "\"User onboarding\", \"activation flow\", dan \"signup UX\" dikelompokkan sebagai masalah aktivasi; istilah \"onboarding audit\" dipilih karena didukung dua proyek terdahulu.",
            doneWhen: "Tersedia daftar pola berfrekuensi beserta kelompok masalahnya, dan tidak ada kalimat profil lain yang disalin.",
          }),
          action({
            title: "Tentukan benchmark rate",
            why: "Nilai tengah sampel memberi referensi pasar yang lebih tahan terhadap rate sangat rendah atau sangat tinggi.",
            how: ["Ambil data: kumpulkan rate dari profil pembanding yang benar-benar relevan.", "Urutkan: susun nilai dari terendah ke tertinggi.", "Hitung median: catat nilai tengah dan rentang kuartil jika sampel cukup.", "Tetapkan rate: sesuaikan dengan pengalaman, kompleksitas, bukti hasil, dan komunikasi."],
            example: "Dari 12 profil, median rate tercatat US$55 per jam; rate awal dipilih US$45 karena pengalaman niche masih terbatas tetapi dua studi kasus sudah relevan.",
            doneWhen: "Median sampel terdokumentasi, rate profil memiliki alasan tertulis, dan nilainya tidak diperlakukan sebagai kewajiban pasar.",
          }),
          action({
            title: "Uji relevansi pada bukti sendiri",
            why: "Keyword yang memiliki bukti membuat positioning lebih kredibel dan tidak terasa dibuat untuk mesin pencarian.",
            how: ["Daftar keyword: tulis semua keyword yang akan dimasukkan.", "Pasangkan bukti: hubungkan tiap keyword dengan project, pengalaman, sertifikasi, atau hasil.", "Saring: hapus istilah yang tidak memiliki bukti memadai.", "Urutkan: tempatkan bukti terkuat dekat dengan klaim terkait."],
            example: "Keyword \"mobile usability testing\" didukung proyek pengujian terhadap delapan pengguna dan laporan berisi 14 temuan; \"fintech compliance\" tidak dipakai karena belum pernah dikerjakan.",
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
            how: ["Posisi kamera: ambil foto kepala dan bahu dengan kamera sejajar mata.", "Komposisi: isi sebagian besar frame dengan wajah tanpa memotong kepala secara janggal.", "Ekspresi: tatap kamera dan gunakan ekspresi natural.", "Uji crop: pastikan komposisi tetap jelas setelah dipotong menjadi persegi atau lingkaran."],
            example: "Foto 1200×1200 piksel menampilkan kepala dan bahu, mata sejajar kamera, ekspresi ramah, serta ruang tipis di atas kepala.",
            doneWhen: "Wajah menjadi fokus utama, kedua mata terlihat jelas, dan komposisi tetap utuh dalam thumbnail avatar.",
          }),
          action({
            title: "Atur cahaya dan latar",
            why: "Cahaya merata dan latar sederhana membuat wajah terlihat jelas tanpa gangguan visual.",
            how: ["Sumber cahaya: hadap ke jendela atau cahaya lembut dari depan.", "Latar belakang: gunakan latar polos yang kontras dengan warna pakaian.", "Hindari backlight: matikan sumber cahaya belakang yang membuat wajah gelap.", "Cek detail: periksa bayangan keras, pantulan kacamata, dan objek pengganggu sebelum memotret."],
            example: "Foto diambil satu meter dari jendela pada pagi hari, dengan dinding abu muda dan pakaian biru tua; wajah terang merata tanpa objek di belakang.",
            doneWhen: "Wajah memiliki pencahayaan seimbang, batas tubuh terlihat dari latar, dan tidak ada elemen belakang yang menarik perhatian.",
          }),
          action({
            title: "Jaga tampilan autentik",
            why: "Foto yang terbaru dan representatif membantu klien mengenali orang yang akan mereka ajak bekerja.",
            how: ["Kebaruan: gunakan foto terbaru yang masih menyerupai penampilan saat ini.", "Kualitas file: pilih berkas tajam tanpa blur atau kompresi berat.", "Filter: hapus filter yang mengubah bentuk wajah atau warna kulit secara berlebihan.", "Larangan: jangan gunakan foto grup, logo, ilustrasi, atau gambar AI yang tidak merepresentasikan dirimu."],
            example: "Potret diambil dua bulan lalu dengan kamera ponsel, warna dikoreksi ringan, tanpa penghalusan wajah, filter artistik, atau penggantian latar generatif.",
            doneWhen: "Foto tajam, menampilkan dirimu sendiri, sesuai penampilan terkini, dan tidak mengandung representasi palsu.",
          }),
          action({
            title: "Uji pada ukuran kecil",
            why: "Foto profil sering muncul sebagai thumbnail sehingga kualitas ukuran penuh saja tidak cukup.",
            how: ["Perkecil: kecilkan foto ke ukuran avatar sekitar 64×64 piksel.", "Cek ketajaman: periksa ketajaman wajah, mata, dan kontras terhadap latar.", "Bandingkan crop: uji dua atau tiga crop bila wajah kurang terbaca.", "Minta feedback: minta satu orang menilai profesional, ramah, dan dapat dipercaya secara terpisah."],
            example: "Pada ukuran 64×64 piksel, wajah masih terbaca jelas; peninjau memberi nilai 4/5 untuk profesional, 5/5 untuk ramah, dan 4/5 untuk dapat dipercaya.",
            doneWhen: "Wajah tetap jelas pada ukuran avatar dan peninjau memberi penilaian positif pada ketiga atribut tanpa perlu melihat versi besar.",
          }),

        ],
      },
      {
        id: 'positioning',
        title: 'Tulis positioning yang spesifik',
        duration: '35 menit',
        summary: 'Klien Upwork nyari dalam hitungan detik pakai keyword spesifik masalah mereka — bukan menjelajahi profil satu-satu untuk menebak apa yang kamu jual. Kalau headline dan overview-mu masih berisi daftar skill umum, kamu nggak akan muncul di pencarian yang tepat, dan yang muncul pun nggak yakin kamu bisa selesaikan masalah mereka.',
        outcome: 'Headline dan overview yang secara eksplisit menjawab tiga hal: siapa yang kamu bantu, masalah apa yang kamu selesaikan, dan dengan keahlian/tools apa.',
        actions: [
          action({
            title: 'Pilih satu kombinasi klien dan masalah sebagai fokus utama',
            why: 'Positioning yang mencoba merangkul semua orang ("saya bisa bantu bisnis apapun dengan kebutuhan digital apapun") justru nggak dilirik siapa-siapa, karena nggak ada yang merasa "ini persis untuk saya". Memilih satu fokus bukan berarti menolak klien lain — ini soal apa yang paling menonjol duluan di profilmu.',
            how: [
              'Daftar semua kelompok klien yang pernah atau mampu kamu layani (dari lesson pemetaan skill sebelumnya), lalu untuk tiap kelompok nilai dari 3 sisi: seberapa besar nilai bisnis masalah itu bagi klien, seberapa sering masalah itu muncul di job listing Upwork, dan seberapa kuat buktimu bisa menyelesaikannya.',
              'Pilih satu kombinasi dengan skor tertinggi di ketiga sisi itu — bukan yang paling kamu sukai atau paling luas cakupannya, tapi yang paling bisa dibuktikan dan paling dicari.',
            ],
            example: 'Kamu punya bukti kuat di "content planning untuk F&B" (skor tinggi di ketiganya) dan minat di "desain logo" (tapi belum ada bukti kuat, dan job listing-nya lebih sedikit). Kamu pilih fokus utama "content planning untuk F&B" dulu untuk positioning — desain logo bisa jadi layanan tambahan nanti setelah reputasi terbangun.',
            doneWhen: 'Kamu punya satu kalimat kombinasi klien+masalah yang jelas (misal "UMKM F&B yang kesulitan konsisten posting konten"), didukung alasan kenapa ini dipilih dibanding kandidat lain.',
          }),
          action({
            title: 'Bangun headline yang muncul saat klien search, bukan slogan kosong',
            why: 'Headline berfungsi sebagai ringkasan layanan sekaligus sinyal pencarian. Klien biasanya memakai istilah konkret seperti "Instagram content manager" atau "WordPress developer"; kalau headline cuma berisi label umum seperti "Digital Marketing Enthusiast", mereka sulit menilai kecocokan dan profilmu bisa terlewat saat pencarian.',
            how: [
              'Ambil role atau niche yang paling sering muncul persis di job listing target kamu (dari riset job sebelumnya) — pakai istilah yang sama, jangan diparafrase jadi lebih "unik".',
              'Tambahkan 1-2 skill inti yang punya bukti nyata, bukan daftar panjang semua skill yang pernah kamu coba.',
              'Pakai bahasa yang lazim dipakai klien di listing mereka — cek ulang beberapa job description untuk memastikan istilahmu match dengan yang mereka ketik.',
            ],
            example: 'Headline awal "Social Media Specialist | Digital Marketing" masih terlalu luas. Ubah jadi "Social Media Content Manager for F&B Brands | Canva & Content Calendar" agar role, target klien, dan skill inti terbaca jelas. Ini langsung match kalau klien search "social media content manager" atau "F&B content".',
            doneWhen: 'Headline-mu berisi role/niche + skill inti yang sama persis dengan istilah yang muncul di job listing target, dan kalau orang search pakai istilah itu, profilmu masuk akal untuk ditemukan.',
          }),
          action({
            title: 'Tulis overview dari sudut pandang klien, lalu edit untuk kejelasan',
            why: 'Overview yang dibuka dengan "Halo, saya adalah seorang profesional yang passionate..." langsung kehilangan perhatian klien karena belum ngomongin masalah mereka sama sekali. Klien scanning overview untuk cari jawaban "bisa nggak orang ini selesaikan masalah saya" — bukan baca cerita hidupmu.',
            how: [
              'Kalimat pertama harus langsung menyebut target klien secara spesifik ("Saya membantu UMKM F&B..." bukan "Saya seorang freelancer berpengalaman...").',
              '2 kalimat awal jelaskan masalah yang biasa dihadapi klien tersebut dan hasil yang mereka dapat kalau kerja sama kamu — konkret, bukan janji abstrak.',
              'Paragraf berikutnya jelaskan proses kerjamu secara singkat dan sertakan bukti (rujuk ke portfolio atau angka hasil dari pengalaman sebelumnya).',
              'Tutup dengan ajakan diskusi yang spesifik (misal "Kirim pesan kalau butuh 1 minggu konten trial" bukan "Hubungi saya untuk info lebih lanjut" yang generik).',
              'Setelah draft selesai, edit: hapus semua kata filler dan jargon kosong ("passionate", "dedicated", "hard-working"), pecah paragraf yang lebih dari 4 baris jadi lebih pendek, lalu baca keras-keras untuk menemukan kalimat yang tersendat atau ambigu.',
            ],
            example: 'Draft awal: "Saya adalah social media specialist yang passionate dalam membantu bisnis berkembang secara digital." Direvisi jadi: "Saya membantu UMKM F&B yang kesulitan konsisten posting konten Instagram. Dalam 6 bulan mengelola akun toko roti, saya bantu followers naik dari 800 ke 2.100 lewat kalender konten terjadwal dan visual yang konsisten pakai Canva. Kalau kamu butuh konten yang jalan tanpa kamu pusing mikirin tiap hari, kirim pesan — saya bisa mulai dengan 1 minggu trial."',
            doneWhen: 'Overview sudah melewati 2 tahap: draft berdasarkan struktur (klien → masalah/hasil → proses/bukti → ajakan) dan edit untuk hapus filler/jargon, dengan paragraf pendek dan sudah dibaca-keraskan minimal sekali untuk cek kelancaran.',
          }),
        ],
      },
      {
        id: 'portfolio',
        title: 'Ubah portfolio menjadi bukti',
        duration: '50 menit',
        summary: 'Portfolio yang cuma menampilkan gambar hasil akhir nggak menjelaskan apa-apa soal cara kamu berpikir dan mengambil keputusan saat kerja. Klien yang mau bayar lebih tinggi justru mencari bukti proses — itu yang membedakan kamu dari orang yang sekadar meniru template orang lain.',
        outcome: 'Minimal tiga studi kasus relevan yang menunjukkan alur masalah, proses pengambilan keputusan, dan hasil — bukan sekadar galeri visual.',
        actions: [
          action({
            title: 'Pilih dan urutkan 3 karya paling relevan dengan target klienmu',
            why: 'Portfolio bukan tempat memamerkan SEMUA yang pernah kamu buat — makin banyak karya yang nggak nyambung sama positioning-mu, makin bingung klien menilai apa sebenarnya keahlianmu. Kurasi yang ketat justru bikin kamu terlihat lebih fokus dan kredibel.',
            how: [
              'Daftar semua project yang boleh ditampilkan (hasil audit dari lesson bukti kemampuan sebelumnya).',
              'Nilai tiap project berdasarkan kesamaannya dengan target klien dan masalah dari positioning-mu — bukan berdasarkan mana yang menurutmu paling estetik.',
              'Pilih 3 dengan skor kesamaan tertinggi, urutkan dari yang paling relevan di posisi pertama (karena klien sering cuma lihat 1-2 yang pertama sebelum memutuskan lanjut atau tidak).',
              'Labeli tiap karya dengan jujur soal statusnya: pekerjaan klien nyata, personal project, simulasi, atau kerja tim (dan sebutkan porsi kontribusimu kalau kerja tim).',
            ],
            example: 'Kamu punya 8 karya: 3 tentang content planning F&B (sesuai positioning), 2 tentang desain logo (nggak sesuai), 3 lainnya soal admin data (nggak relevan sama sekali). Kamu tampilkan cuma 3 karya content planning F&B, urutkan dari yang hasilnya paling terukur (followers naik signifikan) di posisi teratas.',
            doneWhen: 'Kamu punya 3 karya terpilih yang semuanya nyambung langsung dengan positioning-mu, terurut dari paling relevan, dan masing-masing sudah dilabeli status kejujurannya (klien asli/simulasi/tim).',
          }),
          action({
            title: 'Tulis studi kasus lengkap: konteks, proses, dan hasil',
            why: 'Ini bagian yang paling sering diabaikan orang — mereka upload gambar tapi nggak jelasin apa-apa. Padahal justru narasi inilah yang meyakinkan klien bahwa kamu paham cara mikir yang benar, bukan cuma bisa eksekusi teknis.',
            how: [
              'Konteks: jelaskan kondisi awal, masalah yang dihadapi, tujuan project, dan indikator keberhasilan yang disepakati di awal — dalam 2-4 kalimat.',
              'Peran: sebutkan scope kerjamu secara jelas, timeline pengerjaan, siapa saja kolaborator (kalau ada), dan di mana batas tanggung jawabmu berhenti (supaya nggak diklaim melakukan lebih dari yang sebenarnya).',
              'Proses: pilih 1-2 langkah kunci yang benar-benar mengubah keputusan atau hasil akhir — bukan menceritakan semua langkah dari A sampai Z. Hubungkan tiap keputusan dengan alternatif yang sempat kamu pertimbangkan dan kenapa kamu pilih jalan itu.',
              'Hasil: cari metrik sebelum-sesudah kalau tersedia (followers, engagement, waktu kerja, komplain). Kalau datanya rahasia klien, jelaskan perubahan kualitatif yang spesifik dan jujur — jangan mengarang angka demi terlihat mengesankan.',
            ],
            example: 'Proses: "Awalnya saya pertimbangkan posting harian, tapi setelah cek kapasitas tim klien untuk approve konten, saya ubah jadi 3x/minggu dengan konten dibuat batch di awal bulan — ini lebih realistis dijalankan konsisten dan hasilnya lebih stabil dibanding target harian yang sering bolong." Ini menunjukkan proses berpikir, bukan cuma "saya bikin jadwal posting".',
            doneWhen: 'Ketiga studi kasus sudah lengkap dengan struktur konteks-peran-proses-hasil, masing-masing menyebutkan minimal satu keputusan konkret yang kamu ambil dan alasannya, dan hasil akhirnya jujur (metrik asli atau kualitatif tanpa karangan).',
          }),
          action({
            title: 'Lindungi informasi klien sebelum publikasi',
            why: 'Menampilkan portfolio bagus tapi melanggar kepercayaan klien lama (membocorkan data rahasia) bisa jadi bumerang — reputasimu di industri kecil bisa rusak, dan ini juga berisiko masalah hukum. Langkah ini murah dilakukan tapi sering dilewatkan karena buru-buru mau publish.',
            how: [
              'Cek ulang kontrak atau kesepakatan NDA dengan klien terkait sebelum upload apapun — apakah ada klausul kerahasiaan yang melarang publikasi.',
              'Kalau statusnya nggak jelas, minta persetujuan tertulis dari klien (chat singkat sudah cukup) sebelum menampilkan hasil kerjanya sebagai portfolio.',
              'Sensor nama klien, kontak, data pengguna, dan angka finansial sensitif yang bisa mengidentifikasi bisnis atau orang tertentu.',
              'Kalau project dikerjakan bersama tim, jelaskan secara proporsional kontribusi pribadimu vs kontribusi tim — jangan klaim seluruh hasil sebagai karyamu sendiri.',
            ],
            example: 'Kamu pernah bikin laporan analitik untuk klien retail dengan angka penjualan asli di dalamnya. Sebelum upload sebagai portfolio, kamu ganti semua angka dengan data dummy yang proporsinya mirip (tetap menunjukkan skill analisis yang sama), dan ganti nama klien jadi "klien retail skala menengah, Jakarta".',
            doneWhen: 'Semua 3 studi kasus sudah dicek status izin publikasinya, data sensitif sudah disamarkan/dihapus, dan kontribusi kerja tim (kalau ada) sudah dijelaskan secara jujur dan proporsional.',
          }),
        ],
      },
      {
        id: 'reputation-roadmap',
        title: 'Pahami roadmap reputasi Upwork',
        duration: '25 menit',
        summary: 'Badge seperti Rising Talent atau Top Rated adalah HASIL dari performa konsisten dari waktu ke waktu — bukan target yang bisa dipaksa muncul dengan satu trik atau template khusus. Syarat pastinya juga bisa berubah sewaktu-waktu, jadi yang perlu kamu bangun adalah kebiasaan kerja yang baik, bukan menghafal angka yang bisa kadaluarsa.',
        outcome: 'Punya milestone realistis dari profil siap jual menuju reputasi dan kontrak bernilai lebih tinggi, berdasarkan indikator yang bisa kamu kontrol.',
        actions: [
          action({
            title: 'Fokus ke indikator yang bisa kamu kontrol langsung',
            why: 'Kebanyakan orang stres mengejar badge secara langsung padahal badge itu efek samping, bukan tombol yang bisa ditekan. Energi yang lebih produktif adalah memastikan hal-hal dasar ini benar-benar solid, karena inilah yang benar-benar dinilai sistem Upwork dari waktu ke waktu.',
            how: [
              'Selesaikan profil secara relevan dan akurat sesuai positioning yang sudah kamu tetapkan — bukan cuma "complete" secara checklist tapi nyambung satu sama lain.',
              'Kirim proposal hanya untuk job yang benar-benar cocok dengan skill dan bukti yang kamu punya — melamar sembarangan menghabiskan Connects dan membuat evaluasi strategimu makin sulit.',
              'Jaga komunikasi profesional, patuhi Terms of Service, jaga kualitas delivery konsisten, dan perhatikan kesehatan akun secara keseluruhan (response time, dispute, dll).',
              'Pantau indikator resmi langsung di dashboard akunmu secara berkala — JANGAN berasumsi bahwa "profil sudah lengkap" otomatis berarti kamu akan dapat status Rising Talent, karena ini dipengaruhi banyak faktor lain di luar kontrolmu sepenuhnya.',
            ],
            example: 'Daripada menghabiskan waktu mencari "trik cepat dapat Rising Talent" di forum, kamu fokus: pastikan overview nyambung ke 3 job terakhir yang kamu lamar, cuma apply ke job yang skill-nya beneran kamu kuasai, dan selalu update klien H-1 sebelum deadline kalau ada kendala — ini yang benar-benar dinilai sistem dari waktu ke waktu.',
            doneWhen: 'Kamu punya kebiasaan rutin (bukan sekali jalan) untuk: cek kecocokan job sebelum melamar, jaga respons komunikasi tepat waktu, dan cek dashboard indikator akun minimal sebulan sekali.',
          }),
          action({
            title: 'Cek syarat Top Rated & Top Rated Plus langsung dari sumber resmi, jangan hafalkan angka lama',
            why: 'Syarat badge seperti Job Success Score minimum, lama waktu aktif, atau jumlah earnings BISA BERUBAH kapan saja sesuai kebijakan Upwork, dan sering berbeda tiap kategori pekerjaan. Kalau kamu patokan ke angka yang kamu baca dari artikel/forum tahun lalu, kamu bisa salah menetapkan target atau malah kecewa karena informasinya sudah usang.',
            how: [
              'Buka dokumentasi resmi Upwork DAN dashboard eligibility di akunmu sendiri sebelum menetapkan target apapun — jangan mengandalkan angka dari sumber pihak ketiga yang mungkin sudah kadaluarsa.',
              'Catat syarat yang berlaku SAAT ITU (JSS minimum, status Rising Talent, jumlah earnings, tingkat aktivitas, account standing) lengkap dengan tanggal kamu mengeceknya — supaya kamu tahu kapan perlu update ulang informasi ini.',
              'Jadwalkan pengecekan ulang setiap bulan, karena syarat ini bisa berubah dan berbeda-beda tergantung kategori pekerjaanmu.',
            ],
            example: 'Daripada menyimpan catatan "butuh JSS 90% untuk Top Rated" dari artikel yang kamu baca sekarang (angka ini bisa saja sudah berubah kapan saja), kamu bookmark halaman dashboard eligibility Upwork dan cek langsung di sana tiap bulan — supaya target yang kamu kejar selalu berdasarkan syarat yang benar-benar berlaku saat itu.',
            doneWhen: 'Kamu tahu di mana melihat syarat badge yang berlaku SAAT INI (bukan menghafal angka statis), dan sudah punya jadwal pengecekan ulang bulanan di kalender atau reminder pribadi.',
          }),
          action({
            title: 'Susun milestone berbasis perilaku kerja, bukan berburu badge',
            why: 'Milestone yang berbasis badge bikin kamu mudah frustrasi karena badge di luar kontrol penuhmu. Milestone berbasis perilaku (jumlah proposal, kualitas delivery, rate yang naik) selalu ada dalam kontrolmu dan lebih memotivasi karena progresnya kelihatan tiap minggu.',
            how: [
              'Susun urutan tahap realistis: profil siap jual → mulai kirim proposal rutin → dapat kontrak pertama → kumpulkan review bagus → naikkan rate secara bertahap.',
              'Tetapkan ukuran dan tenggat waktu untuk tiap tahap (misal "kirim 10 proposal berkualitas dalam 2 minggu pertama") — realistis sesuai kapasitas mingguan yang sudah kamu tetapkan sebelumnya.',
              'Catat data mentah tiap minggu: jumlah proposal dikirim, jumlah interview, jumlah kontrak didapat, feedback yang diterima, ada repeat work atau tidak, dan rate aktual yang disepakati.',
              'Review progres ini setiap bulan untuk melihat pola — misal proposal banyak tapi interview sedikit berarti ada masalah di kualitas proposal, bukan di jumlahnya.',
            ],
            example: 'Bulan 1: target kirim 15 proposal, dapat minimal 2 interview, dan 1 kontrak pertama meski rate masih rendah. Bulan 2: target 1 repeat client atau review 5 bintang dari kontrak bulan 1, mulai naikkan rate 10-15% untuk proposal baru. Progres ini kelihatan jelas tanpa perlu badge apapun sebagai patokan.',
            doneWhen: 'Kamu punya daftar milestone berurutan dengan ukuran dan tenggat yang jelas, sudah mulai mencatat data mingguan (proposal, interview, kontrak, feedback), dan punya jadwal review bulanan untuk evaluasi pola.',
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
            title: 'Cocokkan masalah job dengan bukti pengalaman yang benar-benar kamu punya',
            why: 'Kesalahan paling mahal di awal karier Upwork bukan proposal jelek, tapi ngelamar job yang sebenarnya di luar jangkauan skill kamu sekarang. Sekali ketahuan pas interview kamu nggak paham konteksnya, Connects itu hangus dan trust makin susah dibangun ke job berikutnya.',
            how: [
              'Baca deskripsi job dan tanya ke diri sendiri: kalau klien telepon sekarang, bisa nggak kamu jelasin 2-3 langkah awal buat mulai kerjain ini tanpa riset dulu? Kalau jawabannya harus googling konsep dasarnya dulu, itu tandanya job ini di luar level kamu saat ini.',
              'Jangan tertipu sama satu keyword yang cocok di judul job. Baca requirement inti-nya — kalau butuh pengalaman spesifik yang kamu belum pernah pegang (misal migrasi database besar, bukan cuma nulis SQL), lewati meski judulnya kelihatan related sama skill kamu.',
              'Sebelum apply, cari 1 project di portfolio/riwayat kamu yang paling dekat sama masalah job ini — bukan yang paling keren, tapi yang paling mirip konteksnya. Kalau nggak ketemu satu pun yang nyambung, itu sinyal kuat buat skip.',
            ],
            example: 'Job minta "Setup email automation flow untuk e-commerce pakai Klaviyo, target abandoned cart recovery". Kamu pernah setup Mailchimp tapi belum pernah pegang Klaviyo sama sekali dan nggak paham flow abandoned cart. Meski "email marketing" cocok di skill kamu, lewati — beda platform + beda logic itu risiko besar buat kontrak pertama.',
            doneWhen: 'Kamu punya daftar 5-10 job yang masing-masing bisa kamu tunjuk 1 project relevan dari riwayat kamu, dan bisa jelasin langkah pertama pengerjaannya tanpa perlu riset konsep dasar dulu.',
          }),
          action({
            title: 'Baca scope dan deliverable sebelum menilai apakah brief-nya sehat',
            why: 'Brief yang kabur bukan cuma bikin proposal kamu susah spesifik — itu preview dari gimana project bakal jalan. Klien yang nggak jelas dari awal soal apa yang dia mau, biasanya juga nggak jelas pas approval dan revisi nanti.',
            how: [
              'Cek brief-nya jawab 4 hal: output-nya apa persis, deadline kapan, konteks kenapa dia butuh ini (masalah bisnis di baliknya), dan gimana dia bakal tahu hasilnya berhasil. Kalau brief jawab semua ini dengan jelas, itu sinyal klien udah mikirin project-nya matang.',
              'Kalau ada celah info (misal nggak sebut budget range atau format file), itu masih oke — sepanjang celah itu bisa kamu tanyakan pas interview tanpa bikin ribet. Yang jadi masalah kalau celahnya fundamental, misal klien sendiri nggak tahu dia butuh apa — itu tanda project bakal banyak scope creep.',
            ],
            example: 'Brief A: "Butuh landing page untuk product launch, target convert visitor jadi waitlist signup, deadline 2 minggu, referensi 3 landing page kompetitor terlampir." Brief B: "Butuh website bagus, nanti didiskusikan lebih lanjut." Brief A layak dikejar meski belum sebut budget. Brief B butuh effort besar cuma buat nebak apa yang klien maksud — biasanya berujung revisi tanpa akhir.',
            doneWhen: 'Untuk tiap job yang kamu masukkan shortlist, kamu bisa tulis 1 kalimat: "Output-nya X, deadline Y, sukses diukur dari Z" — kalau nggak bisa isi salah satu, job itu keluar dari shortlist atau ditandai "tanya dulu di interview".',
          }),
          action({
            title: 'Screening kualitas klien lewat data profil sebelum kirim proposal',
            why: 'Waktu klien buka job posting-nya, dia ninggalin jejak yang bisa diverifikasi: histori bayar, histori hire, feedback dari freelancer sebelumnya. Ini info gratis yang kebanyakan pemula skip padahal lebih valid daripada nebak dari cara nulis brief.',
            how: [
              'Cek 5 sinyal di profil klien: payment method verified (ada centang), total spend historis, jumlah hire sebelumnya, average rating dari freelancer lain, dan berapa lama job ini udah posting tanpa di-hire. Satu sinyal jelek sendirian (misal klien baru, belum ada histori) belum tentu masalah — semua orang mulai dari nol.',
              'Yang perlu bikin kamu mikir dua kali: kalau beberapa sinyal jelek numpuk bareng — misal payment belum verified + rating dari freelancer lain rendah + job udah reposting berkali-kali (artinya freelancer sebelumnya keluar/di-fire). Kombinasi itu jauh lebih prediktif daripada satu sinyal doang.',
            ],
            example: 'Klien A: payment verified, udah hire 8 orang dengan rating rata-rata 4.8, job baru posting kemarin. Klien B: payment belum verified, 0 histori hire, tapi budget ditawarkan tinggi banget dibanding rata-rata pasar. Klien B kelihatan menarik dari budget, tapi kombinasi red flag-nya cukup buat kamu treat hati-hati — minimal minta milestone kecil dulu sebelum komit full scope.',
            doneWhen: 'Kamu udah cek 5 sinyal di atas untuk tiap klien di shortlist, dan punya keputusan eksplisit: lanjut normal, lanjut dengan hati-hati (minta milestone kecil), atau skip — bukan cuma perasaan "kayaknya oke".',
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
            title: 'Validasi ekspektasi klien lewat pertanyaan langsung, bukan asumsi dari budget',
            why: 'Budget rendah sendirian bukan red flag — banyak klien bagus emang lagi terbatas modal di awal. Yang bahaya itu kombinasi: budget kecil + ekspektasi hasil premium + deadline mepet. Kombinasi ini nggak kelihatan dari job posting, harus digali lewat percakapan.',
            how: [
              'Tanyakan langsung di message atau interview: "Prioritas utama project ini apa — kecepatan, kualitas maksimal, atau harga paling hemat?" Jawabannya bakal nunjukin realistis nggak-nya ekspektasi dia dibanding budget yang ditawarkan.',
              'Kalau deadline-nya ketat, tanya alasannya. Klien yang punya alasan bisnis jelas (misal "harus launch bareng campaign marketing tanggal 15") itu wajar. Klien yang deadline ketat tanpa alasan jelas ("pengennya cepet aja") biasanya nggak punya rencana matang dan bakal nambah request di tengah jalan.',
              'Kalau kamu dapat sinyal ekspektasi nggak realistis (mau hasil agency-level dengan budget freelancer pemula + deadline 3 hari), sampaikan langsung: jelasin apa yang realistis dicapai dalam budget & waktu itu. Klien yang serius bakal nego ulang, klien yang red flag bakal maksa atau ilang.',
            ],
            example: 'Klien tawarkan $150 untuk "redesign full branding + logo + brand guideline + social media kit" dalam 3 hari. Kamu tanya prioritas — dia jawab "semuanya harus perfect, ini buat pitch investor besar". Ini kombinasi budget kecil + ekspektasi tinggi + deadline mepet = risiko tinggi. Jawab jujur: scope itu realistisnya butuh $500+ dan 1-2 minggu, atau kamu bisa kerjain versi logo + 1 brand asset dulu dalam budget itu.',
            doneWhen: 'Kamu udah dapat jawaban jelas soal prioritas klien (kecepatan/kualitas/harga) dan alasan di balik deadline, lalu bisa nentuin: scope-nya realistis dikerjakan dalam budget & waktu yang ditawarkan, atau perlu dinego ulang dulu sebelum lanjut.',
          }),
          action({
            title: 'Pastikan struktur keputusan jelas dan tolak semua bentuk kerja tanpa kontrak',
            why: 'Project paling sering berantakan bukan karena skill kurang, tapi karena nggak jelas siapa yang approve apa dan berapa kali revisi ditolerir. Sementara itu, "test kerjaan gratis" itu modus umum buat nge-scam freelancer baru yang masih pengen banget dapat kontrak pertama.',
            how: [
              'Sebelum setuju kontrak, pastikan tahu: siapa PIC yang kasih feedback, siapa yang punya keputusan final approve, dan berapa ronde revisi yang termasuk di harga ini. Kalau klien belum jelas soal ini, tanyakan langsung — brief yang belum matang masih oke asal klien terbuka buat diskusi awal (discovery call/paid).',
              'Tolak tegas kalau diminta ngerjain test berjam-jam tanpa bayar atau mulai deliverable sebelum kontrak aktif dan milestone ter-fund di Upwork. Portfolio/sample kerjaan lama yang udah ada boleh ditunjukkan gratis — itu beda dengan bikin kerjaan baru khusus buat "tes".',
              'Kalau klien maksa butuh bukti kemampuan lebih dulu, tawarkan paid trial scope kecil (misal 2 jam kerja dibayar sesuai rate, hasil dari situ dievaluasi buat lanjut ke scope penuh) — ini melindungi kamu sekaligus kasih klien rasa aman.',
            ],
            example: 'Klien bilang "sebelum saya hire, tolong buatkan 1 contoh desain logo dulu biar saya lihat gaya kamu, nanti kalau cocok baru kita kontrak." Ini red flag kerja gratis — banyak klien fiktif kumpulin logo gratis dari puluhan freelancer lewat modus ini. Jawab: "Saya bisa share portfolio logo yang udah pernah saya kerjakan untuk brand sejenis. Kalau butuh custom concept, saya bisa mulai lewat paid trial 2 jam yang hasilnya jadi starting point project."',
            doneWhen: 'Kamu punya jawaban jelas soal PIC/approver/jumlah revisi sebelum kontrak dimulai, dan nggak ada satu pun deliverable dikerjakan sebelum kontrak aktif + milestone funded di sistem Upwork.',
          }),
          action({
            title: 'Catat keputusan go/no-go berdasarkan akumulasi risiko, bukan feeling',
            why: 'Tiap sinyal (budget, kejelasan scope, histori klien, cara komunikasi) itu kecil sendirian, tapi kalau ditumpuk semua bareng-bareng bisa kasih gambaran jelas apakah project ini worth diambil atau bakal jadi mimpi buruk.',
            how: [
              'Sebelum terima kontrak, nilai cepat 5 hal: cocok skill kamu, scope jelas, budget masuk akal buat effort-nya, timeline realistis, dan histori/komunikasi klien meyakinkan. Kalau 2 atau lebih dari ini bermasalah dan nggak bisa diperbaiki lewat kontrak/milestone (misal minta scope ditulis jelas dulu, minta milestone kecil dulu), pilih no-go.',
              'Kalau cuma 1 sinyal bermasalah dan sisanya oke, biasanya masih bisa dikelola pakai kontrak yang lebih protektif (milestone lebih kecil, revisi dibatasi eksplisit) — nggak perlu langsung nolak.',
            ],
            example: 'Job A: skill cocok, scope jelas, budget standar pasar, timeline wajar, tapi klien baru (belum ada histori). Ini 1 sinyal kurang — masih go, tapi mulai dengan milestone kecil dulu. Job B: skill cocok tapi scope kabur, budget di bawah pasar, DAN klien nggak jelas soal siapa approver. Ini 3 sinyal bermasalah sekaligus — no-go, meski skill-nya cocok.',
            doneWhen: 'Untuk tiap kontrak yang mau kamu terima, kamu bisa tulis dalam 1-2 kalimat sinyal risiko apa aja yang ada dan kenapa keputusan akhirnya go atau no-go — bukan sekadar "kayaknya oke, ambil aja".',
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
            title: 'Buka proposal dengan hook spesifik dari brief, lalu kasih 1 insight tajam',
            why: 'Klien yang posting job biasanya dapat puluhan proposal generik yang dibuka dengan "I am interested in your project" atau perkenalan panjang soal diri sendiri. Dua kalimat pertama itu satu-satunya kesempatan kamu buat kelihatan beda dari yang lain — kalau gagal di situ, sisa proposal nggak kebaca.',
            how: [
              'Buka dengan menyebut masalah/tujuan/constraint spesifik yang klien tulis di brief — bukan parafrase judul job, tapi detail yang nunjukin kamu benar-benar baca. Skip sapaan formal dan perkenalan diri di awal, langsung masuk ke konteks masalahnya.',
              'Setelah hook, kasih 1 insight/diagnosis singkat soal risiko atau akar masalah yang mungkin klien belum sadar — tapi jangan sok tahu solusi lengkap sebelum ngobrol lebih jauh. Satu insight yang tajam dan spesifik jauh lebih meyakinkan daripada daftar panjang "tips" umum yang bisa ditulis siapa aja.',
            ],
            example: 'Brief bilang: "Butuh redesign checkout page, conversion rate kami cuma 1.2%, kompetitor rata-rata 3%." Proposal generik buka dengan "Hi, I am an experienced UX designer with 5 years..." — ini langsung skip dibaca. Buka yang bagus: "Conversion 1.2% di checkout biasanya bukan soal desain visual doang — sering karena friction di form (terlalu banyak field) atau nggak ada trust signal (badge pembayaran, guarantee) pas user paling ragu buat submit."',
            doneWhen: 'Dua kalimat pertama proposal kamu spesifik ke brief job ini — kalau kamu tempel dua kalimat itu ke job lain, nggak masuk akal/nggak nyambung. Itu tandanya udah cukup spesifik.',
          }),
          action({
            title: 'Pasangkan 1 bukti paling relevan dan tawarkan rencana kerja ringkas',
            why: 'Klien nggak butuh tahu semua yang pernah kamu kerjakan — dia cuma perlu yakin kamu bisa selesaikan masalah dia SEKARANG. Riwayat kerja yang ditempel panjang lebar justru bikin dia harus kerja ekstra buat nyari yang relevan.',
            how: [
              'Pilih 1 pengalaman atau portfolio piece yang paling dekat dengan masalah/industri/jenis deliverable klien — bukan yang paling keren atau paling besar. Jelaskan kontribusi dan hasilnya dalam 1-2 kalimat, jangan tempel seluruh case study.',
              'Kasih rencana kerja 2-3 langkah yang nunjukin cara berpikir kamu dan gimana itu ngurangin risiko klien (bukan sekadar daftar tugas generik). Tandai jelas mana yang masih asumsi dan perlu dikonfirmasi — ini nunjukin kamu teliti, bukan asal janji.',
              'Tutup dengan 1 pertanyaan ringan yang bantu klarifikasi scope atau prioritas — tujuannya buka percakapan, bukan maksa langsung jadwalin call. Pertanyaan yang gampang dijawab (bukan pertanyaan besar) lebih mungkin dibalas.',
            ],
            example: 'Bukti: "Saya pernah redesign checkout untuk toko fashion online, fokus ke pengurangan field form dari 12 jadi 6 dan nambahin trust badge — conversion naik dari 1.8% ke 2.9% dalam sebulan." Rencana: "Rencana saya: (1) audit funnel checkout sekarang buat identifikasi drop-off point pastinya, (2) redesign form dengan asumsi masalah utamanya friction — perlu dikonfirmasi dulu data drop-off-nya, (3) tambah trust signal di titik keputusan." Pertanyaan penutup: "Ada data analytics checkout yang bisa dilihat, atau perlu saya bantu setup tracking dulu?"',
            doneWhen: 'Proposal punya persis 1 bukti relevan (bukan daftar riwayat), rencana 2-3 langkah dengan asumsi ditandai jelas, dan 1 pertanyaan penutup yang gampang dijawab klien.',
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
            title: 'Tetapkan budget Connects mingguan dan pakai boost cuma buat job yang benar-benar fit',
            why: 'Tanpa batas, Connects gampang habis dalam sehari karena emosi — ngelamar berlebihan setelah ditolak, atau boost job yang sebenarnya kurang cocok cuma karena kepengen cepet dapat kerjaan. Batas yang ditentukan di awal (pas kepala masih jernih) melindungi dari keputusan impulsif.',
            how: [
              'Tentukan alokasi Connects per minggu berdasarkan kemampuan finansial kamu, bukan berdasarkan "berapa banyak yang pengen aku pakai hari ini". Pisahkan jadi 3 pos: proposal reguler, boost, dan eksperimen (coba niche/gaya baru) — biar nggak semua Connects abis di satu strategi doang.',
              'Pakai boost cuma kalau 4 syarat kepenuhi sekaligus: fit job-nya tinggi banget, nilai kontraknya layak, profil kamu punya bukti kuat buat job jenis ini, dan proposal udah dipersonalisasi (bukan template). Kalau salah satu nggak kepenuhi, jangan boost — biarin proposal reguler aja.',
            ],
            example: 'Kamu alokasikan 80 Connects/minggu: 50 buat proposal reguler (sekitar 5-8 job tergantung harga Connects), 20 buat boost (2-3 job paling fit), 10 buat eksperimen niche baru. Ada job desain logo $300 yang fit banget sama portofolio kamu dan proposal udah personal — ini layak di-boost. Ada job lain yang lumayan tapi kamu belum yakin proposalnya kuat — skip boost, submit reguler aja.',
            doneWhen: 'Kamu punya angka pasti Connects per minggu yang dibagi ke 3 pos (reguler/boost/eksperimen), dan setiap kali mau boost, kamu bisa jawab "iya" ke semua 4 syarat sebelum klik.',
          }),
          action({
            title: 'Catat funnel tiap proposal dan uji 1 variabel per eksperimen',
            why: 'Tanpa data, kamu nggak bisa tahu masalah sebenarnya ada di mana — apakah job yang dipilih salah, hook proposal lemah, atau rate kamu kurang kompetitif. Nebak-nebak bikin kamu ubah banyak hal sekaligus dan nggak pernah tahu perubahan mana yang beneran ngefek.',
            how: [
              'Simpan catatan tiap proposal: tanggal, nama job, Connects dipakai, pakai boost atau nggak, apakah di-view klien, dapat interview atau nggak, dapat offer atau nggak, hired atau nggak, dan kalau kalah — alasan yang kamu duga (rate ketinggian, kurang relevan, kalah cepet, dll).',
              'Setelah kumpul 15-20 data proposal, cari pola bottleneck-nya: kalau banyak yang nggak di-view, masalahnya di pemilihan job/timing. Kalau di-view tapi jarang interview, masalahnya di hook proposal. Kalau interview tapi jarang offer, masalahnya di pricing atau cara jawab pertanyaan. Fokus benerin 1 titik ini dulu, jangan ubah semuanya bareng.',
              'Uji 1 variabel per eksperimen — misal cuma ganti gaya hook doang, atau cuma naikkan rate doang — dan biarkan berjalan sampai sampel cukup (minimal 10 proposal) sebelum simpulkan itu berhasil atau nggak.',
            ],
            example: 'Dari 18 proposal, 15 di-view klien (bagus, artinya pemilihan job udah oke) tapi cuma 2 yang lanjut interview. Ini nunjuk bottleneck-nya di hook/isi proposal, bukan di job selection. Kamu coba eksperimen: ganti gaya hook jadi lebih spesifik nyebut angka dari brief klien, jalanin di 10 proposal berikutnya, dan bandingkan rate interview-nya.',
            doneWhen: 'Kamu punya tabel/sheet berisi minimal 15 proposal dengan status funnel lengkap, dan bisa nunjuk satu bottleneck paling jelas berdasarkan angka — bukan tebakan.',
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
            title: 'Pilih job kecil yang tetap relevan dan kunci definisi selesai sebelum mulai',
            why: 'Kontrak pertama nilainya bukan di nominal uangnya, tapi di riwayat dan review yang kamu dapat setelahnya. Tapi job kecil yang scope-nya kabur justru bisa jadi kontrak "termahal" kalau dihitung dari waktu yang kamu habiskan buat revisi tanpa akhir.',
            how: [
              'Prioritaskan job singkat yang tetap memperkuat positioning kamu (nyambung sama niche yang mau kamu bangun) dan realistis selesai dengan kualitas tinggi dalam waktu wajar. Hindari job murah yang scope-nya kabur atau kelihatan bakal penuh revisi (baca ulang checklist screening klien dari lesson sebelumnya).',
              'Sebelum mulai kerja, tuliskan dan sepakati dengan klien: deliverable persis apa, format file-nya apa, berapa kali revisi termasuk, deadline kapan, dan input apa yang harus klien kasih (misal aset gambar, akses akun). Ini yang bikin job kecil tetap terkendali waktunya.',
            ],
            example: 'Job "Edit 5 foto produk untuk katalog, $25, deadline 2 hari" — kamu sepakati dulu: format JPG resolusi 2000px, background putih polos, maksimal 1 ronde revisi, foto mentah dikirim klien hari ini. Tanpa kesepakatan ini, job $25 bisa berubah jadi 15 ronde revisi "tolong dikit lagi terangnya" yang makan waktu berjam-jam.',
            doneWhen: 'Sebelum mulai kerja, kamu dan klien udah sepakat tertulis (di chat Upwork) soal deliverable, format, jumlah revisi, deadline, dan input yang klien harus sediakan.',
          }),
          action({
            title: 'Jaga standar komunikasi profesional dan evaluasi hasilnya setelah selesai',
            why: 'Harga rendah bukan alasan buat kualitas komunikasi ikut turun. Review dan rating dari kontrak kecil ini yang bakal jadi modal kepercayaan buat job berikutnya dengan rate lebih tinggi — jadi effort di sini investasi langsung ke masa depan kamu.',
            how: [
              'Kasih update progres, dokumentasi, dan file final serupa standar yang kamu pakai di project besar — harga boleh murah, tapi cara kerja tetap rapi dan proaktif.',
              'Setelah selesai, catat: berapa waktu aktual yang kamu habiskan (bandingkan sama estimasi awal), gimana kualitas komunikasi klien, apa hasil review/rating-nya, dan apakah ada peluang repeat work. Data ini yang kamu pakai buat perbaiki filter job berikutnya dan nentuin kapan waktunya naikkan rate.',
            ],
            example: 'Job $25 edit foto tadi estimasinya 1 jam, tapi ternyata makan 3 jam karena klien lambat respons dan minta banyak detail kecil. Kamu catat ini: "rate efektif jauh di bawah target, next time job sejenis harus di-quote lebih tinggi atau dibatasi jumlah revisi lebih ketat." Klien kasih rating 5 bintang dan bilang mau order lagi bulan depan — ini sinyal bagus buat lanjut jadi repeat client dengan harga dinaikkan bertahap.',
            doneWhen: 'Setelah kontrak selesai, kamu punya catatan singkat: waktu aktual vs estimasi, rating yang didapat, dan keputusan konkret buat job berikutnya (misal naikkan rate, batasi revisi, atau skip jenis job ini).',
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
            title: 'Ringkas ulang brief pakai bahasa sendiri dan minta klien koreksi sebelum mulai',
            why: 'Klien dan kamu bisa baca brief yang sama tapi punya gambaran hasil akhir yang beda di kepala masing-masing. Kalau kesalahpahaman ini baru ketahuan setelah kamu kerja berjam-jam, biayanya jauh lebih mahal daripada 10 menit klarifikasi di awal.',
            how: [
              'Tulis ringkasan pemahaman kamu pakai kata-kata sendiri — bukan copy-paste brief klien — yang mencakup: tujuan project, siapa audiensnya, masalah apa yang mau diselesaikan, output yang diharapkan, dan gimana klien bakal ukur ini berhasil.',
              'Kirim ringkasan ini ke klien SEBELUM mulai kerja apapun, dan minta dia koreksi kalau ada yang keliru. Kalimat simpel kayak "Sebelum saya mulai, saya mau pastikan pemahaman saya benar: [ringkasan]. Ada yang perlu dikoreksi?" udah cukup.',
            ],
            example: 'Klien minta "landing page yang convert". Kamu ringkas: "Jadi tujuannya bikin landing page untuk produk skincare baru, target audiens wanita 25-35 yang udah familiar sama masalah kulit berjerawat, output-nya 1 halaman dengan CTA beli langsung, sukses diukur dari conversion rate visitor jadi pembeli minimal 2%." Klien balas koreksi: "sebenarnya tujuannya bukan direct sale, tapi kumpulin email buat nurture dulu." Ini beda arah total — untung diketahui sebelum desain dimulai, bukan setelah selesai.',
            doneWhen: 'Klien udah membalas dan mengonfirmasi (atau mengoreksi) ringkasan pemahaman kamu secara tertulis, sebelum kamu mulai deliverable pertama.',
          }),
          action({
            title: 'Pecah pekerjaan jadi milestone dan tulis batasan cara kerja + out-of-scope',
            why: 'Milestone yang jelas melindungi kedua pihak — klien tahu persis apa yang dia bayar di tiap tahap, kamu terlindungi dari kerja tanpa bayar kalau project di-pause di tengah jalan. Menulis out-of-scope juga mencegah "sekalian aja" request yang diam-diam memperbesar beban kerja.',
            how: [
              'Pecah project jadi beberapa milestone, tiap milestone punya deliverable, deadline, biaya, dan kriteria approval sendiri. Untuk fixed price, pastikan tiap milestone di-fund dulu di Upwork sebelum kamu mulai kerjain bagian itu. Untuk hourly, sepakati batas jam per minggu dan pola update yang kamu kirim.',
              'Sepakati cara kerja praktis: channel komunikasi utama, seberapa sering update dikirim, siapa PIC dari sisi klien, target waktu respons, dan di mana file utama disimpan (satu source of truth, bukan tersebar di email+chat+drive).',
              'Tulis eksplisit apa yang TIDAK termasuk di scope ini, dan sepakati cara menangani kalau klien minta tambahan di luar itu (misal: perubahan boleh, tapi dampak biaya dan timeline-nya didiskusikan dulu sebelum dikerjakan).',
            ],
            example: 'Project redesign website 3 halaman dipecah: Milestone 1 (wireframe + approval, $150, 3 hari), Milestone 2 (desain visual 3 halaman, $300, 5 hari), Milestone 3 (implementasi + testing, $200, 4 hari). Out-of-scope: "Tidak termasuk copywriting konten, klien menyediakan teks final. Tidak termasuk maintenance setelah launch." Kalau nanti klien minta halaman ke-4, kamu bisa jawab: "Itu di luar scope 3 milestone ini, saya bisa buatkan quote terpisah untuk halaman tambahan."',
            doneWhen: 'Ada breakdown milestone tertulis dengan deliverable+biaya+deadline masing-masing, dan daftar out-of-scope yang disepakati klien sebelum kerja milestone pertama dimulai.',
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
            title: 'Pakai struktur update tetap dengan kalimat pendek dan bawa rekomendasi saat ada blocker',
            why: 'Klien sering membaca update di sela pekerjaan lain — kalau update kamu panjang dan susah dicerna cepat, dia bakal skip baca detail dan cuma nangkep kesan samar. Tujuannya di sini kejelasan, bukan terdengar seperti native speaker.',
            how: [
              'Pakai struktur tetap 3 bagian tiap kirim update: apa yang udah selesai (completed), apa yang jadi blocker atau butuh keputusan klien (blocker/decision needed), dan apa langkah berikutnya (next step). Pakai active voice dan kosakata simpel-spesifik, hindari kalimat panjang berbelit.',
              'Kalau ada blocker, jangan cuma lapor masalahnya — bawa juga dampaknya kalau nggak diselesaikan, 2 opsi solusi, dan rekomendasi kamu di antara 2 opsi itu. Ini posisikan kamu sebagai problem solver, bukan orang yang cuma nunggu diarahkan.',
            ],
            example: 'Update: "Completed: Homepage design draft is done, all sections match the brief. Blocker: I need your product photos for the gallery section — without them I can\'t finalize that part. I have two options: (1) use placeholder images and swap later, which lets me finish everything else on time, or (2) wait for real photos, which may delay delivery by 2 days. I recommend option 1 so we stay on schedule. Next step: waiting for your confirmation on which option, then I\'ll continue with the about page."',
            doneWhen: 'Update terakhir yang kamu kirim ke klien punya 3 bagian jelas (completed/blocker/next step), dan kalau ada blocker, sudah menyertakan minimal 2 opsi + 1 rekomendasi — bukan cuma "waiting for your input".',
          }),
          action({
            title: 'Konfirmasi setiap keputusan penting secara tertulis setelah diskusi verbal',
            why: 'Keputusan yang cuma dibahas lewat call atau voice message gampang beda diingat oleh kamu dan klien — apalagi kalau ada gap bahasa. Recap tertulis jadi bukti kesepakatan yang bisa dirujuk balik kalau nanti ada perbedaan pemahaman.',
            how: [
              'Setelah call atau diskusi penting, kirim recap singkat berisi: keputusan apa yang diambil, siapa yang bertanggung jawab atas action apa, dan deadline-nya kapan. Minta klien koreksi kalau ada yang kamu salah tangkap.',
            ],
            example: 'Setelah call bahas revisi desain, kamu kirim: "Quick recap from our call: (1) We agreed to use the blue color scheme instead of green — I\'ll update this by Thursday. (2) You\'ll send the final logo file by Wednesday so I can integrate it. Let me know if I got anything wrong!" Kalau ternyata klien maksudnya warna navy bukan biru terang, dia bisa langsung koreksi di situ — sebelum kamu telanjur kerjain versi yang salah.',
            doneWhen: 'Tiap kali ada keputusan penting diambil lewat call/voice message, ada pesan recap tertulis terkirim dalam 24 jam berisi keputusan + PIC + deadline, dan klien sudah konfirmasi atau koreksi recap itu.',
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
            title: 'Pastikan deliverable utama solid dulu sebelum mikirin bonus apapun',
            why: 'Bonus yang ditambahin ke deliverable yang masih goyah cuma bikin klien makin bingung mana yang harus di-approve duluan. Fondasi yang kuat itu bentuk over-deliver paling dasar — sebelum mikir "nilai tambah", pastikan yang wajib udah bener-bener rapi.',
            how: [
              'Sebelum kirim ke klien, cek ulang brief dan acceptance criteria yang udah disepakati di awal — pastikan semua poin kepenuhi. Cek juga hal teknis kecil yang sering kelewat: naming file konsisten, format sesuai yang diminta (misal .psd bukan cuma .png), dan struktur folder rapi buat handoff.',
            ],
            example: 'Brief minta "3 varian logo dalam format PNG transparan dan source file AI". Sebelum kirim, kamu cek: 3 varian ada semua, background PNG memang transparan (bukan putih polos), source file AI-nya bisa dibuka dan layer-nya rapi dinamai (bukan "Layer 1, Layer 2"), nama file jelas ("Logo_Variant_A_Blue.png" bukan "final_v3_REAL_fix.png").',
            doneWhen: 'Semua item di acceptance criteria brief awal udah dicek satu-satu dan terpenuhi, file dinamai jelas dan format sesuai permintaan — sebelum kamu mikirin nambah apapun di luar itu.',
          }),
          action({
            title: 'Tambahkan maksimal 1-2 insight relevan dengan trade-off dijelaskan, lalu dokumentasikan handoff rapi',
            why: 'Value tambahan yang nyasar (nggak nyambung tujuan project) cuma bikin klien bingung harus ngapain sama itu, bukan bikin dia terkesan. Sementara dokumentasi handoff yang rapi seringkali lebih dihargai klien daripada bonus visual apapun, karena itu yang bikin dia bisa lanjut jalan tanpa harus tanya-tanya lagi.',
            how: [
              'Pilih maksimal 1-2 tambahan yang dekat sama tujuan project — misal kasih tahu risiko implementasi yang klien mungkin belum sadar, quick win yang gampang dieksekusi, atau opsi alternatif yang relevan. Jangan buka scope kerja baru secara gratis.',
              'Kalau kasih beberapa opsi, jelaskan trade-off-nya (dampak ke kualitas, waktu, biaya, atau maintenance ke depan), dan kasih 1 rekomendasi jelas — jangan lempar keputusan mentah-mentah ke klien tanpa arah.',
              'Susun file final, akses yang dibutuhkan, instruksi cara pakai, ringkasan keputusan penting yang diambil selama project, dan next step yang disaranin — semua dalam satu dokumen/pesan handoff yang gampang diikuti.',
            ],
            example: 'Selain 3 varian logo yang diminta, kamu tambahkan catatan: "Saya notice warna brand yang dipilih (merah terang #FF0000) kemungkinan kontrasnya kurang baik kalau dipakai di background gelap untuk dark mode app. Saya siapkan 1 varian alternatif warna (#D32F2F) yang tetap dalam nuansa merah tapi lebih aman dipakai di kedua mode — silakan pakai kalau relevan, atau abaikan kalau dark mode bukan prioritas." Handoff dikirim sebagai 1 pesan: link folder Drive berisi semua file terorganisir per format, catatan warna yang dipakai (hex code), dan ringkasan revisi apa aja yang udah dilakukan selama project.',
            doneWhen: 'Klien menerima maksimal 1-2 insight tambahan yang jelas kaitannya sama tujuan project (bukan scope baru), plus 1 pesan/dokumen handoff berisi file+akses+instruksi+ringkasan keputusan yang bisa dia ikuti tanpa harus tanya balik.',
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
            title: 'Kejar pengalaman klien yang sehat, bukan angka JSS',
            why: 'Upwork tidak mempublikasikan formula pasti JSS — yang mereka sebutkan cuma faktor umum: feedback, riwayat kontrak berakhir, nilai project, dan hubungan jangka panjang. Kalau kamu fokus "cara akalin skor", kamu optimasi hal yang salah dan malah bikin klien curiga karena kamu terasa transaksional, bukan genuine mau bantu mereka.',
            how: [
              'Perlakukan tiap kontrak sebagai hubungan, bukan transaksi: tanya diri sendiri tiap minggu "apa klien ini akan puas kalau saya jadi dia?" — kalau ragu, itu sinyal ada yang perlu diperbaiki sebelum ditutup.',
              'Jangan cari jalan pintas metrik: tolak godaan minta review lebih cepat dari biasanya, minta klien "kasih 5 bintang aja", atau tutup kontrak buru-buru cuma biar cepat kelar — itu manipulasi dan biasanya kebaca oleh klien maupun sistem Upwork.',
            ],
            example: 'Klien minta revisi ke-4 di luar scope awal karena bingung sendiri maunya apa. Daripada buru-buru selesaikan biar kontrak cepat ditutup dengan rating bagus, kamu luangkan 15 menit call untuk klarifikasi ulang scope — hasilnya lebih lama tapi klien akhirnya puas dan proses jadi jelas.',
            doneWhen: 'Kamu bisa jelaskan ke diri sendiri kenapa klien puas di tiap kontrak yang kamu tutup, tanpa perlu menyebut skor atau rating sama sekali.',
          }),
          action({
            title: 'Deteksi risiko lebih awal dan dokumentasikan tiap keputusan',
            why: 'Masalah kecil yang dibiarkan menumpuk — scope creep, PIC ganti-ganti, komunikasi mulai dingin — jarang meledak tiba-tiba. Biasanya ada 2-3 sinyal kecil sebelumnya yang kelewat karena kamu sibuk kerja dan nggak sempat berhenti sejenak untuk cek "hubungan ini masih sehat nggak?"',
            how: [
              'Pantau sinyal risiko tiap minggu: scope yang melebar diam-diam, klien telat kasih input/approval, PIC berganti tanpa handoff jelas, nada chat berubah lebih singkat/dingin dari biasanya.',
              'Angkat masalah dengan struktur, bukan keluhan: sebut fakta yang terjadi, dampaknya ke timeline/hasil, 2-3 opsi solusi, dan keputusan apa yang kamu butuhkan dari klien — kirim ini SEBELUM masalah menumpuk jadi besar.',
              'Simpan jejak keputusan di channel yang bisa dirujuk ulang: approval scope, perubahan milestone, update progress, file final — semua di Upwork message atau shared doc, jangan cuma verbal di call.',
            ],
            example: 'Klien minta tambah 2 halaman di luar kontrak awal lewat chat santai "eh sekalian ya". Kamu balas: "Noted, itu di luar scope 5 halaman yang disepakati. Saya bisa kerjakan dengan tambahan $150 dan 2 hari, atau kita geser ke fase berikutnya — mana yang lebih cocok?" — lalu simpan balasannya sebagai referensi kalau nanti ada dispute.',
            doneWhen: 'Setiap perubahan scope, keterlambatan, atau keputusan penting punya jejak tertulis yang bisa kamu tunjukkan kalau suatu saat dipertanyakan.',
          }),
          action({
            title: 'Pelajari JSS Insights, jangan simpulkan dari satu kontrak',
            why: 'Satu kontrak buruk gampang bikin panik dan overreact — misalnya jadi terlalu defensif ke klien berikutnya atau berhenti ambil project mirip. Karena Upwork tidak membuka bobot formula JSS, menyimpulkan penyebab hanya dari satu perubahan skor mudah salah arah.',
            how: [
              'Buka JSS Insights panel di akun kamu (kalau tersedia) secara berkala, bukan cuma pas skor turun — lihat tren, bukan angka sesaat.',
              'Kalau ada kontrak yang terasa berisiko turunkan skor, catat konteksnya (apa yang terjadi, apa yang sudah kamu lakukan) tapi tunggu pola beberapa kontrak sebelum ubah strategi besar-besaran.',
            ],
            example: 'Satu klien kasih private feedback rendah karena masalah budget internal mereka sendiri, bukan kualitas kerja kamu. Alih-alih langsung ubah cara kerja, kamu cek insights — ternyata tren 6 kontrak terakhir tetap stabil, jadi kamu simpulkan ini kasus khusus, bukan pola.',
            doneWhen: 'Kamu punya kebiasaan cek JSS Insights rutin dan bisa bedakan mana sinyal pola nyata vs kejadian satu kali yang wajar terjadi.',
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
            title: 'Kirim final recap sebelum minta apapun',
            why: 'Klien sering lupa detail kecil yang kamu kerjakan 2-3 minggu lalu — kalau kamu langsung minta feedback tanpa mengingatkan, mereka menilai berdasarkan kesan samar, bukan hasil nyata. Recap yang jelas juga jadi bukti kerja kalau nanti ada dispute soal scope.',
            how: [
              'Ringkas semua yang sudah dikerjakan: deliverable final, hasil/metrik kalau ada, link file, keputusan penting yang diambil selama project, dan instruksi handoff (misal cara akses file, siapa yang pegang password).',
              'Pisahkan jelas mana yang sudah selesai 100% vs mana yang masih butuh tindakan dari klien (misal: mereka perlu upload ke server sendiri) — biar nggak ada salah paham soal siapa yang "pegang bola".',
              'Tanyakan langsung apakah ada bagian dari scope awal yang menurut mereka belum terpenuhi, dan kasih batas waktu wajar (3-5 hari kerja) untuk mereka cek sebelum kontrak resmi ditutup.',
            ],
            example: 'Project bikin landing page selesai. Kamu kirim pesan: "Ringkasan: 5 halaman sudah live di [link], source file di Google Drive [link], kredensial hosting sudah saya kirim terpisah ke email. Semua item di scope awal sudah selesai. Ada yang perlu dicek lagi sebelum kita tutup kontrak ini?"',
            doneWhen: 'Klien sudah konfirmasi tertulis bahwa semua deliverable sesuai scope dan tidak ada item yang masih menggantung.',
          }),
          action({
            title: 'Minta feedback netral dan catat pelajaran untuk project berikutnya',
            why: 'Cara kamu minta feedback menentukan kualitas jawabannya. Minta "5 bintang" atau iming-imingi sesuatu itu melanggar kebijakan Upwork dan kalau ketahuan bisa kena penalti — tapi selain itu, feedback yang diarahkan juga nggak berguna buat kamu belajar apa yang sebenarnya perlu diperbaiki.',
            how: [
              'Setelah klien konfirmasi semua beres, minta feedback dengan kalimat netral seperti "Terima kasih sudah kerja sama, kalau berkenan boleh kasih feedback soal pengalaman kerja bareng saya" — tanpa menyebut rating spesifik atau menawarkan imbalan apapun.',
              'Segera setelah kontrak ditutup (selagi masih ingat detail), catat untuk diri sendiri: estimasi waktu vs waktu aktual project ini, perubahan scope yang terjadi dan kenapa, feedback yang didapat, dan 1-2 hal yang mau diulang/dihindari di proposal & pricing berikutnya.',
            ],
            example: 'Project yang tadinya diestimasi 2 minggu ternyata jadi 3 minggu karena klien lambat kasih approval di tengah jalan. Kamu catat: "Next time, kasih clause di proposal soal SLA approval klien maks 2 hari kerja, kalau lebih timeline otomatis geser."',
            doneWhen: 'Kamu punya catatan pribadi (spreadsheet atau notes) berisi pelajaran dari kontrak ini yang bisa langsung dipakai buat proposal berikutnya, dan feedback sudah diminta tanpa mengarahkan isinya.',
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
            title: 'Batasi work-in-progress dan pakai board sederhana',
            why: 'Godaan terbesar saat freelance mulai laris adalah terima semua project yang datang — tapi kalender penuh 100% berarti nggak ada ruang untuk revisi mendadak, meeting tambahan, atau hal tak terduga. Hasilnya kualitas turun di semua project sekaligus, bukan cuma satu.',
            how: [
              'Tentukan jumlah project aktif maksimal berdasarkan jam fokus harian kamu, kompleksitas tiap project, dan seberapa sering butuh komunikasi — sisakan buffer 20-30% kalender untuk hal tak terduga, jangan isi penuh.',
              'Pakai board sederhana (Trello, Notion, atau bahkan spreadsheet) dengan kolom backlog, ready, in progress, review, done — tiap task harus punya 1 owner jelas, deadline, link file terkait, dan definisi "selesai" yang konkret (bukan cuma "kerjain landing page" tapi "landing page approved klien").',
            ],
            example: 'Kamu biasanya sanggup 6 jam fokus/hari. Alih-alih terima 4 project bersamaan yang masing-masing butuh 2 jam/hari (pas 8 jam, nol buffer), kamu batasi ke 3 project supaya ada 2 jam buffer untuk revisi mendadak atau client call yang nggak terjadwal.',
            doneWhen: 'Kamu bisa lihat di satu tempat semua project aktif beserta statusnya, dan kalender kamu punya ruang kosong yang disengaja, bukan penuh sampai menit terakhir.',
          }),
          action({
            title: 'Time-block sesuai energi dan siapkan template yang bisa dipakai ulang',
            why: 'Multi-project sering gagal bukan karena kurang waktu, tapi karena context-switching yang bikin lelah — loncat dari deep work ke chat klien ke meeting tanpa jeda bikin kualitas kerja di semua hal menurun. Template juga menyelamatkan waktu di hal repetitif supaya energi bisa fokus ke hal yang benar-benar butuh pemikiran.',
            how: [
              'Jadwalkan deep work (desain, coding, nulis strategi) di jam energi terbaik kamu, kelompokkan meeting/chat/admin di jam lain, dan kasih jeda transisi 10-15 menit antar project supaya otak nggak langsung loncat.',
              'Siapkan template untuk hal yang berulang di tiap project: pesan onboarding klien baru, format recap meeting, template status update mingguan, checklist QA sebelum kirim deliverable, checklist handoff di akhir project — tapi tetap personalisasi isinya, jangan copy-paste mentah.',
            ],
            example: 'Kamu paling fokus jam 8-11 pagi, jadi itu waktu untuk kerja inti (desain/development). Jam 1-2 siang khusus balas chat 3 klien sekaligus biar nggak bolak-balik app. Template status update mingguan tinggal isi 3 baris: progress minggu ini, blocker kalau ada, rencana minggu depan.',
            doneWhen: 'Jadwal harian kamu punya blok waktu jelas per jenis aktivitas, dan kamu punya minimal 3 template siap pakai untuk komunikasi/QA yang sering berulang.',
          }),
          action({
            title: 'Eskalasi risiko keterlambatan sejak awal terlihat',
            why: 'Klien jauh lebih bisa menerima "kemungkinan telat" yang disampaikan seminggu sebelumnya dibanding kabar mendadak di hari H. Menunda kabar buruk bukan bikin masalah hilang — cuma bikin klien makin kaget dan makin sulit dicari solusinya.',
            how: [
              'Begitu kamu sadar deadline berpotensi meleset (bukan nunggu pasti telat), langsung kabari dengan format: status saat ini, penyebabnya apa, pilihan yang tersedia (percepat dengan bantuan, kurangi scope, atau geser deadline), dan timeline baru yang realistis.',
            ],
            example: 'Hari ke-3 dari deadline 7 hari, kamu sadar 2 revisi besar dari klien bikin progress cuma 40%. Kamu kirim: "Update: karena ada 2 revisi major minggu ini, progress saat ini 40%. Saya bisa selesai tepat waktu kalau fokus di versi simplified dulu, atau geser 3 hari untuk versi lengkap — mana yang lebih penting buat kamu?"',
            doneWhen: 'Klien tidak pernah dapat kabar keterlambatan di hari deadline itu sendiri — selalu ada peringatan dini minimal beberapa hari sebelumnya dengan opsi solusi.',
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
            title: 'Catat konteks project sebelum kontrak ditutup',
            why: 'Follow-up yang kuat itu spesifik, bukan generik — tapi kamu nggak bisa spesifik kalau detailnya sudah lupa 2 bulan kemudian. Momen terbaik untuk catat konteks adalah pas project masih segar, bukan pas mau follow-up.',
            how: [
              'Sebelum kontrak ditutup, catat: objective awal project ini apa, hasil akhirnya seperti apa (angka kalau ada), siapa stakeholder utama, ada nggak peluang lanjutan yang sempat disebut klien, dan momen bisnis relevan (misal mereka bilang mau ekspansi Q depan).',
            ],
            example: 'Project redesign checkout page selesai, konversi naik dari 2.1% ke 3.4%. Klien sempat bilang santai "abis ini mau benerin halaman product juga sih". Kamu catat semua ini di spreadsheet client tracker — data yang bakal jadi bahan follow-up 30 hari nanti.',
            doneWhen: 'Tiap kontrak yang selesai punya catatan ringkas (3-5 baris) di tempat yang mudah kamu cek lagi 1-3 bulan kemudian.',
          }),
          action({
            title: 'Follow-up terjadwal di hari ke-30 dan ke-90, lalu berhenti kalau tak direspon',
            why: 'Follow-up 30 hari dan 90 hari punya tujuan beda — yang pertama cek dampak nyata dari kerja kamu, yang kedua buka peluang baru dengan insight segar. Tapi follow-up yang dipaksakan setelah klien diam berkali-kali cuma bikin kamu terlihat butuh, bukan profesional.',
            how: [
              'Di hari ke-30, tanyakan perkembangan hasil dari pekerjaan sebelumnya dan kendala implementasi kalau ada — sisipkan 1 bantuan kecil atau insight terkait scope awal supaya pesannya berguna, bukan cuma nanya kabar.',
              'Di hari ke-90, kirim insight baru, observasi tren industri, atau ide perbaikan yang relevan dengan bisnis mereka — sebut ketersediaan kamu HANYA setelah kasih alasan bisnis yang jelas, jangan langsung to-the-point "ada kerjaan lagi nggak?"',
              'Kalau setelah 1-2 follow-up berkualitas klien tetap tidak merespon, berhenti — jangan lanjut kirim pesan ketiga atau keempat, itu sudah masuk kategori spam.',
            ],
            example: 'Hari ke-30 setelah project checkout page: "Halo, mau tanya gimana performa checkout page setelah sebulan? Kalau ada yang mau di-tweak lagi saya bisa bantu." Hari ke-90 kalau responnya positif: "Btw saya lihat tren [X] lagi naik di industri kamu, mungkin relevan buat halaman product yang pernah kamu sebut mau dibenahi — available kalau mau diskusi."',
            doneWhen: 'Kamu punya reminder terjadwal (kalender/tracker) untuk follow-up 30 & 90 hari tiap klien, dan berhenti otomatis setelah 2 kali tidak direspon.',
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
            title: 'Dokumentasikan selama project berjalan, minta izin sebelum publikasi',
            why: 'Detail penting — kondisi awal sebelum kamu masuk, alasan di balik keputusan tertentu, angka before/after — gampang hilang begitu project selesai dan kamu pindah fokus ke client lain. Nunggu sampai akhir untuk mulai dokumentasi biasanya menghasilkan case study yang datar karena detail pentingnya sudah lupa.',
            how: [
              'Selagi project berjalan, simpan: kondisi/masalah awal sebelum kamu terlibat, keputusan penting yang diambil dan alasannya, versi-versi signifikan (before/after), feedback yang didapat, dan hasil akhir dengan angka kalau ada.',
              'Sebelum publikasikan apapun, tanyakan ke klien bagian mana yang boleh ditampilkan ke publik, apakah nama perusahaan/logo/angka spesifik perlu disamarkan, dan cek ulang kalau ada NDA yang membatasi.',
            ],
            example: 'Selama project redesign checkout, kamu screenshot versi lama, catat alasan kenapa pindah dari 3 step ke 1 step, dan simpan data konversi mingguan. Setelah selesai, klien setuju logo & nama boleh dipakai tapi angka revenue harus disamarkan jadi persentase saja.',
            doneWhen: 'Kamu punya folder dokumentasi per project (screenshot, angka, catatan keputusan) yang disimpan selama project berjalan, plus konfirmasi tertulis dari klien soal apa yang boleh dipublikasikan.',
          }),
          action({
            title: 'Tulis case study sesuai positioning, lalu sebarkan ke semua channel',
            why: 'Satu project bisa diceritakan dengan sudut pandang berbeda tergantung siapa audiensnya — tapi kalau case study kamu tersebar di tempat berbeda dengan angka atau cerita yang nggak konsisten, itu justru merusak kredibilitas, bukan membangunnya.',
            how: [
              'Tulis case study dengan menekankan masalah dan kontribusi yang mau kamu jual ke klien berikutnya — 1 project boleh punya beberapa versi framing (misal versi untuk klien e-commerce vs versi untuk klien SaaS), tapi fakta dasarnya harus tetap akurat dan sama.',
              'Update semua channel dengan case study yang sama: portfolio Upwork, overview profil, bukti di proposal, dan kanal personal branding (LinkedIn, website) — pastikan semuanya rujuk ke 1 sumber data yang sama biar angka & narasi konsisten di mana-mana.',
            ],
            example: 'Case study checkout page kamu tulis dua versi: versi Upwork portfolio fokus ke "konversi naik 62% dalam 6 minggu", versi LinkedIn fokus ke proses kolaborasi dengan tim klien — tapi angka konversi yang disebut di kedua tempat sama persis.',
            doneWhen: 'Case study project ini sudah live di minimal 2 channel (Upwork + 1 lainnya) dengan angka dan cerita yang konsisten satu sama lain.',
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
            title: 'Pilih momen yang tepat dan jelaskan klien ideal secara spesifik',
            why: 'Minta referral pas hasil kerja belum kelihatan atau pembayaran masih menggantung itu bikin permintaan terasa dipaksakan. Selain itu, "kenalin aku ke siapa aja yang butuh" itu permintaan yang berat untuk dipikirkan klien — otak mereka nggak langsung punya nama yang cocok, jadi permintaannya berakhir tanpa tindak lanjut.',
            how: [
              'Minta referral setelah hasil kerja sudah terlihat jelas dan klien menunjukkan kepuasan (misal lewat feedback positif atau ajakan kerja lagi) — bukan di tengah project atau saat ada masalah pembayaran belum selesai.',
              'Sebutkan spesifik siapa yang kamu cari: industri, ukuran bisnis, dan masalah yang paling cocok kamu selesaikan — makin spesifik, makin gampang klien "connect the dots" ke orang di jaringan mereka.',
            ],
            example: 'Alih-alih "kalau ada temen butuh developer kasih tau ya", kamu bilang: "Kalau ada kenalan yang punya toko online tapi checkout-nya masih ribet dan konversinya rendah, saya senang banget dibantu kenalan — itu memang spesialisasi saya."',
            doneWhen: 'Kamu sudah minta referral di momen yang tepat (setelah hasil terbukti, bukan tergesa) dengan deskripsi klien ideal yang cukup spesifik untuk langsung memicu satu nama di kepala klien.',
          }),
          action({
            title: 'Siapkan intro siap teruskan, jangan pakai insentif sebagai default',
            why: 'Klien yang mau referensiin kamu seringkali kesulitan bukan karena nggak mau, tapi karena males mikir cara nulisnya. Kalau kamu kasih teks siap pakai, peluang beneran diteruskan naik drastis. Sebaliknya, iming-iming diskon/hadiah sebagai andalan justru bikin motivasi referral jadi soal uang, bukan soal kualitas kerja kamu.',
            how: [
              'Tulis 1-2 kalimat ringkas yang menjelaskan layanan kamu, bukti hasil singkat, dan link profil Upwork — supaya klien tinggal copy-paste atau forward ke kenalan mereka tanpa perlu mikir dari nol.',
              'Hindari menjadikan diskon atau hadiah sebagai penawaran default untuk referral — fokus ke hubungan dan value asli. Kalau memang mau ada program referral formal, buat aturannya transparan dan pastikan sesuai kebijakan platform.',
            ],
            example: 'Teks siap forward: "Kalau butuh yang bisa benerin funnel checkout biar konversi naik, [Nama] kemarin bantu toko saya naik konversi 62% dalam 6 minggu — profil Upwork-nya di sini: [link]." Klien tinggal paste ke grup WhatsApp atau kirim ke kenalan.',
            doneWhen: 'Klien punya teks/pesan siap pakai untuk referral yang bisa langsung diteruskan tanpa perlu menulis ulang dari nol.',
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
            title: 'Review data 3 bulan terakhir dan hubungkan rate dengan value nyata',
            why: 'Naikkan rate cuma karena "sudah setahun kerja" atau "kompetitor pasang segitu" itu argumen lemah yang gampang goyah kalau klien nego balik. Alasan yang kuat datang dari data konkret: demand kamu tinggi, kapasitas penuh, dan hasil kerja kamu terbukti bernilai lebih dari rate saat ini.',
            how: [
              'Cek data 3 bulan terakhir: win rate proposal, interview rate, tingkat utilization (berapa % waktu kamu terpakai), repeat client, margin per project, dan kualitas lead yang masuk — kalau demand tinggi dan kapasitas hampir penuh terus, itu sinyal rate kamu mungkin terlalu rendah.',
              'Susun alasan kenaikan berdasarkan kompleksitas kerja yang kamu tangani, risiko yang kamu tanggung, kecepatan delivery, tingkat spesialisasi, dan hasil terukur yang sudah kamu berikan — bukan sekadar "sudah berapa lama pengalaman" atau menyamakan dengan rate orang lain.',
            ],
            example: 'Kamu cek 3 bulan terakhir: win rate proposal 70% (biasanya 40%), 4 dari 5 project terakhir jadi repeat client, kalender penuh 2 minggu ke depan. Ini sinyal kuat kamu underpriced — alasan naik: "hasil konsisten bikin klien lama repeat, dan demand saat ini melebihi kapasitas."',
            doneWhen: 'Kamu punya 3-4 angka konkret dari 3 bulan terakhir yang bisa langsung kamu sebut kalau ada yang tanya "kenapa naik rate?"',
          }),
          action({
            title: 'Uji di lead baru dulu, baru renegosiasi klien lama dengan konteks jelas',
            why: 'Rate baru itu ada risikonya — kalau langsung diterapkan ke semua orang sekaligus tanpa data pasar, kamu bisa kehilangan pipeline. Lebih aman uji dulu di proposal baru, dan untuk klien lama, perubahan rate tanpa penjelasan bisa terasa seperti pengkhianatan kalau nggak dikaitkan ke perubahan nyata.',
            how: [
              'Terapkan rate baru secara bertahap ke proposal-proposal baru dulu, pantau apakah kualitas lead dan conversion rate tetap sehat — kalau turun drastis, itu sinyal untuk naik lebih pelan-pelan.',
              'Untuk klien lama, jangan ubah harga di tengah milestone yang sudah disepakati — tunggu sampai akhir siklus/kontrak, bahas perubahan scope, tanggung jawab, atau value tambahan yang sudah kamu berikan SEBELUM sebut angka baru, dan kasih pemberitahuan dengan opsi transisi (misal harga lama berlaku 1 bulan lagi).',
            ],
            example: 'Rate lama $25/jam naik ke $35/jam. Kamu coba di 5 proposal baru dulu — win rate turun sedikit dari 70% ke 60% tapi masih sehat, jadi kamu lanjutkan. Untuk klien lama yang masih $25/jam, kamu kirim: "Sejak kerja bareng, scope saya sudah nambah handle A dan B juga. Mulai bulan depan rate saya jadi $35/jam, tapi untuk milestone yang lagi jalan tetap harga lama."',
            doneWhen: 'Rate baru sudah diuji di minimal beberapa proposal baru dengan hasil conversion yang masih sehat, dan klien lama (kalau ada) sudah dapat pemberitahuan dengan alasan jelas jauh sebelum kontrak/milestone berikutnya dimulai.',
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
            title: 'Cari tahu bottleneck sebenarnya sebelum pilih arah scale',
            why: 'Banyak freelancer buru-buru bangun tim padahal masalah sebenarnya ada di penjualan, bukan kapasitas. Membangun tim untuk nutupi masalah positioning atau pipeline yang lemah cuma menambah kompleksitas dan biaya di atas masalah yang belum selesai.',
            how: [
              'Diagnosis dulu: kalau demand rendah (proposal jarang direspon, pipeline sepi), masalahnya di positioning dan cara kamu cari klien — perbaiki itu dulu, jangan buru-buru scale.',
              'Kalau demand tinggi tapi waktu kamu sudah penuh (banyak lead bagus tapi kamu terpaksa nolak), baru pertimbangkan opsi: naikkan rate, tawarkan retainer, buat productized service (paket harga tetap), atau delegasikan sebagian kerja.',
            ],
            example: 'Kamu dapat 2-3 inquiry bagus per minggu tapi kalender sudah penuh 3 minggu ke depan dan terpaksa nolak beberapa. Ini sinyal demand tinggi + kapasitas penuh — waktunya pikirkan naik rate atau delegasi, bukan diam saja atau malah nurunin harga biar makin laku.',
            doneWhen: 'Kamu bisa sebut dengan jelas apakah masalah utama kamu sekarang ada di sisi demand (kurang klien) atau kapasitas (kebanjiran klien) — dan itu menentukan langkah berikutnya.',
          }),
          action({
            title: 'Pilih 1 dari 3 model scale sesuai kekuatan dan gaya hidup yang diinginkan',
            why: 'Tiap model scale punya trade-off berbeda soal waktu, risiko, dan jenis kerja harian — pilih yang cocok dengan apa yang kamu nikmati dan mampu kelola, bukan yang paling terdengar keren atau paling banyak dibicarakan orang lain.',
            how: [
              'Premium specialist: cocok kalau kamu menikmati craft/kerja teknis dan mau margin tinggi dengan kompleksitas terkelola — investasikan waktu di memperdalam niche, membangun expertise, kumpulkan bukti hasil, dan naikkan pricing serta personal brand secara konsisten.',
              'Repeat/retainer: cocok kalau kebutuhan klien kamu sifatnya berulang (bukan project sekali selesai) — tentukan dengan jelas kapasitas kerja per bulan, output yang dijanjikan, response time, batas jumlah revisi, dan aturan rollover jam yang nggak terpakai, supaya retainer nggak berubah jadi "akses tanpa batas" yang menguras kamu.',
              'Tim kecil: mulai dari task yang sudah terdokumentasi jelas dan risikonya rendah (bukan langsung delegasikan hal krusial), rekrut orang yang benar-benar kompeten di areanya, bangun proses QA dan komunikasi yang jelas, dan pastikan struktur agency/kontrak kamu patuh kebijakan Upwork.',
            ],
            example: 'Kamu suka banget ngoprek detail teknis dan kurang minat mengatur orang lain — pilih premium specialist, fokus 90 hari ke depan perdalam 1 niche spesifik (misal "checkout optimization untuk e-commerce") dan naikkan rate berbasis expertise itu, bukan buka agency.',
            doneWhen: 'Kamu sudah pilih 1 model scale sebagai prioritas 90 hari ke depan, dengan alasan yang terkait langsung ke kekuatan dan gaya kerja kamu sendiri — bukan ikut-ikutan tren.',
          }),
          action({
            title: 'Review hasil di hari ke-90 dengan ukuran keberlanjutan, bukan cuma omzet',
            why: 'Model scale yang bikin omzet naik tapi jam kerja meledak dan stres meningkat itu bukan kemenangan jangka panjang — itu jebakan yang keliatan sukses di permukaan tapi nggak bisa dipertahankan.',
            how: [
              'Di hari ke-90, ukur revenue dan margin, tapi sandingkan dengan jam kerja aktual, kualitas hasil kerja, level stres kamu, dan kepuasan klien — pertahankan model yang memperbaiki bisnis DAN keberlanjutan kerja kamu sekaligus, bukan cuma angka di rekening.',
            ],
            example: 'Setelah 90 hari coba model retainer, revenue naik 40% tapi jam kerja mingguan naik dari 30 ke 50 jam dan kamu mulai burnout. Kesimpulannya: model ini perlu disesuaikan (misal batasi jumlah klien retainer) sebelum dilanjutkan, bukan otomatis dianggap berhasil cuma karena omzet naik.',
            doneWhen: 'Kamu punya perbandingan angka jelas di hari ke-90 (revenue, jam kerja, level stres) dan sudah putuskan lanjut/sesuaikan model berdasarkan itu, bukan cuma dari satu angka omzet saja.',
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
