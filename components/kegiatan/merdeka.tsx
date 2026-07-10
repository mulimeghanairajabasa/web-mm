import Image from "next/image";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function EyebrowLine() {
  return (
    <span
      className="inline-block w-8 h-px bg-[#B03E3E] opacity-60"
      aria-hidden="true"
    />
  );
}

function OrnamentRule() {
  return (
    <div className="flex items-center gap-3 my-6" aria-hidden="true">
      <span className="w-12 h-px bg-[#e5e5e5]" />
      <span className="w-[5px] h-[5px] rounded-full bg-[#B03E3E]" />
      <span className="w-12 h-px bg-[#e5e5e5]" />
    </div>
  );
}

function CardUcapan() {
  return (
    <div
      className={cn(
        "border border-[#B03E3E]/20 bg-white",
        "px-6 py-5 flex flex-col gap-3",
      )}
    >
      <p
        className={cn(
          "text-[10px] uppercase tracking-[0.2em] font-medium",
          "text-[#B03E3E]",
        )}
      >
        Dirgahayu dari Muli Mekhanai
      </p>
      <p
        className={cn(
          "font-serif italic leading-[1.75]",
          "text-foreground",
          "text-[clamp(14px,1.5vw,17px)]",
        )}
      >
        Tujuh puluh delapan tahun bukan waktu yang singkat. Di atas tanah yang
        sama tempat leluhur kami berdiri, kami — pemuda-pemudi Rajabasa —
        mewarisi semangat itu dan berjanji untuk terus menjaganya. Dirgahayu
        Indonesiaku.
      </p>
      <p className="text-[11px] text-[#737373] font-medium tracking-[0.05em]">
        — Muli Mekhanai Rajabasa
      </p>
    </div>
  );
}

function CardVisi() {
  return (
    <div className={cn("bg-[#B03E3E]", "px-6 py-5 flex flex-col gap-3")}>
      <p
        className={cn(
          "text-[10px] uppercase tracking-[0.2em] font-medium",
          "text-white/60",
        )}
      >
        Semangat Kami
      </p>
      <p
        className={cn(
          "font-serif italic leading-[1.75]",
          "text-white",
          "text-[clamp(14px,1.5vw,17px)]",
        )}
      >
        Kami percaya bahwa mencintai Indonesia bukan hanya dengan kata-kata,
        melainkan dengan tindakan nyata — menjaga budaya, merangkul sesama, dan
        bergerak bersama demi masyarakat yang lebih baik.
      </p>
      <p className="text-[11px] text-white/50 font-medium tracking-[0.05em]">
        — Muli Mekhanai Rajabasa
      </p>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function Merdeka() {
  return (
    <section
      id="merdeka"
      className={cn("bg-background overflow-hidden", "px-[5%] py-[10vh]")}
    >
      <div className="max-w-[1100px] mx-auto flex flex-col gap-[6vh] items-center">
        {/* ── Header ── */}
        <div className="max-w-[640px] text-center">
          <p
            className={cn(
              "inline-flex items-center gap-3 mb-5",
              "text-[clamp(10px,1.1vw,12px)] tracking-[0.28em] uppercase font-medium",
              "text-[#B03E3E]",
            )}
          >
            <EyebrowLine />
            17 Agustus 2026
          </p>

          <h2
            className={cn(
              "font-serif font-bold leading-[1.15] tracking-[-0.01em]",
              "text-foreground",
              "text-[clamp(26px,4vw,48px)]",
              "mb-4",
            )}
          >
            81 Tahun{" "}
            <em className="italic text-[#B03E3E]">Indonesia Merdeka</em>
          </h2>

          <OrnamentRule />

          <p
            className={cn(
              "font-light leading-[1.9]",
              "text-[#404040]",
              "text-[clamp(13px,1.4vw,16px)]",
            )}
          >
            Merayakan perjalanan panjang bangsa Indonesia — dari perjuangan para
            pahlawan hingga semangat generasi kini yang terus tumbuh, bersatu,
            dan berbudaya. Sebagai pemuda-pemudi Lampung, kami merayakan
            kemerdekaan bukan hanya sebagai momen, melainkan sebagai tanggung
            jawab yang kami emban setiap harinya.
          </p>
        </div>

        {/* ── Content: Cards + Image ── */}
        <div
          className={cn(
            "flex flex-col md:flex-row",
            "gap-6 md:gap-[clamp(24px,4vw,56px)]",
            "items-stretch",
          )}
        >
          {/* Cards */}
          <div id="cards" className="flex flex-col gap-4 flex-1">
            <CardUcapan />
            <CardVisi />
          </div>

          {/* Image */}
          <div
            id="image-mulimekhanai"
            className={cn(
              "relative shrink-0",
              "w-full md:w-[42%]",
              "min-h-[300px] md:min-h-0",
            )}
          >
            <Image
              src="/images/hero.png"
              alt="Foto Muli Mekhanai Rajabasa"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover object-top"
              priority
            />

            {/* Inner frame ornament */}
            <div
              className="absolute inset-[10px] border border-white/20 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// import Image from "next/image";

// export default function Merdeka() {
//   return (
//     <section id="merdeka" className="flex flex-col gap-1">
//       {/* bagi dua */}
//       <div className=" ">
//         <h2>80 Tahun Indonesia Merdeka</h2>
//         <p>
//           Merayakan perjalanan panjang bangsa Indonesia menuju kemerdekaan dan
//           kemajuan. bebangsa dan berbudaya (oleh kamu ubah){" "}
//         </p>
//       </div>
//       <div className="  flex flex-row">
//         <div id="cards" className="flex flex-col">
//           <div>
//             <h3>Dirgahayu dari muli mekhanai</h3>
//             <p>(berikan kata kata)</p>
//           </div>
//           <div>
//             <h3>visi muli mekhanai</h3>
//             <p>(berikan kata kata)</p>
//           </div>
//         </div>
//         <div id="image-mulimekhanai" className="relative">
//           <Image
//             src="/images/hero.png"
//             alt={`Foto Muli Mekhanai Rajabasa`}
//             fill
//             sizes="(max-width: 768px) 320px, 45vw"
//             className="object-cover object-top"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
