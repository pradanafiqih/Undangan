# Wedding Invitation Web App (Reverse Engineered)

Proyek undangan pernikahan digital modern, responsif, dan elegan hasil reverse engineering dari template **Goodchoice Prime (Febria & Fiqih)**. Dibangun ulang menggunakan arsitektur **React 18 + Vite + Tailwind CSS** yang sangat cepat, ringan, dan 100% modular.

---

## ✨ Fitur & Interaktivitas

1. **Cover / Halaman Pembuka Interaktif**:
   - Menampilkan salam personal untuk tamu berdasarkan query string URL: `?to=Nama+Tamu` (contoh: `http://localhost:3000/?to=Budi+Santoso`).
   - Tombol **"Buka Undangan"** dengan transisi slide mulus, otomatis membuka kunci scroll halaman dan memulai musik latar.
2. **Audio Controller & Background Music**:
   - Floating music button di sudut kanan bawah dengan efek piringan berputar (vinyl disk).
   - Efek *volume fade-in* lembut saat pertama kali diputar.
   - Otomatis pause saat pengguna berpindah tab / minimize browser (`visibilitychange` API) dan otomatis resume saat kembali ke tab.
   - Lagu: *Bruno Mars - Risk It All*.
3. **Hero & Video Motion Background**:
   - Background video prewedding MP4 bergerak halus dengan fallback gambar beresolusi tinggi.
   - Tipografi mewah dengan perpaduan font serif (*Playfair Display*, *Cormorant Garamond*, dan *Cinzel*).
4. **Kutipan Suci (Quote Section)**:
   - Ayat suci Al-Qur'an (QS. Ar-Rum: 21) lengkap dengan teks Arab dan terjemahan bahasa Indonesia.
5. **Profil Mempelai Pria & Wanita**:
   - Foto dan informasi lengkap kedua mempelai (Pradana Fiqih Priambodo & Febria Nur Kirani Mukti) beserta nama kedua orang tua.
6. **Live Countdown Timer & Google Calendar**:
   - Hitung mundur *real-time* (Hari, Jam, Menit, Detik) menuju 19 Mei 2026.
   - Tombol integrasi langsung **"Simpan ke Google Calendar"**.
7. **Agenda Acara (Akad & Resepsi)**:
   - Detail tanggal, waktu, dan tempat (The Winner Premiere Hotel Pemalang).
   - Tombol **"Lihat Lokasi (Google Maps)"** dengan tautan langsung ke Google Maps tempat acara.
8. **Kisah Perjalanan Cinta (Love Story)**:
   - Linimasa perjalanan dari pertemuan pertama (2021) hingga hari pernikahan (2026).
9. **Galeri Prewedding & Lightbox**:
   - Grid foto 14 foto prewedding beresolusi tinggi.
   - Fitur modal Lightbox saat foto diklik dengan navigasi *Next*, *Previous*, dan dukungan tombol keyboard (`Escape`, `ArrowLeft`, `ArrowRight`).
10. **RSVP Form & Confetti**:
    - Konfirmasi kehadiran (*Hadir* / *Tidak Hadir*) dan jumlah tamu.
    - Efek selebrasi konfeti saat tamu mengonfirmasi hadir.
    - Data tersimpan lokal di browser (`localStorage`).
11. **Tanda Kasih (Wedding Gift / Amplop Digital)**:
    - Tombol *collapse/expand* untuk melihat nomor rekening.
    - 4 Rekening: Maybank, 2x CIMB Niaga, dan Bank Jago.
    - Tombol **"Salin Rekening"** (*Copy to Clipboard*) dengan notifikasi konfirmasi berhasil salin.
    - Alamat pengiriman kado fisik lengkap dengan tombol salin alamat.
12. **Buku Ucapan & Doa (Guestbook / Wishes)**:
    - Form kirim ucapan doa dan selamat.
    - Daftar ucapan realtime yang tersimpan di `localStorage`.
13. **Footer**:
    - Ucapan terima kasih hangat dari kedua mempelai dan keluarga besar.

---

## 📁 Struktur Folder Proyek

```
Undangan/
├── public/
│   └── assets/
│       ├── audio/
│       │   └── bgm.mp3             # Lagu latar Bruno Mars
│       ├── video/
│       │   └── hero-video.mp4      # Background video loop prewedding
│       └── images/                 # Foto-foto prewedding, avatar mempelai, hero
├── src/
│   ├── components/
│   │   ├── CoverOverlay.jsx        # Layar pembuka cover undangan
│   │   ├── AudioPlayer.jsx         # Pemutar musik floating dengan tab listener
│   │   ├── HeroSection.jsx         # Bagian utama dengan background video
│   │   ├── QuoteSection.jsx        # Kutipan QS. Ar-Rum 21
│   │   ├── CoupleSection.jsx       # Profil mempelai pria & wanita
│   │   ├── CountdownSection.jsx    # Hitung mundur waktu & Google Calendar
│   │   ├── EventSection.jsx        # Jadwal Akad Nikah & Resepsi + Maps
│   │   ├── StorySection.jsx        # Timeline perjalanan cinta
│   │   ├── GallerySection.jsx      # Galeri foto & modal Lightbox
│   │   ├── RsvpSection.jsx         # Form konfirmasi kehadiran + confetti
│   │   ├── GiftSection.jsx         # Rekening amplop digital + salin nomor
│   │   ├── WishesSection.jsx       # Form & daftar ucapan doa tamu
│   │   └── FooterSection.jsx       # Ucapan penutup & tanda terima kasih
│   ├── data/
│   │   └── weddingData.js          # Master data (mudah diedit untuk ganti info)
│   ├── App.jsx                     # Komponen utama
│   ├── index.css                   # Tailwind CSS & custom styling
│   └── main.jsx                    # Entry point React
├── index.html                      # HTML root & Google Fonts
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Cara Menjalankan Proyek

1. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```
   Buka browser di: [http://localhost:3000](http://localhost:3000)

2. **Uji Parameter Nama Tamu**:
   Buka di URL:
   [http://localhost:3000/?to=Nama+Tamu](http://localhost:3000/?to=Nama+Tamu) atau [http://localhost:3000/?to=Bapak+Budi+%26+Keluarga](http://localhost:3000/?to=Bapak+Budi+%26+Keluarga)

3. **Build untuk Produksi**:
   ```bash
   npm run build
   ```
   File hasil build akan berada di folder `dist/` dan siap di-upload ke Vercel, Netlify, atau GitHub Pages secara gratis!

---

## ✏️ Cara Mengubah Data Undangan

Cukup buka file [`src/data/weddingData.js`](file:///C:/personal/Undangan/src/data/weddingData.js):
- Ubah nama mempelai, nama orang tua, dan foto di `couple`.
- Ubah tanggal dan target countdown di `date`.
- Ubah lokasi acara dan tautan Google Maps di `events`.
- Ubah nomor rekening atau alamat pengiriman di `gift`.