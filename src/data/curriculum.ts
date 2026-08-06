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
        summary: 'Skill digital yang layak dijual biasanya datang dari latar belakang, interest, dan behavior yang sudah kamu jalani. Kalau belum ada, bangun dari minat yang mau ditekuni.',
        outcome: 'Satu skill digital dengan alasan jelas kenapa layak dijual, siap dijadikan layanan awal.',
        actions: [
          action({
            title: 'Gali skill dari latar belakang, interest, dan behavior',
            why: 'Skill yang paling mudah dijual biasanya sudah ada di dalam dirimu sendiri, hanya belum disadari sebagai sesuatu yang bisa dikomersialkan. Latar belakang pekerjaan, kebiasaan sehari-hari, dan minat pribadi adalah tiga sumber paling cepat untuk menemukan skill digital yang realistis untuk mulai dijual, dibanding memaksakan diri belajar bidang yang sama sekali baru dari nol.',
            how: [
              'Latar belakang: lihat pekerjaan, kuliah, atau organisasi yang pernah dijalani. Desainer, finance consultant, tax consultant, engineer, dan sejenisnya biasanya sudah punya dasar skill digital yang tinggal dilatih ke arah freelance.',
              'Interest: perhatikan hal yang memang kamu sukai dan sering kamu lakukan tanpa disuruh, karena minat yang konsisten biasanya bisa diarahkan menjadi skill yang niat kamu dalami.',
              'Behavior: perhatikan kebiasaan kerja sehari-hari, tools yang sering dipakai, dan masalah yang biasa kamu selesaikan untuk diri sendiri atau orang lain di sekitarmu.',
              'Satukan ketiganya: cari titik temu antara latar belakang, interest, dan behavior, lalu tentukan satu skill digital yang paling masuk akal untuk mulai dilatih ke arah profesional.',
            ],
            example: 'Seorang finance consultant yang juga suka mengolah data di Excel bisa mengarahkan diri ke skill financial modeling atau data analysis untuk UMKM, karena latar belakang dan interest-nya sudah bertemu di titik yang sama.',
            doneWhen: 'Satu skill digital sudah ditentukan berdasarkan kombinasi latar belakang, interest, dan behavior, bukan sekadar ikut tren.',
          }),
          action({
            title: 'Bangun skill dari nol lewat course atau belajar mandiri',
            why: 'Kalau memang belum punya skill mumpuni yang bisa langsung dijual, itu bukan masalah besar selama kamu tahu apa yang ingin didalami. Yang penting bukan seberapa cepat mulai jualan, tapi memastikan skill digital benar-benar terbentuk terlebih dahulu sebelum menawarkan diri ke klien.',
            how: [
              'Cari arah: tentukan kegemaran atau ketertarikan yang paling ingin didalami ke depannya, bukan skill yang sekadar terlihat menjanjikan.',
              'Pilih jalur belajar: ikut course berbayar kalau mau lebih terstruktur, atau belajar mandiri lewat YouTube dan platform gratis kalau ingin lebih fleksibel dari sisi biaya dan waktu.',
              'Konsisten latihan: jadwalkan waktu belajar rutin sampai skill benar-benar terbentuk, bukan sekadar menonton tutorial tanpa praktik.',
              'Validasi kesiapan: pastikan skill sudah cukup matang untuk menghasilkan output nyata sebelum melangkah ke tahap berikutnya.',
            ],
            example: 'Belum punya pengalaman desain sama sekali, tapi tertarik dengan UI/UX. Belajar mandiri lewat YouTube dan platform gratis selama beberapa minggu sampai bisa membuat wireframe dan desain sederhana sendiri.',
            doneWhen: 'Skill digital yang dipilih sudah terbentuk cukup matang untuk menghasilkan output nyata, tidak lagi sekadar niat atau rencana belajar.',
          }),
        ],
        source: { label: 'Panduan resmi kategori skill Upwork', url: 'https://www.upwork.com/i/how-it-works/freelancer/' },
      },
      {
        id: 'build-initial-proof',
        title: 'Siapkan portofolio',
        duration: '90 menit',
        summary: 'Klaim skill saja tidak cukup untuk dipercaya klien. Portofolio adalah bukti nyata, dan yang paling kuat menunjukkan proses berpikir, bukan cuma hasil akhir.',
        outcome: 'Minimal dua portofolio yang menunjukkan proses breakdown masalah, solusi, dan hasil kerja.',
        actions: [
          action({
            title: 'Bangun portofolio dari proses, bukan cuma hasil akhir',
            why: 'Kalau sudah memilih skill digital, langkah selanjutnya bukan sekadar mengklaim bisa atau mahir. Klien butuh bukti yang bisa divalidasi, dan portofolio yang meyakinkan bukan yang cuma menampilkan hasil jadi, tapi yang memperlihatkan bagaimana proses penyelesaian masalahnya berjalan dari awal sampai akhir.',
            how: [
              'Mulai dari brief atau masalah: tunjukkan konteks awal, apa masalah yang dialami klien atau user sebelum kamu turun tangan.',
              'Breakdown masalah: jelaskan bagaimana kamu memecah masalah tersebut menjadi bagian-bagian yang bisa dianalisis satu per satu.',
              'Cari dan tempatkan solusi: tunjukkan solusi yang kamu tawarkan dan bagaimana skill digitalmu dipakai untuk mengeksekusi solusi itu.',
              'Tampilkan hasil akhir: baru di tahap ini tunjukkan hasil kerja sebagai bukti bahwa proses breakdown dan solusi tadi benar-benar berhasil.',
            ],
            example: 'Sebagai UX designer, kamu menemukan business owner bingung kenapa user kesulitan pakai aplikasinya. Setelah dianalisis, flow aplikasinya ternyata membingungkan sehingga user frustrasi dan keluar sebelum selesai. Kamu redesign flow tersebut, dan hasilnya user bisa menyelesaikan pendaftaran atau penggunaan aplikasi tanpa keluar di tengah jalan.',
            doneWhen: 'Minimal dua portofolio siap, masing-masing menunjukkan alur brief, breakdown masalah, solusi, dan hasil akhir secara runtut.',
          }),
          action({
            title: 'Pastikan bukti bisa dipublikasikan dengan aman',
            why: 'Portofolio yang kuat tetap harus aman secara hak dan data. Kalau bukti berasal dari pekerjaan kantor atau klien lama, publikasi tanpa izin bisa melanggar kontrak atau NDA dan justru merusak kepercayaan yang ingin dibangun.',
            how: [
              'Periksa izin: cek kontrak atau NDA sebelumnya, pastikan boleh dipublikasikan sebelum dijadikan portofolio.',
              'Lindungi data sensitif: samarkan nama klien, data pengguna, atau angka finansial yang tidak boleh dibuka ke publik.',
              'Jujurkan kontribusi: kalau project dikerjakan bersama tim, jelaskan bagian mana yang benar-benar kamu kerjakan sendiri.',
            ],
            example: 'Studi kasus redesign aplikasi menyembunyikan nama perusahaan asli dan data pengguna nyata, tetapi tetap menunjukkan proses breakdown masalah dan hasil redesign secara lengkap.',
            doneWhen: 'Setiap portofolio yang dipublikasikan sudah punya izin jelas dan data sensitif sudah dilindungi.',
          }),
        ],
      },
      {
        id: 'work-english-check',
        title: 'Asah kemampuan bahasa Inggris untuk komunikasi kerja',
        duration: '40 menit',
        summary: 'Upwork adalah platform global, jadi komunikasi default-nya bahasa Inggris meski sesama orang Indonesia. Pemahaman yang komprehensif terhadap masalah klien butuh bahasa Inggris yang memadai.',
        outcome: 'Mampu membaca brief dan menulis pesan kerja dalam English sederhana serta akurat.',
        actions: [
          action({
            title: 'Pahami kenapa bahasa Inggris menentukan reputasi kerja',
            why: 'Karena Upwork adalah platform global, semua orang di dalamnya berkomunikasi dalam bahasa Inggris, bahkan ketika bertemu sesama orang Indonesia biasanya tetap dimulai dengan bahasa Inggris. Klien menjelaskan masalah mereka dalam bahasa Inggris, dan kalau kamu tidak bisa memahami atau berkomunikasi dengan baik, kamu akan kesulitan memecahkan masalah klien tersebut. Ketika masalah klien tidak terpecahkan karena gap bahasa, yang paling dirugikan adalah reputasimu sendiri sebagai freelancer di Upwork.',
            how: [
              'Sadari konteksnya: pahami bahwa bahasa Inggris bukan sekadar syarat administratif, tapi alat utama memahami masalah klien secara komprehensif.',
              'Latih listening dan reading: biasakan diri membaca brief dan mendengarkan penjelasan klien dalam bahasa Inggris tanpa terlalu bergantung pada terjemahan otomatis.',
              'Latih speaking dan writing: latih kemampuan menjelaskan progres, bertanya, dan menyampaikan solusi dengan bahasa Inggris kerja yang sederhana tapi akurat.',
            ],
            example: 'Klien menjelaskan masalah checkout yang bikin banyak pengguna keluar sebelum bayar. Kalau penjelasan itu tidak dipahami dengan benar karena kendala bahasa, solusi yang kamu tawarkan bisa salah sasaran dan merusak kepercayaan klien.',
            doneWhen: 'Brief dan pesan klien dalam bahasa Inggris bisa dipahami akurat tanpa salah tafsir yang berdampak pada hasil kerja.',
          }),
          action({
            title: 'Latih empat jenis pesan kerja dalam English',
            why: 'Komunikasi proyek berulang pada pola klarifikasi, konfirmasi, update progres, dan penyerahan hasil. Menguasai empat pola ini membuat kamu bisa merespons klien dengan cepat tanpa kehilangan ketepatan makna.',
            how: [
              'Klarifikasi: latih menulis pertanyaan singkat tentang scope, audiens, referensi, atau prioritas yang belum jelas dari brief.',
              'Konfirmasi: latih meringkas pemahamanmu atas brief dan meminta klien mengoreksi sebelum mulai kerja.',
              'Update: gunakan struktur sederhana seperti completed, blocker atau decision needed, lalu next step.',
              'Serah terima: latih menyebutkan deliverable, lokasi file, instruksi penting, dan cara memberi feedback.',
            ],
            example: '"Completed: two scripts drafted. Decision needed: casual or formal tone. Next: I will finalize all scripts after your confirmation." adalah contoh update singkat yang jelas dan mudah ditindaklanjuti klien.',
            doneWhen: 'Empat jenis pesan kerja bisa ditulis sendiri dalam bahasa Inggris sederhana tanpa menerjemahkan ulang dari awal.',
          }),
        ],
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
        outcome: 'Profil lengkap, selaras dengan skill yang dijual, dan siap ditemukan klien.',
        actions: [
          action({
            title: 'Lengkapi semua syarat profil sesuai skill yang dijual',
            why: 'Profil Upwork punya banyak bagian yang harus diisi lengkap: education, language, employment history, review kalau ada, certification, sampai portfolio. Semua bagian ini harus selaras dengan skill yang mau dijual. Kalau kamu mau jual skill sebagai desainer, maka deskripsi, portofolio, dan seluruh isi profil juga harus dibangun sebagai seorang freelancer desainer, bukan campur aduk dengan bidang lain yang tidak relevan.',
            how: [
              'Isi semua bagian wajib: education, language, employment history, certification, dan portfolio harus terisi lengkap sesuai syarat Upwork.',
              'Selaraskan dengan skill utama: pastikan deskripsi, portofolio, dan seluruh konten profil mengarah ke satu skill yang sama, bukan tersebar ke banyak bidang.',
              'Cek konsistensi: samakan istilah, jabatan, dan penjelasan supaya klien langsung paham kamu jual apa dalam hitungan detik.',
            ],
            example: 'Kalau kamu jual skill sebagai UI/UX designer, employment history menyebut peran desain, portofolio menampilkan karya desain, dan deskripsi juga fokus ke desain — bukan mencampur dengan pengalaman admin atau bidang lain yang tidak berkaitan.',
            doneWhen: 'Semua bagian profil terisi lengkap dan selaras dengan satu skill utama yang mau dijual.',
          }),
          action({
            title: 'Jangan terburu-buru apply setelah profil 100%',
            why: 'Melengkapi profil sampai 100% bukan standar utama untuk bisa mendapatkan pekerjaan. Profil 100% hanya prasyarat, bukan garansi dapat klien. Kalau langsung apply atau beli Connect untuk bidding tanpa melalui tahap optimasi profil lainnya, seperti benchmark pasar, kemungkinan menang jadi lebih kecil.',
            how: [
              'Tahan diri dulu: jangan langsung apply job atau beli Connect begitu profil selesai diisi 100%.',
              'Lanjutkan ke optimasi: masuk ke tahap benchmark pasar dan penguatan bukti sebelum benar-benar mulai bidding.',
              'Anggap ini fondasi, bukan garis finish: profil 100% adalah syarat minimum, bukan tanda kesiapan penuh.',
            ],
            example: 'Setelah profil terisi 100%, alih-alih langsung apply ke lima job sekaligus, kamu lanjut dulu ke tahap benchmark pasar untuk melihat bagaimana profil top talent di bidangmu disusun.',
            doneWhen: 'Profil sudah 100% tapi belum digunakan untuk apply job sampai tahap benchmark dan optimasi lain selesai.',
          }),
        ],
      },
      {
        id: 'market-benchmark',
        title: 'Benchmark pasar tanpa meniru profil',
        duration: '35 menit',
        summary: 'Cari profil top talent sebidang lewat Search Upwork, amati caranya menyusun profil, lalu jadikan inspirasi untuk optimasi profilmu sendiri — bukan ditiru mentah.',
        outcome: 'Profil teroptimasi berdasarkan pola nyata dari 10-15 profil top talent sebidang.',
        actions: [
          action({
            title: 'Cari 10-15 profil top talent lewat Search Upwork',
            why: 'Setelah profil dasar terbangun, langkah selanjutnya adalah melakukan benchmarking pasar. Caranya lewat bagian Search di Upwork, yang punya tiga pilihan dropdown filter: Jobs, Talent, dan Project. Secara default kita sebagai freelancer selalu diarahkan ke Jobs, tapi untuk benchmarking kita justru harus pindah ke Talent, karena di sana kita bisa mencari profil-profil dengan kebutuhan yang sama dengan kita.',
            how: [
              'Buka Search Upwork: ubah dropdown filter dari Jobs ke Talent, lalu masukkan keyword sesuai bidangmu, misalnya "UI/UX designer".',
              'Filter berdasarkan performa: cari profil dengan Job Success Score 100%, earnings di atas $10.000 (semakin tinggi seperti $30.000, $50.000, atau $100.000+ semakin baik), dan badge Top Rated Plus.',
              'Kumpulkan 10-15 profil: pastikan jumlahnya cukup untuk melihat pola, bukan cuma menyalin dari satu profil saja.',
            ],
            example: 'Cari "UI/UX designer" di dropdown Talent, lalu saring hasilnya sampai menemukan 12 profil dengan Job Success Score 100%, earnings di atas $30.000, dan badge Top Rated Plus.',
            doneWhen: 'Sudah terkumpul 10-15 profil top talent sebidang yang memenuhi filter Job Success Score, earnings, dan badge Top Rated Plus.',
          }),
          action({
            title: 'Amati pola dan optimasi profil sendiri, jangan tiru mentah',
            why: 'Badge Top Rated Plus adalah badge tertinggi di Upwork yang bisa didapatkan tanpa membayar, dan diberikan berdasarkan kinerja serta performa nyata sebagai freelancer. Profil-profil dengan badge ini biasanya sudah tahu cara menyusun profil yang efektif, sehingga pola penyusunannya layak dijadikan referensi untuk optimasi, bukan untuk disalin persis.',
            how: [
              'Amati deskripsi: perhatikan bagaimana mereka menyusun kalimat deskripsi sebagai freelancer di bidang yang sama.',
              'Amati portofolio: lihat cara mereka menyusun urutan dan format portofolio.',
              'Amati elemen lain: perhatikan foto profil, employment history, education, dan detail lain yang mereka tampilkan.',
              'Modifikasi, jangan tiru: gunakan pola yang ditemukan sebagai inspirasi untuk optimasi profil sendiri dengan gaya dan pengalamanmu sendiri.',
            ],
            example: 'Setelah melihat 12 profil top talent UI/UX designer, kamu menyadari mereka rata-rata menaruh studi kasus di urutan pertama portofolio. Kamu terapkan pola itu ke profilmu, tapi dengan studi kasus dan bahasa milikmu sendiri.',
            doneWhen: 'Profil sudah dioptimasi berdasarkan pola dari profil top talent, tanpa menyalin kalimat atau identitas siapa pun.',
          }),
        ],
      },
      {
        id: 'portfolio',
        title: 'Ubah portfolio menjadi bukti',
        duration: '50 menit',
        summary: 'Portofolio apapun bidangnya punya template yang sama: masalah, breakdown, prioritas solusi lewat impact-effort matrix, lalu eksekusi dan showcase hasil.',
        outcome: 'Portofolio tersusun dengan alur breakdown masalah, prioritas solusi, dan hasil yang bisa dipertanggungjawabkan.',
        actions: [
          action({
            title: 'Breakdown masalah dan susun daftar solusi',
            why: 'Setiap portofolio, apapun bidangnya, datang dari sebuah pekerjaan yang selesai dan flow pengerjaannya hampir selalu mirip. Pekerjaan itu ada karena ada masalah, dan dari masalah tersebut kamu harus breakdown terlebih dahulu untuk menemukan berbagai kemungkinan solusinya sebelum menentukan mana yang paling layak dieksekusi.',
            how: [
              'Identifikasi masalah: tuliskan masalah utama yang dihadapi klien atau user secara spesifik.',
              'Breakdown: pecah masalah tersebut menjadi bagian-bagian yang lebih kecil dan bisa dianalisis satu per satu.',
              'Cari banyak solusi: daftar semua kemungkinan solusi dari hasil breakdown, karena dari satu masalah biasanya muncul banyak opsi solusi.',
            ],
            example: 'Masalah checkout dengan drop-off tinggi dipecah menjadi beberapa bagian: form terlalu panjang, kurang trust signal, dan proses pembayaran membingungkan. Dari situ muncul beberapa opsi solusi untuk masing-masing bagian.',
            doneWhen: 'Masalah sudah di-breakdown dan daftar kemungkinan solusi sudah tersusun dari hasil breakdown tersebut.',
          }),
          action({
            title: 'Prioritaskan solusi dengan Impact-Effort Matrix',
            why: 'Dari banyak solusi yang muncul, kamu harus mengurutkan mana yang paling layak dikerjakan lebih dulu. Caranya dengan menimbang effort yang dibutuhkan melawan impact yang dihasilkan: solusi low effort tapi high impact adalah prioritas utama, high effort high impact tetap layak dikerjakan, low effort low impact masih oke karena seimbang, dan yang harus dihindari adalah high effort tapi low impact.',
            how: [
              'Prioritas pertama: pilih solusi low effort, high impact — usaha kecil tapi dampaknya besar.',
              'Prioritas kedua: solusi high effort, high impact tetap dikerjakan karena dampaknya sepadan dengan usahanya.',
              'Masih boleh: solusi low effort, low impact karena usaha dan dampaknya seimbang, tidak merugikan.',
              'Hindari: solusi high effort, low impact karena usaha besar tidak sepadan dengan hasil yang didapat.',
            ],
            example: 'Menambahkan trust badge di halaman checkout (low effort, high impact) dikerjakan lebih dulu dibanding merombak seluruh sistem pembayaran (high effort, high impact) yang tetap dikerjakan setelahnya.',
            doneWhen: 'Solusi sudah diurutkan berdasarkan impact-effort matrix, dengan solusi high-effort-low-impact dihindari.',
          }),
          action({
            title: 'Eksekusi solusi dan showcase hasil kerja',
            why: 'Setelah solusi dan urutan prioritasnya jelas, langkah terakhir adalah benar-benar mengeksekusinya dengan skill digital yang kamu miliki, baik sebagai desainer, programmer, atau bidang lain, lalu menampilkan hasil kerja tersebut sebagai bukti nyata di portofolio.',
            how: [
              'Eksekusi solusi: kerjakan solusi terpilih menggunakan skill set utamamu sesuai urutan prioritas yang sudah ditentukan.',
              'Dokumentasikan proses: catat keputusan penting selama eksekusi supaya bisa diceritakan ulang di portofolio.',
              'Showcase hasil: tampilkan hasil akhir sebagai bukti bahwa proses breakdown, prioritas, dan eksekusi tadi benar-benar berhasil menyelesaikan masalah.',
            ],
            example: 'Setelah trust badge dan redesign form checkout dieksekusi, hasil akhirnya ditampilkan di portofolio lengkap dengan alasan pemilihan solusi dan proses pengerjaannya.',
            doneWhen: 'Hasil eksekusi solusi sudah ditampilkan di portofolio sebagai bukti kerja yang lengkap dari masalah sampai hasil akhir.',
          }),
        ],
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
        id: 'bidding-boost',
        title: 'Bidding lewat Availability Badge dan Boost Profile',
        duration: '20 menit',
        summary: 'Salah satu jalur pecah telor adalah bidding: gunakan Availability Badge dan Boost Profile secara sadar. Cara ini tetap membutuhkan fondasi profil yang kuat dan tidak menjamin kontrak.',
        outcome: 'Availability Badge aktif dan Boost Profile berjalan sesuai budget Connect yang wajar.',
        actions: [
          action({
            title: 'Nyalakan Availability Badge dan aktifkan Boost Profile',
            why: 'Salah satu cara pecah telor adalah bidding: mengaktifkan Availability Badge saat memang siap menerima kerja, lalu memakai Boost Your Profile agar profil mendapat peluang tampil lebih tinggi di pencarian klien. Keduanya memakai Connect dan tidak menjamin kontrak, sehingga baru layak diuji setelah profil 100% dan sudah dioptimasi lewat benchmarking ke profil top talent sebidang.',
            how: [
              'Atur Availability Badge: nyalakan saat memang siap menerima kerja dan punya budget Connect; matikan saat kapasitas penuh atau biaya tidak sepadan.',
              'Aktifkan Boost Your Profile: pilih opsi budget yang tersedia, bisa daily budget atau total budget, sesuai kemampuan Connect yang kamu punya.',
              'Atur schedule boost: tentukan jadwal boost berjalan sesuai kapasitas Connect, jangan sampai menghabiskan seluruh Connect dalam waktu singkat.',
            ],
            example: 'Setelah profil dioptimasi lewat benchmarking, kamu menyalakan Availability Badge dan mengatur Boost Profile dengan daily budget kecil yang disesuaikan dengan jumlah Connect yang tersedia setiap minggu.',
            doneWhen: 'Availability Badge sudah ON dan Boost Profile berjalan dengan budget serta schedule yang sudah ditentukan.',
          }),
        ],
      },
      {
        id: 'job-filter',
        title: 'Apply job sesuai level skill',
        duration: '30 menit',
        summary: 'Tentukan levelmu dulu — Entry, Intermediate, atau Expert — berdasarkan kualitas dan jumlah portofolio, baru apply job yang sesuai level itu dengan cover letter problem-solving.',
        outcome: 'Job yang dilamar sesuai level skill, dengan cover letter yang breakdown masalah, solusi, dan bukti kerja.',
        actions: [
          action({
            title: 'Tentukan level skill dari kualitas dan jumlah portofolio',
            why: 'Cara kedua untuk pecah telor adalah apply job secara langsung. Tapi sebelum apply, kamu harus tahu level skillmu dulu: Entry, Intermediate, atau Expert. Level ini ditentukan oleh kualitas portofolio sebagai faktor utama, dan jumlah portofolio sebagai faktor kedua. Semakin berkualitas dan semakin banyak portofolio yang kamu punya, semakin layak kamu dianggap Expert. Kalau portofolio masih biasa saja dan jumlahnya sedikit, itu tandanya kamu masih di level Entry atau Beginner.',
            how: [
              'Nilai kualitas portofolio: bandingkan hasil kerjamu dengan standar profesional di bidang yang sama, apakah sudah setara atau masih perlu banyak perbaikan.',
              'Hitung jumlah portofolio: lihat berapa banyak portofolio berkualitas yang sudah kamu punya untuk mendukung klaim levelmu.',
              'Tentukan level: gabungkan kualitas dan jumlah tadi untuk memutuskan apakah kamu Entry, Intermediate, atau Expert.',
            ],
            example: 'Portofolio yang kamu punya baru dua dan hasilnya masih standar dasar, jadi kamu memutuskan untuk apply ke job-job level Entry terlebih dahulu, bukan langsung ke job Expert.',
            doneWhen: 'Level skill sudah ditentukan berdasarkan kualitas dan jumlah portofolio yang benar-benar dimiliki.',
          }),
          action({
            title: 'Apply job sesuai level dengan cover letter problem-solving',
            why: 'Setelah level sudah ditentukan, apply job harus sesuai dengan level dan bidang tersebut, jangan lompat ke level yang belum sesuai kemampuan. Cover letter yang efektif adalah yang bisa breakdown masalah klien, menawarkan solusi dari masalah tersebut, dan menunjukkan bukti hasil kerja sebelumnya yang berkaitan dengan project klien.',
            how: [
              'Cari job sesuai level: filter job berdasarkan level skill yang sudah ditentukan, jangan apply ke level yang belum sesuai.',
              'Breakdown masalah klien: pahami masalah yang dijelaskan di job description sebelum menulis cover letter.',
              'Tawarkan solusi: jelaskan solusi konkret dari masalah tersebut di dalam cover letter.',
              'Tunjukkan bukti: sertakan hasil kerja sebelumnya yang paling relevan dengan project klien tersebut.',
            ],
            example: 'Job meminta redesign onboarding aplikasi. Cover letter membuka dengan masalah drop-off di halaman pendaftaran, menawarkan solusi redesign flow, lalu melampirkan studi kasus redesign onboarding yang pernah dikerjakan.',
            doneWhen: 'Job yang dilamar sesuai level skill, dan cover letter memuat breakdown masalah, solusi, serta bukti kerja relevan.',
          }),
        ],
        source: { label: 'Panduan proposal dari Upwork', url: 'https://www.upwork.com/resources/how-to-create-a-proposal-that-wins-jobs' },
      },
      {
        id: 'social-media-leads',
        title: 'Manfaatkan sosial media untuk pecah telor',
        duration: '20 menit',
        summary: 'Publikasikan hasil kerja di Threads, Twitter/X, atau LinkedIn untuk menarik klien, lalu tarik mereka ke kontrak resmi di Upwork.',
        outcome: 'Klien dari sosial media ditarik masuk ke kontrak resmi di Upwork.',
        actions: [
          action({
            title: 'Publikasikan hasil kerja di sosial media dan tarik ke kontrak Upwork',
            why: 'Cara ketiga untuk pecah telor adalah memanfaatkan sosial media lain seperti LinkedIn, Threads, dan Twitter/X, dengan Threads dan Twitter/X yang paling sering dipakai. Cara ini bekerja karena klien bisa tertarik bekerja dengan kamu setelah melihat hasil kerja yang dipublikasikan, lalu ketertarikan itu ditarik menjadi kontrak resmi di Upwork.',
            how: [
              'Pilih platform: fokus di Threads atau Twitter/X sebagai platform yang paling sering menghasilkan ketertarikan klien.',
              'Publikasikan hasil kerja: posting portofolio, proses kerja, atau insight dari bidangmu secara rutin.',
              'Respons ketertarikan: ketika ada klien yang tertarik, arahkan komunikasi ke pembuatan kontrak resmi di Upwork, bukan transaksi di luar platform.',
            ],
            example: 'Kamu memposting proses redesign onboarding aplikasi di Threads. Seorang business owner tertarik dan menghubungimu, lalu kamu mengarahkan dia untuk membuat kontrak resmi lewat Upwork sebelum mulai kerja.',
            doneWhen: 'Ada minimal satu ketertarikan klien dari sosial media yang berhasil diarahkan menjadi kontrak resmi di Upwork.',
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
    description: 'Pahami masalah klien, sepakati kontrak dengan jelas, lalu beri hasil yang membuat klien ingin bekerja lagi.',
    milestone: 'Klien mendapat solusi yang tepat dan merasa aman selama bekerja denganmu.',
    lessons: [
      {
        id: 'onboarding',
        title: 'Dapatkan brief dan masalah klien secara jelas',
        duration: '30 menit',
        summary: 'Komunikasi adalah langkah pertama delivery. Kamu tidak bisa menyelesaikan masalah klien kalau belum benar-benar memahami masalah, keresahan, dan hasil yang mereka butuhkan.',
        outcome: 'Brief klien dipahami dan dikonfirmasi sebelum problem solving dimulai.',
        actions: [
          action({
            title: 'Gali brief melalui komunikasi lisan maupun tulisan',
            why: 'Setelah mendapatkan kontrak, hal paling utama adalah berkomunikasi dengan klien sampai brief dan masalah mereka benar-benar jelas. Kita tidak bisa menyelesaikan masalah yang tidak kita pahami. Kalau keresahan klien masih kabur, eksekusi yang terlihat bagus sekalipun bisa salah arah dan tidak menyelesaikan kebutuhan sebenarnya.',
            how: [
              'Dengarkan masalah: minta klien menjelaskan kondisi sekarang, keresahan utama, dan kenapa masalah itu perlu diselesaikan.',
              'Gali tujuan: tanyakan hasil seperti apa yang dianggap berhasil oleh klien, termasuk batasan dan prioritasnya.',
              'Ringkas kembali: tulis pemahamanmu dengan bahasa sendiri lalu minta klien mengoreksi sebelum mulai bekerja.',
            ],
            example: 'Klien meminta redesign aplikasi. Setelah digali, masalah utamanya bukan tampilan, tapi user sering keluar sebelum selesai registrasi. Ringkasan ini dikonfirmasi dulu sebelum desain dimulai.',
            doneWhen: 'Klien sudah mengonfirmasi ringkasan masalah, tujuan, prioritas, dan hasil yang dibutuhkan.',
          }),
          action({
            title: 'Breakdown masalah sebelum masuk ke eksekusi',
            why: 'Setelah brief jelas, masalah bisa di-breakdown menjadi bagian kecil supaya solusi tidak dibuat berdasarkan tebakan. AI seperti ChatGPT atau Claude boleh dipakai untuk membantu memetakan masalah dan alternatif solusi. Namun AI hanya membantu proses berpikir; eksekusi yang sesuai konteks dan skill tetap menjadi peran freelancer.',
            how: [
              'Pecah masalah: bagi masalah utama menjadi penyebab, dampak, batasan, dan bagian yang bisa ditindaklanjuti.',
              'Gunakan AI sebagai alat bantu: minta AI memberi sudut pandang atau alternatif, lalu periksa ulang dengan konteks klien.',
              'Tentukan solusi: pilih solusi paling relevan dan realistis untuk dieksekusi dengan skill yang kamu miliki.',
            ],
            example: 'Masalah registrasi dipecah menjadi flow terlalu panjang, label membingungkan, dan error message tidak jelas. AI membantu menyusun hipotesis, tetapi kamu yang memvalidasi dan mengeksekusi redesign-nya.',
            doneWhen: 'Masalah sudah di-breakdown dan solusi terpilih punya alasan yang berkaitan langsung dengan brief klien.',
          }),
        ],
      },
      {
        id: 'contract-scope',
        title: 'Setup kontrak, scope, dan goals dengan jelas',
        duration: '25 menit',
        summary: 'Kontrak harus menjelaskan apa yang dikerjakan, apa yang tidak, batasannya, dan goals agar kedua pihak memegang ekspektasi yang sama.',
        outcome: 'Scope, out-of-scope, goals, timeline, dan approval disepakati tertulis.',
        actions: [
          action({
            title: 'Kunci scope dan goals sebelum mulai bekerja',
            why: 'Kontrak yang jelas melindungi freelancer dan klien dari ekspektasi berbeda. Scope harus menjelaskan apa yang kamu kerjakan, apa yang tidak, batas revisi, dan goals akhirnya. Tanpa itu, permintaan kecil bisa berkembang menjadi pekerjaan tambahan tanpa batas yang tidak masuk perhitungan waktu atau biaya.',
            how: [
              'Tulis scope: daftar semua deliverable yang akan dikerjakan beserta format dan batas revisinya.',
              'Tulis out-of-scope: jelaskan hal yang tidak termasuk supaya tambahan baru harus dibicarakan ulang.',
              'Sepakati goals dan timeline: tetapkan hasil yang dituju, deadline, alur approval, dan pengambil keputusan final.',
              'Amankan kontrak: mulai fixed-price setelah kontrak aktif dan milestone terkait sudah funded di Upwork.',
            ],
            example: 'Kontrak tiga desain mencakup file Figma dan dua ronde revisi. Copywriting dan desain tambahan dicatat sebagai out-of-scope yang membutuhkan kesepakatan baru.',
            doneWhen: 'Scope, out-of-scope, goals, revisi, timeline, approval, dan pembayaran jelas sebelum pekerjaan dimulai.',
          }),
        ],
      },
      {
        id: 'overdeliver',
        title: 'Under-promise, over-deliver',
        duration: '25 menit',
        summary: 'Jangan melebih-lebihkan kemampuan saat membuat janji. Penuhi scope utama dengan baik, lalu beri nilai ekstra yang relevan kalau kapasitas memungkinkan.',
        outcome: 'Scope utama selesai dan klien mendapat nilai tambahan yang tetap terarah.',
        actions: [
          action({
            title: 'Janjikan sesuai scope, lalu beri lebih saat delivery',
            why: 'Kalau klien meminta tiga atau empat desain, cukup iyakan sesuai permintaan dan jangan melebih-lebihkan kemampuan di awal walaupun kamu bisa menghasilkan lebih banyak. Setelah scope utama selesai, beri opsi tambahan yang relevan. Banyak klien mengapresiasi pilihan lebih banyak, meski respons setiap klien berbeda dan ini bukan aturan universal.',
            how: [
              'Under-promise: buat janji sesuai scope dan kapasitas yang benar-benar aman untuk dipenuhi.',
              'Selesaikan yang utama: pastikan deliverable wajib, format, dan acceptance criteria sudah solid sebelum menambah bonus.',
              'Over-deliver dengan arah: beri opsi, insight, atau alternatif yang membantu keputusan, bukan banyak file tanpa konteks.',
            ],
            example: 'Klien meminta tiga konsep desain. Kamu menjanjikan tiga, menyelesaikannya dengan baik, lalu menyertakan satu alternatif tambahan yang punya alasan dan trade-off jelas.',
            doneWhen: 'Semua scope wajib selesai dan nilai ekstra yang diberikan tetap relevan dengan tujuan project.',
          }),
        ],
      },
      {
        id: 'review',
        title: 'Jaga komunikasi dan maintain klien',
        duration: '25 menit',
        summary: 'Klien pertama perlu dijaga dengan komunikasi dan hasil memuaskan. Kepuasan nyata membuka peluang feedback bagus, repeat project, dan profil yang makin kuat.',
        outcome: 'Project ditutup rapi, feedback diminta netral, dan relasi klien tetap terjaga.',
        actions: [
          action({
            title: 'Jaga komunikasi sampai klien benar-benar puas',
            why: 'Maintain klien bukan sekadar membalas chat, tapi memastikan mereka selalu tahu progres, hambatan, dan langkah berikutnya sampai hasil akhir diterima. Ini semakin penting untuk klien pertama karena pengalaman memuaskan bisa menghasilkan endorsement dan review yang memperkuat profil untuk pekerjaan berikutnya.',
            how: [
              'Update rutin: sampaikan apa yang selesai, apa yang menghambat, dan apa langkah berikutnya.',
              'Tutup semua celah: pastikan file, akses, dokumentasi, dan kewajiban di scope tidak tertinggal.',
              'Konfirmasi kepuasan: tanyakan apakah hasil sudah memenuhi scope sebelum kontrak ditutup.',
            ],
            example: 'Sebelum kontrak ditutup, kamu mengirim recap deliverable, link file, akses, dan meminta klien memastikan seluruh scope sudah terpenuhi.',
            doneWhen: 'Klien mengonfirmasi hasil sesuai scope dan tidak ada kewajiban freelancer yang masih menggantung.',
          }),
          action({
            title: 'Minta feedback secara netral, bukan memaksa bintang lima',
            why: 'Targetnya pengalaman kerja yang pantas mendapat review baik, tetapi rating harus lahir dari kepuasan nyata, bukan diminta atau diarahkan. Setelah kewajiban selesai dan klien puas, undang mereka memberi feedback jujur. Review kuat membantu calon klien berikutnya menilai kualitas dan profesionalismemu.',
            how: [
              'Pilih waktu: minta feedback setelah klien mengonfirmasi hasil dan pembayaran serta kewajiban selesai.',
              'Gunakan bahasa netral: minta feedback jujur tanpa menyebut jumlah bintang atau menawarkan imbalan.',
              'Catat pelajaran: gunakan feedback untuk memperbaiki komunikasi, scope, dan delivery project berikutnya.',
            ],
            example: '“If everything looks good, I’d appreciate your honest feedback about our collaboration. It will help me improve future projects.”',
            doneWhen: 'Feedback diminta tanpa mengarahkan rating, dan satu pelajaran dari project sudah dicatat.',
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
    description: 'Ubah project selesai menjadi review kuat, portofolio baru, repeat work, referral, dan rate yang terus berkembang.',
    milestone: 'Pipeline tumbuh dari reputasi, bukti kerja, dan relasi klien yang sudah dibangun.',
    lessons: [
      {
        id: 'repeat-growth',
        title: 'Pastikan kepuasan, lalu ulangi strategi pecah telor',
        duration: '20 menit',
        summary: 'Scale dimulai dari klien yang benar-benar puas dan feedback yang jelas. Setelah itu, ulangi strategi pecah telor sambil membuka peluang job invitation.',
        outcome: 'Project selesai dengan feedback kuat dan strategi akuisisi klien berjalan kembali.',
        actions: [
          action({
            title: 'Jadikan kepuasan klien sebagai modal pertumbuhan',
            why: 'Setelah project selesai, pastikan klien puas dan punya kesempatan memberi feedback yang jelas tentang alasan mereka senang bekerja denganmu. Rating dan review yang baik menjadi modal kepercayaan untuk calon klien berikutnya. Ketika profil sudah punya riwayat positif, peluang job invitation biasanya mulai terbuka sehingga kamu tidak selalu harus mencari pekerjaan dari nol.',
            how: [
              'Konfirmasi hasil: pastikan scope selesai dan klien menyatakan puas sebelum kontrak ditutup.',
              'Minta feedback netral: undang review jujur yang menjelaskan pengalaman bekerja, tanpa mengarahkan rating tertentu.',
              'Ulangi akuisisi: jalankan kembali Boost Profile, apply job, dan publikasi sosial media sambil memantau job invitation yang masuk.',
            ],
            example: 'Setelah satu project selesai dan mendapat review positif, kamu kembali menyalakan Boost Profile dan tetap memantau invitation yang mulai masuk dari klien baru.',
            doneWhen: 'Project ditutup dengan feedback jujur, dan minimal satu jalur akuisisi dari fase Pecah Telor sudah dijalankan kembali.',
          }),
        ],
      },
      {
        id: 'portfolio-loop',
        title: 'Bangun portofolio secara berkala',
        duration: '25 menit',
        summary: 'Setiap project baru adalah bahan untuk memperkuat profil. Update portofolio secara berkala agar bukti kerja terus bertambah dan tetap relevan.',
        outcome: 'Portofolio baru terbit secara rutin dari project yang benar-benar selesai.',
        actions: [
          action({
            title: 'Tambahkan dua sampai tiga portofolio baru setiap bulan',
            why: 'Portofolio bukan pekerjaan sekali jadi. Kalau setiap bulan kamu menambahkan dua sampai tiga bukti baru, lama-kelamaan profil akan memiliki tumpukan pengalaman yang menjadi modal untuk mendapat pekerjaan berikutnya. Semakin banyak project relevan yang terdokumentasi dengan baik, semakin mudah klien baru memvalidasi bahwa kamu memang mampu bekerja secara nyata.',
            how: [
              'Pilih project: ambil pekerjaan selesai yang paling relevan dengan positioning dan punya proses yang layak diceritakan.',
              'Susun studi kasus: tampilkan masalah, breakdown, solusi, peranmu, dan hasil yang benar-benar dapat dibuktikan.',
              'Periksa izin: minta izin publikasi dan lindungi data klien atau batas NDA sebelum tayang.',
              'Jadwalkan update: targetkan dua sampai tiga portofolio baru per bulan sesuai jumlah project yang memang tersedia.',
            ],
            example: 'Dari tiga project selesai bulan ini, dua project paling relevan diubah menjadi studi kasus dan ditambahkan ke profil setelah izin publikasi diterima.',
            doneWhen: 'Dua sampai tiga portofolio baru sudah tayang bulan ini, atau semua project layak yang tersedia sudah didokumentasikan.',
          }),
        ],
      },
      {
        id: 'referral',
        title: 'Follow-up klien lama dan minta referral',
        duration: '25 menit',
        summary: 'Hubungi klien lagi setelah satu atau dua bulan, bangun percakapan secara natural, lalu buka peluang project lanjutan atau referral dengan sopan.',
        outcome: 'Follow-up terkirim dan peluang repeat work atau referral dibuka tanpa memaksa.',
        actions: [
          action({
            title: 'Follow-up setelah satu atau dua bulan',
            why: 'Setelah project selesai, jangan biarkan relasi berhenti begitu saja. Dalam satu atau dua bulan, hubungi klien dengan ringan untuk menanyakan kabar dan perkembangan hasil yang pernah dikerjakan. Kalau klien tidak sibuk, percakapan biasanya bisa berkembang kembali dan membuka ruang untuk menanyakan apakah ada project lain yang perlu dibantu.',
            how: [
              'Pilih waktu: pasang reminder satu atau dua bulan setelah project selesai.',
              'Mulai natural: tanyakan kabar dan perkembangan project sebelumnya, jangan langsung membuka percakapan dengan penawaran.',
              'Buka peluang: setelah konteks terbentuk, tanyakan secara sopan apakah ada kebutuhan lain yang bisa dibantu.',
            ],
            example: 'Dua bulan setelah redesign selesai, kamu menanyakan perkembangan implementasinya. Setelah klien membalas, kamu menawarkan bantuan untuk halaman lain yang pernah disebut dalam project.',
            doneWhen: 'Follow-up sudah dikirim dengan konteks project lama dan tanpa tekanan untuk langsung membeli jasa lagi.',
          }),
          action({
            title: 'Minta referral secara sopan dan arahkan kontrak ke Upwork',
            why: 'Klien biasanya punya circle sesama business owner atau entrepreneur yang mungkin membutuhkan jasa freelance. Karena mereka sudah mengalami sendiri kualitas kerjamu, rekomendasinya memiliki trust yang lebih kuat. Sebagai strategi membangun digital asset, arahkan project dari referral ke kontrak Upwork agar riwayat pekerjaan ikut memperkuat profilmu.',
            how: [
              'Minta dengan konteks: sebutkan jenis bisnis dan masalah yang paling cocok kamu bantu agar klien mudah mengingat orang yang relevan.',
              'Beri ruang menolak: gunakan nada ringan, jangan membuat klien merasa wajib merekomendasikanmu.',
              'Arahkan ke Upwork: ketika referral tertarik, ajak membuat kontrak resmi di Upwork supaya project tercatat di profil.',
            ],
            example: 'Kamu meminta dikenalkan kepada business owner lain yang punya masalah onboarding aplikasi. Ketika ada yang tertarik, project diarahkan ke kontrak resmi Upwork sebelum pekerjaan dimulai.',
            doneWhen: 'Permintaan referral sudah spesifik dan calon project dari referral diarahkan ke kontrak resmi Upwork.',
          }),
        ],
      },
      {
        id: 'rate',
        title: 'Naikkan rate secara berkala',
        duration: '25 menit',
        summary: 'Rate harus berkembang mengikuti skill, pengalaman, dan kualitas portofolio. Harga yang terus stagnan meski pengalaman bertambah bisa menimbulkan pertanyaan dari klien baru.',
        outcome: 'Rate baru punya alasan jelas dan jadwal kenaikan yang realistis.',
        actions: [
          action({
            title: 'Naikkan rate seiring bertambahnya skill dan bukti kerja',
            why: 'Rate yang segitu-gitu saja dari waktu ke waktu bisa membuat klien baru bertanya kenapa seseorang dengan banyak project tidak berkembang harganya. Ketika skill, kualitas portofolio, dan pengalaman bertambah, rate juga perlu naik untuk merepresentasikan value yang lebih tinggi. Ini memberi dua keuntungan: pembayaran yang lebih baik sekaligus trust dari positioning harga yang lebih matang.',
            how: [
              'Review perkembangan: lihat skill baru, jumlah project, kualitas portofolio, repeat client, dan kompleksitas pekerjaan yang sudah mampu ditangani.',
              'Tentukan jadwal: evaluasi rate setiap enam bulan sampai satu tahun, bukan mengubahnya tanpa alasan yang jelas.',
              'Naikkan bertahap: sebagai pola pribadi, kenaikan $5-$10 bisa dipakai sebagai titik awal lalu disesuaikan dengan kondisi pasar dan bukti kerjamu.',
              'Uji di klien baru: terapkan rate baru pada lead baru terlebih dahulu dan hormati kesepakatan aktif dengan klien lama.',
            ],
            example: 'Setelah satu tahun, beberapa project baru, dan portofolio yang makin kuat, kamu menaikkan rate dari $25 menjadi $30 per jam untuk calon klien baru.',
            doneWhen: 'Rate baru sudah ditetapkan dengan alasan berbasis skill, portofolio, pengalaman, dan jadwal evaluasi yang jelas.',
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
  console.assert(allLessonIds.length === 17, 'Curriculum must contain 17 lessons')
  console.assert(calculateActionProgress({}).percentage === 0, 'Empty progress must be 0%')
  console.assert(calculateActionProgress(Object.fromEntries(allActionIds.map((id) => [id, true]))).percentage === 100, 'Full progress must be 100%')
}

export default curriculum
