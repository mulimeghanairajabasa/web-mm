import Image from "next/image";
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import SponsorSection from "@/components/sponsor";

/* ─────────────────────────────────────────────
   Types & Data
───────────────────────────────────────────── */

interface SocialMedia {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialMediaList: SocialMedia[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/mulimeghanai/",
    icon: <FaInstagram size={18} />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/mulimeghanai",
    icon: <FaFacebook size={18} />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@mulimeghanai",
    icon: <FaYoutube size={18} />,
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

function SocialMediaItem({ item }: { item: SocialMedia }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={item.name}
      className={cn(
        "inline-flex items-center gap-3",
        "text-white/50 hover:text-[#b8860b]",
        "transition-colors duration-200",
      )}
    >
      <div
        className={cn(
          "w-9 h-9 border border-white/10 shrink-0",
          "flex items-center justify-center",
          "transition-colors duration-200",
          "hover:border-[#b8860b]",
        )}
      >
        {item.icon}
      </div>
      <span
        className={cn(
          "font-light tracking-[0.05em]",
          "text-[clamp(12px,1.2vw,14px)]",
        )}
      >
        {item.name}
      </span>
    </a>
  );
}

/* ─────────────────────────────────────────────
   Contact Section
───────────────────────────────────────────── */

function ContactUs() {
  return (
    <section className={cn("bg-background", "px-[5%] py-[10vh]")}>
      {/* ── Main: Image + Form ── */}
      <div
        id="contact-container"
        className={cn(
          "flex flex-col md:flex-row",
          "max-w-[1100px] mx-auto",
          "border border-border overflow-hidden",
        )}
      >
        {/* Image */}
        <div
          id="image-container"
          className={cn(
            "relative shrink-0",
            "w-full md:w-[42%]",
            "min-h-[280px] md:min-h-[560px]",
          )}
        >
          <Image
            src="/images/kontak.jpg"
            alt="Kantor Muli Mekhanai Rajabasa"
            fill
            sizes="(max-width: 768px) 100vw, 42vw"
            className="object-cover"
          />

          {/* Overlay teks di atas gambar */}
          <div
            className={cn(
              "absolute inset-0",
              "bg-gradient-to-t from-black/70 via-black/20 to-transparent",
              "flex flex-col justify-end p-8",
            )}
          >
            <p
              className={cn(
                "text-[10px] uppercase tracking-[0.25em] font-medium mb-2",
                "text-[#b8860b]",
              )}
            >
              Lokasi Kami
            </p>
            <p
              className={cn(
                "font-serif font-bold leading-[1.3]",
                "text-white",
                "text-[clamp(16px,2vw,22px)]",
              )}
            >
              Rajabasa,
              <br />
              Bandar Lampung
            </p>
          </div>
        </div>

        {/* Form */}
        <div
          id="content-container"
          className={cn(
            "flex flex-col flex-1",
            "px-8 md:px-12 py-10",
            "bg-card",
          )}
        >
          {/* Header form */}
          <p
            className={cn(
              "inline-flex items-center gap-3 mb-4",
              "text-[clamp(10px,1.1vw,12px)] tracking-[0.28em] uppercase font-medium",
              "text-[#b8860b]",
            )}
          >
            <EyebrowLine />
            Kirim Pesan
          </p>

          <h2
            className={cn(
              "font-serif font-bold leading-[1.15] tracking-[-0.01em]",
              "text-foreground mb-8",
              "text-[clamp(24px,3vw,36px)]",
            )}
          >
            Hubungi <em className="italic text-[#b8860b]">Kami</em>
          </h2>

          {/* Form */}
          <form id="contact-form" className="flex flex-col gap-4 flex-1">
            <input
              type="text"
              placeholder="Nama Lengkap"
              className={cn(
                "w-full border border-border bg-background",
                "px-4 py-3",
                "text-[clamp(13px,1.3vw,15px)] font-light text-foreground",
                "placeholder:text-[#737373]",
                "outline-none",
                "focus:border-[#b8860b]",
                "transition-colors duration-200",
              )}
            />

            <input
              type="tel"
              placeholder="Nomor Telepon"
              className={cn(
                "w-full border border-border bg-background",
                "px-4 py-3",
                "text-[clamp(13px,1.3vw,15px)] font-light text-foreground",
                "placeholder:text-[#737373]",
                "outline-none",
                "focus:border-[#b8860b]",
                "transition-colors duration-200",
              )}
            />

            <textarea
              placeholder="Tulis pesan Anda..."
              rows={5}
              className={cn(
                "w-full border border-border bg-background",
                "px-4 py-3 resize-none",
                "text-[clamp(13px,1.3vw,15px)] font-light text-foreground",
                "placeholder:text-[#737373]",
                "outline-none",
                "focus:border-[#b8860b]",
                "transition-colors duration-200",
              )}
            />

            <button
              type="submit"
              className={cn(
                "inline-flex items-center justify-center gap-2 mt-2",
                "bg-[#b8860b] text-[#1a1a1a]",
                "px-8 py-[14px]",
                "text-[12px] font-medium tracking-[0.15em] uppercase",
                "transition-colors duration-250",
                "hover:bg-[#d4a017]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b8860b]",
              )}
            >
              Kirim Pesan
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      </div>

      {/* ── Social Media ── */}
      <div
        className={cn(
          "max-w-[1100px] mx-auto mt-[6vh]",
          "bg-[#1a1a1a]",
          "px-8 md:px-12 py-8",
          "flex flex-col sm:flex-row items-start sm:items-center",
          "gap-6 sm:gap-0 justify-between",
        )}
      >
        <div>
          <p
            className={cn(
              "text-[10px] uppercase tracking-[0.25em] font-medium mb-1",
              "text-[#b8860b]",
            )}
          >
            Temukan Kami
          </p>
          <h3
            className={cn(
              "font-serif font-bold",
              "text-white",
              "text-[clamp(16px,2vw,22px)]",
            )}
          >
            Media Sosial Kami
          </h3>
        </div>

        <div
          id="social-media-list"
          className="flex flex-col sm:flex-row gap-4 sm:gap-8"
        >
          {socialMediaList.map((item) => (
            <SocialMediaItem key={item.name} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */

export default function Kontak() {
  return (
    <main>
      <Header />
      <ContactUs />
      <SponsorSection />
    </main>
  );
}
