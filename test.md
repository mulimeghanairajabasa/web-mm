# Timeline & Checklist

## Fase 1 — Setup Fondasi

<!-- 1. Setup project Prisma (prisma init), koneksi ke Neon Postgres (connection string, pastikan pakai driver yang cocok untuk serverless/Vercel). -->
<!-- 2. Desain skema Prisma: tabel Ucapan (id, clerkUserId unique, nama, asal, noHp, isiUcapan, skor nullable, isHidden boolean, createdAt, updatedAt) dan tabel EventSettings (id, isPemenangTampil boolean, updatedAt). -->
<!-- 3. Jalankan migration pertama (prisma migrate dev), verifikasi tabel di Neon. -->

<!-- 4. Setup Clerk di project (kalau belum ada): install SDK, konfigurasi middleware, buat role admin di Clerk Dashboard untuk akun kamu. -->

## Fase 2 — Backend Logic (Server Actions / API Routes)

5. Server action submit/update ucapan: validasi user login, cek apakah clerkUserId sudah punya ucapan (insert vs update), cek apakah ucapan sudah dinilai (skor != null → tolak edit), cek apakah isPemenangTampil = true (→ tolak dengan pesan halus).
6. Server action fetch ucapan publik: query paginated (10/halaman), urut createdAt DESC, filter isHidden = false, hanya ambil field yang boleh publik (tanpa noHp).
7. Server action fetch ucapan untuk dashboard: semua data termasuk noHp, dengan sort/filter (misal belum dinilai, atau skor tertinggi).
8. Server action update skor (khusus admin, guarded role check).
9. Server action toggle hide/unhide ucapan (khusus admin).
10. Server action toggle tampilkan pemenang (khusus admin) — begitu di-on, kunci semua penilaian lanjutan (bisa berupa flag tambahan atau validasi di action skor). 11. Query/logic top 3 pemenang: ORDER BY skor DESC, createdAt ASC, exclude isHidden = true dan skor IS NULL.

### Fase 3 — UI Publik (Refactor UcapanSection)

12. Refactor form jadi shadcn Collapsible: state terbuka/tertutup, title dinamis ("Berikan Ucapan" vs "Edit Ucapan"), hapus field email.
13. Implementasi draft ke browser storage (simpan saat guest ngetik, restore setelah login, hapus setelah submit sukses).
14. Hubungkan form ke server action submit/update, tampilkan popup shadcn (sukses/edit/ditolak-karena-selesai).
15. Refactor grid card ucapan: fetch data asli dari DB, tambahkan badge skor (??/100 atau angka), hapus mock data.
16. Implementasi pagination (10/halaman) menggantikan tombol "Lihat Ucapan Lainnya".
17. Bikin komponen banner pemenang statis (div pengganti banner hadiah) — hanya tampil kalau isPemenangTampil = true.

## Fase 4 — Dashboard Panitia

18. Setup route /dashboard (atau serupa) dengan proteksi role admin via Clerk.
19. Section Ucapan: list semua ucapan (termasuk noHp), input skor per ucapan, tombol sembunyikan/tampilkan.
20. Section Top 3: preview real-time 3 skor tertinggi (sinkron dengan query top 3).
21. Section Settings: toggle tampilkan/sembunyikan banner pemenang ke publik.

## Fase 5 — Polish & Edge Cases

22. Handle edge case: user sudah dinilai coba edit → UI form disable/read-only dengan indikator "sudah dinilai".
23. Handle edge case: submission setelah banner tampil → pesan penolakan halus, baik untuk user baru maupun user lama.
24. Testing alur penuh: guest → draft → login → submit → dinilai → terkunci → tampil di top 3 → banner reveal.
25. Review styling akhir — selaraskan warna dengan design system project (#fafafa, #1a1a1a, #b8860b, #8b0000), bukan warna sementara (#E12828, #DCA723) yang ada di kode sekarang.

# installation

## prisma

pnpm install @prisma/client @prisma/adapter-neon
pnpm add -D prisma dotenv
pnpm exec prisma init --datasource-provider postgresql

pnpm dlx prisma migrate dev --name init
pnpm dlx prisma generate

DATABASE_URL=postgres://daniel:<password>@ep-mute-rain-952417-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require
DIRECT_URL="postgres://daniel:<password>@ep-mute-rain-952417.us-east-2.aws.neon.tech/neondb"
