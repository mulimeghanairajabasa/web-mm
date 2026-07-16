import Link from "next/link";
import { cn } from "@/lib/utils";
import LogoMuliMekhnai from "@/components/icons/logoMuliMekhnai";
import TapisPattern from "@/components/icons/tapisPattern";

export default function NotFound() {
  return (
    // Menggunakan h-[100dvh] agar pas dengan tinggi layar termasuk di mobile browser
    <main className="h-dvh w-full bg-white flex flex-col justify-between overflow-hidden">
      {/* Ornamen Tapis Atas */}
      <TapisPattern />

      {/* Konten Utama di Tengah */}
      <div className="relative z-10 flex  flex-col items-center justify-center flex-1 px-6 py-2 text-center max-w-2xl mx-auto overflow-y-auto overflow-x-hidden">
        {/* Ikon Muli Mekhanai */}
        <div className=" ">
          <LogoMuliMekhnai className="w-30 h-30 text-foreground mx-auto" />
        </div>

        {/* Garis Aksen */}
        <span
          className="w-10 h-1 md:w-12 md:h-1.5 bg-[#c69009] mb-6 md:mb-8 shrink-0"
          aria-hidden="true"
        />

        {/* Headline dengan ukuran teks yang diturunkan 1 tingkat */}
        <h1
          className={cn(
            "font-serif font-extrabold text-[#1a1a1a] mb-4 md:mb-6",
            "text-3xl md:text-4xl lg:text-5xl",
            "leading-tight tracking-tight",
          )}
        >
          Tabik Pun!
          <span className="text-[#c69009] block mt-2">
            Gegehno Sekam Kejajau
          </span>
        </h1>

        {/* Deskripsi dengan ukuran teks yang diturunkan 1 tingkat */}
        <p
          className={cn(
            "font-light leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto",
            "text-[#1a1a1a]/70",
            "text-sm md:text-base",
          )}
        >
          Jejak yang Anda cari tidak dapat ditemukan di tanah ini. Mungkin
          halamannya sudah dipindahkan, diubah namanya, atau memang belum
          dituliskan ceritanya.
        </p>

        {/* Tombol Merah dengan sedikit rounded (rounded-md) */}
        <Link
          href="/"
          className={cn(
            "inline-flex items-center justify-center gap-2",
            "px-6 py-3 md:px-8 md:py-4 rounded-md",
            "bg-[#8b0000] text-white",
            "text-xs md:text-sm font-bold tracking-[0.15em] uppercase",
            "transition-all duration-300",
            "hover:bg-[#6b0000] hover:shadow-lg hover:-translate-y-1",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b0000] focus-visible:ring-offset-2",
          )}
        >
          Kembali ke Beranda
        </Link>
      </div>

      {/* Ornamen Tapis Bawah dengan rotasi agar simetris */}
      <div className="rotate-180 shrink-0">
        <TapisPattern />
      </div>
    </main>
  );
}
