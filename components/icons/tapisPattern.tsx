"use client";

import { useEffect, useState } from "react";
import TapisMotif from "@/components/icons/tapisMotif";

export default function TapisPattern() {
  const [count, setCount] = useState(20);

  useEffect(() => {
    const calculate = () => {
      // tinggi pattern mengikuti breakpoint Tailwind
      let height = 56; // h-14

      if (window.innerWidth >= 1280) {
        height = 112; // xl:h-28
      } else if (window.innerWidth >= 1024) {
        height = 96; // lg:h-24
      } else if (window.innerWidth >= 768) {
        height = 80; // md:h-20
      } else if (window.innerWidth >= 640) {
        height = 64; // sm:h-16
      }

      // SVG viewBox = 500 x 500, jadi width = height
      const motifWidth = height;

      // Tambah 3 agar tidak terlihat kosong saat resize
      setCount(Math.ceil(window.innerWidth / motifWidth) + 3);
    };

    calculate();

    window.addEventListener("resize", calculate);

    return () => window.removeEventListener("resize", calculate);
  }, []);

  return (
    <div
      className="
        flex
        overflow-hidden
        w-full
        h-14
        sm:h-16
        md:h-20
        lg:h-24
        xl:h-28
        text-primary/15
        shrink-0
      "
      aria-hidden="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <TapisMotif key={i} className="h-full w-auto shrink-0" />
      ))}
    </div>
  );
}
