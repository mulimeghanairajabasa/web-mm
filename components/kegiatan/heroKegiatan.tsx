"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Clock, Calendar, Users } from "lucide-react";

/* ─────────────────────────────────────────────
   Types & Constants
───────────────────────────────────────────── */

const TARGET_DATE = new Date("2026-08-17T00:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */

function getTimeLeft(): TimeLeft | null {
  const diff = TARGET_DATE.getTime() - new Date().getTime();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function TimerUnit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="bg-[#E12828] rounded-lg py-4 px-6 md:px-8 text-center w-20 md:w-24 shadow-lg flex items-center justify-center">
        <span className="font-bold leading-none tabular-nums text-white text-3xl md:text-4xl">
          {value}
        </span>
      </div>
      <span className="text-gray-300 text-xs md:text-sm font-medium tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  /* ── Hari H ── */
  if (timeLeft === null) {
    return (
      <div className="flex flex-col items-center gap-3 text-center py-4">
        <p className="font-bold text-white text-2xl md:text-3xl">
          🇮🇩 Selamat Hari Kemerdekaan Indonesia ke-81!
        </p>
        <p className="font-normal text-gray-300 text-base">
          Merdeka! Tumbuh, Bersatu, Berbudaya.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-2 text-[#DCA723] mb-6">
        <Clock className="w-5 h-5" />
        <span className="font-semibold text-sm md:text-base tracking-wide uppercase">
          Hitung Mundur Hari Kemerdekaan
        </span>
      </div>
      <div
        id="timer"
        className="flex items-start justify-center gap-3 md:gap-6"
      >
        <TimerUnit value={pad(timeLeft.days)} label="Hari" />
        <TimerUnit value={pad(timeLeft.hours)} label="Jam" />
        <TimerUnit value={pad(timeLeft.minutes)} label="Menit" />
        <TimerUnit value={pad(timeLeft.seconds)} label="Detik" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function HeroKegiatan() {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        "flex flex-col items-center justify-center text-center",
        "min-h-screen px-6 py-20",
        "gap-10",
        "bg-gradient-to-b from-[#8B3A3A] to-[#2C2C2C]",
      )}
    >
      {/* ── Ornamen atas ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #ffffff33 30%, #ffffff66 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      {/* ── Subtle diagonal pattern (Tetap dipertahankan untuk tekstur) ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />
      {/* ── Title & Tagline ── */}
      <div
        id="tittle-text"
        className="relative z-10 flex flex-col items-center gap-3 max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        <p className="text-gray-300 text-sm tracking-[0.2em] uppercase font-medium mb-2">
          17 Agustus 2026
        </p>

        {/* Headline */}
        <h1 className="font-bold text-5xl md:text-7xl text-white leading-tight">
          Dirgahayu <span className="text-[#D48B8B]">Indonesia</span>
          <span className="block text-[#DCA723] text-4xl md:text-5xl mt-3">
            ke-81
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-medium tracking-[0.15em] uppercase text-gray-300 text-sm md:text-base mt-4">
          Anjak Muli Mekhanai Rajabasa
        </p>

        {/* Desc */}
        <p className="font-normal text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mt-2">
          Mari rayakan hari kemerdekaan bersama Muli Mekhanai Rajabasa — dengan
          semangat kebersamaan, kebanggaan budaya, dan aksi nyata untuk
          masyarakat. Satu perayaan, satu jiwa, satu Indonesia.
        </p>
      </div>
      {/* ── Countdown ── */}
      <div
        id="countdown"
        className={cn(
          "relative z-10 w-full max-w-3xl mx-auto",
          "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl",
          "p-6 md:p-10 shadow-xl",
        )}
      >
        <Countdown />
      </div>
      {/* ── CTA Buttons ── */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
        <Link
          href="#kegiatan"
          className={cn(
            "bg-[#E12828] text-white",
            "rounded-lg px-6 py-3.5",
            "flex items-center justify-center gap-2",
            "text-sm font-semibold uppercase tracking-wider",
            "hover:bg-red-700 transition-colors duration-250 shadow-md w-full sm:w-auto",
          )}
        >
          <Calendar className="w-5 h-5" />
          Lihat Kegiatan
        </Link>

        <Link
          href="/daftar"
          className={cn(
            "bg-[#DCA723] text-white",
            "rounded-lg px-6 py-3.5",
            "flex items-center justify-center gap-2",
            "text-sm font-semibold uppercase tracking-wider",
            "hover:bg-yellow-600 transition-colors duration-250 shadow-md w-full sm:w-auto",
          )}
        >
          <Users className="w-5 h-5" />
          Mendaftar
        </Link>
      </div>
      sdf
      {/* ── Ornamen bawah ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #ffffff33 30%, #ffffff66 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
