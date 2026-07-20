import Image from "next/image";
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

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function StrukturSection() {
  return (
    <section className={cn("bg-background", "px-[5%] py-[10vh]")}>
      <div className="max-w-275 mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-[6vh]">
          <p
            className={cn(
              "inline-flex items-center gap-3 mb-5",
              "text-[clamp(10px,1.1vw,12px)] tracking-[0.28em] uppercase font-medium",
              "text-[#b8860b]",
            )}
          >
            <EyebrowLine />
            Kepengurusan
            <EyebrowLine />
          </p>

          <h2
            className={cn(
              "font-serif font-bold leading-[1.15] tracking-[-0.01em]",
              "text-foreground",
              "text-[clamp(28px,4vw,48px)]",
            )}
          >
            Struktur <em className="italic text-[#b8860b]">Organisasi</em>
          </h2>
        </div>

        {/* ── Image ── */}
        <div className={cn("relative w-full", "border border-border")}>
          <Image
            src="/images/struktur.webp"
            alt="Struktur Organisasi Muli Mekhanai Rajabasa"
            width={0}
            height={0}
            sizes="(max-width: 768px) 90vw, (max-width: 1100px) 85vw, 1100px"
            className="w-full h-auto"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
