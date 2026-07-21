# Rencana Kerja: Fitur Artikel (Sanity CMS)

Domain: `https://www.mulimekhanai.com/`
Studio embedded di: `/studio` (diproteksi Clerk role admin)

---

## Fase 1 — Setup & Instalasi Sanity

1. Install dependency
   - `sanity` (Studio)
   - `next-sanity` (toolkit integrasi Next.js)
   - `@sanity/image-url` (helper generate URL gambar)
   - `@portabletext/react` (renderer konten artikel)
2. Inisialisasi project Sanity (`sanity init` / config manual)
   - Buat/hubungkan project Sanity, catat `projectId`
   - Dataset: `production`
3. Tambahkan environment variables
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
   - `SANITY_API_VERSION`
   - `SANITY_REVALIDATE_SECRET` (untuk webhook, dipakai di Fase 4)
4. Setup CORS di `manage.sanity.io`
   - Tambahkan `https://www.mulimekhanai.com`
   - Tambahkan `http://localhost:3000` (dev)
5. Buat route embedded Studio (`app/studio/[[...tool]]/page.tsx`)
6. Proteksi route `/studio` dengan Clerk
   - `app/studio/layout.tsx` — cek role admin (pola sama seperti `/dashboard`)
   - Catat: ini lapisan tambahan di depan login Sanity, bukan pengganti — admin tetap perlu login akun Sanity setelah lolos gerbang Clerk
7. Test: buka `/studio`, pastikan bisa login & masuk ke Studio kosong (belum ada skema konten)

---

## Fase 2 — Skema Konten (Sanity Schema)

1. Skema `author`
   - `name` (string)
   - `photo` (image)
   - `bio` (text, opsional)
   - `externalUrl` (url, opsional — link ke web pribadi penulis)
2. Skema `banner` (generik, reusable untuk berbagai penempatan)
   - `internalName` (string — label internal di Studio)
   - `image` (image)
   - `title` (string)
   - `description` (text pendek)
   - `ctaText` (string)
   - `ctaUrl` (url)
   - `placement` (string — misal `artikel-sidebar`, penanda lokasi tampil)
3. Custom Portable Text block: gambar inline
   - Field: image + alt text + caption (opsional)
4. Custom Portable Text block: embed YouTube
   - Field: url YouTube saja
   - Render jadi `<iframe>` di frontend
5. Skema `article`
   - `title` (string)
   - `slug` (slug, dari title)
   - `excerpt` (text pendek — sumber meta description otomatis)
   - `coverImage` (image + hotspot — sumber OG image otomatis)
   - `category` (string, pilihan: `budaya` / `cerita` / `berita`)
   - `content` (Portable Text + custom image block + custom YouTube block)
   - `author` (reference → `author`)
   - `publishedAt` (datetime)
   - `isFeatured` (boolean — penanda tampil di hero carousel)
6. Daftarkan semua skema ke `sanity.config.ts`
7. Test: buat 1-2 dokumen `author` dan `article` contoh langsung dari Studio

---

## Fase 3 — Setup Client & Fetch Data

1. Buat `lib/sanity/client.ts` — konfigurasi `createClient` dari `next-sanity`
2. Buat `lib/sanity/image.ts` — helper `urlForImage()` pakai `@sanity/image-url`
3. Daftarkan domain `cdn.sanity.io` ke `next.config.ts` (`images.remotePatterns`)
4. Buat query GROQ dasar (di `lib/sanity/queries.ts`):
   - `getArticles(page, pageSize)` — list artikel + pagination, urut `publishedAt desc`
   - `getFeaturedArticles()` — untuk hero carousel, urut `publishedAt desc`
   - `getArticleBySlug(slug)` — detail 1 artikel (include `author->`)
   - `getBannerByPlacement(placement)` — ambil banner sesuai lokasi (misal `artikel-sidebar`)
5. Konvensi: semua gambar Sanity dirender pakai `<Image unoptimized />` (hindari boros kuota Image Optimization Vercel, karena Sanity CDN sudah optimasi sendiri)

