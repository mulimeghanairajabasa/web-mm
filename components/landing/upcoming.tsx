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
  link: string;
}

const events: EventData[] = [
  {
    badge: "Festival",
    name: "Hut Republik Indonesia ke-81",
    date: "10 Agustus 2024 - 28 Agustus 2024",
    time: "08.00 – 17.00 WIB",
    location: "Lapangan Rajabasa, Bandar Lampung",
    price: "Gratis",
    image: "/images/merdeka.webp",
    link: "/hut-ri-81",
  },
  {
    badge: "Workshop",
    name: "Workshop Seni & Budaya Lampung",
    date: "Setiap Minggu",
    time: "07.00 – 12.00 WIB",
    location: "Kelurahan Rajabasa Jaya",
    price: "Gratis",
    image: "/images/hero.png",
    link: "/kegiatan/workshop-seni-budaya",
  },
  {
    badge: "Pengajian Rutin",
    name: "Pengajian Rutin Majelis Taklim Rajabasa",
    date: "Setiap Jumat",
    time: "10.00 – Selesai WIB",
    location: "Balai Adat Rajabasa",
    price: "Gratis",
    image: "/images/hero.png",
    link: "/kegiatan/pengajian-rutin",
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
      className="inline-block w-8 h-px bg-primary opacity-60"
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
          "text-primary",
        )}
        aria-hidden="true"
      >
        {icon}
      </div>
      <div>
        <span
          className={cn(
            "block text-[10px] uppercase tracking-widest font-bold",
            "text-muted-foreground leading-none mb-1",
          )}
        >
          {label}
        </span>
        <span className="text-sm md:text-base text-foreground font-medium leading-none">
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
      className={cn(
        "bg-background overflow-hidden",
        "px-6 md:px-10 py-20 md:py-32",
      )}
    >
      {/* ── Header ── */}
      <div className="text-center mb-12 md:mb-16">
        <p
          className={cn(
            "inline-flex items-center gap-3 mb-4",
            "text-[10px] md:text-xs tracking-widest uppercase font-bold",
            "text-primary",
          )}
        >
          <EyebrowLine />
          Agenda Kami
          <EyebrowLine />
        </p>

        <h2
          className={cn(
            "font-sans font-extrabold leading-tight",
            "text-foreground",
            "text-3xl md:text-4xl lg:text-5xl",
          )}
        >
          Acara{" "}
          <em className="font-courgette font-normal not-italic text-primary">
            Mendatang
          </em>
        </h2>
      </div>

      {/* ── Stage ── */}
      <div
        className={cn(
          "flex flex-col md:flex-row items-center",
          "gap-8 md:gap-16 lg:gap-20",
          "max-w-5xl mx-auto",
        )}
      >
        {/* ── Card (Image) ── */}
        <div
          className={cn(
            "relative shrink-0 overflow-hidden bg-muted",
            "w-full md:w-2/5",
            "h-64 sm:h-80 md:h-105 lg:h-115",
          )}
        >
          <div
            className={cn(
              "absolute inset-0",
              "transition-all duration-480ms ease-in-out",
              cardStateClasses(cardState),
            )}
          >
            <Image
              src={ev.image}
              alt={ev.name}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
              priority={current === 0}
            />

            {/* Badge */}
            <span
              className={cn(
                "absolute top-4 left-4",
                "bg-primary text-primary-foreground",
                "text-[10px] font-bold tracking-widest uppercase",
                "px-3 py-1.5 rounded-sm shadow-sm",
              )}
            >
              {ev.badge}
            </span>
          </div>
        </div>

        {/* ── Info Panel ── */}
        <div
          className={cn(
            "flex-1 min-w-0 w-full",
            "transition-opacity duration-350ms ease-in-out",
            infoVisible ? "opacity-100" : "opacity-0",
          )}
        >
          {/* Counter */}
          <p
            className={cn(
              "text-[10px] md:text-xs tracking-widest uppercase font-bold",
              "text-primary mb-3",
            )}
          >
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(events.length).padStart(2, "0")}
          </p>

          {/* Event name */}
          <h3
            className={cn(
              "font-sans font-extrabold leading-tight",
              "text-foreground mb-6 md:mb-8",
              "text-2xl md:text-3xl lg:text-4xl",
            )}
          >
            {ev.name}
          </h3>

          {/* Meta rows */}
          <div className="flex flex-col gap-4 mb-8 md:mb-10">
            <MetaRow
              icon={<Calendar size={18} strokeWidth={2} />}
              label="Tanggal"
              value={ev.date}
            />
            <MetaRow
              icon={<Clock size={18} strokeWidth={2} />}
              label="Waktu"
              value={ev.time}
            />
            <MetaRow
              icon={<MapPin size={18} strokeWidth={2} />}
              label="Lokasi"
              value={ev.location}
            />
            <MetaRow
              icon={<Ticket size={18} strokeWidth={2} />}
              label="Biaya"
              value={ev.price}
            />
          </div>

          {/* CTA */}
          <a
            href={ev.link}
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
            Daftar Sekarang
            <span
              className="text-sm transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-10 border-t border-border pt-6">
            <button
              onClick={prev}
              disabled={animating}
              aria-label="Acara sebelumnya"
              className={cn(
                "w-10 h-10 border border-border rounded-sm",
                "flex items-center justify-center",
                "text-foreground",
                "transition-colors duration-300",
                "hover:border-primary hover:text-primary hover:bg-primary/5",
                "disabled:opacity-40 disabled:cursor-not-allowed",
              )}
            >
              <ArrowLeft size={18} strokeWidth={2} />
            </button>

            <button
              onClick={next}
              disabled={animating}
              aria-label="Acara berikutnya"
              className={cn(
                "w-10 h-10 border border-border rounded-sm",
                "flex items-center justify-center",
                "text-foreground",
                "transition-colors duration-300",
                "hover:border-primary hover:text-primary hover:bg-primary/5",
                "disabled:opacity-40 disabled:cursor-not-allowed",
              )}
            >
              <ArrowRight size={18} strokeWidth={2} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2 ml-2">
              {events.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  disabled={animating}
                  aria-label={`Acara ke-${i + 1}`}
                  className={cn(
                    "h-1 rounded-full transition-all duration-300",
                    "disabled:cursor-not-allowed",
                    i === current
                      ? "w-8 bg-primary"
                      : "w-4 bg-border hover:bg-primary/40",
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
