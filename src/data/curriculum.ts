export type Lesson = {
  id: string;
  title: string;
  content: string;
};

export type Phase = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export const curriculum: Phase[] = [
  {
    id: "phase-1",
    title: "Fase 1: Fondasi Profil 100%",
    description: "Membangun fondasi profil Upwork agar masuk ke algoritma dan dilirik klien.",
    lessons: [
      { id: "1-1", title: "Indikator Profil 100%", content: "Syarat wajib masuk algoritma. Jangan ada biodata yang kosong." },
      { id: "1-2", title: "Professional Headshot", content: "Foto wajib profesional. Tidak boleh foto asal atau blur." },
      { id: "1-3", title: "Portofolio & Sertifikat", content: "Isi portofolio dan sertifikat (opsional tapi sangat disarankan)." },
      { id: "1-4", title: "SEO Upwork (Keyword)", content: "Masukkan keyword spesifik di deskripsi profil (Contoh: BUKAN 'Designer', TAPI 'SaaS UI/UX Designer | Figma')." },
      { id: "1-5", title: "Setup Rate Sesuai Level", content: "Pasang rate sesuai kemampuan (Beginner/Intermediate/Expert)." },
    ]
  },
  {
    id: "phase-2",
    title: "Fase 2: Strategi Pecah Telor",
    description: "Cara memenangkan pekerjaan pertama di Upwork dan mengumpulkan review bintang 5.",
    lessons: [
      { id: "2-1", title: "Filter Entry Level Job", content: "Cari pekerjaan dengan badge 'Entry Level' sesuai bidangmu." },
      { id: "2-2", title: "Strategi Boost Profile", content: "Kapan harus bakar Connects dan kapan harus simpan." },
      { id: "2-3", title: "Turun Ego Harga", content: "Jangan nego harga di awal. $10 untuk job pertama tidak apa-apa demi review." },
      { id: "2-4", title: "Cover Letter Problem-Solving", content: "Modifikasi template proposal: Fokus selesaikan masalah klien, beri ide gratis di awal." },
      { id: "2-5", title: "Target Review 5 Bintang", content: "Selesaikan kontrak cepat, minta review 5 bintang dan testimoni. Ini membuka badge 'Rising Talent'." },
    ]
  },
  {
    id: "phase-3",
    title: "Fase 3: Komunikasi & Eksekusi",
    description: "Membangun kepercayaan klien dan memberikan value lebih.",
    lessons: [
      { id: "3-1", title: "Bahasa Inggris Wajib", content: "Posisikan diri sebagai ahli/konsultan. Komunikasi adalah kunci keamanan klien." },
      { id: "3-2", title: "Sistem Pembayaran", content: "Pahami perbedaan Fixed-price vs Hourly contract dan proteksi Escrow." },
      { id: "3-3", title: "Under Promise, Over Deliver", content: "Janjikan 1 solusi, berikan 3 opsi desain/solusi saat delivery." },
      { id: "3-4", title: "Proaktif Komunikasi", content: "Jangan diam menunggu instruksi. Berikan update berkala sebelum diminta." },
    ]
  },
  {
    id: "phase-4",
    title: "Fase 4: Skala & Hidden Market",
    description: "Mendapatkan klien baru dari referensi dan repeat order tanpa bakar Connects.",
    lessons: [
      { id: "4-1", title: "Follow-up Klien Lama", content: "Tanya kabar klien setelah 1 atau 3 bulan kontrak selesai." },
      { id: "4-2", title: "Update Portofolio Berkala", content: "Kirim update portofolio terbarumu ke jaringan klien lama." },
      { id: "4-3", title: "Konversi Referral", content: "Dapatkan Direct Contracts dari referral klien lama. Referral lebih gampang close daripada bidding dari 0." },
    ]
  }
];
