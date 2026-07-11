import Header from "@/components/header";
import JoinUsSection2 from "@/components/joinus2";
import KilasBalikSection from "@/components/tentang/kilas";
import StrukturSection from "@/components/tentang/struktur";
import VisiMisiSection from "@/components/tentang/visiMisi";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import TrailImage from "@/components/tentang/trailImage";

//  section hero, kilas balik, visi-misi, struktur, kontak.

export default function Tentang() {
  return (
    <main>
      <Header />
      <Hero />
      <KilasBalikSection />
      <VisiMisiSection />
      <StrukturSection />
      <JoinUsSection2 />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section
      className={cn(
        "relative overflow-hidden",
        "h-screen",
        "bg-foreground",
        " flex items-center justify-center",
      )}
    >
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
      <h2 className="relative z-10 text-6xl text-white font-bold">
        Muli Mekhanai Rajabasa
      </h2>
    </section>
  );
}
