// lib/metadata.ts
import type { Metadata, Viewport } from "next";

const urlBase = "https://mulimekhanai.com";

export const viewportGlobal: Viewport = {
  themeColor: "#c69009",
  width: "device-width",
  initialScale: 1,
};

export const metadataGlobal: Metadata = {
  metadataBase: new URL(urlBase),
  authors: [
    { name: "Teknisee", url: "https://teknisee.com" },
    { name: "Muhammad Auziqni", url: "https://auziqni.com" },
  ],
  creator: "Teknisee",
  publisher: "Teknisee",
  referrer: "origin-when-cross-origin",
  // Metadata global (template)
  title: {
    default: "Muli Mekhanai Rajabasa | Gerakan Pemuda Berbudaya",
    template: "%s | Muli Mekhanai Rajabasa",
  },
  // Keyword di bawah ini hanya referensi, Google lebih mengandalkan deskripsi
  keywords: [
    "Muli",
    "Mekhanai",
    "meghanai",
    "Muli Mekhanai",
    "Muli Meghanai",
    "Muli Meghanai Rajabasa",
    "Muli Mekhanai Rajabasa",
    "Rajabasa",
    "Bandar Lampung",
    "Pemuda Lampung",

    "Budaya Lampung",
    "Tradisi Lampung",
    "Budaya Nusantara",
    "Lampung",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const metadataLanding: Metadata = {
  title: "Beranda", // Judul akan menjadi: "Beranda | Muli Mekhanai Rajabasa"
  description:
    "Wadah pemuda-pemudi Rajabasa, Bandar Lampung yang aktif melestarikan budaya Lampung melalui aksi sosial. Mari tumbuh, bersatu, dan berbudaya bersama kami.",
  openGraph: {
    title: "Muli Mekhanai Rajabasa | Gerakan Pemuda Berbudaya",
    description:
      "Wadah pemuda-pemudi Rajabasa, Bandar Lampung yang aktif melestarikan budaya Lampung.",
    url: urlBase,
    siteName: "Muli Mekhanai Rajabasa",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: `${urlBase}/og/mulimekhanai.png`,
        width: 1200,
        height: 630,
        alt: "Muli Mekhanai Rajabasa",
      },
    ],
  },
};

// Tambahkan metadata untuk halaman-halaman lainnya

export const metadataTentang: Metadata = {
  title: "Tentang Kami",
  description:
    "Kenali visi, misi, dan perjalanan Muli Mekhanai Rajabasa dalam mengabdi dan melestarikan budaya Lampung di Bandar Lampung.",
  openGraph: {
    title: "Tentang Muli Mekhanai Rajabasa",
    description:
      "Visi dan misi organisasi pemuda Rajabasa dalam aksi sosial dan budaya.",
    url: `${urlBase}/og/mulimekhanai.png`,
    siteName: "Muli Mekhanai Rajabasa",
    type: "website",
  },
};

export const metadataKegiatan: Metadata = {
  title: "Kegiatan & Agenda",
  description:
    "Jelajahi agenda kegiatan, aksi sosial, dan perayaan budaya yang diselenggarakan oleh Muli Mekhanai Rajabasa.",
  openGraph: {
    title: "Agenda Kegiatan Muli Mekhanai Rajabasa",
    description:
      "Daftar kegiatan sosial dan budaya pemuda Rajabasa, Bandar Lampung.",
    url: `${urlBase}/og/mulimekhanai.png`,
    siteName: "Muli Mekhanai Rajabasa",
    type: "website",
  },
};

export const metadataArtikel: Metadata = {
  title: "Artikel & Cerita",
  description:
    "Kumpulan artikel, opini, dan cerita inspiratif mengenai budaya Lampung serta gerakan sosial dari pemuda Rajabasa.",
  openGraph: {
    title: "Artikel & Cerita Pemuda Rajabasa",
    description:
      "Baca kisah dan pemikiran pemuda Rajabasa tentang budaya dan aksi sosial.",
    url: `${urlBase}/og/mulimekhanai.png`,
    siteName: "Muli Mekhanai Rajabasa",
    type: "article", // Gunakan 'article' untuk konten blog
  },
};

export const metadataKontak: Metadata = {
  title: "Hubungi Kami",
  description:
    "Ingin berkolaborasi atau mendukung aksi sosial Muli Mekhanai Rajabasa? Hubungi kami di sini.",
  openGraph: {
    title: "Kontak Muli Mekhanai Rajabasa",
    description: "Informasi kontak dan kolaborasi dengan pemuda Rajabasa.",
    url: `${urlBase}/og/mulimekhanai.png`,
    siteName: "Muli Mekhanai Rajabasa",
    type: "website",
  },
};
