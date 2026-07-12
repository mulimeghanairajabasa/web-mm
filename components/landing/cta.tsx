import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function EyebrowLine() {
  return (
    <span
      className="inline-block w-8 h-px bg-primary opacity-80"
      aria-hidden="true"
    />
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function CTASection() {
  return (
    <section className="relative w-full overflow-hidden bg-foreground py-12 md:py-16">
      {/* ── Background Glow Effects ── */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center flex flex-col items-center">
        {/* Eyebrow */}
        <p
          className={cn(
            "inline-flex items-center gap-3 mb-6",
            "text-[10px] md:text-xs tracking-widest uppercase font-bold",
            "text-primary",
          )}
        >
          <EyebrowLine />
          Gabung Bersama Kami
          <EyebrowLine />
        </p>

        {/* Headline */}
        <h2
          className={cn(
            "font-sans font-extrabold leading-tight tracking-tight",
            "text-background mb-6", // Teks warna terang (#fafafa)
            "text-2xl md:text-4xl lg:text-5xl",
          )}
        >
          Mari Melangkah Bersama, Menjadi{" "}
          <em className="font-courgette font-normal not-italic text-primary block sm:inline mt-2 sm:mt-0">
            Keluarga
          </em>
        </h2>

        {/* ── Action Buttons ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Tombol Primary (Solid Gold) */}
          <Link
            href="/"
            className={cn(
              "inline-flex items-center justify-center gap-2",
              "w-full sm:w-auto px-10 py-4 rounded-md",
              "bg-primary text-primary-foreground",
              "text-xs md:text-sm font-bold tracking-widest uppercase text-white",
              "transition-all duration-300",
              "hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(198,144,9,0.4)] hover:-translate-y-0.5",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-foreground",
              "group",
            )}
          >
            Daftar Sekarang
            <ArrowRight
              size={16}
              strokeWidth={2}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
