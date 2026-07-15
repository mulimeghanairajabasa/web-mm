// app/layout.tsx
import { metadataGlobal, viewportGlobal } from "@/lib/metadata";
import { organizationSchema } from "@/lib/json-ld";
import { inter, courgette, comicNeue } from "@/styles/fonts";
import "./globals.css";

export const viewport = viewportGlobal;
export const metadata = metadataGlobal;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${courgette.variable} ${comicNeue.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
