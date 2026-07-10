"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang" },
  { label: "Kegiatan", href: "/kegiatan" },
  { label: "Artikel", href: "/artikel" },
  { label: "Kontak", href: "/kontak" },
  { label: "Test", href: "/test" },
];

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 shrink-0"
      aria-label="Muli Mekhanai Rajabasa — Beranda"
    >
      <div className="relative w-10 h-10">
        <Image
          src="/images/logo.png"
          alt="Logo Muli Mekhanai Rajabasa"
          fill
          sizes="40px"
          className="object-contain"
          priority
        />
      </div>
      <span
        className={cn(
          "font-serif font-bold leading-none tracking-[-0.01em]",
          "text-[clamp(13px,1.3vw,16px)]",
          "transition-colors duration-300",
          scrolled ? "text-[#1a1a1a]" : "text-white",
        )}
      >
        Muli Mekhanai
        <span
          className={cn(
            "block text-[10px] font-sans font-medium tracking-[0.15em] uppercase mt-[2px]",
            "transition-colors duration-300",
            scrolled ? "text-[#b8860b]" : "text-[#d4a017]",
          )}
        >
          Rajabasa
        </span>
      </span>
    </Link>
  );
}

function DesktopNav({ scrolled }: { scrolled: boolean }) {
  return (
    <nav className="hidden md:flex items-center gap-[clamp(20px,3vw,36px)]">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "relative text-[12px] font-medium tracking-[0.08em] uppercase",
            "transition-colors duration-300",
            "after:absolute after:bottom-[-3px] after:left-0 after:w-0 after:h-px",
            "after:bg-[#b8860b] after:transition-all after:duration-250",
            "hover:after:w-full hover:text-[#b8860b]",
            scrolled ? "text-[#1a1a1a]" : "text-white/85",
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

function BurgerButton({
  open,
  scrolled,
  onClick,
}: {
  open: boolean;
  scrolled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? "Tutup menu" : "Buka menu"}
      aria-expanded={open}
      className={cn(
        "md:hidden flex items-center justify-center",
        "w-10 h-10 shrink-0",
        "transition-colors duration-300",
        scrolled ? "text-[#1a1a1a]" : "text-white",
      )}
    >
      {open ? (
        <X size={22} strokeWidth={1.5} />
      ) : (
        <Menu size={22} strokeWidth={1.5} />
      )}
    </button>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <div
      className={cn(
        "md:hidden absolute top-full left-0 right-0",
        "bg-white border-t border-[#e5e5e5]",
        "transition-all duration-300 overflow-hidden",
        open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0",
      )}
    >
      <nav className="flex flex-col px-[5%] py-4">
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className={cn(
              "py-4 text-[12px] font-medium tracking-[0.1em] uppercase",
              "text-[#1a1a1a] hover:text-[#b8860b]",
              "transition-colors duration-200",
              i !== navLinks.length - 1 && "border-b border-[#f0f0f0]",
            )}
          >
            {link.label}
          </Link>
        ))}

        {/* Mobile CTA */}
        <div className="pt-4 pb-2">
          <Link
            href="/daftar"
            onClick={onClose}
            className={cn(
              "inline-flex items-center gap-2 w-full justify-center",
              "bg-[#b8860b] text-[#1a1a1a]",
              "py-3 px-6",
              "text-[11px] font-medium tracking-[0.15em] uppercase",
              "hover:bg-[#d4a017] transition-colors duration-250",
            )}
          >
            Gabung Sekarang →
          </Link>
        </div>
      </nav>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_#e5e5e5]"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "relative",
          "flex items-center justify-between",
          "max-w-[1100px] mx-auto",
          "px-[5%]",
          "transition-all duration-300",
          scrolled ? "h-[64px]" : "h-[80px]",
        )}
      >
        <Logo scrolled={scrolled} />
        <DesktopNav scrolled={scrolled} />

        {/* Desktop CTA */}
        <Link
          href="/daftar"
          className={cn(
            "hidden md:inline-flex items-center gap-2 shrink-0",
            "border text-[11px] font-medium tracking-[0.15em] uppercase",
            "px-5 py-[10px]",
            "transition-colors duration-300",
            scrolled
              ? "border-[#b8860b] text-[#b8860b] hover:bg-[#b8860b] hover:text-[#1a1a1a]"
              : "border-white/60 text-white hover:border-white hover:bg-white/10",
          )}
        >
          Gabung
        </Link>

        <BurgerButton
          open={menuOpen}
          scrolled={scrolled}
          onClick={() => setMenuOpen((prev) => !prev)}
        />
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
