// ===== FILE: sections/peran.js =====
// Aktivasi member Dimas
activateMember("dimas");
 
// Tampilkan section pembagian peran
showSection("pembagian-peran");
 
// Isi konten pembagian peran
document.getElementById("peran-content").innerHTML = `
  <p>
    Pembagian peran dalam proyek <strong>Tidur.io</strong> dibagi menjadi tiga tim: Frontend, Backend, dan Tim Kolaboratif.
  </p>
  <p><strong>Tim Frontend:</strong></p>
  <ul>
    <li>Setup struktur dan UI (minggu 2, 5, 7).</li>
    <li>Form Sleep Logger, Dashboard, dan visualisasi data.</li>
    <li>Kolaborasi integrasi dengan backend (minggu 3, 6).</li>
  </ul>
  <p><strong>Tim Backend:</strong></p>
  <ul>
    <li>Setup server Hapi.js dan schema database.</li>
    <li>API untuk autentikasi, sleep log, sistem poin, dan badges.</li>
    <li>Optimisasi performa, keamanan, dan validasi (minggu 2, 4, 6, 7).</li>
  </ul>
  <p><strong>Tim Kolaboratif:</strong></p>
  <ul>
    <li>Finalisasi project plan dan workspace (minggu 1).</li>
    <li>Testing integrasi, evaluasi, dan presentasi akhir (minggu 4, 5, 8).</li>
    <li>Koordinasi dan dokumentasi proyek secara keseluruhan.</li>
  </ul>
`;