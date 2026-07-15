import Footer from "@/components/footer";
import Header from "@/components/header";
import DukunganSection from "@/components/kegiatan/dukung";
import HeroKegiatan from "@/components/kegiatan/heroKegiatan";
import LombaSection from "@/components/kegiatan/lombaSection";
import Merdeka from "@/components/kegiatan/merdeka";
import UcapanSection from "@/components/kegiatan/ucapan";
import { metadataKegiatan } from "@/lib/metadata";

export const metadata = metadataKegiatan;

export default function Kegiatan() {
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
