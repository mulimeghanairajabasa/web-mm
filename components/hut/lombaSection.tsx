"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Calendar, Clock, MapPin, Plus, ArrowUpRight } from "lucide-react";
import Image from "next/image";

/* ─────────────────────────────────────────────
   Types & Mock Data
───────────────────────────────────────────── */

type EventCategory = "Lomba" | "Pertunjukan" | "Upacara" | "Pameran";

interface EventItem {
  id: number;
  title: string;
  category: EventCategory;
  status: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string; // Optional: URL for the event image
}

/* Diurutkan kronologis, 7 Agustus → 29 Agustus 2026.
   Acara berpasangan dengan rentang tanggal sama (Mobile Legend & Mancing,
   Bola & Gaple) masing-masing berlangsung sepanjang rentang penuh.
   Acara di tanggal 17 Agustus dibedakan lewat jam agar tidak tumpang tindih. */
const EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Lomba Bola Antar RT",
    category: "Lomba",
    status: "Tersedia",
    date: "7 - 9 Agustus 2026",
    time: "15:00 - Selesai",
    location: "Lapangan Bola Rajabasa",
    description:
      "Turnamen sepak bola antar RT yang digelar selama tiga hari. Ajang unjuk kekompakan sekaligus pemanasan menyambut bulan kemerdekaan.",
    imageUrl: "/images/acara/lomba-bola.webp",
  },
  {
    id: 2,
    title: "Turnamen Gaple",
    category: "Lomba",
    status: "Tersedia",
    date: "7 - 9 Agustus 2026",
    time: "19:00 - Selesai",
    location: "Balai Desa Rajabasa",
    description:
      "Turnamen kartu domino klasik yang jadi favorit warga tiap malam. Bawa pasanganmu dan buktikan siapa yang paling jitu membaca kartu.",
    imageUrl: "/images/acara/lomba-gaple.webp",
  },
  {
    id: 3,
    title: "Turnamen Mobile Legend",
    category: "Lomba",
    status: "Tersedia",
    date: "12 - 15 Agustus 2026",
    time: "19:00 - Selesai",
    location: "Balai Desa Rajabasa",
    description:
      "Turnamen E-Sport antar pemuda desa berlangsung empat hari beruntun. Bawa tim terbaikmu dan rebut gelar juara MMR!",
    imageUrl: "/images/acara/lomba-ml.webp",
  },
  {
    id: 4,
    title: "Lomba Mancing",
    category: "Lomba",
    status: "Tersedia",
    date: "12 - 15 Agustus 2026",
    time: "06:00 - Selesai",
    location: "Kolam Pemancingan Rajabasa",
    description:
      "Adu sabar dan strategi memancing selama empat hari, dengan hadiah untuk perolehan ikan terberat tiap harinya.",
    imageUrl: "/images/acara/lomba-mancing.webp",
  },
  {
    id: 5,
    title: "Lomba Anak-Anak",
    category: "Lomba",
    status: "Tersedia",
    date: "16 Agustus 2026",
    time: "08:00 WIB",
    location: "Lapangan Utama Rajabasa",
    description:
      "Serangkaian permainan tradisional untuk si kecil: balap kelereng, makan kerupuk, hingga estafet karet gelang.",
    imageUrl: "/images/acara/lomba-anak.webp",
  },
  {
    id: 6,
    title: "Upacara Bendera Kemerdekaan",
    category: "Upacara",
    status: "Tersedia",
    date: "17 Agustus 2026",
    time: "07:00 WIB",
    location: "Lapangan Utama Rajabasa",
    description:
      "Upacara pengibaran bendera sang saka merah putih memperingati HUT RI ke-81, dibuka untuk seluruh warga desa.",
    imageUrl: "/images/acara/upacara.webp",
  },
  {
    id: 7,
    title: "Pawai Kemerdekaan",
    category: "Pertunjukan",
    status: "Tersedia",
    date: "17 Agustus 2026",
    time: "09:00 WIB",
    location: "Sepanjang Jalan Desa",
    description:
      "Arak-arakan warga, pelajar, dan komunitas adat menyusuri jalan desa dengan kostum merah putih dan atribut budaya Lampung.",
    imageUrl: "/images/acara/pawai.webp",
  },
  {
    id: 8,
    title: "Tumpengan Bersama",
    category: "Upacara",
    status: "Tersedia",
    date: "17 Agustus 2026",
    time: "12:00 WIB",
    location: "Balai Desa Rajabasa",
    description:
      "Pemotongan tumpeng sebagai rasa syukur atas kemerdekaan, dilanjutkan makan bersama seluruh warga.",
    imageUrl: "/images/acara/tumpeng.webp",
  },
  {
    id: 9,
    title: "Pidato Kebangsaan",
    category: "Upacara",
    status: "Tersedia",
    date: "17 Agustus 2026",
    time: "15:00 WIB",
    location: "Balai Desa Rajabasa",
    description:
      "Sambutan dan renungan kebangsaan dari tokoh masyarakat, mengajak generasi muda merawat semangat proklamasi.",
    imageUrl: "/images/acara/lomba-pidato.webp",
  },
  {
    id: 10,
    title: "Tari Ngigel",
    category: "Pertunjukan",
    status: "Tersedia",
    date: "17 Agustus 2026",
    time: "19:30 WIB",
    location: "Panggung Utama",
    description:
      "Pertunjukan tari tradisional Lampung yang sarat gerak penuh wibawa, menutup rangkaian acara 17 Agustus dengan khidmat.",
    imageUrl: "/images/acara/tari-ngigel.webp",
  },
  {
    id: 11,
    title: "Turnamen Badminton",
    category: "Lomba",
    status: "Tersedia",
    date: "19 - 21 Agustus 2026",
    time: "16:00 - Selesai",
    location: "GOR Rajabasa",
    description:
      "Turnamen bulu tangkis tiga hari untuk kategori tunggal dan ganda, terbuka bagi seluruh warga desa dan sekitarnya.",
    imageUrl: "/images/acara/lomba-badminton.webp",
  },
  {
    id: 12,
    title: "Tari Kreasi",
    category: "Pertunjukan",
    status: "Tersedia",
    date: "22 Agustus 2026",
    time: "19:00 WIB",
    location: "Panggung Utama",
    description:
      "Penampilan tari kreasi modern hasil karya sanggar muda desa, memadukan gerak kontemporer dengan nuansa budaya lokal.",
    imageUrl: "/images/acara/tari-kreasi.webp",
  },
  {
    id: 13,
    title: "Malam Puncak",
    category: "Pertunjukan",
    status: "Tersedia",
    date: "29 Agustus 2026",
    time: "20:00 WIB",
    location: "Panggung Utama",
    description:
      "Acara penutup rangkaian HUT RI ke-81: hiburan musik, penampilan bintang tamu, dan pembagian hadiah bagi para pemenang lomba.",
    imageUrl: "/images/acara/puncak.webp",
  },
];

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */

function getCategoryColor(category: EventCategory) {
  switch (category) {
    case "Lomba":
      return "bg-blue-500 text-white";
    case "Pertunjukan":
      return "bg-green-500 text-white";
    case "Upacara":
      return "bg-red-500 text-white";
    case "Pameran":
      return "bg-orange-500 text-white";
    default:
      return "bg-gray-500 text-white";
  }
}

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function SectionLomba() {
  return (
    <section id="agenda-acara" className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mb-12">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Agenda & Perlombaan
          </h2>
          <p className="font-normal text-base text-gray-600 leading-relaxed">
            Jangan lewatkan berbagai acara menarik dalam rangka memperingati HUT
            RI ke-81. Daftarkan diri Anda dan rayakan kemerdekaan bersama Muli
            Mekhanai Rajabasa!
          </p>
        </div>

        {/* ── Grid Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-shadow hover:shadow-md"
            >
              {/* ── Image Area (Mock Placeholder) ── */}
              <div className="relative w-full h-40 bg-blue-800">
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />

                {/* Badges */}
                <div
                  className={cn(
                    "absolute top-4 left-4 rounded-full px-3 py-1 text-[11px] font-semibold",
                    getCategoryColor(event.category),
                  )}
                >
                  {event.category}
                </div>
                <div className="absolute top-4 right-4 rounded-full px-3 py-1 text-[11px] font-semibold bg-white text-gray-800 shadow-sm">
                  {event.status}
                </div>
              </div>

              {/* ── Content Area ── */}
              <div className="p-5 flex flex-col grow">
                <h3 className="font-bold text-lg text-gray-900 mb-4 leading-tight">
                  {event.title}
                </h3>

                {/* Meta List */}
                <div className="space-y-2.5 mb-4">
                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-[#E12828] shrink-0" />
                    <span className="truncate">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-[#E12828] shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-[#E12828] shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2 mb-6">
                  {event.description}
                </p>

                {/* ── Footer Card: Actions ── */}
                <div className="mt-auto flex items-center gap-3">
                  <button
                    className="flex-1 bg-[#E12828] text-white rounded-lg py-2.5 flex justify-center items-center hover:bg-red-700 transition"
                    aria-label="Daftar Acara"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                  <button
                    className="w-11 h-11 border border-[#E12828] text-[#E12828] rounded-lg flex justify-center items-center hover:bg-red-50 transition shrink-0"
                    aria-label="Lihat Detail"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
