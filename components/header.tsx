"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Menu } from "lucide-react";

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
import { trackEvent } from "@/lib/analytics";
import {
  Show,
  SignInButton,
  useClerk,
  UserButton,
  useUser,
} from "@clerk/nextjs";

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
  { name: "Kegiatan", href: "/hut-81" },
  { name: "Artikel", href: "/artikel" },
  { name: "Kontak", href: "/kontak" },
];

export default function Header2({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const { user, isLoaded } = useUser();
  const { signOut } = useClerk();

  const isAdmin = isLoaded && user?.publicMetadata?.role === "admin";

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

  const handleGabungButton = () => {
    // Jalankan pelacakan sebelum mengarahkan pengguna
    trackEvent("click_gabung", {
      event_category: "Interaksi",
      event_label: "Tombol Gabung Utama",
      location: "Header",
    });
  };

  const handleSignOut = async () => {
    setIsOpen(false);
    await signOut();
  };

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

          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button
                className="hidden md:inline-flex rounded-full px-6 shadow-md hover:shadow-lg transition-all"
                variant="default"
                onClick={handleGabungButton}
              >
                Gabung
              </Button>
            </SignInButton>
          </Show>

          <Show when="signed-in">
            <div className="hidden md:flex items-center gap-3 ">
              {isAdmin && (
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="rounded-lg border-b border-border/50 transition-colors hover:text-primary text-foreground"
                >
                  <Link href="/dashboard">
                    <LayoutDashboard className="h-4 w-4" />
                    Dashboard
                  </Link>
                </Button>
              )}
            </div>

            <div className="hidden md:flex items-center">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8 border border-[rgba(29,158,117,0.3)]",
                  },
                }}
              />
            </div>
          </Show>

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

              {/* Kartu info user (mobile) - hanya tampil saat sudah login */}
              <Show when="signed-in">
                <div className="px-8 mb-4">
                  <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/40 p-3">
                    {user?.imageUrl ? (
                      <Image
                        src={user.imageUrl}
                        alt={user.fullName ?? "Foto profil"}
                        width={44}
                        height={44}
                        className="h-11 w-11 rounded-full object-cover border border-border shrink-0"
                        unoptimized
                      />
                    ) : (
                      <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">
                        {user?.fullName?.charAt(0) ?? "U"}
                      </div>
                    )}
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-foreground truncate">
                        {user?.fullName ?? "Pengguna"}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {user?.primaryEmailAddress?.emailAddress ?? "-"}
                      </p>
                    </div>
                  </div>
                </div>
              </Show>

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

                {isAdmin && (
                  <Link
                    href="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-lg font-medium py-3 border-b border-border/50 transition-colors hover:text-primary text-foreground"
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    Dashboard
                  </Link>
                )}
              </div>

              {/* Tombol Gabung / Keluar (Mobile) */}
              <div className="mt-auto pt-6 pb-4">
                <Show when="signed-out">
                  <SignInButton mode="modal">
                    <Button
                      className="w-full text-white h-12 shadow-md"
                      size="lg"
                      onClick={() => setIsOpen(false)}
                    >
                      Gabung Sekarang
                    </Button>
                  </SignInButton>
                </Show>

                <Show when="signed-in">
                  <Button
                    className="w-full h-12 shadow-md"
                    size="lg"
                    variant="outline"
                    onClick={handleSignOut}
                  >
                    Keluar
                  </Button>
                </Show>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
