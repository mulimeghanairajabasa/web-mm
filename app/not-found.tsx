import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center overflow-hidden">
      {/* ── Elemen Latar Belakang (Angka 404 Besar) ── */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center pointer-events-none select-none",
        )}
        aria-hidden="true"
      >
        <span
          className={cn(
            "font-sans font-extrabold leading-none tracking-tighter",
            "text-primary/10", // Warna emas dengan transparansi tinggi
            "text-[12rem] sm:text-[18rem] md:text-[24rem]",
          )}
        >
          404
        </span>
      </div>

      {/* ── Konten Utama ── */}
      <div className="relative z-10 flex flex-col items-center max-w-lg mx-auto">
        {/* Garis Aksen Kecil */}
        <span className="w-10 h-px bg-primary mb-6" aria-hidden="true" />

        {/* Headline */}
        <h1
          className={cn(
            "font-courgette text-3xl md:text-5xl text-foreground mb-4",
            "leading-tight",
          )}
        >
          Halaman Tidak Ditemukan
        </h1>

        {/* Deskripsi */}
        <p
          className={cn(
            "font-light leading-relaxed mb-10",
            "text-muted-foreground",
            "text-sm md:text-base",
          )}
        >
          Maaf, jalur yang Anda tuju mungkin telah dipindahkan, diubah namanya,
          atau memang tidak pernah ada. Mari kembali ke titik awal.
        </p>

        {/* Tombol Kembali ke Beranda */}
        <Link
          href="/"
          className={cn(
            "inline-flex items-center justify-center gap-2",
            "px-8 py-3.5 rounded-md",
            "bg-primary text-primary-foreground",
            "text-xs font-bold tracking-widest uppercase text-white",
            "transition-all duration-300",
            "hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          )}
        >
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
