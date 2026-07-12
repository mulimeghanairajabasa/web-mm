// components/landing/hero.tsx
import { cn } from "@/lib/utils";
import Image from "next/image";

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function EyebrowLine() {
  return (
    <span
      className={cn(
        "inline-block h-px",
        "w-6 sm:w-8 md:w-10", // 24px, 32px, 40px
        "bg-primary",
      )}
      aria-hidden="true"
    />
  );
}

function OrnamentDivider() {
  return (
    <div
      className="flex items-center justify-center gap-3 w-fit mx-auto mb-6" // gap-[10px] -> gap-3 (12px) atau gap-2.5 (10px)
      aria-hidden="true"
    >
      <span className="w-8 sm:w-12 md:w-15 h-px bg-primary/50" />{" "}
      {/* 32px, 48px, 60px */}
      <span className="w-1.5 h-1.5 bg-primary rotate-45 shrink-0" /> {/* 6px */}
      <span className="w-8 sm:w-12 md:w-15 h-px bg-primary/50" />
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 sm:hidden md:flex"
      aria-hidden="true"
    >
      <span
        className={cn(
          "text-xs tracking-widest uppercase", // 10px
          "text-background/40",
        )}
      >
        Scroll
      </span>
      <span
        className={cn(
          "w-px h-10",
          "bg-linear-to-b from-primary/70 to-transparent",
          "animate-[scrollPulse_2s_ease-in-out_infinite]", // Keyframe kustom tetap harus dalam bracket
        )}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function HeroSection() {
  return (
    <>
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50%      { opacity: 1;   transform: scaleY(1.1); }
        }
      `}</style>

      <section
        className={cn(
          "relative w-full overflow-hidden",
          "flex items-center justify-center",
          "h-svh min-h-140 max-h-225", // 560px -> 140, 900px -> 225
          "xl:max-h-250", // 1000px -> 250
        )}
        role="banner"
      >
        {/* ── Background Image ── */}
        <div className="absolute inset-0 w-full h-full" aria-hidden="true">
          <Image
            src="/images/hero.png"
            alt="Muli Mekhanai Hero Background"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-[center_30%]"
          />
        </div>

        {/* ── Dark Overlay (Sengaja dibuat foggy/gelap untuk keterbacaan teks) ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(26, 26, 26, 0.55) 0%, rgba(26, 26, 26, 0.70) 50%, rgba(26, 26, 26, 0.85) 100%)",
          }}
          aria-hidden="true"
        />

        {/* ── Top Ornament Line ── */}
        <div
          className="absolute top-0 left-0 right-0 h-0.75 opacity-90" // 3px -> 0.75
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--primary) 30%, var(--secondary) 70%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* ── Bottom Ornament Line ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.75 opacity-90"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--secondary) 30%, var(--primary) 70%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* ── Hero Content ── */}
        <div
          className={cn(
            "relative z-10 text-center",
            "px-6 md:px-10 w-full max-w-215", // px-[5%] menjadi px-6/10, max-w-[860px] -> max-w-215
          )}
        >
          {/* Eyebrow */}
          <p
            className={cn(
              "inline-flex items-center gap-2.5", // 10px -> 2.5
              "mb-5",
              "text-xs md:text-sm",
              "tracking-widest uppercase font-bold",
              "text-primary",
            )}
            aria-label="Muli Mekhanai Rajabasa"
          >
            <EyebrowLine />
            Muli Mekhanai Rajabasa
            <EyebrowLine />
          </p>

          {/* Headline */}
          <h1
            className={cn(
              "font-sans font-extrabold leading-tight tracking-tight",
              "text-background",
              "text-4xl md:text-5xl lg:text-6xl", // Menggantikan clamp
              "mb-6",
            )}
          >
            Menjaga{" "}
            <em className="font-courgette font-normal not-italic text-primary">
              Akar Budaya
            </em>
            ,<br />
            Bergerak untuk Masyarakat.
          </h1>

          <OrnamentDivider />

          {/* Sub-headline */}
          <p
            className={cn(
              "font-light leading-relaxed",
              "text-background/80",
              "text-sm md:text-base", // Menggantikan clamp
              "max-w-170 mx-auto", // 680px -> 170
              "mb-10",
            )}
          >
            Kami adalah pemuda-pemudi Rajabasa yang berdiri di atas fondasi
            tradisi Lampung, siap melangkah ke garis depan masyarakat untuk
            membawa perubahan nyata, aksi sosial, dan melestarikan warisan
            leluhur demi masa depan yang lebih gemilang.
          </p>

          {/* CTA Button */}
          <a
            href="#"
            className={cn(
              "inline-flex items-center justify-center gap-2.5",
              "border-2 border-primary text-primary",
              "px-7 py-3 md:px-11 md:py-4 rounded-md", // Menggantikan clamp px/py
              "text-xs md:text-sm font-bold tracking-widest uppercase",
              "transition-all duration-300",
              "hover:bg-primary hover:text-primary-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
              "group",
            )}
          >
            Mari Berkolaborasi
            <span
              className="text-sm transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>

        <ScrollIndicator />
      </section>
    </>
  );
}
