import Footer from "@/components/footer";
import Header from "@/components/header";
import DukunganSection from "@/components/kegiatan/dukung";
import HeroKegiatan from "@/components/kegiatan/heroKegiatan";
import LombaSection from "@/components/kegiatan/lombaSection";
import Merdeka from "@/components/kegiatan/merdeka";
import UcapanSection from "@/components/kegiatan/ucapan";
import { metadataHut81 } from "@/lib/metadata";

export const metadata = metadataHut81;

export default function HUT81() {
  return (
    <main>
      <Header className="text-white" />
      <HeroKegiatan />
      <Merdeka />
      <LombaSection />
      <UcapanSection />
      <DukunganSection />
      <Footer />
    </main>
  );
}
