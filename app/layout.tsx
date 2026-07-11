import type { Metadata } from "next";
import { inter, courgette, comicNeue } from "@/styles/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muli Mekhanai",
  description: "Website Anak Muda lampung",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${courgette.variable} ${comicNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