---

## Fase 4 — On-Demand Revalidation

1. Buat route handler `app/api/revalidate/route.ts`
   - Validasi request pakai `SANITY_REVALIDATE_SECRET`
   - Panggil `revalidateTag()` sesuai tipe dokumen yang berubah
2. Setup GROQ-powered Webhook di `manage.sanity.io`
   - Target URL: `https://www.mulimekhanai.com/api/revalidate`
   - Trigger: create/update/delete pada `article`, `author`, `banner`
3. Pastikan query di Fase 3 pakai `next: { tags: [...] }` supaya bisa di-invalidate oleh tag yang sesuai
4. Test: edit artikel di Studio → publish → cek apakah perubahan muncul di production tanpa perlu redeploy

---

## Fase 5 — Halaman `/artikel` (Listing)

1. `app/artikel/page.tsx` — Server Component, baca `searchParams` (`?page=`)
2. Komponen `Hero.tsx`
   - Carousel artikel `isFeatured = true`
   - Urut `publishedAt` terbaru dulu
3. Komponen `ArticleSection.tsx`
   - Grid card artikel (cover image, judul, excerpt, kategori, tanggal)
   - Pagination (query param, konsisten dengan pola grid ucapan)
4. SEO halaman listing (metadata dasar, tidak per-artikel)

---

## Fase 6 — Halaman `/artikel/[slug]` (Detail)

1. `app/artikel/[slug]/page.tsx`
2. `generateMetadata()` — SEO otomatis penuh:
   - `title` ← `article.title`
   - `description` ← `article.excerpt`
   - OG image ← `article.coverImage`
3. JSON-LD structured data (`Article`/`BlogPosting`)
   - `headline`, `image`, `author`, `datePublished`, `dateModified` (`_updatedAt`)
4. Render konten Portable Text
   - Custom renderer untuk heading (tambahkan `id` anchor otomatis, untuk kebutuhan TOC)
   - Custom renderer untuk block gambar & embed YouTube
5. Hitung `readTime` di frontend (dari jumlah kata `content`, bukan field manual)
6. Komponen `TableOfContents.tsx`
   - Ekstrak heading dari `content` artikel
   - **Desktop**: sticky di sidebar kanan
   - **Mobile**: statis (tidak sticky), posisi di atas, sebelum banner CTA
7. Komponen `SidebarBanner.tsx`
   - Fetch `getBannerByPlacement("artikel-sidebar")`
   - Render kondisional (skip kalau tidak ada banner aktif untuk placement ini)
8. Author info
   - Kalau `externalUrl` diisi → nama jadi link (`target="_blank"`)
   - Kalau kosong → teks biasa
9. Layout responsif
   - **Desktop**: 2 kolom (konten kiri besar, TOC + banner CTA kanan)
   - **Mobile**: 1 kolom, urutan → gambar utama → judul → properti (author/tanggal/kategori/readtime) → TOC → banner CTA → konten artikel

---

## Fase 7 — Integrasi Navigasi & Polish

1. Update `navLinks` di Header (pastikan link "Artikel" mengarah ke `/artikel`)
2. Selaraskan warna/styling ke design system (`#fafafa`, `#1a1a1a`, `#b8860b`, `#8b0000`)
3. Testing menyeluruh:
   - Buat artikel baru di Studio → cek muncul di listing & detail
   - Cek revalidation webhook benar-benar jalan tanpa redeploy manual
   - Cek TOC berfungsi (klik → scroll ke heading terkait) di desktop
   - Cek urutan layout mobile sesuai spesifikasi
   - Cek SEO: `view-source` halaman detail, pastikan meta tag & JSON-LD terisi benar
   - Cek proteksi `/studio` — user non-admin Clerk tidak bisa akses
4. Uji kuota Image Optimization — pastikan gambar Sanity memang pakai `unoptimized` dan tidak memakan kuota Vercel

# fsd

pnpm add sanity next-sanity @sanity/image-url @portabletext/react
pnpm add @sanity/vision
pnpm dlx sanity@latest init
