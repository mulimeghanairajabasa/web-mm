import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */

const usefulLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/about" },
  { label: "Kegiatan", href: "/kegiatan" },
  { label: "Artikel", href: "/artikel" },
  { label: "Kontak", href: "/kontak" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: FaYoutube,
  },
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: FaFacebook,
  },
];

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function TopOrnamentLine() {
  return (
    <div
      className="w-full h-1 md:h-1.5"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, var(--primary) 30%, var(--secondary) 70%, transparent 100%)",
      }}
      aria-hidden="true"
    />
  );
}

function FooterLogo() {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/" aria-label="Muli Mekhanai Rajabasa — Beranda">
        <div className="relative w-32 h-32 md:w-36 md:h-36">
          <Image
            src="/images/logo2.png"
            alt="Logo Muli Mekhanai Rajabasa"
            fill
            sizes="144px"
            className="object-contain"
          />
        </div>
      </Link>

      <p
        className={cn(
          "font-light leading-relaxed max-w-xs",
          "text-background/50",
          "text-xs md:text-sm",
        )}
      >
        Organisasi pemuda aktif dan berbudaya dari Rajabasa, Bandar Lampung.
        Berdiri sejak 2017.
      </p>
    </div>
  );
}

function UsefulLinks() {
  return (
    <div className="flex flex-col gap-4 md:gap-5">
      <h3
        className={cn(
          "text-[10px] md:text-xs uppercase tracking-widest font-bold",
          "text-primary",
        )}
      >
        Tautan
      </h3>

      <ul className="flex flex-col gap-3">
        {usefulLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "group inline-flex items-center gap-2",
                "text-sm md:text-base font-light",
                "text-background/50",
                "transition-colors duration-300",
                "hover:text-primary",
              )}
            >
              <span
                className="inline-block w-3 h-px bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex flex-col gap-4 md:gap-5">
      <h3
        className={cn(
          "text-[10px] md:text-xs uppercase tracking-widest font-bold",
          "text-primary",
        )}
      >
        Ikuti Kami
      </h3>

      <div className="flex flex-col gap-3 md:gap-4">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "group inline-flex items-center gap-3 md:gap-4",
              "text-background/50",
              "transition-colors duration-300",
              "hover:text-primary",
            )}
          >
            <div
              className={cn(
                "w-8 h-8 md:w-10 md:h-10 border border-background/10 shrink-0",
                "flex items-center justify-center",
                "transition-colors duration-300",
                "group-hover:border-primary",
              )}
            >
              <Icon size={16} strokeWidth={1.5} className="md:w-5 md:h-5" />
            </div>
            <span className="text-sm md:text-base font-light">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

function FooterBottom() {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center justify-center text-center", // orientasi tengah
        "gap-3 pt-6 md:pt-8 border-t border-background/10",
        "text-[10px] md:text-xs text-background/30",
      )}
    >
      <p>
        Guwaian Muli Mekhanai Rajabasa &copy; {new Date().getFullYear()} -{" "}
        <a
          href="https://www.teknisee.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#3ff3f3] transition-colors"
        >
          Teknisee
        </a>
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function Footer() {
  return (
    <footer className="relative bg-foreground overflow-hidden">
      <TopOrnamentLine />

      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, var(--primary) 0, var(--primary) 1px, transparent 0, transparent 50%)",
          backgroundSize: "24px 24px", // 20px -> 24px for slightly looser pattern
        }}
        aria-hidden="true"
      />

      <div
        className={cn(
          "relative z-10",
          "max-w-6xl mx-auto",
          "px-6 md:px-10 pt-16 md:pt-24 pb-8 md:pb-12",
          "flex flex-col gap-12 md:gap-16",
        )}
      >
        {/* ── Main grid ── */}
        <div
          className={cn(
            "grid gap-12 md:gap-10",
            "grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]",
          )}
        >
          <FooterLogo />
          <UsefulLinks />
          <SocialLinks />
        </div>

        {/* ── Bottom bar ── */}
        <FooterBottom />
      </div>
    </footer>
  );
}
