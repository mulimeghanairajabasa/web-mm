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
    slug: "festival-tari",
    category: "Budaya & Tradisi",
    title:
      "Festival Tari Tradisional Rajabasa 2024: Merawat Gerak, Menjaga Makna",
    excerpt:
      "Ratusan penonton memadati lapangan Rajabasa untuk menyaksikan pertunjukan tari tradisional Lampung yang memukau. Tahun ini, generasi muda tampil lebih percaya diri membawa warisan leluhur ke panggung yang lebih besar.",
    author: "Muli Mekhanai",
    date: "10 Juni 2025",
    readTime: "5 menit baca",
    image: "/images/articles/tari.webp",
    featured: true,
  },
  {
    slug: "hubungan-keluarga-adat-lampung",
    category: "Budaya & Tradisi",
    title: "Hubungan Keluarga Adat Lampung: Menjaga Tradisi di Era Modern",
    excerpt:
      " Dalam masyarakat Lampung, keluarga adat memegang peranan penting dalam menjaga tradisi dan nilai-nilai budaya. Artikel ini membahas bagaimana masyrakat lampung menamai hubungan keluarga adat.",
    author: "Muli Mekhanai",
    date: "3 Mei 2025",
    readTime: "4 menit baca",
    image: "/images/articles/kerabat.webp",
  },
  {
    slug: "workshop-tapis-2025",
    category: "Kreativitas",
    title: "Workshop Tapis: Belajar Menenun Identitas dari Tangan Sendiri",
    excerpt:
      "Dua puluh peserta belajar langsung dari pengrajin senior bagaimana kain tapis Lampung ditenun dengan penuh kesabaran dan makna — satu benang sekaligus.",
    author: "Muli Mekhanai",
    date: "18 April 2025",
    readTime: "3 menit baca",
    image: "/images/articles/tapis.webp",
  },
];

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function EyebrowLine() {
  return (
    <span
      className="inline-block w-8 h-px bg-primary opacity-60"
      aria-hidden="true"
    />
  );
}

function MetaDot() {
  return (
    <span className="w-1 h-1 rounded-full bg-primary" aria-hidden="true" />
  );
}

/* ─────────────────────────────────────────────
   Feature Article (Left — 5/8 ratio)
───────────────────────────────────────────── */

function FeatureArticle({ article }: { article: ArticleData }) {
  return (
    <article
      className={cn(
        "group flex flex-col h-full",
        "bg-card border border-border overflow-hidden",
        "transition-colors duration-300 hover:border-primary",
      )}
    >
      {/* Image */}
      <div className="relative w-full aspect-4/3 md:aspect-auto md:flex-1 overflow-hidden bg-muted">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {article.featured && (
          <span
            className={cn(
              "absolute top-4 left-4",
              "bg-primary text-primary-foreground",
              "text-[10px] font-bold tracking-widest uppercase",
              "px-3 py-1.5 rounded-sm shadow-sm",
            )}
          >
            Unggulan
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-6 md:p-8">
        <p
          className={cn(
            "text-[10px] md:text-xs uppercase tracking-widest font-bold",
            "text-secondary",
          )}
        >
          {article.category}
        </p>

        <Link
          href={`/artikel/${article.slug}`}
          className={cn(
            "font-sans font-extrabold leading-tight",
            "text-foreground",
            "text-2xl md:text-3xl",
            "hover:text-primary transition-colors duration-200 line-clamp-3",
          )}
        >
          {article.title}
        </Link>

        {/* Menggunakan font-comic-neue untuk teks artikel */}
        <p
          className={cn(
            "font-comic-neue leading-relaxed line-clamp-3",
            "text-muted-foreground",
            "text-sm md:text-base",
          )}
        >
          {article.excerpt}
        </p>

        <div
          className={cn(
            "flex items-center flex-wrap gap-2 md:gap-3 mt-4 pt-4 border-t border-border/50",
            "text-xs font-medium text-muted-foreground",
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
        "group flex flex-col sm:flex-row flex-1",
        "bg-card border border-border overflow-hidden",
        "transition-colors duration-300 hover:border-primary",
      )}
    >
      {/* Thumbnail */}
      <div className="relative w-full sm:w-2/5 shrink-0 aspect-video sm:aspect-auto overflow-hidden bg-muted">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(max-width: 640px) 100vw, 30vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 gap-2.5 p-5 md:p-6 justify-center">
        <p
          className={cn(
            "text-[10px] uppercase tracking-widest font-bold",
            "text-secondary",
          )}
        >
          {article.category}
        </p>

        <Link
          href={`/artikel/${article.slug}`}
          className={cn(
            "font-sans font-extrabold leading-tight",
            "text-foreground",
            "text-lg md:text-xl",
            "hover:text-primary transition-colors duration-200 line-clamp-2",
          )}
        >
          {article.title}
        </Link>

        {/* Menggunakan font-comic-neue untuk teks artikel */}
        <p
          className={cn(
            "font-comic-neue leading-relaxed line-clamp-2",
            "text-muted-foreground",
            "text-sm",
          )}
        >
          {article.excerpt}
        </p>

        <div
          className={cn(
            "flex items-center flex-wrap gap-2 mt-2 pt-2",
            "text-[11px] font-medium text-muted-foreground",
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
    <section className={cn("bg-muted", "px-6 md:px-10 py-20 md:py-32")}>
      {/* ── Header ── */}
      <div
        className={cn(
          "flex flex-col sm:flex-row sm:items-end justify-between",
          "max-w-6xl mx-auto mb-10 md:mb-12",
          "gap-6",
        )}
      >
        <div>
          <p
            className={cn(
              "inline-flex items-center gap-3 mb-4",
              "text-[10px] md:text-xs tracking-widest uppercase font-bold",
              "text-primary",
            )}
          >
            <EyebrowLine />
            Berita &amp; Cerita
          </p>
          <h2
            className={cn(
              "font-sans font-extrabold leading-tight",
              "text-foreground",
              "text-3xl md:text-4xl lg:text-5xl",
            )}
          >
            Artikel{" "}
            <em className="font-courgette font-normal not-italic text-primary">
              Terbaru
            </em>
          </h2>
        </div>

        <Link
          href="/artikel"
          className={cn(
            "inline-flex items-center gap-2 pb-1",
            "text-xs md:text-sm font-bold tracking-widest uppercase",
            "text-primary border-b-2 border-primary",
            "hover:text-foreground hover:border-foreground transition-colors duration-300",
            "whitespace-nowrap",
          )}
        >
          Lihat Semua →
        </Link>
      </div>

      {/* ── Article Grid ── */}
      <div
        className={cn(
          "grid max-w-6xl mx-auto gap-6 lg:gap-8",
          "grid-cols-1 lg:grid-cols-[5fr_4fr]", // Penyesuaian grid untuk layar lebar
          "items-stretch",
        )}
      >
        {/* Left: feature */}
        <FeatureArticle article={feature} />

        {/* Right: two stacked */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {stacked.map((article) => (
            <StackedArticle key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
