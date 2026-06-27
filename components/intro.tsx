import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */

interface StatItemProps {
  number: string;
  label: string;
}

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

function OrnamentRule() {
  return (
    <div className="flex items-center gap-3 mb-8" aria-hidden="true">
      <span className="w-12 h-px bg-[#e5e5e5]" />
      <span className="w-[5px] h-[5px] rounded-full bg-[#8b0000]" />
      <span className="w-12 h-px bg-[#e5e5e5]" />
    </div>
  );
}

function StatItem({ number, label }: StatItemProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className={cn(
          "font-serif font-bold leading-none",
          "text-[#b8860b]",
          "text-[clamp(28px,4vw,44px)]",
        )}
      >
        {number}
      </span>
      <span
        className={cn(
          "uppercase tracking-[0.15em] font-medium",
          "text-[#737373]",
          "text-[clamp(10px,1vw,12px)]",
        )}
      >
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

const stats: StatItemProps[] = [
  { number: "2017", label: "Berdiri Sejak" },
  { number: "7+", label: "Tahun Berkarya" },
  { number: "100%", label: "Berbasis Budaya" },
];

export default function IntroSection() {
  return (
    <section
      className={cn(
        "bg-background",
        "flex flex-col items-center text-center",
        "px-[5%] py-[10vh]",
      )}
    >
      {/* ── Eyebrow ── */}
      <p
        className={cn(
          "inline-flex items-center gap-3",
          "mb-5",
          "text-[clamp(10px,1.1vw,12px)] tracking-[0.28em] uppercase font-medium",
          "text-[#b8860b]",
        )}
      >
        <EyebrowLine />
        Tabik Pun!
        <EyebrowLine />
      </p>

      {/* ── Title ── */}
      <h2
        className={cn(
          "font-serif font-bold leading-[1.15] tracking-[-0.01em]",
          "text-foreground",
          "text-[clamp(32px,5vw,58px)]",
          "mb-8",
        )}
      >
        Ikam <span className="text-[#b8860b] italic"> Muli Mekhanai</span>
      </h2>

      {/* ── Ornament Rule ── */}
      <OrnamentRule />

      {/* ── Body Paragraph ── */}
      <p
        className={cn(
          "font-light leading-[1.9]",
          "text-[#404040]",
          "text-[clamp(14px,1.5vw,17px)]",
          "max-w-[680px]",
        )}
      >
        Sejak <strong className="font-medium text-foreground">2017</strong>,
        kami hadir sebagai organisasi pemuda yang aktif dan kreatif di tengah
        masyarakat Rajabasa — bukan sekadar berkumpul, melainkan bergerak. Kami
        tumbuh dari akar{" "}
        <strong className="font-medium text-foreground">budaya Lampung</strong>{" "}
        yang kuat; tradisi, seni, dan kearifan lokal menjadi fondasi setiap
        langkah yang kami ambil. Dari kegiatan sosial di lapangan hingga
        pelestarian warisan leluhur, kami ada di garis depan — bersama warga,
        untuk warga. Muli Mekhanai Rajabasa bukan hanya nama, melainkan{" "}
        <strong className="font-medium text-foreground">
          komitmen generasi muda
        </strong>{" "}
        untuk menjaga identitas sambil menatap masa depan yang lebih gemilang.
      </p>

      {/* ── Stats ── */}
      <div
        className={cn(
          "flex gap-[clamp(32px,5vw,72px)]",
          "mt-[5vh] pt-[4vh]",
          "border-t border-[#e5e5e5]",
        )}
      >
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
