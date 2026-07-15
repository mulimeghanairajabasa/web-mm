import Image from "next/image";
import Header from "@/components/header";
import KilasBalikSection from "@/components/tentang/kilas";
import StrukturSection from "@/components/tentang/struktur";
import VisiMisiSection from "@/components/tentang/visiMisi";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import TrailImage from "@/components/tentang/trailImage";
import CTASection from "@/components/landing/cta";
import { metadataTentang } from "@/lib/metadata";

export const metadata = metadataTentang;

export default function Tentang() {
  return (
    <main>
      <Header className="text-background" />{" "}
      {/* Set teks header menjadi terang saat di posisi atas */}
      <Hero />
      <KilasBalikSection />
      <VisiMisiSection />
      <StrukturSection />
      <CTASection />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        "h-svh min-h-125",
        "bg-foreground", // Latar belakang gelap sebagai base
        "flex items-center justify-center text-center",
      )}
    >
      {/* ── Fallback Image untuk Mobile (Hanya muncul di layar kecil) ── */}
      {/* Container dengan padding kecil (p-4 atau p-6) agar gambar tidak menempel ke tepi layar */}
      <div className="absolute inset-0 flex items-center justify-center md:hidden pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero-alt.png"
            alt="Muli Mekhanai Rajabasa"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            // object-contain memastikan seluruh bagian gambar masuk ke layar tanpa terpotong
            className="object-contain object-center"
          />
        </div>
      </div>

      {/* ── Trail Image untuk Desktop (Hanya muncul di md ke atas) ── */}
      <div className="absolute inset-0 w-full h-full hidden md:block">
        <TrailImage
          images={[
            "images/trail/01.webp",
            "images/trail/02.webp",
            "images/trail/03.webp",
            "images/trail/04.webp",
            "images/trail/05.webp",
            "images/trail/06.webp",
            "images/trail/07.webp",
            "images/trail/08.webp",
            "images/trail/09.webp",
            "images/trail/10.webp",
            "images/trail/11.webp",
            "images/trail/12.webp",
            "images/trail/13.webp",
            "images/trail/14.webp",
          ]}
          threshold={60}
          maxVisible={6}
          duration={1000}
        />
      </div>

      {/* ── Teks Utama Hero (Hanya Desktop) ── */}
      {/* Menambahkan hidden md:block agar teks HTML tidak muncul di mobile */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto pointer-events-none hidden md:block">
        <h2
          className={cn(
            "font-sans font-extrabold leading-tight tracking-tight",
            "text-background",
            "md:text-6xl lg:text-7xl",
          )}
        >
          <em className="font-courgette font-normal not-italic text-primary block">
            Muli Mekhanai
          </em>
          Rajabasa
        </h2>
      </div>
    </section>
  );
}
