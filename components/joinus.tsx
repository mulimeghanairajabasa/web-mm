import Link from "next/link";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function EyebrowLine() {
  return (
    <span
      className="inline-block w-8 h-px bg-[#b8860b] opacity-60"
      aria-hidden="true"
    />
  );
}

function OrnamentDiamond() {
  return (
    <div
      className="flex items-center justify-center gap-3 my-8"
      aria-hidden="true"
    >
      <span className="w-[60px] h-px bg-[#b8860b]/30" />
      <span className="w-[6px] h-[6px] bg-[#b8860b] rotate-45 shrink-0" />
      <span className="w-[4px] h-[4px] bg-[#8b0000] rotate-45 shrink-0" />
      <span className="w-[6px] h-[6px] bg-[#b8860b] rotate-45 shrink-0" />
      <span className="w-[60px] h-px bg-[#b8860b]/30" />
    </div>
  );
}

function TopOrnamentLine() {
  return (
    <div
      className="w-full h-[3px] mb-0"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, #8b0000 30%, #b8860b 70%, transparent 100%)",
      }}
      aria-hidden="true"
    />
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function JoinUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#1a1a1a]">
      <TopOrnamentLine />

      {/* Background subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #b8860b 0, #b8860b 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className={cn(
          "relative z-10",
          "flex flex-col items-center text-center",
          "px-[5%] py-[12vh]",
          "max-w-[760px] mx-auto",
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
          Hubungi Kami
          <EyebrowLine />
        </p>

        {/* Headline */}
        <h2
          className={cn(
            "font-serif font-bold leading-[1.15] tracking-[-0.01em]",
            "text-[#fafafa]",
            "text-[clamp(28px,4.5vw,54px)]",
          )}
        >
          Besar Bersama,{" "}
          <em className="italic text-[#d4a017]">Bergerak Bersama</em>
        </h2>

        <OrnamentDiamond />

        {/* Body */}
        <p
          className={cn(
            "font-light leading-[1.9]",
            "text-white/70",
            "text-[clamp(14px,1.5vw,17px)]",
            "mb-4",
          )}
        >
          Kami percaya bahwa perubahan nyata lahir dari kebersamaan. Muli
          Mekhanai Rajabasa bukan sekadar organisasi — ini adalah rumah bagi
          pemuda-pemudi Lampung yang ingin tumbuh, berkarya, dan memberi dampak
          nyata bagi masyarakat dan budaya.
        </p>

        <p
          className={cn(
            "font-light leading-[1.9]",
            "text-white/50",
            "text-[clamp(13px,1.3vw,15px)]",
            "mb-10",
          )}
        >
          Jika kamu aktif, peduli, dan bangga menjadi bagian dari warisan
          Lampung — tempatmu ada di sini.
        </p>

        {/* CTA Buttons */}
        <div
          className={cn("flex flex-wrap items-center justify-center", "gap-4")}
        >
          <Link
            href="/daftar"
            className={cn(
              "inline-flex items-center gap-[10px]",
              "bg-[#b8860b] text-[#1a1a1a]",
              "px-[clamp(28px,4vw,44px)] py-[clamp(13px,1.8vh,16px)]",
              "text-[12px] font-medium tracking-[0.15em] uppercase",
              "transition-colors duration-250",
              "hover:bg-[#d4a017]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8860b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]",
            )}
          >
            Gabung Sekarang
            <span aria-hidden="true">→</span>
          </Link>

          <Link
            href="/kontak"
            className={cn(
              "inline-flex items-center gap-[10px]",
              "border border-white/30 text-white/70",
              "px-[clamp(28px,4vw,44px)] py-[clamp(13px,1.8vh,16px)]",
              "text-[12px] font-medium tracking-[0.15em] uppercase",
              "transition-colors duration-250",
              "hover:border-white/60 hover:text-white",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]",
            )}
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
