import { getTop3Pemenang } from "@/lib/actions/ucapanPublik";
import PodiumDisplay from "@/components/hut/ucapan/podium";

export default async function Top3AdminSection() {
  const top3 = await getTop3Pemenang();

  return (
    <section id="top3" className="scroll-mt-24">
      <h2 className="font-bold text-2xl text-gray-900 mb-2">Preview Top 3</h2>
      <p className="text-gray-500 text-sm mb-6">
        Ini yang akan tampil ke publik kalau kamu aktifkan pengumuman di
        Settings.
      </p>

      <PodiumDisplay top3={top3} />
    </section>
  );
}
