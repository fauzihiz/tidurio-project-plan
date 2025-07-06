// jadwal.js
// File ini akan dijalankan ketika di-load di index.html

// Aktivasi member Fauzi
activateMember("fauzi");

// Tampilkan section jadwal pengerjaan
showSection("jadwal-pengerjaan");
showSection("sumber-daya");
showSection("manajemen-risiko");

// Isi konten jadwal
document.getElementById("jadwal-content").innerHTML = `
  <table>
    <thead>
      <tr>
        <th>Minggu</th>
        <th>Tanggal</th>
        <th>Aktivitas</th>
        <th>Target</th>
        <th>Penanggung Jawab</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>14 - 20 Juni</td>
        <td>Finalisasi project plan, riset, setup, wireframe</td>
        <td>Project plan & setup lengkap</td>
        <td>Bersama</td>
      </tr>
      <tr>
        <td>2</td>
        <td>21 - 27 Juni</td>
        <td>Desain UI & struktur awal backend/frontend</td>
        <td>Struktur awal berjalan</td>
        <td>Frontend & Backend</td>
      </tr>
      <tr>
        <td>3</td>
        <td>28 Juni - 4 Juli</td>
        <td>Autentikasi & form sleep logger</td>
        <td>User bisa login/logout</td>
        <td>Frontend & Backend</td>
      </tr>
      <tr>
        <td>4</td>
        <td>5 - 11 Juli</td>
        <td>Sistem poin, sleep log ke DB, testing awal</td>
        <td>Poin & logging bekerja</td>
        <td>Backend & QA</td>
      </tr>
      <tr>
        <td>5</td>
        <td>12 - 15 Juli</td>
        <td>Laporan kemajuan, dashboard & badges</td>
        <td>Dashboard tampil data</td>
        <td>Frontend & Bersama</td>
      </tr>
      <tr>
        <td>6</td>
        <td>16 - 20 Juli</td>
        <td>Integrasi sistem streak & achievement</td>
        <td>Sistem berjalan</td>
        <td>Frontend & Backend</td>
      </tr>
      <tr>
        <td>7</td>
        <td>21 - 27 Juli</td>
        <td>Finalisasi fitur & visualisasi</td>
        <td>Aplikasi stabil</td>
        <td>Frontend & Backend</td>
      </tr>
      <tr>
        <td>8</td>
        <td>28 Juli - 1 Agustus</td>
        <td>Finalisasi, bug fixing, presentasi</td>
        <td>Siap presentasi akhir</td>
        <td>Bersama</td>
      </tr>
    </tbody>
  </table>
`;

document.getElementById("sumber-content").innerHTML = `
  <ul>
    <li><strong>HTML, CSS, dan JavaScript:</strong> untuk membangun struktur dasar, tampilan, dan logika fungsional aplikasi.</li>
    <li><strong>React:</strong> library utama untuk membangun antarmuka pengguna dan mengelola state aplikasi secara efisien.</li>
    <li><strong>React-calendar:</strong> komponen kalender untuk input intuitif jadwal tidur pengguna.</li>
    <li><strong>Charts.js:</strong> library untuk visualisasi data seperti durasi dan tren kualitas tidur pengguna.</li>
    <li><strong>Hapi.js:</strong> framework backend Node.js untuk membangun API dan server.</li>
    <li><strong>PostgreSQL:</strong> database untuk menyimpan data pengguna dan log tidur.</li>
    <li><strong>Git & GitHub:</strong> version control dan kolaborasi tim.</li>
    <li><strong>Figma:</strong> untuk desain UI/UX dan wireframe.</li>
  </ul>
`;

document.getElementById("risiko-content").innerHTML = `
  <p><strong>Identifikasi dan Mitigasi Risiko:</strong></p>
  <ul>
    <li><strong>Miskomunikasi anggota:</strong> Solusi dengan check-in rutin harian atau mingguan, dan koordinasi via fasilitator Dicoding bila perlu.</li>
    <li><strong>Repository hilang/corrupt:</strong> Backup berkala ke cloud dan perangkat lokal tiap anggota tim.</li>
    <li><strong>Kendala teknis/pengembangan:</strong> Konsultasi ke fasilitator, riset lanjutan, atau mengurangi scope fitur jika sangat diperlukan.</li>
    <li><strong>Keterlambatan timeline:</strong> Buffer time di setiap milestone dan prioritas fitur core terlebih dahulu.</li>
    <li><strong>Konflik merge Git:</strong> Pembagian branch yang jelas dan review code sebelum merge.</li>
    <li><strong>Perubahan requirement:</strong> Dokumentasi requirement yang jelas dan approval process untuk perubahan.</li>
  </ul>
  <p><strong>Rencana Kontingensi:</strong></p>
  <ul>
    <li>Jika ada member yang tidak aktif, redistribusi tugas ke member lain.</li>
    <li>Jika ada masalah teknis besar, konsultasi dengan mentor atau ubah pendekatan teknis.</li>
    <li>Jika timeline terlalu ketat, prioritaskan MVP dan tunda fitur advanced.</li>
  </ul>
`;