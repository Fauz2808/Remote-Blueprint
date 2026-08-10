const sections = [
  ['Refund', 'Refund berlaku 7 hari sejak pembelian untuk masalah akses teknis dari Remote Blueprint atau fitur utama Core yang tidak sesuai deskripsi listing. Refund tidak berlaku setelah lebih dari 30% action Core diselesaikan, karena sekadar berubah pikiran setelah mengakses sebagian besar materi, karena tidak mendapat klien (Remote Blueprint tidak menjamin hasil), atau karena masalah berasal dari akun Upwork pengguna sendiri. Ajukan refund ke hello@remoteblueprint.my.id dengan email pembelian.'],
  ['Data yang disimpan', 'Kami menyimpan email, purchase reference dari Lynk.id, status akses Core, dan progres action yang kamu selesaikan. Hasil Readiness Scanner dan Job Fit Checker tersimpan lokal di perangkatmu kecuali kamu login dan menyimpannya ke akun. Kami tidak menyimpan deskripsi job lengkap dan tidak meminta nomor telepon.'],
  ['Cara menghapus data', 'Kirim email ke hello@remoteblueprint.my.id dari alamat pembelianmu untuk menghapus akun dan seluruh progres tersimpan. Proses dilakukan manual dan dikonfirmasi lewat email yang sama.'],
  ['Tidak termasuk dalam Core', 'Mentoring 1-on-1, review profil atau proposal oleh manusia, live class, komunitas, jaminan kontrak, jaminan pendapatan, Connects Upwork, akun Upwork, dan jasa pembuatan profil/proposal.'],
  ['Kontak', 'Pertanyaan pembelian, akses, atau privasi: hello@remoteblueprint.my.id.'],
] as const

export default function Legal() {
  return (
    <div className="starter-shell">
      <header className="starter-header">
        <a className="wordmark wordmark-light" href="/starter"><img className="wordmark-mark" src="/brand/remote-blueprint-avatar.svg" alt="" width="34" height="34" /><span>Remote Blueprint</span></a>
        <nav aria-label="Navigasi"><a href="/starter">Kembali ke Starter</a></nav>
      </header>
      <main className="starter-content">
        <header className="starter-title"><p className="eyebrow">Legal</p><h1>Refund, privasi, dan kontak.</h1></header>
        <div className="guide-list">
          {sections.map(([title, copy]) => (
            <article key={title}><span>—</span><div><h2>{title}</h2><p>{copy}</p></div></article>
          ))}
        </div>
      </main>
    </div>
  )
}
