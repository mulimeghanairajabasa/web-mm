"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  Send,
  Gift,
  User,
  MapPin,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Mock Data (20 Ucapan)
───────────────────────────────────────────── */

const MOCK_UCAPAN = [
  {
    id: 1,
    name: "Budi Santoso",
    asal: "Rajabasa, Lampung",
    ucapan:
      "Dirgahayu Indonesiaku! Semoga semakin maju dan sejahtera rakyatnya. Merdeka! lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    name: "Siti Aminah",
    asal: "Jakarta Selatan",
    ucapan:
      "Selamat HUT RI ke-81. Mari kita terus jaga persatuan dan kesatuan bangsa.",
  },
  {
    id: 3,
    name: "Andi Saputra",
    asal: "Bandung",
    ucapan:
      "Sekali merdeka tetap merdeka! Bangga menjadi bagian dari pemuda yang terus berkarya.",
  },
  {
    id: 4,
    name: "Rina Marlina",
    asal: "Surabaya",
    ucapan:
      "Semoga di umur ke-81 ini, Indonesia semakin berjaya di kancah internasional.",
  },
  {
    id: 5,
    name: "Fajar Nugraha",
    asal: "Yogyakarta",
    ucapan:
      "Kemerdekaan bukan tanda untuk berhenti berjuang, tapi tanda untuk berjuang lebih keras!",
  },
  {
    id: 6,
    name: "Dewi Lestari",
    asal: "Rajabasa, Lampung",
    ucapan:
      "Salam merdeka dari Muli Mekhanai! Mari majukan desa dan negara kita bersama.",
  },
  {
    id: 7,
    name: "Rina Marlina",
    asal: "Surabaya",
    ucapan:
      "Semoga di umur ke-81 ini, Indonesia semakin berjaya di kancah internasional.",
  },
  {
    id: 8,
    name: "Fajar Nugraha",
    asal: "Yogyakarta",
    ucapan:
      "Kemerdekaan bukan tanda untuk berhenti berjuang, tapi tanda untuk berjuang lebih keras!",
  },
  {
    id: 9,
    name: "Dewi Lestari",
    asal: "Rajabasa, Lampung",
    ucapan:
      "Salam merdeka dari Muli Mekhanai! Mari majukan desa dan negara kita bersama.",
  },
];

/* ─────────────────────────────────────────────
   Main Component
───────────────────────────────────────────── */

export default function UcapanSeWction() {
  return (
    <section
      id="kirim-ucapan"
      className="w-full bg-white py-20 px-6 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mb-10">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Kirim Ucapan Kemerdekaan
          </h2>
          <p className="font-normal text-base text-gray-600 leading-relaxed">
            Tuliskan harapan dan semangat kemerdekaanmu untuk Indonesia di
            usianya yang ke-81.
          </p>
        </div>

        {/* ── Note / Banner Hadiah ── */}
        <div className="w-full max-w-3xl bg-yellow-50 border border-[#DCA723] rounded-xl p-5 mb-10 flex items-start sm:items-center gap-4 shadow-sm">
          <div className="bg-[#DCA723] p-2.5 rounded-full text-white shrink-0">
            <Gift className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm md:text-base mb-1">
              Kejutan Spesial Kemerdekaan!
            </h4>
            <p className="text-sm text-gray-700">
              3 ucapan terbaik dan paling inspiratif akan mendapatkan{" "}
              <strong>hadiah eksklusif</strong> dari panitia. Pastikan Nomor HP
              yang Anda masukkan terdaftar dan aktif di WhatsApp.
            </p>
          </div>
        </div>

        {/* ── Form Kirim Ucapan ── */}
        <div className="w-full max-w-3xl bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-20">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Input Nama */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" /> Nama Lengkap
                </label>
                <input
                  type="text"
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E12828]/20 focus:border-[#E12828] outline-none transition-all"
                  required
                />
              </div>

              {/* Input Asal */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" /> Asal
                  Daerah/Instansi
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Rajabasa, Lampung"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E12828]/20 focus:border-[#E12828] outline-none transition-all"
                  required
                />
              </div>

              {/* Input No HP */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" /> No. Handphone
                  (WhatsApp)
                </label>
                <input
                  type="tel"
                  placeholder="0812-xxxx-xxxx"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E12828]/20 focus:border-[#E12828] outline-none transition-all"
                  required
                />
              </div>

              {/* Input Email */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" /> Alamat Email
                </label>
                <input
                  type="email"
                  placeholder="email@anda.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E12828]/20 focus:border-[#E12828] outline-none transition-all"
                  required
                />
              </div>
            </div>

            {/* Textarea Ucapan */}
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-gray-400" /> Tulis Ucapan
              </label>
              <textarea
                rows={4}
                placeholder="Tulis harapan, doa, atau semangat kemerdekaan Anda di sini..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E12828]/20 focus:border-[#E12828] outline-none transition-all resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3.5 bg-[#E12828] hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" /> Kirim Ucapan Sekarang
            </button>
          </form>
        </div>

        {/* ── Garis Pemisah ── */}
        <div className="w-full h-px bg-gray-200 mb-20 relative">
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-gray-400 text-sm font-medium">
            Ucapan Masuk
          </div>
        </div>

        {/* ── Grid Cards Ucapan ── */}
        {/* ── Grid Cards Ucapan ── */}
        <div
          className={cn(
            "w-full mb-10",
            "columns-1 md:columns-2 lg:columns-3",
            "gap-6",
          )}
        >
          {MOCK_UCAPAN.map((item) => (
            <div
              key={item.id}
              className={cn(
                "break-inside-avoid mb-6",
                "bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm",
                "flex flex-col gap-4",
                "hover:shadow-md transition-shadow",
              )}
            >
              {/* Header Card (Nama & Asal) */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#E12828] font-bold shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                    <MapPin className="w-3 h-3" /> {item.asal}
                  </div>
                </div>
              </div>

              {/* Isi Ucapan */}
              <p className="text-gray-600 text-sm leading-relaxed italic">
                {item.ucapan}
              </p>
            </div>
          ))}
        </div>

        {/* ── Load More Button ── */}
        <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
          Lihat Ucapan Lainnya
        </button>
      </div>
    </section>
  );
}
