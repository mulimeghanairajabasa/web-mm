"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Calendar, Clock, MapPin, Plus, ArrowUpRight } from "lucide-react";

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
  progress: number;
}

const MOCK_EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Lomba E-Sport Mobile Legends",
    category: "Lomba",
    status: "Tersedia",
    date: "Sabtu, 15 Agustus 2026",
    time: "19:00 WIB",
    location: "Balai Desa Rajabasa",
    description:
      "Turnamen E-Sport antar pemuda desa dengan total hadiah jutaan rupiah. Bawa tim terbaikmu!",
    progress: 85,
  },
  {
    id: 2,
    title: "Upacara Bendera Kemerdekaan",
    category: "Upacara",
    status: "Tersedia",
    date: "Senin, 17 Agustus 2026",
    time: "07:00 WIB",
    location: "Lapangan Utama Rajabasa",
    description:
      "Upacara pengibaran bendera sang saka merah putih memperingati HUT RI ke-81.",
    progress: 40,
  },
  {
    id: 3,
    title: "Tari Sigeh Penguten",
    category: "Pertunjukan",
    status: "Penuh",
    date: "Senin, 17 Agustus 2026",
    time: "09:30 WIB",
    location: "Panggung Utama",
    description:
      "Pertunjukan tari tradisional khas Lampung untuk menyambut tamu undangan dan masyarakat.",
    progress: 100,
  },
  {
    id: 4,
    title: "Lomba Tarik Tambang Antar RT",
    category: "Lomba",
    status: "Tersedia",
    date: "Senin, 17 Agustus 2026",
    time: "15:00 WIB",
    location: "Lapangan Utama Rajabasa",
    description:
      "Adu kekuatan dan kekompakan antar RT dalam perlombaan tarik tambang tradisional.",
    progress: 60,
  },
  {
    id: 5,
    title: "Festival Kuliner Nusantara",
    category: "Pameran",
    status: "Tersedia",
    date: "16 - 17 Agustus 2026",
    time: "08:00 - Selesai",
    location: "Sepanjang Jalan Desa",
    description:
      "Bazar makanan dan minuman tradisional dari berbagai daerah nusantara buatan warga setempat.",
    progress: 30,
  },
  {
    id: 6,
    title: "Lomba Balap Karung Helm",
    category: "Lomba",
    status: "Tersedia",
    date: "Senin, 17 Agustus 2026",
    time: "14:00 WIB",
    location: "Lapangan Utama Rajabasa",
    description:
      "Versi kocak dari balap karung di mana peserta diwajibkan menggunakan helm tertutup.",
    progress: 90,
  },
  {
    id: 7,
    title: "Lomba Panjat Pinang",
    category: "Lomba",
    status: "Tersedia",
    date: "Senin, 17 Agustus 2026",
    time: "16:00 WIB",
    location: "Lapangan Utama Rajabasa",
    description:
      "Acara puncak perlombaan fisik memperebutkan hadiah menarik di puncak pohon pinang.",
    progress: 75,
  },
  {
    id: 8,
    title: "Malam Puncak & Bagi Hadiah",
    category: "Pertunjukan",
    status: "Tersedia",
    date: "Senin, 17 Agustus 2026",
    time: "20:00 WIB",
    location: "Panggung Utama",
    description:
      "Acara penutupan, hiburan musik, dan pembagian hadiah bagi para pemenang lomba.",
    progress: 10,
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
      <div className="max-w-7xl mx-auto flex flex-col items-center bg-red-400">
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
          {MOCK_EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-shadow hover:shadow-md"
            >
              {/* ── Image Area (Mock Placeholder) ── */}
              <div className="relative w-full h-40 bg-gray-200">
                <div className="w-full h-full bg-gradient-to-tr from-gray-200 to-gray-100 flex items-center justify-center">
                  <span className="text-gray-400 font-medium text-sm">
                    Image {event.id}
                  </span>
                </div>

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
              <div className="p-5 flex flex-col flex-grow">
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

                {/* ── Footer Card: Progress & Actions ── */}
                <div className="mt-auto">
                  {/* Progress Bar */}
                  <div className="flex justify-between text-xs text-gray-500 font-medium mb-1.5">
                    <span>Pendaftar</span>
                    <span>{event.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mb-5">
                    <div
                      className={cn(
                        "h-full rounded-full",
                        event.progress >= 100 ? "bg-green-500" : "bg-[#E12828]",
                      )}
                      style={{ width: `${event.progress}%` }}
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <button
                      disabled={event.progress >= 100}
                      className="flex-1 bg-[#E12828] text-white rounded-lg py-2.5 flex justify-center items-center hover:bg-red-700 transition disabled:bg-gray-300 disabled:cursor-not-allowed"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
