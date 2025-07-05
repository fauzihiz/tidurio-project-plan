# Tidur.io - Simulasi Kolaborasi GitHub

Repositori ini digunakan sebagai **simulasi kontribusi kolaboratif** anggota tim capstone sebelum memulai pengembangan aplikasi Tidur.io.

## Tujuan
- Mengajarkan kontribusi GitHub (clone, branch, commit, pull request)
- Menyatukan kontribusi menjadi satu halaman statis (Project Plan)
- Menampilkan status "Aktif" untuk anggota yang berkontribusi

## Struktur Folder

```
📦 root
├─ 📁 sections/              ← folder berisi bagian dokumen per anggota
│  ├─ ringkasan.js         ← oleh Chandra
│  ├─ cakupan.js           ← oleh Alvin
│  ├─ peran.js             ← oleh Dimas
│  ├─ jadwal.js            ← oleh Fauzi
├─ 📄 index.html             ← file utama yang me-render semua section
├─ 📄 style.css              ← styling UI
└─ 📄 README.md             ← dokumentasi ini
```

## Panduan Kontribusi

1. Fork repository ini (atau clone jika latihan lokal)
2. Buat file sesuai tugasmu di folder `sections/`
3. Jalankan lokal lalu buat file .js dengan nama yang sesuai diarahkan
4. Isi konten file .js tersebut dengan yang sudah diberikan dengan pastebin
5. Commit dengan pesan seperti:

   ```bash
   git commit -m "feat: add Ringkasan Eksekutif oleh Chandra"
   ```

6. Push ke branch dan buat pull request
7. Setelah PR diterima:
   - Nama anggota akan berubah jadi **Aktif** secara otomatis
   - Progres bar bertambah
   - Bagian dokumen muncul di halaman

## Preview Web
[Untuk preview hasilnya bisa dilihat disini.](https://fauzihiz.github.io/tidurio-project-plan/)

## Contoh Pull Request
> `feat: add Ringkasan Eksekutif oleh Chandra`

## Lisensi
MIT License
