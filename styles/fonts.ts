// styles/fonts.ts
import { Inter, Courgette, Comic_Neue } from "next/font/google";

// 1. Font Utama (UI, Navigasi, & Paragraf Standar)
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// 2. Font Aksen & Logo (Elegan)
export const courgette = Courgette({
  weight: "400", // Courgette secara bawaan hanya mendukung regular (400)
  subsets: ["latin"],
  display: "swap",
  variable: "--font-courgette",
});

// 3. Font Konten Artikel (Santai & Berjiwa Muda)
export const comicNeue = Comic_Neue({
  weight: ["300", "400", "700"], // Memberikan opsi ketebalan untuk heading & teks tebal di artikel
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comic-neue",
});
