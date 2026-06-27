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
      className="w-full h-[3px]"
      style={{
        background:
          "linear-gradient(90deg, transparent 0%, #b8860b 30%, #8b0000 70%, transparent 100%)",
      }}
      aria-hidden="true"
    />
  );
}

function FooterLogo() {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/" aria-label="Muli Mekhanai Rajabasa — Beranda">
        <div className="relative w-[120px] h-[120px]">
          <Image
            src="/images/logo.png"
            alt="Logo Muli Mekhanai Rajabasa"
            fill
            sizes="120px"
            className="object-contain"
          />
        </div>
      </Link>

      <p
        className={cn(
          "font-light leading-[1.75] max-w-[240px]",
          "text-white/50",
          "text-[clamp(12px,1.1vw,13px)]",
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
    <div className="flex flex-col gap-4">
      <h3
        className={cn(
          "text-[10px] uppercase tracking-[0.25em] font-medium",
          "text-[#b8860b]",
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
                "inline-flex items-center gap-2",
                "text-[clamp(12px,1.2vw,14px)] font-light",
                "text-white/50",
                "transition-colors duration-200",
                "hover:text-[#b8860b]",
              )}
            >
              <span
                className="inline-block w-3 h-px bg-[#b8860b] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
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
    <div className="flex flex-col gap-4">
      <h3
        className={cn(
          "text-[10px] uppercase tracking-[0.25em] font-medium",
          "text-[#b8860b]",
        )}
      >
        Ikuti Kami
      </h3>

      <div className="flex flex-col gap-3">
        {socialLinks.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={cn(
              "inline-flex items-center gap-3",
              "text-white/50",
              "transition-colors duration-200",
              "hover:text-[#b8860b]",
            )}
          >
            <div
              className={cn(
                "w-8 h-8 border border-white/10 shrink-0",
                "flex items-center justify-center",
                "transition-colors duration-200",
                "hover:border-[#b8860b]",
              )}
            >
              <Icon size={14} strokeWidth={1.5} />
            </div>
            <span className="text-[clamp(12px,1.2vw,14px)] font-light">
              {label}
            </span>
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
        "flex flex-col sm:flex-row items-center justify-between",
        "gap-3 pt-6 border-t border-white/10",
        "text-[11px] text-white/25",
      )}
    >
      <p>
        &copy; {new Date().getFullYear()} Muli Mekhanai Rajabasa. Hak cipta
        dilindungi.
      </p>
      <p className="tracking-[0.05em]">
        Rajabasa, Bandar Lampung — Lampung, Indonesia
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function Footer() {
  return (
    <footer className="relative bg-[#111111] overflow-hidden">
      <TopOrnamentLine />

      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #b8860b 0, #b8860b 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />

      <div
        className={cn(
          "relative z-10",
          "max-w-[1100px] mx-auto",
          "px-[5%] pt-[8vh] pb-[4vh]",
          "flex flex-col gap-12",
        )}
      >
        {/* ── Main grid ── */}
        <div
          className={cn(
            "grid gap-10",
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
