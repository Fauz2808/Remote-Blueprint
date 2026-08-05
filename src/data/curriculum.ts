export type Action = {
  title: string
  detail: string
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

const action = (title: string, detail: string): Action => ({ title, detail })

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
        duration: '20 menit',
        summary: 'Profil kosong mengurangi sinyal kepercayaan dan membuat klien harus menebak kemampuanmu.',
        outcome: 'Semua bagian profil terisi dengan informasi relevan, konsisten, dan dapat diverifikasi.',
        actions: [
          action('Lengkapi riwayat profesional', 'Isi employment history, pendidikan, bahasa, availability, dan sertifikasi yang relevan. Jelaskan tanggung jawab serta hasil kerja, bukan hanya nama jabatan. Hapus informasi yang tidak membantu positioning-mu.'),
          action('Selaraskan identitas profil', 'Pastikan headline, kategori, skill, overview, portfolio, dan rate menceritakan spesialisasi yang sama. Jika headline menjual UX design, bukti pertama yang terlihat juga harus menunjukkan pekerjaan UX—bukan layanan acak.'),
          action('Audit dari sudut pandang klien', 'Buka profil dalam mode publik dan cek urutan informasi yang terlihat. Pastikan tiga hal bisa dipahami dalam 15 detik: siapa yang kamu bantu, masalah yang kamu selesaikan, dan bukti bahwa kamu mampu mengerjakannya.'),
          action('Periksa akurasi dan kepatuhan', 'Gunakan hanya pengalaman, angka, testimoni, dan sertifikat yang benar. Jangan menambahkan keyword palsu atau mengklaim hasil yang tidak bisa dibuktikan; optimasi tidak boleh mengorbankan kepercayaan.'),
        ],
      },
      {
        id: 'market-benchmark',
        title: 'Benchmark pasar tanpa meniru profil',
        duration: '35 menit',
        summary: 'Data profil dan job relevan membantu memilih keyword, rate, dan bukti yang dicari pasar tanpa menyalin kompetitor.',
        outcome: 'Punya catatan benchmark niche berisi pola headline, skill, rate, dan tipe project yang sering muncul.',
        actions: [
          action('Tentukan satu niche pembanding', 'Gunakan kata pencarian yang cukup spesifik, misalnya “SaaS UX Designer” bukan “Designer”. Satu benchmark harus mewakili target klien, jenis masalah, dan level layanan yang ingin kamu jual.'),
          action('Kumpulkan sampel secara manual', 'Buka 10–15 profil freelancer sukses dan 10 job terbaru melalui pencarian resmi Upwork. Catat headline, skill, rentang rate, jenis deliverable, dan masalah yang berulang. Jangan memakai scraper atau menyalin data pribadi.'),
          action('Cari pola, bukan kalimat', 'Hitung keyword dan skill yang sering muncul, lalu kelompokkan berdasarkan masalah klien. Ambil kosakata pasar yang memang sesuai kemampuanmu; jangan menyalin headline, overview, atau portfolio orang lain.'),
          action('Tentukan benchmark rate', 'Urutkan rate sampel dan gunakan nilai tengah sebagai referensi pasar, bukan harga wajib. Sesuaikan dengan pengalaman, kompleksitas pekerjaan, bukti hasil, dan kemampuan komunikasimu.'),
          action('Uji relevansi pada bukti sendiri', 'Untuk setiap keyword yang ingin dipakai, pasangkan satu bukti: project, pengalaman kerja, sertifikasi, atau hasil terukur. Keyword tanpa bukti hanya membuat profil terlihat generik.'),
        ],
      },
      {
        id: 'headshot',
        title: 'Bangun first impression profesional',
        duration: '15 menit',
        summary: 'Headshot bersih membantu profil terasa aman sebelum klien membaca satu kata pun.',
        outcome: 'Foto profil tajam, terang, mudah dikenali, dan konsisten dengan posisi profesional.',
        actions: [
          action('Gunakan framing yang jelas', 'Pilih foto kepala dan bahu dengan wajah mengisi sebagian besar frame. Tatap kamera, gunakan ekspresi natural, dan pastikan foto tetap mudah dikenali ketika tampil sebagai thumbnail kecil.'),
          action('Atur cahaya dan latar', 'Gunakan cahaya lembut dari depan atau dekat jendela dan latar polos yang kontras dengan pakaian. Hindari cahaya dari belakang, bayangan keras, serta latar ramai yang mengambil fokus dari wajah.'),
          action('Jaga tampilan autentik', 'Gunakan foto terbaru dengan resolusi tajam. Hindari selfie bersudut ekstrem, foto grup, filter berat, logo, ilustrasi, dan hasil AI yang tidak merepresentasikan dirimu.'),
          action('Uji pada ukuran kecil', 'Kecilkan foto hingga ukuran avatar dan periksa apakah wajah tetap jelas. Minta satu orang menilai tiga hal: profesional, ramah, dan mudah dipercaya.'),
        ],
      },
      {
        id: 'positioning',
        title: 'Tulis positioning yang spesifik',
        duration: '35 menit',
        summary: 'Klien mencari solusi spesifik, bukan daftar semua skill yang pernah dipelajari.',
        outcome: 'Headline dan overview menjawab siapa yang dibantu, masalah apa, dan dengan keahlian apa.',
        actions: [
          action('Pilih masalah utama', 'Tentukan satu kelompok klien dan satu masalah bernilai yang paling mampu kamu selesaikan. Contoh: membantu SaaS tahap awal memperbaiki onboarding—lebih kuat daripada menawarkan semua jenis desain.'),
          action('Bangun headline yang dapat dicari', 'Gabungkan role atau niche dengan satu sampai dua skill inti. Gunakan kata yang muncul di job relevan dan dipahami klien. Hindari slogan abstrak seperti “creative ninja” yang tidak menjelaskan layanan.'),
          action('Buka overview dari sisi klien', 'Dua kalimat pertama harus menyebut target klien, masalah, dan hasil yang dibantu. Setelah itu, jelaskan proses kerja, bukti relevan, serta ajakan diskusi yang ringan. Jangan membuka dengan biografi panjang.'),
          action('Edit untuk kejelasan', 'Potong filler, jargon, dan klaim umum seperti “hard worker”. Gunakan paragraf pendek, active voice, serta contoh spesifik. Baca keras-keras untuk menemukan kalimat yang terasa kaku.'),
        ],
      },
      {
        id: 'portfolio',
        title: 'Ubah portfolio menjadi bukti',
        duration: '50 menit',
        summary: 'Portfolio kuat menjelaskan keputusan dan hasil, bukan hanya menampilkan gambar akhir.',
        outcome: 'Minimal tiga case study relevan dengan alur masalah, tindakan, dan hasil.',
        actions: [
          action('Pilih tiga karya paling relevan', 'Utamakan project yang paling dekat dengan layanan dan klien target, bukan sekadar karya paling menarik secara visual. Project kantor, personal, atau simulasi boleh dipakai jika konteksnya dijelaskan jujur.'),
          action('Tulis konteks dan batasan', 'Jelaskan masalah awal, tujuan, peranmu, timeline, serta batasan yang dihadapi. Klien perlu memahami keputusanmu, bukan hanya melihat output akhir.'),
          action('Jelaskan proses secukupnya', 'Tampilkan langkah yang memengaruhi hasil: riset, diagnosis, alternatif, keputusan, dan tools. Hindari galeri proses panjang tanpa hubungan dengan masalah bisnis.'),
          action('Tutup dengan hasil terukur', 'Gunakan angka jika tersedia—waktu yang dihemat, conversion, revenue, error yang berkurang, atau approval yang dipercepat. Jika angka rahasia, gunakan perubahan kualitatif yang konkret dan jangan mengarang metrik.'),
          action('Lindungi informasi klien', 'Minta izin sebelum mempublikasikan pekerjaan. Sensor data pribadi dan informasi bisnis sensitif, lalu jelaskan batas kontribusimu jika project dikerjakan bersama tim.'),
        ],
      },
      {
        id: 'reputation-roadmap',
        title: 'Pahami roadmap reputasi Upwork',
        duration: '25 menit',
        summary: 'Badge adalah hasil performa konsisten, bukan target yang bisa dipaksa dengan satu trik.',
        outcome: 'Punya milestone realistis dari profil siap jual menuju reputasi dan kontrak bernilai lebih tinggi.',
        actions: [
          action('Mulai dari indikator yang bisa dikontrol', 'Fokus pada profil lengkap, aktivitas yang sehat, kepatuhan ToS, proposal relevan, dan delivery berkualitas. Rising Talent tidak otomatis muncul hanya karena profil mencapai 100%.'),
          action('Pahami Top Rated secara dinamis', 'Upwork saat ini menyebut Rising Talent atau JSS minimal 90% selama 13 dari 16 minggu sebagai salah satu syarat Top Rated. Cek kembali halaman resmi karena syarat earnings, activity, dan eligibility dapat berubah.'),
          action('Jangan hardcode target Top Rated Plus', 'Top Rated Plus membutuhkan keberhasilan pada kontrak besar atau jangka panjang, dan ambang nilainya dapat berbeda menurut kategori. Gunakan dashboard eligibility dan dokumentasi resmi sebagai sumber terbaru.'),
          action('Buat milestone berbasis perilaku', 'Susun target berurutan: profil siap, proposal berkualitas, interview, kontrak pertama, feedback positif, repeat work, lalu peningkatan rate. Review setiap bulan berdasarkan data akunmu.'),
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
          action('Nilai kecocokan masalah', 'Pastikan kamu memahami problem dan bisa menjelaskan langkah awal tanpa riset berlebihan. Lewati job yang hanya cocok pada satu keyword tetapi membutuhkan pengalaman inti yang belum kamu miliki.'),
          action('Baca scope dan deliverable', 'Cari brief yang menjelaskan output, deadline, konteks, dan kriteria sukses. Jika masih ada celah, pastikan pertanyaannya bisa diselesaikan lewat interview—bukan tanda bahwa klien sendiri belum tahu apa yang dibutuhkan.'),
          action('Periksa kualitas klien', 'Lihat payment verification, histori hire, total spend, feedback dari freelancer, average hourly rate, dan project yang masih terbuka. Satu sinyal buruk belum tentu masalah, tetapi beberapa sinyal buruk sekaligus harus menaikkan standar kehati-hatian.'),
          action('Hitung economics proposal', 'Bandingkan jumlah Connects, peluang interview, nilai kontrak, durasi, dan risiko revisi. Prioritaskan job dengan fit tinggi dan upside masuk akal; jangan melamar hanya karena job baru diposting.'),
        ],
      },
      {
        id: 'client-screening',
        title: 'Screening klien sebelum kontrak',
        duration: '30 menit',
        summary: 'Menolak project buruk lebih murah daripada memperbaiki scope, pembayaran, dan reputasi setelah kontrak berjalan.',
        outcome: 'Punya checklist go/no-go untuk menilai kejelasan, profesionalitas, pembayaran, dan risiko klien.',
        actions: [
          action('Validasi budget dan ekspektasi', 'Tanyakan prioritas, kualitas yang diharapkan, dan alasan deadline. Budget rendah bukan otomatis red flag, tetapi hasil premium, deadline ekstrem, serta scope besar dengan budget minim adalah kombinasi berisiko.'),
          action('Uji kejelasan pengambilan keputusan', 'Pastikan siapa PIC, siapa pemberi approval, berapa ronde revisi, dan apa definisi selesai. Brief yang belum matang masih bisa diterima jika klien terbuka pada discovery berbayar.'),
          action('Tolak permintaan kerja gratis', 'Sample kecil yang sudah ada boleh ditunjukkan. Jangan mengerjakan tes berjam-jam tanpa bayaran atau memulai deliverable sebelum kontrak aktif dan milestone funded. Tawarkan paid trial dengan scope kecil jika perlu validasi.'),
          action('Jaga komunikasi dan pembayaran di Upwork', 'Sebelum kontrak aktif, ikuti aturan komunikasi Upwork. Setelah kontrak aktif, tetap gunakan sistem pembayaran Upwork sesuai ToS. Pindah ke luar platform memerlukan proses conversion resmi jika hubungan belum melewati periode wajib.'),
          action('Catat keputusan go/no-go', 'Nilai fit skill, scope, budget, timeline, histori klien, komunikasi, dan potensi reputasi. Jika dua risiko besar tidak bisa dikurangi lewat kontrak atau milestone, pilih no-go.'),
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
          action('Tulis hook dari brief', 'Sebut masalah, tujuan, atau constraint spesifik yang ditulis klien. Hindari pembuka “I am interested” dan perkenalan panjang; klien perlu melihat relevansi sebelum membaca kredensialmu.'),
          action('Berikan diagnosis singkat', 'Jelaskan risiko atau akar masalah yang mungkin terlewat, tetapi jangan berpura-pura mengetahui seluruh solusi sebelum discovery. Satu insight tajam lebih kuat daripada daftar tips generik.'),
          action('Pasangkan bukti paling dekat', 'Pilih satu pengalaman atau portfolio yang mirip berdasarkan masalah, industri, atau deliverable. Jelaskan kontribusi dan hasilmu dalam satu sampai dua kalimat; jangan menempel seluruh riwayat kerja.'),
          action('Tawarkan rencana kerja ringkas', 'Berikan dua sampai tiga langkah yang menunjukkan cara berpikir dan mengurangi risiko klien. Sesuaikan detail dengan informasi yang tersedia dan tandai asumsi yang masih perlu dikonfirmasi.'),
          action('Tutup dengan pertanyaan mudah', 'Ajukan satu pertanyaan yang membantu menentukan scope atau prioritas. Tujuannya membuka percakapan, bukan memaksa call. Baca ulang dan potong semua kalimat yang tidak menambah relevansi.'),
        ],
      },
      {
        id: 'connects',
        title: 'Gunakan Connects dengan sadar',
        duration: '20 menit',
        summary: 'Boost bukan pengganti relevansi. Gunakan hanya ketika profil dan proposal memang cocok.',
        outcome: 'Punya batas mingguan dan catatan conversion setiap proposal.',
        actions: [
          action('Tetapkan budget dan batas', 'Tentukan alokasi Connects mingguan berdasarkan kemampuan, bukan emosi setelah ditolak. Pisahkan budget proposal reguler, boost, dan eksperimen agar pengeluaran dapat dievaluasi.'),
          action('Gunakan boost secara selektif', 'Boost hanya ketika fit sangat tinggi, nilai job layak, profile proof kuat, dan proposal sudah dipersonalisasi. Posisi teratas tidak membantu jika profil tidak menjawab kebutuhan klien.'),
          action('Catat funnel proposal', 'Simpan tanggal, job, Connects, boost, viewed, interview, offer, hired, dan alasan kalah jika diketahui. Setelah 15–20 proposal, cari bottleneck: pemilihan job, hook, profile view, interview, atau pricing.'),
          action('Ubah satu variabel per eksperimen', 'Uji satu perubahan—misalnya niche job, gaya hook, atau rate—selama sampel yang cukup. Mengubah semuanya sekaligus membuatmu tidak tahu faktor mana yang memperbaiki hasil.'),
        ],
      },
      {
        id: 'first-contract',
        title: 'Turunkan ego, bukan standar kerja',
        duration: '20 menit',
        summary: 'Job kecil boleh diambil jika scope aman dan bisa menghasilkan bukti sosial pertama.',
        outcome: 'Kontrak awal dipilih sebagai investasi bukti sosial, bukan perang harga permanen.',
        actions: [
          action('Pilih job kecil yang tetap relevan', 'Utamakan pekerjaan singkat yang memperkuat positioning dan bisa diselesaikan dengan kualitas tinggi. Hindari job murah yang scope-nya kabur, penuh revisi, atau tidak bisa masuk portfolio.'),
          action('Kunci definisi selesai', 'Tuliskan deliverable, format file, jumlah revisi, deadline, serta input yang harus diberikan klien. Job kecil tanpa batas bisa berubah menjadi kontrak paling mahal dari sisi waktu.'),
          action('Pertahankan standar komunikasi', 'Berikan update, dokumentasi, dan file final seperti pada project besar. Harga awal boleh lebih rendah, tetapi profesionalitas tidak boleh turun.'),
          action('Evaluasi nilai setelah selesai', 'Catat waktu aktual, kualitas klien, hasil, feedback, dan potensi repeat work. Gunakan data ini untuk memperbaiki filter job dan menaikkan harga berikutnya.'),
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
          action('Ringkas ulang brief', 'Tulis pemahamanmu dengan bahasa sendiri: tujuan, audiens, masalah, output, dan ukuran sukses. Minta klien mengoreksi sebelum pekerjaan dimulai agar asumsi tidak berubah menjadi revisi.'),
          action('Pecah pekerjaan menjadi milestone', 'Setiap milestone harus punya deliverable, deadline, biaya, dan kriteria approval. Untuk fixed price, pastikan milestone funded sebelum mulai. Untuk hourly, sepakati batas jam dan pola update.'),
          action('Tentukan cara bekerja', 'Sepakati channel komunikasi, frekuensi update, PIC, waktu respons, format feedback, dan sumber file utama. Satu source of truth mencegah instruksi tercecer.'),
          action('Tulis out-of-scope', 'Sebutkan hal yang belum termasuk, asumsi dependency, dan cara menangani change request. Gunakan bahasa netral: perubahan boleh dilakukan setelah dampak biaya dan timeline disepakati.'),
        ],
      },
      {
        id: 'english',
        title: 'Komunikasikan solusi dalam English',
        duration: '30 menit',
        summary: 'Skill teknis tidak cukup jika klien sulit memahami progres dan keputusanmu.',
        outcome: 'Update kerja ringkas, jelas, profesional, dan mudah ditindaklanjuti.',
        actions: [
          action('Gunakan struktur update tetap', 'Tulis tiga bagian: completed, blocker atau decision needed, dan next step. Struktur konsisten membuat klien cepat memahami status tanpa meeting tambahan.'),
          action('Gunakan kalimat pendek dan active voice', 'Tulis “I completed the onboarding wireframes” bukan kalimat pasif yang panjang. Pilih kosakata sederhana dan spesifik; tujuan komunikasi adalah kejelasan, bukan terdengar seperti native speaker.'),
          action('Bawa rekomendasi, bukan hanya masalah', 'Saat ada blocker, jelaskan dampak, dua opsi, rekomendasi, dan keputusan yang dibutuhkan. Ini menempatkanmu sebagai problem solver tanpa mengambil keputusan bisnis yang bukan wewenangmu.'),
          action('Konfirmasi keputusan tertulis', 'Setelah call, kirim recap singkat berisi keputusan, pemilik action, serta deadline. Minta koreksi jika ada yang keliru agar diskusi lisan punya jejak yang sama-sama dipahami.'),
        ],
      },
      {
        id: 'overdeliver',
        title: 'Under-promise, over-deliver',
        duration: '25 menit',
        summary: 'Nilai ekstra harus relevan. Tiga opsi bagus lebih berguna daripada sepuluh file tanpa arah.',
        outcome: 'Delivery utama selesai, plus insight yang mempercepat keputusan klien tanpa merusak scope.',
        actions: [
          action('Penuhi janji utama lebih dulu', 'Jangan menambah bonus ketika deliverable utama belum stabil. Cek kembali brief, acceptance criteria, naming file, dan format handoff sebelum memikirkan nilai ekstra.'),
          action('Tambahkan insight yang relevan', 'Pilih maksimal satu atau dua tambahan yang dekat dengan tujuan project—misalnya risiko implementasi, quick win, atau opsi alternatif. Jangan membuka scope baru secara gratis.'),
          action('Jelaskan trade-off', 'Jika memberi beberapa opsi, jelaskan dampak pada kualitas, waktu, biaya, dan maintainability. Rekomendasikan satu pilihan agar klien tidak menerima tumpukan opsi tanpa arah.'),
          action('Dokumentasikan handoff', 'Susun file final, akses, instruksi penggunaan, keputusan penting, dan next step. Handoff rapi sering lebih bernilai daripada bonus visual yang tidak diminta.'),
        ],
      },
      {
        id: 'reputation-jss',
        title: 'Jaga JSS melalui delivery sehat',
        duration: '35 menit',
        summary: 'JSS mencerminkan hubungan dan hasil kontrak; tidak ada satu trik yang dapat menjamin skornya.',
        outcome: 'Punya sistem pencegahan risiko sejak screening sampai kontrak ditutup.',
        actions: [
          action('Fokus pada kepuasan dan hasil', 'Upwork menjelaskan bahwa feedback, riwayat kontrak berakhir, project bernilai lebih tinggi, dan hubungan jangka panjang dapat memengaruhi JSS. Kejar pengalaman klien yang sehat, bukan memanipulasi metrik.'),
          action('Deteksi risiko lebih awal', 'Pantau scope creep, keterlambatan input, perubahan PIC, komunikasi yang memburuk, dan ketidakpuasan kecil. Angkat masalah dengan fakta, dampak, opsi, dan keputusan yang dibutuhkan sebelum menumpuk.'),
          action('Jaga dokumentasi kontrak', 'Simpan approval, perubahan scope, milestone, update, dan file final di channel yang dapat dirujuk. Dokumentasi bukan untuk berkonflik, tetapi memastikan kedua pihak bekerja dari kesepakatan yang sama.'),
          action('Utamakan hubungan jangka panjang yang sehat', 'Repeat work dan pembayaran selama hubungan jangka panjang dapat berdampak positif. Jangan mempertahankan kontrak toxic hanya demi durasi; kualitas hubungan tetap lebih penting.'),
          action('Pelajari JSS Insights', 'Gunakan panel Job Success Insights bila tersedia untuk memahami faktor akunmu. Jangan menyimpulkan penyebab dari satu kontrak saja karena formula JSS mempertimbangkan beberapa faktor.'),
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
          action('Kirim final recap', 'Ringkas deliverable, hasil, link file, keputusan, dan instruksi handoff. Nyatakan bagian yang sudah selesai dan hal yang masih membutuhkan tindakan klien.'),
          action('Minta final check', 'Tanyakan apakah ada hal dalam scope yang belum terpenuhi. Beri batas waktu wajar untuk pemeriksaan tanpa menekan klien menutup kontrak segera.'),
          action('Minta feedback secara netral', 'Setelah klien mengonfirmasi selesai, minta feedback jujur tentang proses dan hasil. Jangan meminta “5-star review”, mengarahkan isi review, atau menawarkan imbalan.'),
          action('Simpan pelajaran project', 'Catat estimasi versus waktu aktual, perubahan scope, feedback, dan hal yang akan diulang atau dihindari. Gunakan catatan ini untuk proposal, pricing, dan onboarding berikutnya.'),
        ],
      },
      {
        id: 'multi-project',
        title: 'Kelola beberapa project tanpa kehilangan kualitas',
        duration: '35 menit',
        summary: 'Multi-project membutuhkan batas kapasitas dan sistem kerja, bukan menambah jam tanpa kontrol.',
        outcome: 'Punya workflow sederhana untuk prioritas, komunikasi, template, dan risiko kapasitas.',
        actions: [
          action('Batasi work in progress', 'Tentukan jumlah project aktif berdasarkan jam fokus, kompleksitas, dan kebutuhan komunikasi. Jangan mengisi 100% kalender; sisakan buffer untuk revisi, meeting, dan masalah tak terduga.'),
          action('Gunakan board Kanban sederhana', 'Kelompokkan pekerjaan ke backlog, ready, in progress, review, dan done. Satu task harus punya owner, deadline, link file, dan definisi selesai. Hindari memindahkan terlalu banyak task ke in progress.'),
          action('Time-block berdasarkan energi', 'Jadwalkan deep work pada jam terbaikmu, lalu kelompokkan meeting, chat, admin, dan revisi. Beri waktu transisi agar satu project tidak mencuri fokus project lain.'),
          action('Bangun template yang berulang', 'Siapkan template onboarding, recap meeting, status update, QA checklist, handoff, dan project retrospective. Template mempercepat konsistensi, tetapi tetap harus dipersonalisasi.'),
          action('Eskalasi risiko kapasitas', 'Jika deadline berpotensi terlambat, beri tahu lebih awal dengan status, penyebab, pilihan, dan timeline baru. Jangan menunggu sampai hari delivery untuk mengakui masalah.'),
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
          action('Catat konteks sebelum project ditutup', 'Simpan objective, hasil, stakeholder, peluang lanjutan, dan waktu bisnis yang relevan. Follow-up kuat dimulai dari konteks, bukan pesan “ada project lagi?” yang dikirim massal.'),
          action('Follow-up sekitar 30 hari', 'Tanyakan perkembangan hasil pekerjaan sebelumnya dan apakah ada kendala implementasi. Tawarkan satu bantuan kecil atau insight yang masih terkait dengan scope awal.'),
          action('Follow-up sekitar 90 hari', 'Kirim insight baru, observasi industri, atau peluang perbaikan yang relevan. Sebut availability hanya setelah menunjukkan alasan bisnis untuk kembali berdiskusi.'),
          action('Hormati sinyal klien', 'Jika klien tidak merespons setelah satu atau dua follow-up berkualitas, hentikan. Jaga hubungan tanpa spam dan masukkan kembali ke daftar hanya ketika ada konteks baru.'),
        ],
      },
      {
        id: 'portfolio-loop',
        title: 'Bangun portfolio loop',
        duration: '25 menit',
        summary: 'Setiap project selesai harus memperkuat profil untuk project berikutnya.',
        outcome: 'Case study baru, positioning lebih tajam, dan bukti sosial bertambah.',
        actions: [
          action('Dokumentasikan selama project', 'Simpan kondisi awal, keputusan, versi penting, feedback, dan hasil ketika masih mudah diingat. Menunggu project selesai sering membuat detail penting hilang.'),
          action('Minta izin penggunaan', 'Tanyakan bagian mana yang boleh dipublikasikan dan apakah nama, logo, angka, atau screenshot perlu disensor. Hormati NDA dan jangan menganggap project berbayar otomatis boleh dipamerkan.'),
          action('Tulis case study sesuai positioning', 'Tekankan masalah dan kontribusi yang ingin kamu jual berikutnya. Satu project dapat dibuat menjadi case study berbeda, tetapi setiap versi harus tetap akurat.'),
          action('Distribusikan bukti', 'Perbarui portfolio Upwork, overview, proposal proof, dan kanal personal branding. Gunakan satu sumber case study agar angka dan narasi tetap konsisten.'),
        ],
      },
      {
        id: 'referral',
        title: 'Minta referral dengan konteks',
        duration: '15 menit',
        summary: 'Referral efektif ketika klien tahu tipe orang dan masalah yang paling cocok untukmu.',
        outcome: 'Permintaan referral spesifik, ringan, dan mudah diteruskan.',
        actions: [
          action('Pilih momen yang tepat', 'Minta referral setelah hasil terlihat dan klien menyatakan puas—bukan saat project bermasalah atau pembayaran belum selesai.'),
          action('Jelaskan klien ideal', 'Sebut industri, ukuran bisnis, dan masalah yang paling cocok. Permintaan “kenalkan ke siapa saja” membuat klien sulit memikirkan orang yang relevan.'),
          action('Berikan intro siap teruskan', 'Tulis satu atau dua kalimat yang menjelaskan layanan, bukti, dan kontak Upwork-mu. Kurangi beban klien saat membuat perkenalan.'),
          action('Jangan membeli referral', 'Hindari menjanjikan diskon atau hadiah sebagai default. Fokus pada hubungan dan value; jika ada program referral, buat aturan transparan dan patuh pada kebijakan platform.'),
        ],
      },
      {
        id: 'rate',
        title: 'Naikkan rate berdasarkan bukti',
        duration: '25 menit',
        summary: 'Rate naik setelah positioning, demand, dan bukti hasil menguat—bukan karena kalender berganti.',
        outcome: 'Rate baru punya alasan yang dapat dijelaskan dengan percaya diri.',
        actions: [
          action('Review data tiga bulan', 'Lihat win rate, interview rate, utilization, repeat client, margin, dan kualitas lead. Jika demand tinggi dan kapasitas penuh, rate mungkin terlalu rendah.'),
          action('Hubungkan rate dengan value', 'Gunakan kompleksitas, risiko, kecepatan, spesialisasi, dan hasil sebagai alasan. Jangan mendasarkan harga hanya pada jumlah tahun pengalaman atau rate kompetitor.'),
          action('Uji pada lead baru', 'Naikkan rate secara bertahap untuk proposal baru, lalu pantau kualitas lead dan conversion. Hindari perubahan besar tanpa bukti pasar.'),
          action('Renegosiasi klien lama dengan konteks', 'Bahas perubahan scope, tanggung jawab, atau value sebelum menaikkan rate. Beri pemberitahuan dan pilihan transisi; jangan mengubah harga di tengah milestone yang sudah disepakati.'),
        ],
      },
      {
        id: 'scale-path',
        title: 'Pilih jalur scale yang sehat',
        duration: '35 menit',
        summary: 'Scale tidak selalu berarti membangun agency. Pilih model yang sesuai kekuatan, risiko, dan kehidupan yang kamu inginkan.',
        outcome: 'Memilih prioritas 90 hari: premium specialist, repeat/retainer, atau tim kecil.',
        actions: [
          action('Nilai bottleneck saat ini', 'Jika demand rendah, perbaiki positioning dan pipeline. Jika demand tinggi tetapi waktu penuh, pilih menaikkan rate, membuat retainer, productized service, atau delegasi. Jangan membangun tim untuk menutupi masalah penjualan.'),
          action('Pilih premium specialist', 'Cocok jika kamu menikmati craft dan ingin margin tinggi dengan kompleksitas organisasi rendah. Investasi utama: niche, expertise, proof, pricing, dan personal brand.'),
          action('Pilih repeat atau retainer', 'Cocok jika kebutuhan klien berulang dan dapat direncanakan. Tentukan kapasitas, output, response time, batas revisi, dan rollover agar retainer tidak berubah menjadi akses tanpa batas.'),
          action('Bangun tim kecil secara bertahap', 'Mulai dari task yang terdokumentasi dan berisiko rendah. Pilih orang yang kompeten, buat QA dan komunikasi jelas, lalu pastikan struktur agency serta kontrak Upwork mematuhi kebijakan platform.'),
          action('Review setelah 90 hari', 'Ukur revenue, margin, jam kerja, kualitas, stres, dan kepuasan klien. Pertahankan model yang memperbaiki bisnis sekaligus keberlanjutan kerja—bukan hanya omzet.'),
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
  console.assert(allLessonIds.length === 22, 'Curriculum must contain 22 lessons')
  console.assert(calculateProgress({}).percentage === 0, 'Empty progress must be 0%')
  console.assert(calculateProgress(Object.fromEntries(allLessonIds.map((id) => [id, true]))).percentage === 100, 'Full progress must be 100%')
}

export default curriculum
