// lib/json-ld.ts
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Muli Mekhanai Rajabasa",
  url: "https://mulimekhanai.com",
  logo: "https://mulimekhanai.com/images/logo.png", // Sesuaikan path logo
  description:
    "Wadah pemuda-pemudi Rajabasa, Bandar Lampung yang aktif melestarikan budaya Lampung melalui aksi sosial.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Rajabasa",
    addressRegion: "Bandar Lampung",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    // Tambahkan email atau telp jika ada
  },
  sameAs: [
    // Tambahkan link sosial media Anda di sini
    "https://www.tiktok.com/@muli_meghanai_rajabasain",
    "https://www.instagram.com/mulimekhanai_rajabasa/",
  ],
};
