// ===== FILE: sections/cakupan.js =====
// Aktivasi member Alvin
activateMember("alvin");

// Tampilkan section cakupan proyek
showSection("cakupan-proyek");

// Isi konten cakupan
document.getElementById("cakupan-content").innerHTML = `
  <p>
    Cakupan proyek <strong>Tidur.io</strong> mencakup pengembangan aplikasi web responsif yang menyediakan fitur pelacakan tidur dan gamifikasi.
    Tujuan utamanya adalah membantu pengguna membentuk kebiasaan tidur sehat melalui fitur interaktif dan motivasi digital.
  </p>
  <p><strong>Fitur Utama:</strong></p>
  <ul>
    <li>Sistem Autentikasi: Registrasi, login, dan manajemen akun.</li>
    <li>Sleep Logging: Pencatatan waktu tidur dan bangun secara manual.</li>
    <li>Gamifikasi: Poin, streak counter, dan badges pencapaian.</li>
    <li>Dashboard Analytics: Statistik tidur dan visualisasi tren.</li>
    <li>Riwayat Tidur: Log data historis pengguna.</li>
  </ul>
  <p><strong>Batasan:</strong></p>
  <ul>
    <li>Aplikasi berbasis web (bukan native app).</li>
    <li>Logging tidur dilakukan manual, bukan otomatis dari sensor.</li>
    <li>Fokus pengembangan pada MVP (Minimum Viable Product).</li>
  </ul>
  <p>
    Aplikasi akan di-deploy di platform hosting web agar dapat diakses luas.
  </p>
`;