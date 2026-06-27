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
        "w-[24px] sm:w-[32px] md:w-[40px]",
        "bg-[#b8860b]",
      )}
      aria-hidden="true"
    />
  );
}

function OrnamentDivider() {
  return (
    <div
      className="flex items-center justify-center gap-3 w-fit mx-auto mb-[2.5vh]"
      aria-hidden="true"
    >
      <span className="w-[32px] sm:w-[48px] md:w-[60px] h-px bg-[#b8860b]/50" />
      <span className="w-[6px] h-[6px] bg-[#b8860b] rotate-45 shrink-0" />
      <span className="w-[32px] sm:w-[48px] md:w-[60px] h-px bg-[#b8860b]/50" />
    </div>
  );
}

function ScrollIndicator() {
  return (
    <div
      className="absolute bottom-[4vh] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 sm:hidden md:flex"
      aria-hidden="true"
    >
      <span
        className={cn(
          "text-[10px] tracking-[0.2em] uppercase",
          "text-white/40",
        )}
      >
        Scroll
      </span>
      <span
        className={cn(
          "w-px h-10",
          "bg-gradient-to-b from-[#b8860b]/70 to-transparent",
          "animate-[scrollPulse_2s_ease-in-out_infinite]",
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
      {/* Keyframe animation injected once */}
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50%       { opacity: 1;   transform: scaleY(1.1); }
        }
      `}</style>

      <section
        className={cn(
          "relative w-full overflow-hidden",
          "flex items-center justify-center",
          "h-svh min-h-[560px] max-h-[900px]",
          "xl:max-h-[1000px]",
        )}
        role="banner"
      >
        {/* ── Background Image ── */}
        <div className="absolute inset-0 w-full h-full" aria-hidden="true">
          <Image
            src="/images/hero.png"
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-[center_30%]"
          />
        </div>

        {/* ── Dark Overlay ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,8,4,0.55) 0%, rgba(10,8,4,0.70) 50%, rgba(10,8,4,0.82) 100%)",
          }}
          aria-hidden="true"
        />

        {/* ── Top Ornament Line ── */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #b8860b 30%, #8b0000 70%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* ── Bottom Ornament Line ── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #8b0000 30%, #b8860b 70%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        {/* ── Hero Content ── */}
        <div
          className={cn(
            "relative z-10 text-center",
            "px-[5%] w-full max-w-[860px]",
          )}
        >
          {/* Eyebrow */}
          <p
            className={cn(
              "inline-flex items-center gap-[10px]",
              "mb-[2vh]",
              "text-[10px] sm:text-[11px] md:text-[13px]",
              "tracking-[0.25em] uppercase font-medium",
              "text-[#b8860b]",
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
              "font-serif font-bold leading-[1.18] tracking-[-0.01em]",
              "text-[#fafafa]",
              "text-[clamp(28px,6.5vw,54px)]",
              "mb-[2.5vh]",
            )}
          >
            Menjaga <em className="italic text-[#d4a017]">Akar Budaya</em>,
            <br />
            Bergerak untuk Masyarakat.
          </h1>

          {/* Diamond Divider */}
          <OrnamentDivider />

          {/* Sub-headline */}
          <p
            className={cn(
              "font-light leading-[1.75] tracking-[0.01em]",
              "text-white/[0.82]",
              "text-[clamp(12px,1.6vw,17px)]",
              "max-w-[680px] mx-auto",
              "mb-[4vh]",
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
              "inline-flex items-center gap-[10px]",
              "border border-[#b8860b] text-[#b8860b]",
              "px-[clamp(28px,4vw,44px)] py-[clamp(12px,1.8vh,16px)]",
              "text-[clamp(12px,1.3vw,14px)] font-medium tracking-[0.15em] uppercase",
              "transition-colors duration-300",
              "hover:bg-[#b8860b] hover:text-[#1a1a1a]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8860b] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
            )}
          >
            Mari Berkolaborasi
            <span
              className="text-[14px] transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>
        </div>

        {/* ── Scroll Indicator ── */}
        <ScrollIndicator />
      </section>
    </>
  );
}
