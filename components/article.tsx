import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────
   Types & Data
───────────────────────────────────────────── */

interface ArticleData {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime?: string;
  image: string;
  featured?: boolean;
}

const articles: ArticleData[] = [
  {
    slug: "festival-tari-2024",
    category: "Budaya & Tradisi",
    title:
      "Festival Tari Tradisional Rajabasa 2024: Merawat Gerak, Menjaga Makna",
    excerpt:
      "Ratusan penonton memadati lapangan Rajabasa untuk menyaksikan pertunjukan tari tradisional Lampung yang memukau. Tahun ini, generasi muda tampil lebih percaya diri membawa warisan leluhur ke panggung yang lebih besar.",
    author: "Muli Mekhanai",
    date: "10 Juni 2025",
    readTime: "5 menit baca",
    image: "/images/articles/festival-tari.jpg",
    featured: true,
  },
  {
    slug: "baksos-rajabasa-2025",
    category: "Aksi Sosial",
    title: "Bakti Sosial Rajabasa: Satu Hari, Ratusan Keluarga Terbantu",
    excerpt:
      "Kegiatan bakti sosial tahunan kami kembali hadir membawa bantuan sembako, pemeriksaan kesehatan gratis, dan semangat gotong royong untuk warga Rajabasa Jaya.",
    author: "Muli Mekhanai",
    date: "3 Mei 2025",
    image: "/images/articles/baksos.jpg",
  },
  {
    slug: "workshop-tapis-2025",
    category: "Kreativitas",
    title: "Workshop Tapis: Belajar Menenun Identitas dari Tangan Sendiri",
    excerpt:
      "Dua puluh peserta belajar langsung dari pengrajin senior bagaimana kain tapis Lampung ditenun dengan penuh kesabaran dan makna — satu benang sekaligus.",
    author: "Muli Mekhanai",
    date: "18 April 2025",
    image: "/images/articles/workshop-tapis.jpg",
  },
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

function MetaDot() {
  return (
    <span
      className="w-[3px] h-[3px] rounded-full bg-[#b8860b]"
      aria-hidden="true"
    />
  );
}

/* ─────────────────────────────────────────────
   Feature Article (Left — 3/8)
───────────────────────────────────────────── */

function FeatureArticle({ article }: { article: ArticleData }) {
  return (
    <article
      className={cn(
        "group flex flex-col h-full",
        "bg-card border border-border overflow-hidden",
        "transition-colors duration-250 hover:border-[#b8860b]",
      )}
    >
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 700px) 100vw, 30vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        {article.featured && (
          <span
            className={cn(
              "absolute top-3 left-3",
              "bg-[#b8860b] text-[#1a1a1a]",
              "text-[9px] font-medium tracking-[0.15em] uppercase",
              "px-[10px] py-1",
            )}
          >
            Unggulan
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 gap-[10px] p-6">
        <p
          className={cn(
            "text-[10px] uppercase tracking-[0.2em] font-medium",
            "text-[#8b0000]",
          )}
        >
          {article.category}
        </p>

        <Link
          href={`/artikel/${article.slug}`}
          className={cn(
            "font-serif font-bold leading-[1.25]",
            "text-foreground",
            "text-[clamp(18px,2vw,24px)]",
            "hover:text-[#b8860b] transition-colors duration-200",
          )}
        >
          {article.title}
        </Link>

        <p
          className={cn(
            "font-light leading-[1.75] line-clamp-3",
            "text-[#525252]",
            "text-[clamp(12px,1.2vw,13px)]",
          )}
        >
          {article.excerpt}
        </p>

        <div
          className={cn(
            "flex items-center gap-3 mt-auto pt-2",
            "text-[11px] text-[#737373]",
          )}
        >
          <span>{article.author}</span>
          <MetaDot />
          <span>{article.date}</span>
          {article.readTime && (
            <>
              <MetaDot />
              <span>{article.readTime}</span>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────
   Stacked Article Card (Right — each)
───────────────────────────────────────────── */

function StackedArticle({ article }: { article: ArticleData }) {
  return (
    <article
      className={cn(
        "group flex flex-row flex-1",
        "bg-card border border-border overflow-hidden",
        "transition-colors duration-250 hover:border-[#b8860b]",
      )}
    >
      {/* Thumbnail */}
      <div className="relative flex-[0_0_38%] overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 700px) 100vw, 20vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 gap-2 p-5 justify-center">
        <p
          className={cn(
            "text-[10px] uppercase tracking-[0.2em] font-medium",
            "text-[#8b0000]",
          )}
        >
          {article.category}
        </p>

        <Link
          href={`/artikel/${article.slug}`}
          className={cn(
            "font-serif font-bold leading-[1.25]",
            "text-foreground",
            "text-[clamp(15px,1.6vw,19px)]",
            "hover:text-[#b8860b] transition-colors duration-200",
          )}
        >
          {article.title}
        </Link>

        <p
          className={cn(
            "font-light leading-[1.75] line-clamp-3",
            "text-[#525252]",
            "text-[clamp(12px,1.2vw,13px)]",
          )}
        >
          {article.excerpt}
        </p>

        <div
          className={cn(
            "flex items-center gap-3 mt-auto pt-1",
            "text-[11px] text-[#737373]",
          )}
        >
          <span>{article.author}</span>
          <MetaDot />
          <span>{article.date}</span>
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function ArticlesSection() {
  const [feature, ...stacked] = articles;

  return (
    <section className={cn("bg-muted", "px-[5%] py-[10vh]")}>
      {/* ── Header ── */}
      <div
        className={cn(
          "flex items-end justify-between",
          "max-w-[1100px] mx-auto mb-[4vh]",
          "gap-4 flex-wrap",
        )}
      >
        <div>
          <p
            className={cn(
              "inline-flex items-center gap-3 mb-3",
              "text-[clamp(10px,1.1vw,12px)] tracking-[0.28em] uppercase font-medium",
              "text-[#b8860b]",
            )}
          >
            <EyebrowLine />
            Berita &amp; Cerita
          </p>
          <h2
            className={cn(
              "font-serif font-bold leading-[1.15]",
              "text-foreground",
              "text-[clamp(26px,3.5vw,44px)]",
            )}
          >
            Artikel <em className="italic text-[#b8860b]">Terbaru</em>
          </h2>
        </div>

        <Link
          href="/artikel"
          className={cn(
            "inline-flex items-center gap-2 pb-1",
            "text-[11px] font-medium tracking-[0.15em] uppercase",
            "text-[#b8860b] border-b border-[#b8860b]",
            "hover:opacity-70 transition-opacity duration-200",
            "whitespace-nowrap",
          )}
        >
          Lihat Semua →
        </Link>
      </div>

      {/* ── Article Grid — 5/8 | 3/8 ── */}
      <div
        className={cn(
          "grid max-w-[1100px] mx-auto gap-5",
          "grid-cols-1 md:grid-cols-[5fr_3fr]",
          "items-stretch",
        )}
      >
        {/* Left: feature */}
        <FeatureArticle article={feature} />

        {/* Right: two stacked */}
        <div className="flex flex-col gap-5">
          {stacked.map((article) => (
            <StackedArticle key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
