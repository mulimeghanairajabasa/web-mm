import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/dist/client/link";

// ----------------------------------------------------------------------
// Mock Komponen Dasar (Simulasi Shadcn UI)
// ----------------------------------------------------------------------

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "secondary" | "outline";
  }
>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-primary text-primary-foreground hover:opacity-90",
    secondary: "bg-secondary text-secondary-foreground hover:opacity-90",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  };
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
});
Button.displayName = "Button";

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex h-16 items-center px-6">
          {/* Logo menggunakan font Courgette */}
          <Link
            href="/"
            className="font-courgette text-2xl text-primary font-bold"
          >
            Muli Mekhanai
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 mt-12 space-y-24">
        {/* SEKSI 1: Komposisi Warna (60-30-10) */}
        <section className="space-y-6">
          <div className="border-b border-border pb-2">
            <h2 className="text-3xl font-bold tracking-tight">
              1. Komposisi Warna (60-30-10)
            </h2>
            <p className="text-muted-foreground mt-1">
              Implementasi rasio warna untuk menjaga harmoni visual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3 bg-card p-4 rounded-xl border border-border shadow-sm">
              <div className="h-24 rounded-lg bg-background border border-border"></div>
              <div>
                <p className="font-bold text-lg">60% Dominan</p>
                <p className="text-sm text-muted-foreground">
                  Background & Ruang Kosong (bg-background, bg-card).
                </p>
              </div>
            </div>

            <div className="space-y-3 bg-card p-4 rounded-xl border border-border shadow-sm">
              <div className="h-24 rounded-lg bg-foreground"></div>
              <div>
                <p className="font-bold text-lg">30% Struktural</p>
                <p className="text-sm text-muted-foreground">
                  Teks utama & hirarki baca (text-foreground).
                </p>
              </div>
            </div>

            <div className="space-y-3 bg-card p-4 rounded-xl border border-border shadow-sm">
              <div className="flex h-24 rounded-lg overflow-hidden">
                <div className="w-[70%] bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                  7% Emas
                </div>
                <div className="w-[30%] bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-bold">
                  3% Merah
                </div>
              </div>
              <div>
                <p className="font-bold text-lg">10% Aksen</p>
                <p className="text-sm text-muted-foreground">
                  Tombol & Interaksi (bg-primary, bg-secondary).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEKSI 2: Tipografi */}
        <section className="space-y-6">
          <div className="border-b border-border pb-2">
            <h2 className="text-3xl font-bold tracking-tight">2. Tipografi</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4 bg-card p-6 rounded-xl shadow-sm border border-border">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                UI & Heading Utama (Inter)
              </h3>
              <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
                Heading 1 Utama
              </h1>
              <p className="text-base leading-relaxed text-foreground">
                Teks UI standar yang sangat bersih dan mudah dibaca.
              </p>
            </div>

            <div className="space-y-8">
              <div className="space-y-4 bg-card p-6 rounded-xl shadow-sm border border-border">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Konten Artikel (Comic Neue)
                </h3>
                <p className="font-comic-neue text-lg leading-relaxed text-foreground">
                  Simulasi teks artikel dengan font Comic Neue. Terasa lebih
                  santai dan berjiwa muda, menjaga kenyamanan baca untuk teks
                  panjang.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEKSI 3: Elemen UI & Tombol */}
        <section className="space-y-6">
          <div className="border-b border-border pb-2">
            <h2 className="text-3xl font-bold tracking-tight">
              3. Interaksi & Tombol
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 bg-card p-6 rounded-xl shadow-sm border border-border">
            <Button variant="default">Aksi Utama (Primary)</Button>
            <Button variant="secondary">Aksi Sekunder (Secondary)</Button>
            <Button variant="outline">Lihat Detail</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
