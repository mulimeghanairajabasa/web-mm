import Header from "@/components/header";
import JoinUsSection2 from "@/components/joinus2";
import KilasBalikSection from "@/components/tentang/kilas";
import StrukturSection from "@/components/tentang/struktur";
import VisiMisiSection from "@/components/tentang/visiMisi";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

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
        "relative",
        "h-screen w-screen bg-foreground",
        "text-background",
      )}
    >
      ini adalah hero
    </section>
  );
}
