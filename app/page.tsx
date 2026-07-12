import ArticlesSection from "@/components/landing/article";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/landing/hero";
import IntroSection from "@/components/landing/intro";
import UpcomingEventsSection from "@/components/landing/upcoming";
import WhatWeDoSection from "@/components/landing/whatwedo";
import CTASection from "@/components/landing/cta";

export default function Home() {
  return (
    <main>
      <Header className="text-white" />
      <HeroSection />
      <IntroSection />
      <WhatWeDoSection />
      <UpcomingEventsSection />
      <ArticlesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
