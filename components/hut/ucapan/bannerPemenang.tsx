import { Trophy, Medal, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  isPemenangTampil,
  getTop3Pemenang,
  type Top3PemenangItem,
} from "@/lib/actions/ucapanPublik";

const RANK_CONFIG = [
  {
    rank: 1,
    icon: Trophy,
    label: "Juara 1",
    accent: "text-[#b8860b] border-[#b8860b]",
    bg: "bg-[#b8860b]/5",
    order: "md:order-2",
    height: "md:min-h-[220px]",
  },
  {
    rank: 2,
    icon: Medal,
    label: "Juara 2",
    accent: "text-gray-500 border-gray-300",
    bg: "bg-gray-50",
    order: "md:order-1",
    height: "md:min-h-[180px]",
  },
  {
    rank: 3,
    icon: Award,
    label: "Juara 3",
    accent: "text-[#8b0000] border-[#8b0000]/40",
    bg: "bg-[#8b0000]/5",
    order: "md:order-3",
    height: "md:min-h-[180px]",
  },
] as const;

function PodiumCard({
  item,
  config,
}: {
  item: Top3PemenangItem;
  config: (typeof RANK_CONFIG)[number];
}) {
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "flex flex-col justify-end rounded-2xl border-2 p-6 shadow-sm h-full",
        config.accent,
        config.bg,
        config.height,
      )}
    >
      <Icon className={cn("w-8 h-8 mb-3", config.accent)} />
      <p
        className={cn(
          "text-xs font-bold uppercase tracking-wide mb-1",
          config.accent,
        )}
      >
        {config.label}
      </p>
      <h4 className="font-bold text-gray-900 text-base mb-1">{item.nama}</h4>
      <p className="text-xs text-gray-500 mb-3">{item.asalDaerah}</p>
      <p className="text-sm text-gray-700 italic leading-relaxed line-clamp-3">
        &ldquo;{item.isiUcapan}&rdquo;
      </p>
    </div>
  );
}

export default async function BannerPemenang() {
  const tampil = await isPemenangTampil();
  if (!tampil) return null;

  const top3 = await getTop3Pemenang();
  if (top3.length === 0) return null;

  // Urutkan sesuai posisi rank yang benar-benar ada datanya
  const items = RANK_CONFIG.map((config, idx) => ({
    config,
    item: top3[idx],
  })).filter((entry) => entry.item);

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

      <div className="flex flex-col md:flex-row md:items-end gap-5">
        {items.map(({ config, item }) => (
          <div key={item.id} className={cn("flex-1", config.order)}>
            <PodiumCard item={item} config={config} />
          </div>
        ))}
      </div>
    </div>
  );
}
