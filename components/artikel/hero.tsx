import Image from "next/image";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section
      className={cn(
        "relative w-full h-[70vh] min-h-[420px] max-h-[700px]",
        "bg-white",
      )}
    >
      {/* Gambar — absolute mengisi section yang sudah relative */}
      <div className="absolute inset-0">
        <Image
          src="/images/artikel-hero.png"
          alt=""
          fill
          sizes="(max-width: 768px) 55vw, 50vw"
          className={cn("object-contain object-right")}
          priority
        />
      </div>

      {/* Content — relative + z-index sekarang bekerja */}
      <div
        className={cn(
          "relative z-10 h-full",
          "flex flex-col justify-center items-center",
          "px-[5%] max-w-[1100px] mx-auto",
        )}
      >
        {/* Eyebrow */}
        <p
          className={cn(
            "inline-flex items-center gap-3 mb-5",
            "text-[clamp(10px,1.1vw,12px)] tracking-[0.28em] uppercase font-medium",
            "text-[#b8860b]",
          )}
        >
          <EyebrowLine />
          Berita &amp; Cerita
        </p>

        {/* Title */}
        <h1
          className={cn(
            "font-serif font-bold leading-[1.15] tracking-[-0.01em]",
            "text-foreground text-center",
            "text-[clamp(32px,5vw,60px)]",
            "max-w-[540px]",
          )}
        >
          Semua <em className="italic text-[#b8860b]">Cerita</em> Kami
        </h1>

        {/* Search */}
        <SearchBar />
      </div>
    </section>
  );
}

function EyebrowLine() {
  return (
    <span
      className="inline-block w-8 h-px bg-[#b8860b] opacity-60"
      aria-hidden="true"
    />
  );
}

function SearchBar() {
  return (
    <div
      className={cn(
        "relative w-full max-w-[520px]",
        "mt-8",
        "border-2 rounded-3xl",
        "overflow-clip",
        "border-[#b8860b]",
      )}
    >
      <input
        type="search"
        placeholder="Cari artikel..."
        className={cn(
          "w-full border border-border bg-white overflow-clip",
          "pl-5 pr-14 py-[14px]",
          "text-[clamp(13px,1.3vw,15px)] font-light text-foreground",
          "placeholder:text-[#737373]",
          "",
          "",
          "transition-colors duration-200",
        )}
      />
      <button
        type="submit"
        aria-label="Cari"
        className={cn(
          "absolute right-0 top-0 bottom-0",
          "w-12 flex items-center justify-center shrink-0",
          "bg-slate-600 text-white",
          "transition-colors duration-200",
          "hover:bg-[#d4a017]",
        )}
      >
        <Search size={16} strokeWidth={1.5} />
      </button>
    </div>
  );
}
