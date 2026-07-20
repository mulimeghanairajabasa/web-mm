// app/hut-81/page.tsx
import Footer from "@/components/footer";
import Header from "@/components/header";
import DukunganSection from "@/components/hut/dukung";
import HeroKegiatan from "@/components/hut/heroKegiatan";
import LombaSection from "@/components/hut/lombaSection";
import Merdeka from "@/components/hut/merdeka";
// import UcapanSection from "@/components/kegiatan/ucapan";
import UcapanSection from "@/components/hut/ucapanSection";

import { metadataHut81 } from "@/lib/metadata";

export const metadata = metadataHut81;

interface HUT81Props {
  searchParams: Promise<{ page?: string | string[] }>;
}

export default async function HUT81({ searchParams }: HUT81Props) {
  const resolvedSearchParams = await searchParams;
  return (
    <main>
      <Header className="text-white" />
      <HeroKegiatan />
      <Merdeka />
      <LombaSection />
      {/* <UcapanSection /> */}
      <UcapanSection searchParams={resolvedSearchParams} />
      <DukunganSection />
      <Footer />
    </main>
  );
}
