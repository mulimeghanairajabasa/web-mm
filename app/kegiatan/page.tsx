import Footer from "@/components/footer";
import Header from "@/components/header";
import DukunganSection from "@/components/kegiatan/dukung";
import HeroKegiatan from "@/components/kegiatan/heroKegiatan";
import LombaSection from "@/components/kegiatan/lombaSection";
import Merdeka from "@/components/kegiatan/merdeka";
import UcapanSection from "@/components/kegiatan/ucapan";

export default function Kegiatan() {
  return (
    <main>
      <Header />
      <HeroKegiatan />
      <Merdeka />
      <LombaSection />
      <UcapanSection />
      <DukunganSection />
      <Footer />
    </main>
  );
}
