# Design System & Specification: Muli Mekhanai Rajabasa Landing Page

## 1. Project Overview & Context

- **Project Name:** Muli Mekhanai Rajabasa Website
- **Scope:** Single Landing Page (Clean Cultural Concept)
- **Target Audience:** General Public / Community Members
- **Objective:** Showcase the youth organization of Rajabasa, focused on community activism, empowerment, and preserving traditional Lampung culture.
- **Tone & Feel:** Clean, traditional yet modern, minimalist, spacious, and culturally elegant.

---

## 2. Technical Constraint & Stack

The AI Agent MUST strictly generate code complying with the following architecture:

- **Framework:** Next.js 16 (App Router, React 19)
- **Styling:** Tailwind CSS v4 (Using CSS variables via `@theme` syntax instead of old `tailwind.config.js`)
- **Components:** Radix UI primitives / shadcn system compatibility
- **Icons:** `lucide-react`
- **Utilities:** `clsx`, `tailwind-merge`, `class-variance-authority`

---

## 3. Design Tokens (60-30-10 Rule)

The design system enforces strict color distributions to maintain a clean layout while preserving deep cultural anchor points.

### Color Palette (Tailwind CSS v4 Configuration)

```css
@theme {
  /* 60% Dominant - Clean Base */
  --color-brand-bg: #fafafa;
  --color-brand-card: #ffffff;

  /* 30% Structural - High Readability & Typography */
  --color-brand-charcoal: #1a1a1a;

  /* 10% Dual Accents - Cultural Identity */
  --color-cultural-gold: #b8860b; /* Primary Accent (7%) */
  --color-cultural-crimson: #8b0000; /* Secondary Accent (3%) */
}
```

1. Hero Section (Header Utama)

   Isi: Foto/video berkualitas tinggi (misalnya foto bersama anggota mengenakan pakaian adat Lampung atau dokumentasi kegiatan besar), slogan (tagline) yang membakar semangat pemuda, dan satu atau dua tombol aksi utama (CTA) seperti "Jelajahi Kegiatan" atau "Donasi Sekarang".

   Tujuan: Menangkap perhatian pengunjung dalam 3 detik pertama.

2. Sambutan / Pengenalan Singkat (Brief Introduction)

   Isi: Paragraf singkat yang menjelaskan siapa Muli-Mekhanai Lampung, filosofi singkatnya, dan apa misi utama organisasi ini. Anda juga bisa menyisipkan kutipan (quote) dari ketua umum.

   Tujuan: Memberikan konteks langsung kepada pengunjung baru tentang organisasi Anda.

3. Pilar Kegiatan / Program Utama (Our Focus)

   Isi: Grid berisi 3 atau 4 poin fokus organisasi (misalnya: Pelestarian Budaya, Sosial & Kemanusiaan, Pengembangan Pemuda, Pemberdayaan Ekonomi). Setiap poin diberi ikon menarik dan penjelasan 1-2 kalimat.

   Tujuan: Menunjukkan secara cepat apa saja yang organisasi Anda lakukan sehari-hari.

4. Acara Mendatang (Upcoming Events)

   Isi: Menampilkan 1 sampai 3 kartu (cards) acara terdekat yang akan dilaksanakan. Lengkap dengan tanggal, nama acara, dan tombol "Detail Acara" atau "Daftar".

   Tujuan: Mengajak masyarakat atau pemuda lain untuk ikut berpartisipasi dalam kegiatan Anda.

5. Penggalangan Dana Aktif (Featured Fundraising)

   Isi: Kotak sorotan (highlight) untuk kampanye donasi yang paling mendesak atau sedang berjalan. Tampilkan judul kampanye, foto pendukung, indikator progres dana (misal: bar persentase dana terkumpul), dan tombol mencolok "Donasi Sekarang".

   Tujuan: Mempermudah donatur yang membuka website dengan tujuan spesifik untuk menyumbang.

6. Galeri Kegiatan / Info Terbaru (Latest Update)

   Isi: 4 sampai 6 foto dokumentasi kegiatan terakhir yang estetik atau cuplikan artikel/berita terbaru dari organisasi.

   Tujuan: Membuktikan bahwa organisasi Muli-Mekhanai ini aktif dan memiliki dampak nyata (social proof).

7. Hubungi Kami / Ajakan Bergabung (Call to Action - CTA)

   Isi: Section dengan warna latar belakang yang kontras, berisi ajakan untuk bergabung menjadi pengurus/relawan, atau tombol cepat untuk langsung terhubung ke WhatsApp panitia.

   Tujuan: Mengonversi pengunjung biasa menjadi bagian dari komunitas Anda.

8. Footer (Kaki Halaman)

   Isi: Hak cipta (Copyright), tautan cepat ke halaman lain, alamat sekretariat, dan ikon media sosial (Instagram, TikTok, YouTube).
