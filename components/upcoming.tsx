"use client";

import Image from "next/image";
import { useState, useCallback } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Ticket,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Types & Data
───────────────────────────────────────────── */

interface EventData {
  badge: string;
  name: string;
  date: string;
  time: string;
  location: string;
  price: string;
  image: string;
}

const events: EventData[] = [
  {
    badge: "Festival",
    name: "Festival Tari Tradisional Lampung",
    date: "12 Juli 2025",
    time: "08.00 – 17.00 WIB",
    location: "Lapangan Rajabasa, Bandar Lampung",
    price: "Gratis",
    image: "/images/hero.png",
  },
  {
    badge: "Bakti Sosial",
    name: "Gerak Bersih & Bakti Sosial Rajabasa",
    date: "26 Juli 2025",
    time: "07.00 – 12.00 WIB",
    location: "Kelurahan Rajabasa Jaya",
    price: "Gratis",
    image: "/images/hero.png",
  },
  {
    badge: "Workshop",
    name: "Workshop Kerajinan Tapis Lampung",
    date: "9 Agustus 2025",
    time: "09.00 – 15.00 WIB",
    location: "Balai Adat Rajabasa",
    price: "Rp 50.000",
    image: "/images/hero.png",
  },
];

/* ─────────────────────────────────────────────
   Animation state type
───────────────────────────────────────────── */

type CardState =
  | "enter-right"
  | "active"
  | "exit-left"
  | "enter-left"
  | "exit-right";

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

interface MetaRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

function MetaRow({ icon, label, value }: MetaRowProps) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={cn(
          "w-9 h-9 border border-border shrink-0",
          "flex items-center justify-center",
          "text-[#b8860b]",
        )}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <span
          className={cn(
            "block text-[10px] uppercase tracking-[0.15em] font-medium",
            "text-[#737373] leading-none mb-[3px]",
          )}
        >
          {label}
        </span>
        <span className="text-[clamp(13px,1.3vw,15px)] text-foreground leading-none">
          {value}
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Card state → Tailwind classes
───────────────────────────────────────────── */

