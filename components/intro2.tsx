import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */

const stats = [
  { number: "2017", label: "Berdiri Sejak" },
  { number: "7+", label: "Tahun Berkarya" },
  { number: "100%", label: "Berbasis Budaya" },
];

const CHAIRMAN_NAME = "Ahmad Rifaldi";

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

function OrnamentRule() {
  return (
    <div className="flex items-center gap-3 mb-6" aria-hidden="true">
      <span className="w-12 h-px bg-[#e5e5e5]" />
      <span className="w-[5px] h-[5px] rounded-full bg-[#8b0000]" />
      <span className="w-12 h-px bg-[#e5e5e5]" />
    </div>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span
        className={cn(
          "font-serif font-bold leading-none",
          "text-[#b8860b]",
          "text-[clamp(24px,3vw,36px)]",
        )}
      >
        {number}
      </span>
      <span
        className={cn(
          "uppercase tracking-[0.15em] font-medium",
          "text-[#737373]",
          "text-[clamp(9px,0.9vw,11px)]",
        )}
      >
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Left Column
───────────────────────────────────────────── */

function LeftColumn() {
  return (
    <div>
      {/* Eyebrow */}
      <p
        className={cn(
          "inline-flex items-center gap-3 mb-5",
          "text-[clamp(10px,1.1vw,12px)] tracking-[0.28em] uppercase font-medium",
          "text-[#b8860b]",
        )}
      >
        <EyebrowLine />
        Tabik Pun!
      </p>

      {/* Title */}
      <h2
        className={cn(
          "font-serif font-bold leading-[1.15] tracking-[-0.01em]",
          "text-foreground mb-6",
          "text-[clamp(28px,3.5vw,48px)]",
        )}
      >
        Ikam Muli <em className="italic text-[#b8860b]">Mekhanai</em>
      </h2>

      <OrnamentRule />

      {/* Body */}
      <p
        className={cn(
          "font-light leading-[1.9] mb-6",
          "text-[#404040]",
          "text-[clamp(13px,1.3vw,15px)]",
        )}
      >
        Sejak <strong className="font-medium text-foreground">2017</strong>,
        kami hadir sebagai organisasi pemuda yang aktif dan kreatif di tengah
        masyarakat Rajabasa — bukan sekadar berkumpul, melainkan bergerak. Kami
        tumbuh dari akar{" "}
        <strong className="font-medium text-foreground">budaya Lampung</strong>{" "}
        yang kuat; tradisi, seni, dan kearifan lokal menjadi fondasi setiap
        langkah yang kami ambil. Dari kegiatan sosial di lapangan hingga
        pelestarian warisan leluhur, kami ada di garis depan — bersama warga,
        untuk warga.
      </p>

      {/* Spoiler teaser */}
      <div
        className={cn(
          "border-l-2 border-[#b8860b]",
          "px-4 py-3 bg-[#fdf8ee]",
          "text-[clamp(12px,1.2vw,13px)] italic leading-[1.7]",
          "text-[#737373]",
        )}
      >
        Pelajari lebih dalam tentang{" "}
        <span className="not-italic font-medium text-[#b8860b]">
          sejarah berdiri, visi &amp; misi
        </span>
        , serta seluruh jajaran pengurus yang menggerakkan organisasi ini —
        semuanya ada di halaman tentang kami.
      </div>

      {/* Stats */}
      <div
        className={cn(
          "flex gap-[clamp(20px,3vw,48px)]",
          "mt-8 pt-6 border-t border-[#e5e5e5]",
        )}
      >
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Right Column
───────────────────────────────────────────── */

function RightColumn() {
  return (
    <div className="flex flex-col items-center">
      {/* Photo */}
      <div
        className={cn(
          "relative w-full overflow-hidden",
          "aspect-[3/4] max-h-[520px]",
        )}
      >
        <Image
          src="/images/hero.png"
          alt={`Foto ${CHAIRMAN_NAME}, Ketua Muli Mekhanai Rajabasa`}
          fill
          sizes="(max-width: 768px) 320px, 45vw"
          className="object-cover object-top"
          priority
        />

        {/* Inner frame ornament */}
        <div
          className="absolute inset-[10px] border border-[#b8860b]/35 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Badge */}
      <div
        className={cn(
          "w-full bg-[#1a1a1a]",
          "flex items-center gap-3",
          "px-5 py-[14px]",
        )}
      >
        <span
          className="w-[6px] h-[6px] rounded-full bg-[#b8860b] shrink-0"
          aria-hidden="true"
        />
        <p
          className={cn(
            "font-light tracking-[0.05em]",
            "text-[#fafafa]",
            "text-[clamp(11px,1vw,13px)]",
          )}
        >
          Sambutan dari{" "}
          <strong className="font-medium text-[#d4a017]">
            {CHAIRMAN_NAME}
          </strong>
          , Ketua Muli Mekhanai Rajabasa
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function IntroSection2() {
  return (
    <section className={cn("bg-background", "px-[5%] py-[10vh]")}>
      {/* ── Two-column grid ── */}
      <div
        className={cn(
          "grid max-w-[1100px] mx-auto",
          "grid-cols-1 md:grid-cols-2",
          "gap-[clamp(32px,5vw,80px)]",
          "items-start",
        )}
      >
        <LeftColumn />

        {/* Photo column — appears above text on mobile */}
        <div className="order-first md:order-last max-w-[320px] mx-auto md:max-w-none w-full">
          <RightColumn />
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="flex justify-center mt-[4vh]">
        <Link
          href="/about"
          className={cn(
            "inline-flex items-center gap-[10px]",
            "border-[1.5px] border-[#b8860b] text-[#b8860b]",
            "px-9 py-[13px]",
            "text-[12px] font-medium tracking-[0.15em] uppercase",
            "transition-colors duration-250",
            "hover:bg-[#b8860b] hover:text-[#1a1a1a]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8860b]",
          )}
        >
          Selengkapnya tentang Kami
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
