import Link from "next/link";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function EyebrowLine() {
  return (
    <span
      className="inline-block w-8 h-px bg-black opacity-60"
      aria-hidden="true"
    />
  );
}

function OrnamentDivider() {
  return (
    <div
      className="flex items-center justify-center gap-3 my-8"
      aria-hidden="true"
    >
      <span className="w-[48px] h-px bg-[#e5e5e5]" />
      <span className="w-[5px] h-[5px] bg-[#b8860b] rotate-45 shrink-0" />
      <span className="w-[48px] h-px bg-[#e5e5e5]" />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function SponsorSection() {
  return (
    <section className={cn("bg-muted", "px-[5%] py-[10vh]")}>
      <div
        className={cn(
          "flex flex-col items-center text-center",
          "max-w-[640px] mx-auto",
        )}
      >
        {/* Eyebrow */}
        <p
          className={cn(
            "inline-flex items-center gap-3 mb-5",
            "text-[clamp(10px,1.1vw,12px)] tracking-[0.28em] uppercase font-medium",
            "text-black",
          )}
        >
          <EyebrowLine />
          Sponsor &amp; Mitra
          <EyebrowLine />
        </p>

        {/* Title */}
        <h2
          className={cn(
            "font-serif font-bold leading-[1.15] tracking-[-0.01em]",
            "text-foreground",
            "text-[clamp(26px,4vw,44px)]",
          )}
        >
          Dukung <em className="italic text-[#b8860b]">Gerakan Kami</em>
        </h2>

        <OrnamentDivider />

        {/* Empty state text */}
        <p
          className={cn(
            "font-light leading-[1.85]",
            "text-[#737373]",
            "text-[clamp(13px,1.4vw,16px)]",
            "mb-8",
          )}
        >
          Kami masih membuka peluang kemitraan. Jadilah yang pertama mendukung
          gerakan budaya dan sosial pemuda Rajabasa — nama Anda akan hadir di
          setiap langkah kami.
        </p>

        {/* CTA */}
        <Link
          href="/kontak"
          className={cn(
            "inline-flex items-center gap-[10px]",
            "border-[1.5px] border-[#b8860b] text-[#b8860b]",
            "px-[clamp(28px,4vw,44px)] py-[clamp(13px,1.8vh,16px)]",
            "text-[12px] font-medium tracking-[0.15em] uppercase",
            "transition-colors duration-250",
            "hover:bg-[#b8860b] hover:text-[#1a1a1a]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8860b]",
          )}
        >
          Jadi Sponsor Pertama
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
