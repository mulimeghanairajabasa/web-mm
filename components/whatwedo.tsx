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
      className="inline-block w-8 h-px bg-[#b8860b] opacity-60"
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
        "transition-colors duration-250",
        "hover:border-[#b8860b]",
      )}
    >
      {/* Left accent bar */}
      <span
        className={cn(
          "absolute top-0 left-0 w-[3px] h-full",
          "bg-[#b8860b]",
          "opacity-0 transition-opacity duration-250",
          "group-hover:opacity-100",
        )}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className={cn(
          "w-12 h-12 border border-border",
          "flex items-center justify-center shrink-0",
          "text-[#b8860b]",
        )}
        aria-hidden="true"
      >
        <Icon size={22} strokeWidth={1.5} />
      </div>

      {/* Label */}
      <p
        className={cn(
          "text-[#8b0000] font-medium uppercase tracking-[0.2em]",
          "text-[clamp(10px,1vw,11px)]",
        )}
      >
        {label}
      </p>

      {/* Title */}
      <h3
        className={cn(
          "font-serif font-bold leading-[1.25]",
          "text-foreground",
          "text-[clamp(20px,2.2vw,26px)]",
        )}
      >
        {title}
      </h3>

      {/* Body */}
      <p
        className={cn(
          "font-light leading-[1.85] flex-1",
          "text-[#525252]",
          "text-[clamp(13px,1.3vw,15px)]",
        )}
      >
        {body}
      </p>

      {/* Footer tag */}
      <span
        className={cn(
          "flex items-center gap-2 mt-2",
          "text-[#b8860b] font-medium uppercase tracking-[0.12em]",
          "text-[12px]",
        )}
      >
        <span
          className="inline-block w-5 h-px bg-[#b8860b]"
          aria-hidden="true"
        />
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
    <section className={cn("bg-muted", "px-[5%] py-[10vh]")}>
      {/* ── Header ── */}
      <div className="text-center mb-[6vh]">
        <p
          className={cn(
            "inline-flex items-center gap-3",
            "mb-5",
            "text-[clamp(10px,1.1vw,12px)] tracking-[0.28em] uppercase font-medium",
            "text-[#b8860b]",
          )}
        >
          <EyebrowLine />
          Gerak &amp; Aksi
          <EyebrowLine />
        </p>

        <h2
          className={cn(
            "font-serif font-bold leading-[1.2]",
            "text-foreground",
            "text-[clamp(28px,4vw,48px)]",
          )}
        >
          Apa yang Kami <em className="italic text-[#b8860b]">Lakukan</em>
        </h2>
      </div>

      {/* ── Card Grid ── */}
      <div
        className={cn(
          "grid gap-6 mx-auto max-w-[1100px]",
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
