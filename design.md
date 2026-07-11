# Dokumentasi Desain & Arsitektur Frontend: Muli Mekhanai

**Tema:** Muda Berbudaya
**Tech Stack:** Next.js (App Router), Tailwind CSS v4, Shadcn UI

---

## 1. Domain Visual (Estetika & UI)

Konsep visual menggabungkan tata letak modern yang bersih dengan elemen kultural khas Lampung, diadaptasi dari palet warna pakaian adat tradisional.

### 1.1 Palet Warna (CSS Variables)

- **Background / Base (`bg-background`):** Putih bersih untuk memberikan ruang bernapas (_white space_) yang luas dan memaksimalkan keterbacaan teks.
- **Primary / Gold (`bg-lampung-gold`):** Merepresentasikan keagungan Siger dan Tapis. Digunakan untuk tombol utama, tautan aktif, dan penyorotan (_highlight_) informasi penting.
- **Accent / Red (`bg-lampung-red`):** Merepresentasikan semangat dan energi anak muda. Digunakan untuk _badge_, _Call to Action_ (CTA) sekunder, atau indikator interaktif.
- **Text / Charcoal (`text-charcoal`):** Abu-abu sangat gelap untuk teks utama agar kontras tetap tinggi namun lebih nyaman di mata dibandingkan hitam pekat.

### 1.2 Tipografi

- **Heading (H1 - H3):** _Font_ Serif (_Playfair Display_ atau _Merriweather_) untuk memberikan nuansa formal, berbudaya, dan institusional.
- **Body & Paragraf:** _Font_ Sans-serif (_Inter_ atau _Plus Jakarta Sans_) untuk memastikan keterbacaan maksimal di berbagai ukuran layar.

### 1.3 Ornamen & Aset Kultural

- **Siger (SVG):** Digunakan sebagai elemen latar belakang (_watermark_) dengan transparansi rendah, ditempatkan di area _Hero Section_.
- **Tapis (SVG):** Motif geometris zig-zag digunakan sebagai _section divider_ atau ornamen pada batas UI (_border_).

---

## 2. Domain Arsitektur (Sitemap & Tata Letak)

### 2.1 Peta Situs (Sitemap)

Sistem navigasi dirancang datar (_flat_) untuk akses informasi yang cepat.

1.  **`/` (Landing Page):** _Hero Section_, ringkasan entitas, cuplikan kegiatan, dan akses ke halaman HUT 81.
2.  **`/tentang` (Tentang Kami):** Sejarah, visi-misi, dan struktur organisasi.
3.  **`/artikel` (Artikel):** Daftar tulisan, berita, dan opini (tata letak _grid_).
4.  **`/kegiatan` (Kegiatan):** Galeri dokumentasi dan jadwal program kerja.
5.  **`/kontak` (Kontak):** Informasi alamat, formulir komunikasi, dan tautan sosial.

### 2.2 Struktur Layout Utama (`layout.tsx`)

- **Navbar (Header):** Tetap/mengambang (_sticky_) dengan efek _glassmorphism_ (blur) dari Shadcn `Navigation Menu`.
- **Main Container:** Pembatasan lebar (`max-w-7xl mx-auto`) untuk menjaga fokus pembaca.
- **Footer:** Informasi hak cipta, tautan sitemap sekunder, dan ornamen Tapis.

---

## 3. Domain Perangkat Lunak & Implementasi Kode

### 3.1 Konfigurasi Tailwind v4 (`globals.css`)

Karena menggunakan Tailwind v4, konfigurasi tema, warna kustom, dan utilitas dimasukkan langsung ke dalam file CSS utama menggunakan direktif `@theme`:

```css
@import "tailwindcss";

@theme {
  /* Palet Warna Kustom Lampung */
  --color-lampung-gold: #d4af37;
  --color-lampung-red: #c62828;
  --color-charcoal: #333333;

  /* Tipografi Kustom */
  --font-serif: "Playfair Display", serif;
  --font-sans: "Inter", sans-serif;
}

/* Konfigurasi Shadcn UI CSS Variables (Base) di sini... */
```
