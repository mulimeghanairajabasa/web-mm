import { cn } from "@/lib/utils";

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
    <div className="flex items-center gap-3 my-8" aria-hidden="true">
      <span className="w-12 h-px bg-[#e5e5e5]" />
      <span className="w-[5px] h-[5px] rounded-full bg-[#8b0000]" />
      <span className="w-12 h-px bg-[#e5e5e5]" />
    </div>
  );
}

function DropCap({ char }: { char: string }) {
  return (
    <span
      className={cn(
        "float-left font-serif font-bold leading-none",
        "text-[#b8860b]",
        "text-[clamp(52px,6vw,72px)]",
        "mr-3 mt-1",
      )}
      aria-hidden="true"
    >
      {char}
    </span>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className={cn(
        "relative my-10 px-8 py-6",
        "border-l-2 border-[#b8860b]",
        "bg-[#fdf8ee]",
      )}
    >
      <p
        className={cn(
          "font-serif italic font-normal leading-[1.7]",
          "text-[#1a1a1a]",
          "text-[clamp(16px,2vw,22px)]",
        )}
      >
        {children}
      </p>
    </blockquote>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 mb-4",
        "text-[10px] uppercase tracking-[0.25em] font-medium",
        "text-[#8b0000]",
      )}
    >
      <span className="inline-block w-4 h-px bg-[#8b0000]" aria-hidden="true" />
      {children}
    </p>
  );
}

function Paragraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-light leading-[1.95]",
        "text-[#404040]",
        "text-[clamp(14px,1.5vw,17px)]",
        className,
      )}
    >
      {children}
    </p>
  );
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function KilasBalikSection() {
  return (
    <section className={cn("bg-background", "px-[5%] py-[10vh]")}>
      <div className="max-w-[740px] mx-auto">
        {/* ── Header ── */}
        <div className="mb-10">
          <p
            className={cn(
              "inline-flex items-center gap-3 mb-5",
              "text-[clamp(10px,1.1vw,12px)] tracking-[0.28em] uppercase font-medium",
              "text-[#b8860b]",
            )}
          >
            <EyebrowLine />
            Kilas Balik
          </p>

          <h2
            className={cn(
              "font-serif font-bold leading-[1.15] tracking-[-0.01em]",
              "text-foreground",
              "text-[clamp(28px,4vw,48px)]",
            )}
          >
            Dari Keresahan,{" "}
            <em className="italic text-[#b8860b]">Lahir Gerakan</em>
          </h2>
        </div>

        <OrnamentRule />

        {/* ── Bagian 1: Masalah ── */}
        <div className="mb-10">
          <SectionLabel>Awal Mula</SectionLabel>

          <Paragraph>
            <DropCap char="R" />
            ajabasa, sebuah kecamatan di jantung Kota Bandar Lampung, menyimpan
            kekayaan budaya yang dalam — tapi juga menyimpan keresahan yang tak
            kalah besar. Di penghujung tahun 2016, sekelompok anak muda melihat
            hal yang sama: generasi mereka tumbuh tanpa akar. Tradisi Lampung
            yang kaya mulai terasa asing di telinga anak-anak kampung sendiri.
            Bahasa daerah jarang terdengar, seni tari dan musik leluhur makin
            sepi peminat, dan yang lebih mengkhawatirkan — semangat gotong
            royong di tengah masyarakat perlahan meredup.
          </Paragraph>

          <Paragraph className="mt-5">
            Di sisi lain, banyak pemuda Rajabasa yang sebenarnya memiliki energi
            dan keinginan untuk bergerak — tapi tidak tahu harus bergerak ke
            mana. Tidak ada wadah. Tidak ada ruang yang mengumpulkan mereka,
            mengarahkan semangat itu menjadi sesuatu yang nyata dan bermakna
            bagi lingkungan sekitar.
          </Paragraph>
        </div>

        {/* ── Pull Quote ── */}
        <PullQuote>
          Kami tidak ingin menjadi generasi yang hanya menonton budayanya
          sendiri punah dari kejauhan.
        </PullQuote>

        {/* ── Bagian 2: Jawaban ── */}
        <div className="mb-10">
          <SectionLabel>Titik Balik</SectionLabel>

          <Paragraph>
            Dari keresahan itulah, pada tahun{" "}
            <strong className="font-medium text-foreground">2017</strong>, Muli
            Mekhanai Rajabasa resmi berdiri. Bukan dengan modal besar, bukan
            dengan gedung megah — hanya dengan tekad sekelompok muda-mudi yang
            sepakat bahwa perubahan harus dimulai dari diri sendiri dan
            lingkungan terdekat. Nama{" "}
            <em className="italic text-[#b8860b]">Muli Mekhanai</em> dipilih
            bukan tanpa alasan — dalam bahasa Lampung, ia berarti gadis dan
            bujang, simbol dari generasi muda yang menjadi tulang punggung
            peradaban.
          </Paragraph>

          <Paragraph className="mt-5">
            Langkah pertama mereka sederhana: berkumpul, berdiskusi, lalu turun
            ke jalan. Mereka mengadakan kegiatan bersih lingkungan bersama
            warga, menghidupkan kembali permainan tradisional anak-anak kampung,
            dan memperkenalkan kembali tari-tarian Lampung kepada adik-adik
            mereka yang hampir tidak mengenalnya.
          </Paragraph>
        </div>

        {/* ── Bagian 3: Tumbuh ── */}
        <div className="mb-10">
          <SectionLabel>Tumbuh Bersama Masyarakat</SectionLabel>

          <Paragraph>
            Tahun berganti tahun, Muli Mekhanai Rajabasa tumbuh bukan hanya
            sebagai organisasi — melainkan sebagai bagian dari kehidupan warga
            Rajabasa itu sendiri. Program demi program lahir dari kebutuhan
            nyata di lapangan: bakti sosial untuk keluarga kurang mampu,
            pelatihan kerajinan tapis bagi pemuda putus sekolah, hingga festival
            budaya tahunan yang kini menjadi agenda yang ditunggu-tunggu oleh
            seluruh lapisan masyarakat.
          </Paragraph>

          <Paragraph className="mt-5">
            Yang membuat Muli Mekhanai berbeda bukan sekadar kegiatan yang
            mereka jalankan — melainkan cara mereka menjalankannya. Setiap
            program selalu berangkat dari satu pertanyaan sederhana:{" "}
            <strong className="font-medium text-foreground">
              Apa yang benar-benar dibutuhkan masyarakat kami hari ini?
            </strong>{" "}
            Dari sanalah lahir kepercayaan. Dari kepercayaan itulah, gerakan ini
            terus hidup.
          </Paragraph>
        </div>

        <OrnamentRule />

        {/* ── Penutup ── */}
        <Paragraph className="text-center text-[#737373] italic">
          Hari ini, Muli Mekhanai Rajabasa berdiri sebagai bukti bahwa anak muda
          daerah — ketika diberi ruang dan arah — mampu menjadi kekuatan yang
          menggerakkan, bukan sekadar generasi yang menunggu.
        </Paragraph>
      </div>
    </section>
  );
}
