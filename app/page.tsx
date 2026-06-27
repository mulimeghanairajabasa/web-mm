import ArticlesSection from "@/components/article";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/hero";
import IntroSection from "@/components/intro";
import IntroSection2 from "@/components/intro2";
import JoinUsSection from "@/components/joinus";
import JoinUsSection2 from "@/components/joinus2";
import UpcomingEventsSection from "@/components/upcoming";
import WhatWeDoSection from "@/components/whatwedo";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      {/* <IntroSection /> */}
      <IntroSection2 />
      <WhatWeDoSection />
      <UpcomingEventsSection />
      <ArticlesSection />
      {/* <JoinUsSection /> */}
      <JoinUsSection2 />
      <Footer />
    </main>
  );
}
