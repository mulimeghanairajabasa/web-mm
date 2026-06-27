import Link from "next/link";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function TopOrnamentLine() {
  return (
    <div
      className="w-full h-[3px]"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, #8b0000 30%, #b8860b 70%, transparent 100%)",
      }}
      aria-hidden="true"
    />
  );
}

function DividerLine() {
  return (
    <div
      className={cn("hidden md:block", "w-px self-stretch", "bg-white/10")}
      aria-hidden="true"
    />
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function JoinUsSection2() {
  return (
    <section className="relative bg-[#1a1a1a] overflow-hidden">
      <TopOrnamentLine />

      <div
        className={cn(
          "relative z-10",
          "flex flex-col md:flex-row items-center justify-center",
          "gap-8 md:gap-[clamp(40px,6vw,80px)]",
          "px-[5%] py-[10vh]",
          "max-w-[1100px] mx-auto",
        )}
      >
        {/* Headline */}
        <h2
          className={cn(
            "font-serif font-bold leading-[1.15] tracking-[-0.01em]",
            "text-[#fafafa]",
            "text-[clamp(26px,4vw,50px)]",
            "text-center md:text-left",
            "shrink-0",
          )}
        >
          Siap Bergerak <em className="italic text-[#d4a017]">Bersama Kami?</em>
        </h2>

        <DividerLine />

        {/* CTA */}
        <Link
          href="/daftar"
          className={cn(
            "inline-flex items-center gap-[10px] shrink-0",
            "bg-[#b8860b] text-[#1a1a1a]",
            "px-[clamp(28px,3.5vw,44px)] py-[clamp(13px,1.8vh,17px)]",
            "text-[12px] font-medium tracking-[0.15em] uppercase",
            "transition-colors duration-250",
            "hover:bg-[#d4a017]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8860b] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a]",
          )}
        >
          Gabung Muli Mekhanai
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
