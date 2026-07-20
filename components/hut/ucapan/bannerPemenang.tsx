import { isPemenangTampil, getTop3Pemenang } from "@/lib/actions/ucapanPublik";
import PodiumDisplay from "./podium";

export default async function BannerPemenang() {
  const tampil = await isPemenangTampil();
  if (!tampil) return null;

  const top3 = await getTop3Pemenang();
  if (top3.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mb-16">
      <div className="text-center mb-8">
        <h3 className="font-bold text-2xl md:text-3xl text-gray-900 mb-2">
          Pemenang Ucapan Terbaik
        </h3>
        <p className="text-gray-500 text-sm">
          Terima kasih untuk semangat juang dan budaya yang kalian tuliskan.
        </p>
      </div>

      <PodiumDisplay top3={top3} />
    </div>
  );
}
