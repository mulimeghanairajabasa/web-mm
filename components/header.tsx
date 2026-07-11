"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";

// Impor komponen Shadcn
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Impor Logo
import LogoMuliMekhnai from "@/components/icons/logoMuliMekhnai";

interface HeaderProps {
  /**
   * Class tambahan untuk mengatur warna teks saat posisi transparan di paling atas.
   * Gunakan "text-white" jika hero gelap, atau "text-foreground" jika hero terang.
   */
  className?: string;
}

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/tentang" },
  { name: "Kegiatan", href: "/kegiatan" },
  { name: "Artikel", href: "/artikel" },
  { name: "Kontak", href: "/kontak" },
];

export default function Header2({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled
          ? // Saat di-scroll: Menggunakan bg-background (#fafafa) dengan efek blur, dan teks utama (#1a1a1a)
            "bg-background/90 backdrop-blur-md border-b border-border py-3 text-foreground shadow-sm"
          : // Saat di paling atas: Transparan, padding lebih besar, mewarisi warna dari props className
            cn("bg-transparent py-5", className),
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* KIRI: Logo */}
        <Link href="/" className="relative z-10 flex items-center">
          {/* Logo akan mengikuti warna dari parent saat transparan, dan menjadi default saat di-scroll */}
          <LogoMuliMekhnai className="h-10 w-auto transition-transform hover:scale-105" />
        </Link>

        {/* TENGAH: Navigasi Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  isActive
                    ? "text-primary font-bold"
                    : "opacity-90 hover:opacity-100",
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* UJUNG KANAN: Button & Mobile Menu */}
        <div className="flex items-center gap-4 relative z-10">
          {/* Tombol Gabung (Desktop) - Menggunakan warna Emas (#c69009) yang selalu kontras */}
          <Button
            className="hidden md:inline-flex rounded-full px-6 shadow-md hover:shadow-lg transition-all"
            variant="default"
          >
            Gabung
          </Button>

          {/* Menu Mobile (Sheet Shadcn) */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden hover:bg-transparent"
                aria-label="Buka Menu"
              >
                {/* Ikon menu menyesuaikan warna teks parent */}
                <Menu className="h-7 w-7" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-75 sm:w-100 flex flex-col bg-background "
            >
              <SheetHeader className="mb-6 border-b border-border pb-4 mt-4">
                {/* Menggunakan font-courgette yang sudah dipetakan di globals.css */}
                <SheetTitle className="text-left font-courgette text-3xl text-primary ">
                  Muli Mekhanai
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2 flex-1 px-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-lg font-medium py-3 border-b border-border/50 transition-colors hover:text-primary",
                        isActive ? "text-primary font-bold" : "text-foreground",
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              {/* Tombol Gabung (Mobile) */}
              <div className="mt-auto pt-6 pb-4">
                <Button
                  className="w-full  text-white h-12 shadow-md"
                  size="lg"
                  onClick={() => setIsOpen(false)}
                >
                  Gabung Sekarang
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
