import HeroSection from "@/components/artikel/hero";
import { cn } from "@/lib/utils";
import Header from "@/components/header";

export default function Artikel() {
  return (
    <main className={cn("relative ")}>
      <Header />

      <HeroSection />
    </main>
  );
}
