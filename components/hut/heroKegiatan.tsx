"use client";

import Link from "next/link";
import { memo, useEffect, useState, useSyncExternalStore } from "react";
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

const TimerUnit = memo(function TimerUnit({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn(
          "bg-[#E12828] rounded-lg shadow-lg",
          "flex items-center justify-center",
          "w-14 sm:w-16 md:w-24",
          "py-3 sm:py-4 px-2 sm:px-3 md:px-8",
        )}
      >
        <span className="font-bold leading-none tabular-nums text-white text-xl sm:text-2xl md:text-4xl">
          {value}
        </span>
      </div>
      <span className="text-gray-300 text-[10px] sm:text-xs md:text-sm font-medium tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
});

/* useSyncExternalStore dengan snapshot server=false, client=true.
   Ini cara resmi React untuk tahu "sudah di client" TANPA memanggil
   setState di dalam effect — jadi tidak memicu warning cascading render,
   dan tetap konsisten antara hydration server/client. */
function subscribeNoop() {
  return () => {};
}
function useIsClient() {
  return useSyncExternalStore(
    subscribeNoop,
    () => true,
    () => false,
  );
}

interface CountdownState {
  timeLeft: TimeLeft | null | undefined; // undefined = belum dihitung
}

function Countdown() {
  const isClient = useIsClient();
  const [{ timeLeft }, setState] = useState<CountdownState>({
    timeLeft: undefined,
  });

  useEffect(() => {
    /* setState hanya dipanggil dari dalam callback interval (async),
       bukan langsung di body effect, sehingga tidak melanggar aturan
       "no synchronous setState in effect". */
    const interval = setInterval(() => {
      setState({ timeLeft: getTimeLeft() });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  /* ── Placeholder: sebelum hydrate, atau menunggu tick pertama ── */
  if (!isClient || timeLeft === undefined) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-center gap-2 text-[#DCA723] mb-4 sm:mb-6">
          <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="font-semibold text-xs sm:text-sm md:text-base tracking-wide uppercase">
            Hitung Mundur Hari Kemerdekaan
          </span>
        </div>
        <div className="flex items-start justify-center gap-2 sm:gap-3 md:gap-6">
          <TimerUnit value="--" label="Hari" />
          <TimerUnit value="--" label="Jam" />
          <TimerUnit value="--" label="Menit" />
          <TimerUnit value="--" label="Detik" />
        </div>
      </div>
    );
  }

  /* ── Hari H ── */
  if (timeLeft === null) {
    return (
      <div className="flex flex-col items-center gap-3 text-center py-4">
        <p className="font-bold text-white text-xl sm:text-2xl md:text-3xl">
          🇮🇩 Selamat Hari Kemerdekaan Indonesia ke-81!
        </p>
        <p className="font-normal text-gray-300 text-sm sm:text-base">
          Merdeka! Tumbuh, Bersatu, Berbudaya.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-center gap-2 text-[#DCA723] mb-4 sm:mb-6">
        <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="font-semibold text-xs sm:text-sm md:text-base tracking-wide uppercase">
          Hitung Mundur Hari Kemerdekaan
        </span>
      </div>
      <div
        id="timer"
        className="flex items-start justify-center gap-2 sm:gap-3 md:gap-6"
      >
        <TimerUnit value={pad(timeLeft.days)} label="Hari" />
        <TimerUnit value={pad(timeLeft.hours)} label="Jam" />
        <TimerUnit value={pad(timeLeft.minutes)} label="Menit" />
        <TimerUnit value={pad(timeLeft.seconds)} label="Detik" />
      </div>
    </div>
  );
}

/* Aksen pita merah-putih — nod ke bendera, dipakai sebagai divider kecil
   antara judul dan tagline, bukan sekadar garis polos. */
function FlagDivider() {
  return (
    <div
      className="w-12 h-1 rounded-full overflow-hidden flex"
      aria-hidden="true"
    >
      <span className="w-1/2 h-full bg-[#E12828]" />
      <span className="w-1/2 h-full bg-white" />
    </div>
  );
}

/* Siluet Siger (mahkota adat Lampung) sebagai watermark — signature element
   yang mengaitkan HUT RI dengan identitas budaya Muli Mekhanai Rajabasa. */
function SigerWatermark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 140"
      className={cn("pointer-events-none", className)}
      aria-hidden="true"
    >
      <path
        d="M10 140 L10 90 L30 40 L45 90 L60 20 L75 90 L100 5 L125 90 L140 20 L155 90 L170 40 L190 90 L190 140 Z"
        fill="#DCA723"
      />
    </svg>
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
        "min-h-screen px-4 sm:px-6 py-16 sm:py-20",
        "gap-8 sm:gap-10",
        "bg-gradient-to-b from-[#8B3A3A] to-[#2C2C2C]",
      )}
    >
      {/* ── Ornamen atas ── */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #ffffff33 30%, #ffffff66 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Subtle diagonal pattern (tekstur dasar) ── */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #ffffff 0, #ffffff 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* ── Siger watermark, pojok kanan bawah ── */}
      <SigerWatermark className="absolute -bottom-2 -right-4 sm:right-0 w-32 sm:w-44 md:w-56 h-auto opacity-10" />

      {/* ── Title & Tagline ── */}
      <div
        id="tittle-text"
        className="relative z-10 flex flex-col items-center gap-3 max-w-4xl mx-auto"
      >
        {/* Eyebrow */}
        <p className="text-gray-300 text-xs sm:text-sm tracking-[0.2em] uppercase font-medium mb-1 sm:mb-2">
          17 Agustus 2026
        </p>

        {/* Headline */}
        <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl text-white leading-tight">
          Dirgahayu <span className="text-[#D48B8B]">Indonesia</span>
          <span className="block text-[#DCA723] text-3xl sm:text-4xl md:text-5xl mt-2 sm:mt-3">
            ke-81
          </span>
        </h1>

        <FlagDivider />

        {/* Tagline */}
        <p className="font-medium tracking-[0.15em] uppercase text-gray-300 text-xs sm:text-sm md:text-base mt-2 sm:mt-4">
          Anjak Muli Mekhanai Rajabasa
        </p>

        {/* Desc */}
        <p className="font-normal text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mt-2">
          Delapan puluh satu tahun lalu, proklamasi mengikrarkan satu bangsa.
          Hari ini, Muli Mekhanai Rajabasa melanjutkan estafet itu dari tanah
          Lampung — merawat adat, menumbuhkan kebersamaan, dan menghadirkan aksi
          nyata bagi masyarakat sekitar. Satu perayaan, satu jiwa, satu
          Indonesia.
        </p>
      </div>

      {/* ── Countdown ── */}
      <div
        id="countdown"
        className={cn(
          "relative z-10 w-full max-w-3xl mx-auto",
          "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl",
          "p-4 sm:p-6 md:p-10 shadow-xl",
        )}
      >
        <Countdown />
      </div>

      {/* ── CTA Buttons ── */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-1 sm:mt-2 w-full sm:w-auto">
        <Link
          href="#kegiatan"
          className={cn(
            "bg-[#E12828] text-white",
            "rounded-lg px-6 py-3.5",
            "flex items-center justify-center gap-2",
            "text-sm font-semibold uppercase tracking-wider",
            "hover:bg-red-700 transition-colors duration-300 shadow-md w-full sm:w-auto",
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
            "hover:bg-yellow-600 transition-colors duration-300 shadow-md w-full sm:w-auto",
          )}
        >
          <Users className="w-5 h-5" />
          Mendaftar
        </Link>
      </div>

      {/* ── Ornamen bawah ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #ffffff33 30%, #ffffff66 70%, transparent 100%)",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
