import React from "react";
// import { inter } from '@/lib/fonts'; // Sesuaikan path dengan struktur Anda
import {
  Play,
  Calendar,
  Clock,
  MapPin,
  Users,
  Plus,
  ArrowUpRight,
  Flag,
} from "lucide-react";
import Header from "@/components/header";

export default function DesignSystemPage() {
  return (
    <main className={` min-h-screen bg-gray-50 pb-20`}>
      {/* Header Halaman */}
      <Header />

      <div className="bg-foreground border-b border-gray-200 py-12 px-6 mb-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Design System</h1>
          <p className="text-gray-100 max-w-2xl">
            Halaman ini adalah referensi visual untuk manusia dan acuan struktur
            komponen bagi agen AI. Semua elemen dibangun menggunakan Tailwind
            CSS dan ikon dari Lucide React.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-24">
        {/* SECTION 1: COLORS */}
        <section id="colors" className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">
            1. Colors (Palet Warna)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#E12828] text-white shadow-sm">
              <p className="font-semibold">Primary Red</p>
              <p className="text-sm opacity-80">bg-[#E12828]</p>
            </div>
            <div className="p-4 rounded-xl bg-[#DCA723] text-white shadow-sm">
              <p className="font-semibold">Accent Yellow</p>
              <p className="text-sm opacity-80">bg-[#DCA723]</p>
            </div>
            <div className="p-4 rounded-xl bg-[#3A3A3A] text-white shadow-sm">
              <p className="font-semibold">Dark Base</p>
              <p className="text-sm opacity-80">bg-[#3A3A3A]</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 text-gray-900 border shadow-sm">
              <p className="font-semibold">Light Base</p>
              <p className="text-sm text-gray-500">bg-gray-50</p>
            </div>
          </div>
        </section>

        {/* SECTION 2: TYPOGRAPHY */}
        <section id="typography" className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">
            2. Typography
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-8">
            <div>
              <p className="text-sm text-gray-500 mb-1">Heading 1 (Hero)</p>
              <h1 className="font-bold text-5xl md:text-6xl text-gray-900">
                Dirgahayu Republik
              </h1>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Heading 2 (Section)</p>
              <h2 className="font-bold text-3xl md:text-4xl text-gray-900">
                80 Tahun Indonesia Merdeka
              </h2>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">
                Heading 3 (Card Title)
              </p>
              <h3 className="font-bold text-xl text-gray-900">
                Upacara Bendera HUT RI ke-80
              </h3>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Body Text</p>
              <p className="font-normal text-base text-gray-600 leading-relaxed max-w-2xl">
                Merayakan perjalanan panjang bangsa Indonesia menuju kemerdekaan
                dan kemajuan. Dari proklamasi 17 Agustus 1945 hingga kini,
                Indonesia terus tumbuh dan berkarya.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: BUTTONS */}
        <section id="buttons" className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">
            3. Buttons & Actions
          </h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-wrap gap-6 items-center">
            {/* Primary */}
            <button className="bg-[#E12828] text-white rounded-lg px-5 py-2.5 flex items-center gap-2 hover:bg-red-700 transition">
              <Play className="w-5 h-5" /> Putar Video
            </button>
            {/* Outline */}
            <button className="bg-transparent border border-[#E12828] text-[#E12828] rounded-lg px-5 py-2.5 flex items-center gap-2 hover:bg-red-50 transition">
              <Calendar className="w-5 h-5" /> Lihat Acara
            </button>
            {/* Accent */}
            <button className="bg-[#DCA723] text-white rounded-lg px-5 py-2.5 flex items-center gap-2 hover:bg-yellow-600 transition">
              <Users className="w-5 h-5" /> Ikut Berpartisipasi
            </button>
            {/* FAB / Icon Only */}
            <button className="bg-[#E12828] text-white rounded-full p-3 hover:bg-red-700 transition shadow-md">
              <ArrowUpRight className="w-6 h-6" />
            </button>
          </div>
        </section>

        {/* SECTION 4: GLASSMORPHISM & COUNTDOWN */}
        <section id="glassmorphism" className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">
            4. Glassmorphism Card (Dark Theme)
          </h2>
          <div className="p-8 rounded-2xl bg-gradient-to-b from-[#8B3A3A] to-[#2C2C2C]">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 text-[#DCA723] mb-6">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">
                  Hitung Mundur Hari Kemerdekaan
                </span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {["Hari", "Jam", "Menit", "Detik"].map((label, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-full bg-[#E12828] rounded-lg py-4 text-center text-3xl font-bold text-white shadow-lg">
                      0
                    </div>
                    <span className="text-gray-300 text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: EVENT CARDS */}
        <section id="event-cards" className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">
            5. Complex Event Card
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card Example */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
              {/* Image Area */}
              <div className="relative w-full h-48 bg-gray-200">
                {/* Fallback image placeholder */}
                <div className="w-full h-full bg-gradient-to-tr from-red-100 to-red-50 flex items-center justify-center text-red-300">
                  Image Area
                </div>
                {/* Badges */}
                <div className="absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold text-white bg-blue-500">
                  Lomba
                </div>
                <div className="absolute top-4 right-4 rounded-full px-3 py-1 text-xs font-semibold bg-white text-gray-800 shadow-sm">
                  Tersedia
                </div>
              </div>

              {/* Content Area */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-lg text-gray-900 mb-4">
                  Lomba Merdeka Virtual Se-Indonesia
                </h3>

                {/* Meta List */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-[#E12828]" />
                    <span>Jumat, 15 Agustus 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-[#E12828]" />
                    <span>13:00 WIB</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-[#E12828]" />
                    <span>Platform Online</span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2 mb-6">
                  Lomba virtual meliputi: lomba foto, video kreativitas, dan
                  desain poster kemerdekaan.
                </p>

                <div className="mt-auto">
                  {/* Progress */}
                  <div className="flex justify-between text-xs text-gray-500 font-medium mb-1.5">
                    <span>Pendaftar</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mb-4">
                    <div
                      className="h-full bg-[#E12828] rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>

                  {/* Card Actions */}
                  <div className="flex items-center gap-3">
                    <button className="flex-1 bg-[#E12828] text-white rounded-lg py-2.5 flex justify-center items-center hover:bg-red-700 transition">
                      <Plus className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 border border-[#E12828] text-[#E12828] rounded-lg flex justify-center items-center hover:bg-red-50 transition shrink-0">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: CTA BANNER */}
        <section id="cta-banner" className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">
            6. Call To Action (CTA)
          </h2>
          <div className="bg-[#C62828] rounded-3xl py-12 px-6 md:py-16 md:px-8 flex flex-col items-center text-center justify-center shadow-lg">
            <h2 className="font-bold text-2xl md:text-3xl text-white mb-4">
              Mari Bersama Rayakan Kemerdekaan
            </h2>
            <p className="font-normal text-base md:text-lg text-white/90 mb-8 max-w-2xl">
              Bergabunglah dengan jutaan rakyat Indonesia dalam merayakan HUT RI
              ke-80
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="bg-white text-[#C62828] font-semibold px-6 py-3 rounded-lg shadow-sm hover:bg-gray-50 transition w-full sm:w-auto">
                Lihat Agenda Acara
              </button>
              <button className="bg-[#DCA723] text-white font-semibold px-6 py-3 rounded-lg shadow-sm hover:bg-yellow-600 transition w-full sm:w-auto">
                Kirim Ucapan
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
