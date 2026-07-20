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

const CHAIRMAN_NAME = "Abdul Majid";

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function EyebrowLine() {
  return (
    <span
      className="inline-block w-8 h-px bg-primary opacity-60"
      aria-hidden="true"
    />
  );
}

function OrnamentRule() {
  return (
    <div className="flex items-center gap-3 mb-6" aria-hidden="true">
      <span className="w-12 h-px bg-border" />
      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
      <span className="w-12 h-px bg-border" />
    </div>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span
        className={cn(
          "font-sans font-extrabold leading-none",
          "text-primary",
          "text-3xl md:text-4xl",
        )}
      >
        {number}
      </span>
      <span
        className={cn(
          "uppercase tracking-widest font-medium",
          "text-muted-foreground",
          "text-[10px] md:text-xs",
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
          "text-[10px] md:text-xs tracking-widest uppercase font-bold",
          "text-primary",
        )}
      >
        <EyebrowLine />
        Tabik Pun!
      </p>

      {/* Title */}
      <h2
        className={cn(
          "font-sans font-extrabold leading-tight tracking-tight",
          "text-foreground mb-6",
          "text-3xl md:text-4xl lg:text-5xl",
        )}
      >
        Ikam{" "}
        <em className="font-courgette font-normal not-italic text-primary">
          Muli Mekhanai
        </em>
      </h2>

      <OrnamentRule />

      {/* Body */}
      <p
        className={cn(
          "font-light leading-relaxed mb-6",
          "text-foreground/80",
          "text-sm md:text-base",
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
          "border-l-2 border-primary",
          "px-4 py-3 bg-primary/5",
          "text-xs md:text-sm italic leading-relaxed",
          "text-muted-foreground",
        )}
      >
        Pelajari lebih dalam tentang{" "}
        <span className="not-italic font-medium text-primary">
          sejarah berdiri, visi &amp; misi
        </span>
        , serta seluruh jajaran pengurus yang menggerakkan organisasi ini —
        semuanya ada di halaman tentang kami.
      </div>

      {/* Stats */}
      <div
        className={cn(
          "flex gap-6 md:gap-12",
          "mt-8 pt-6 border-t border-border",
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
          "aspect-3/4 max-h-130",
        )}
      >
        <Image
          src="/images/majid.webp"
          alt={`Foto ${CHAIRMAN_NAME}, Ketua Muli Mekhanai Rajabasa`}
          fill
          sizes="(max-width: 768px) 320px, 45vw"
          className="object-cover object-top"
          unoptimized
        />

        {/* Inner frame ornament */}
        <div
          className="absolute inset-2.5 border border-primary/35 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* Badge */}
      <div
        className={cn(
          "w-full bg-foreground",
          "flex items-center gap-3",
          "px-5 py-3.5",
        )}
      >
        <span
          className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
          aria-hidden="true"
        />
        <p
          className={cn(
            "font-light tracking-wide",
            "text-background",
            "text-xs md:text-sm",
          )}
        >
          Sambutan dari{" "}
          <strong className="font-medium text-primary">{CHAIRMAN_NAME}</strong>,
          Ketua Muli Mekhanai Rajabasa
        </p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function IntroSection() {
  return (
    <section className={cn("bg-background", "px-6 md:px-10 py-20 md:py-32")}>
      {/* ── Two-column grid ── */}
      <div
        className={cn(
          "grid max-w-6xl mx-auto",
          "grid-cols-1 md:grid-cols-2",
          "gap-10 md:gap-20",
          "items-start",
        )}
      >
        <LeftColumn />

        {/* Photo column — appears above text on mobile */}
        <div className="order-first md:order-last max-w-80 mx-auto md:max-w-none w-full">
          <RightColumn />
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="flex justify-center mt-10 md:mt-16">
        <Link
          href="/about"
          className={cn(
            "inline-flex items-center justify-center gap-2.5",
            "border-2 border-primary text-primary",
            "px-9 py-3.5 rounded-md",
            "text-xs font-bold tracking-widest uppercase",
            "transition-all duration-300",
            "hover:bg-primary hover:text-primary-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            "group",
          )}
        >
          Selengkapnya tentang Kami
          <span
            className="text-sm transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
