import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */

const misi = [
  "Menghidupkan dan melestarikan seni, tradisi, dan budaya Lampung di tengah kehidupan masyarakat modern.",
  "Mendorong pemuda Rajabasa untuk aktif berkontribusi dalam kegiatan sosial dan pemberdayaan masyarakat.",
  "Membangun ruang positif bagi generasi muda untuk tumbuh, berkarya, dan mengembangkan potensi diri.",
  "Mempererat hubungan antargenerasi melalui program budaya, edukasi, dan kegiatan kemasyarakatan.",
  "Menjadi mitra terpercaya bagi warga Rajabasa dalam setiap langkah menuju kehidupan yang lebih baik.",
];

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function EyebrowLine() {
  return (
    <span
      className="inline-block w-8 h-px bg-[#b8860b] opacity-60"
      aria-hidden="true"
    />
  );
}

function OrnamentDivider() {
  return (
    <div className="flex items-center gap-3 my-[6vh]" aria-hidden="true">
      <span className="flex-1 h-px bg-[#e5e5e5]" />
      <span className="w-[5px] h-[5px] bg-[#b8860b] rotate-45 shrink-0" />
      <span className="w-[4px] h-[4px] bg-[#8b0000] rotate-45 shrink-0" />
      <span className="w-[5px] h-[5px] bg-[#b8860b] rotate-45 shrink-0" />
      <span className="flex-1 h-px bg-[#e5e5e5]" />
    </div>
  );
}

function VisiBlock() {
  return (
    <div className="flex flex-col gap-6">
      {/* Label */}
      <div className="flex items-center gap-4">
        <span
          className={cn(
            "font-serif font-bold italic",
            "text-[clamp(36px,5vw,60px)] leading-none",
            "text-[#b8860b]/20",
          )}
          aria-hidden="true"
        >
          01
        </span>
        <div>
          <p
            className={cn(
              "text-[10px] uppercase tracking-[0.25em] font-medium mb-1",
              "text-[#8b0000]",
            )}
          >
            Visi
          </p>
          <h3
            className={cn(
              "font-serif font-bold leading-none",
              "text-foreground",
              "text-[clamp(22px,2.5vw,30px)]",
            )}
          >
            Arah yang Kami Tuju
          </h3>
        </div>
      </div>

      {/* Visi statement */}
      <div className={cn("border-l-2 border-[#b8860b]", "pl-6 py-2")}>
        <p
          className={cn(
            "font-serif italic leading-[1.7]",
            "text-foreground",
            "text-[clamp(16px,2vw,22px)]",
          )}
        >
          Menjadi organisasi kepemudaan yang menjadi pelopor pelestarian budaya
          Lampung dan penggerak perubahan sosial yang nyata, demi terwujudnya
          generasi Rajabasa yang berkarakter, berdaya, dan berakar pada
          identitasnya.
        </p>
      </div>
    </div>
  );
}

function MisiBlock() {
  return (
    <div className="flex flex-col gap-6">
      {/* Label */}
      <div className="flex items-center gap-4">
        <span
          className={cn(
            "font-serif font-bold italic",
            "text-[clamp(36px,5vw,60px)] leading-none",
            "text-[#b8860b]/20",
          )}
          aria-hidden="true"
        >
          02
        </span>
        <div>
          <p
            className={cn(
              "text-[10px] uppercase tracking-[0.25em] font-medium mb-1",
              "text-[#8b0000]",
            )}
          >
            Misi
          </p>
          <h3
            className={cn(
              "font-serif font-bold leading-none",
              "text-foreground",
              "text-[clamp(22px,2.5vw,30px)]",
            )}
          >
            Langkah yang Kami Ambil
          </h3>
        </div>
      </div>

      {/* Misi list */}
      <ul className="flex flex-col gap-4">
        {misi.map((item, i) => (
          <li key={i} className="flex items-start gap-4">
            <span
              className={cn(
                "shrink-0 mt-[6px]",
                "w-[6px] h-[6px] bg-[#b8860b] rotate-45",
              )}
              aria-hidden="true"
            />
            <p
              className={cn(
                "font-light leading-[1.85]",
                "text-[#404040]",
                "text-[clamp(14px,1.4vw,16px)]",
              )}
            >
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function VisiMisiSection() {
  return (
    <section className={cn("bg-muted", "px-[5%] py-[10vh]")}>
      <div className="max-w-[740px] mx-auto">
        {/* ── Header ── */}
        <div className="mb-[6vh]">
          <p
            className={cn(
              "inline-flex items-center gap-3 mb-5",
              "text-[clamp(10px,1.1vw,12px)] tracking-[0.28em] uppercase font-medium",
              "text-[#b8860b]",
            )}
          >
            <EyebrowLine />
            Arah & Tujuan
          </p>

          <h2
            className={cn(
              "font-serif font-bold leading-[1.15] tracking-[-0.01em]",
              "text-foreground",
              "text-[clamp(28px,4vw,48px)]",
            )}
          >
            Visi & <em className="italic text-[#b8860b]">Misi</em>
          </h2>
        </div>

        {/* ── Visi ── */}
        <VisiBlock />

        <OrnamentDivider />

        {/* ── Misi ── */}
        <MisiBlock />
      </div>
    </section>
  );
}
