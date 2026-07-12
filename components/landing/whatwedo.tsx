import { Heart, BuildingIcon, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */

interface CardData {
  icon: LucideIcon;
  label: string;
  title: string;
  body: string;
  footer: string;
}

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */

const cards: CardData[] = [
  {
    icon: Heart,
    label: "Sosial & Kemanusiaan",
    title: "Peduli Sesama",
    body: "Kami turun langsung ke lapangan — membawa bantuan, mendengar kebutuhan, dan hadir di saat masyarakat membutuhkan. Dari bakti sosial hingga program pemberdayaan warga, kepedulian kami bukan seremonial, melainkan nyata dan berkelanjutan.",
    footer: "Aksi Sosial",
  },
  {
    icon: BuildingIcon,
    label: "Tradisi & Warisan",
    title: "Lestari Budaya",
    body: "Tradisi Lampung adalah identitas yang kami jaga dengan bangga. Melalui pertunjukan seni, edukasi adat, dan dokumentasi warisan leluhur, kami memastikan nilai-nilai budaya Rajabasa tetap hidup dan dikenal oleh generasi yang akan datang.",
    footer: "Pelestarian Adat",
  },
  {
    icon: Rocket,
    label: "Kreativitas & Inovasi",
    title: "Muda Berkarya",
    body: "Energi muda kami wujudkan lewat karya nyata — dari proyek kreatif, pelatihan keterampilan, hingga inisiatif yang mendorong pemuda Rajabasa untuk berinovasi, berkolaborasi, dan membuktikan bahwa anak muda daerah mampu bersaing di panggung yang lebih luas.",
    footer: "Pengembangan Diri",
  },
];

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

function ActivityCard({ icon: Icon, label, title, body, footer }: CardData) {
  return (
    <div
      className={cn(
        "group relative bg-card border border-border",
        "flex flex-col gap-4",
        "p-8 md:p-10",
        "transition-colors duration-300",
        "hover:border-primary",
      )}
    >
      {/* Left accent bar */}
      <span
        className={cn(
          "absolute top-0 left-0 w-1 h-full",
          "bg-primary",
          "opacity-0 transition-opacity duration-300",
          "group-hover:opacity-100",
        )}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className={cn(
          "w-12 h-12 border border-border",
          "flex items-center justify-center shrink-0",
          "text-primary",
        )}
        aria-hidden="true"
      >
        <Icon size={22} strokeWidth={1.5} />
      </div>

      {/* Label */}
      <p
        className={cn(
          "text-secondary font-bold uppercase tracking-widest",
          "text-[10px] md:text-xs",
        )}
      >
        {label}
      </p>

      {/* Title */}
      <h3
        className={cn(
          "font-sans font-extrabold leading-tight",
          "text-foreground",
          "text-xl md:text-2xl",
        )}
      >
        {title}
      </h3>

      {/* Body */}
      <p
        className={cn(
          "font-light leading-relaxed flex-1",
          "text-muted-foreground",
          "text-sm md:text-base",
        )}
      >
        {body}
      </p>

      {/* Footer tag */}
      <span
        className={cn(
          "flex items-center gap-2 mt-2",
          "text-primary font-bold uppercase tracking-widest",
          "text-[10px] md:text-xs",
        )}
      >
        <span className="inline-block w-5 h-px bg-primary" aria-hidden="true" />
        {footer}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function WhatWeDoSection() {
  return (
    <section className={cn("bg-muted", "px-6 md:px-10 py-20 md:py-32")}>
      {/* ── Header ── */}
      <div className="text-center mb-12 md:mb-16">
        <p
          className={cn(
            "inline-flex items-center gap-3",
            "mb-5",
            "text-[10px] md:text-xs tracking-widest uppercase font-bold",
            "text-primary",
          )}
        >
          <EyebrowLine />
          Gerak &amp; Aksi
          <EyebrowLine />
        </p>

        <h2
          className={cn(
            "font-sans font-extrabold leading-tight",
            "text-foreground",
            "text-3xl md:text-4xl lg:text-5xl",
          )}
        >
          Apa yang Kami{" "}
          <em className="font-courgette font-normal not-italic text-primary">
            Lakukan
          </em>
        </h2>
      </div>

      {/* ── Card Grid ── */}
      <div
        className={cn(
          "grid gap-6 mx-auto max-w-6xl",
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {cards.map((card) => (
          <ActivityCard key={card.title} {...card} />
        ))}
      </div>
    </section>
  );
}
