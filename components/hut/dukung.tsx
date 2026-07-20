"use client";
import React from "react";
// import { cn } from "@/lib/utils";
import { HeartHandshake, CheckCircle2, ShieldCheck } from "lucide-react";
import CodeQRIS from "../icons/qr";

export default function DukunganSection() {
  return (
    <section
      id="dukung-acara"
      className="w-full bg-red-50/50 py-20 px-6 border-t border-red-100"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* ── Kolom Kiri: Teks Menggugah ── */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-100 text-[#E12828] text-sm font-semibold mb-2">
            <HeartHandshake className="w-4 h-4" />
            <span>Mari Bergotong Royong</span>
          </div>

          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
            Wujudkan Perayaan yang{" "}
            <span className="text-[#E12828]">Berkesan</span> untuk Kita Semua
          </h2>

          <p className="font-normal text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Kemerdekaan sejati adalah tentang kebersamaan. Mari salurkan
            dukungan terbaik Anda untuk menyukseskan rangkaian acara HUT RI
            ke-81 bersama <strong>Muli Mekhanai Rajabasa</strong>. Berapapun
            kontribusi Anda, akan menjadi energi penggerak bagi kemeriahan dan
            kesuksesan warga kita.
          </p>

          <div className="space-y-3 pt-4 text-left max-w-md mx-auto lg:mx-0">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#DCA723] shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">
                <strong>Transparan:</strong> Laporan penggunaan dana akan
                dipublikasikan secara berkala kepada warga.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#DCA723] shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">
                <strong>Tepat Sasaran:</strong> Dana digunakan penuh untuk
                kebutuhan lomba, panggung, dan hadiah.
              </p>
            </div>
          </div>
        </div>

        {/* ── Kolom Kanan: Kartu QRIS ── */}
        <div className="w-full max-w-sm shrink-0">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transform transition-transform hover:-translate-y-1 duration-300">
            {/* Header QRIS */}
            <div className="bg-[#E12828] p-5 text-center flex flex-col items-center justify-center relative">
              {/* Pattern Latar Belakang Merah */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "10px 10px",
                }}
              ></div>
              <h3 className="text-2xl font-bold text-white italic tracking-wider relative z-10">
                QRIS
              </h3>
              <p className="text-white/80 text-xs font-medium uppercase tracking-widest relative z-10 mt-1">
                Quick Response Code
              </p>
            </div>

            {/* Area Barcode */}
            <div className="relative p-8 flex flex-col items-center ">
              {/* Mockup QR Code */}
              <div className="w-full aspect-square bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center mb-6 relative group">
                <CodeQRIS className=" text-black group-hover:text-[#E12828] transition-colors" />

                {/* Sudut-sudut pembidik QR (opsional untuk detail visual) */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-t-4 border-l-4 border-[#E12828] rounded-tl-lg"></div>
                <div className="absolute -top-3 -right-3 w-6 h-6 border-t-4 border-r-4 border-[#E12828] rounded-tr-lg"></div>
                <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-4 border-l-4 border-[#E12828] rounded-bl-lg"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-4 border-r-4 border-[#E12828] rounded-br-lg"></div>
              </div>

              {/* Info Merchant */}
              <div className="text-center w-full">
                <h4 className="font-bold text-lg text-gray-900">
                  Panitia HUT RI 81
                </h4>
                <p className="text-sm text-gray-500 mb-1">
                  Muli Mekhanai Rajabasa
                </p>
                <p className="text-xs font-mono text-gray-400 bg-gray-100 py-1 px-3 rounded-full inline-block mt-2">
                  NMID: ID1029384756
                </p>
              </div>
            </div>

            {/* Footer QRIS */}
            <div className="bg-gray-50 p-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs font-medium text-gray-500">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              Aman & Terverifikasi
            </div>
          </div>

          {/* Opsi Transfer Manual */}
          <div className="text-center mt-6">
            <button className="text-sm font-medium text-gray-500 hover:text-[#E12828] underline underline-offset-4 transition-colors">
              Butuh nomor rekening manual? Klik di sini
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