function cardStateClasses(state: CardState): string {
  switch (state) {
    case "enter-right":
      return "translate-x-full opacity-0";
    case "active":
      return "translate-x-0 opacity-100";
    case "exit-left":
      return "-translate-x-full opacity-0";
    case "enter-left":
      return "-translate-x-full opacity-0";
    case "exit-right":
      return "translate-x-full opacity-0";
  }
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function UpcomingEventsSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [cardState, setCardState] = useState<CardState>("active");
  const [infoVisible, setInfoVisible] = useState(true);

  const goTo = useCallback(
    (next: number) => {
      if (animating || next === current) return;
      setAnimating(true);

      const dir = next > current ? 1 : -1;

      /* 1. Slide card out + fade info */
      setCardState(dir > 0 ? "exit-left" : "exit-right");
      setInfoVisible(false);

      setTimeout(() => {
        /* 2. Snap new card in from opposite side */
        setCurrent(next);
        setCardState(dir > 0 ? "enter-right" : "enter-left");

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            /* 3. Animate new card to active */
            setCardState("active");
          });
        });

        /* 4. Fade info back in slightly later */
        setTimeout(() => {
          setInfoVisible(true);
          setAnimating(false);
        }, 180);
      }, 380);
    },
    [animating, current],
  );

  const prev = () => goTo((current - 1 + events.length) % events.length);
  const next = () => goTo((current + 1) % events.length);

  const ev = events[current];

  return (
    <section
      className={cn("bg-background overflow-hidden", "px-[5%] py-[10vh]")}
    >
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
          Agenda Kami
          <EyebrowLine />
        </p>

        <h2
          className={cn(
            "font-serif font-bold leading-[1.2]",
            "text-foreground",
            "text-[clamp(28px,4vw,48px)]",
          )}
        >
          Acara <em className="italic text-[#b8860b]">Mendatang</em>
        </h2>
      </div>

      {/* ── Stage ── */}
      <div
        className={cn(
          "flex flex-col md:flex-row items-center",
          "gap-[clamp(24px,4vw,64px)]",
          "max-w-[1000px] mx-auto",
        )}
      >
        {/* ── Card (Image) ── */}
        <div
          className={cn(
            "relative shrink-0 overflow-hidden",
            "w-full md:w-[38%]",
            "h-[clamp(220px,45vh,460px)]",
          )}
        >
          <div
            className={cn(
              "absolute inset-0",
              "transition-all duration-[480ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
              cardStateClasses(cardState),
            )}
          >
            <Image
              src={ev.image}
              alt={ev.name}
              fill
              sizes="(max-width: 768px) 100vw, 38vw"
              className="object-cover"
              priority={current === 0}
            />

            {/* Badge */}
            <span
              className={cn(
                "absolute top-4 left-4",
                "bg-[#b8860b] text-[#1a1a1a]",
                "text-[10px] font-medium tracking-[0.15em] uppercase",
                "px-3 py-[5px]",
              )}
            >
              {ev.badge}
            </span>
          </div>
        </div>

        {/* ── Info Panel ── */}
        <div
          className={cn(
            "flex-1 min-w-0",
            "transition-opacity duration-[350ms] ease-in-out",
            infoVisible ? "opacity-100" : "opacity-0",
          )}
        >
          {/* Counter */}
          <p
            className={cn(
              "text-[11px] tracking-[0.2em] uppercase font-medium",
              "text-[#b8860b] mb-3",
            )}
          >
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(events.length).padStart(2, "0")}
          </p>

          {/* Event name */}
          <h3
            className={cn(
              "font-serif font-bold leading-[1.2]",
              "text-foreground mb-6",
              "text-[clamp(22px,3vw,36px)]",
            )}
          >
            {ev.name}
          </h3>

          {/* Meta rows */}
          <div className="flex flex-col gap-3 mb-8">
            <MetaRow
              icon={<Calendar size={16} strokeWidth={1.5} />}
              label="Tanggal"
              value={ev.date}
            />
            <MetaRow
              icon={<Clock size={16} strokeWidth={1.5} />}
              label="Waktu"
              value={ev.time}
            />
            <MetaRow
              icon={<MapPin size={16} strokeWidth={1.5} />}
              label="Lokasi"
              value={ev.location}
            />
            <MetaRow
              icon={<Ticket size={16} strokeWidth={1.5} />}
              label="Biaya"
              value={ev.price}
            />
          </div>

          {/* CTA */}
          <a
            href="#"
            className={cn(
              "inline-flex items-center gap-[10px]",
              "border-[1.5px] border-[#b8860b] text-[#b8860b]",
              "px-8 py-[13px]",
              "text-[12px] font-medium tracking-[0.15em] uppercase",
              "transition-colors duration-250",
              "hover:bg-[#b8860b] hover:text-[#1a1a1a]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8860b]",
            )}
          >
            Daftar Sekarang
            <span aria-hidden="true">→</span>
          </a>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-8">
            <button
              onClick={prev}
              disabled={animating}
              aria-label="Acara sebelumnya"
              className={cn(
                "w-10 h-10 border border-border",
                "flex items-center justify-center",
                "text-foreground",
                "transition-colors duration-200",
                "hover:border-[#b8860b] hover:text-[#b8860b]",
                "disabled:opacity-40 disabled:cursor-not-allowed",
              )}
            >
              <ArrowLeft size={16} strokeWidth={1.5} />
            </button>

            <button
              onClick={next}
              disabled={animating}
              aria-label="Acara berikutnya"
              className={cn(
                "w-10 h-10 border border-border",
                "flex items-center justify-center",
                "text-foreground",
                "transition-colors duration-200",
                "hover:border-[#b8860b] hover:text-[#b8860b]",
                "disabled:opacity-40 disabled:cursor-not-allowed",
              )}
            >
              <ArrowRight size={16} strokeWidth={1.5} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-[6px]">
              {events.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  disabled={animating}
                  aria-label={`Acara ke-${i + 1}`}
                  className={cn(
                    "h-[2px] transition-all duration-250",
                    "disabled:cursor-not-allowed",
                    i === current
                      ? "w-8 bg-[#b8860b]"
                      : "w-5 bg-[#e5e5e5] hover:bg-[#b8860b]/40",
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
