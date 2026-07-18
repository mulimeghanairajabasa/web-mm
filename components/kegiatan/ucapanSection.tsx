import { getUcapanUser } from "@/lib/actions/ucapanUser";
import UcapanForm from "./ucapan/form";

export default async function UcapanSection() {
  const ucapanUser = await getUcapanUser();

  return (
    <section
      id="kirim-ucapan"
      className="w-full bg-white py-20 px-6 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-10">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Kirim Ucapan Kemerdekaan
          </h2>
          <p className="font-normal text-base text-gray-600 leading-relaxed">
            Tuliskan harapan dan semangat kemerdekaanmu untuk Indonesia di
            usianya yang ke-81.
          </p>
        </div>

        <UcapanForm initialData={ucapanUser} />

        {/*
          Berikutnya (Fase 3 lanjutan): BannerPemenang, UcapanGrid + pagination
          akan ditambahkan di sini setelah form ini kamu konfirmasi jalan lancar.
        */}
      </div>
    </section>
  );
}
