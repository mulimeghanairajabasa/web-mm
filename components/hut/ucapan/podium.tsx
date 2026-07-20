import { Trophy, Medal, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Top3PemenangItem } from "@/lib/actions/ucapanPublik";

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

interface PodiumDisplayProps {
  top3: Top3PemenangItem[];
}

export default function PodiumDisplay({ top3 }: PodiumDisplayProps) {
  const items = RANK_CONFIG.map((config, idx) => ({
    config,
    item: top3[idx],
  })).filter((entry) => entry.item);

  if (items.length === 0) {
    return (
      <p className="text-center text-gray-400 py-10">
        Belum ada ucapan yang dinilai.
      </p>
    );
  }

  return (
    <div className="flex flex-col md:flex-row md:items-end gap-5">
      {items.map(({ config, item }) => (
        <div key={item.id} className={cn("flex-1", config.order)}>
          <PodiumCard item={item} config={config} />
        </div>
      ))}
    </div>
  );
}
