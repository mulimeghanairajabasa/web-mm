"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, MapPin, Phone, Save } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { toggleHideUcapan, updateSkor } from "@/lib/actions/admin";
import type { UcapanDashboardItem } from "@/lib/actions/admin";

interface UcapanAdminCardProps {
  item: UcapanDashboardItem;
}

export default function UcapanAdminCard({ item }: UcapanAdminCardProps) {
  const router = useRouter();

  const [skorInput, setSkorInput] = React.useState(item.skor?.toString() ?? "");
  const [isHidden, setIsHidden] = React.useState(item.isHidden);
  const [isTogglingHide, setIsTogglingHide] = React.useState(false);
  const [isSaving, setIsSaving] = React.useState(false);
  const [feedback, setFeedback] = React.useState<string | null>(null);

  async function handleToggleHide() {
    const next = !isHidden;
    setIsHidden(next); // optimistic
    setIsTogglingHide(true);

    const result = await toggleHideUcapan(item.id, next);

    setIsTogglingHide(false);

    if (!result.success) {
      setIsHidden(!next); // revert kalau gagal
      setFeedback(result.message);
      return;
    }

    router.refresh();
  }

  async function handleSaveSkor() {
    setIsSaving(true);
    setFeedback(null);

    const skorValue = skorInput.trim() === "" ? 0 : Number(skorInput);

    const result = await updateSkor(item.id, skorValue);

    setIsSaving(false);

    if (!result.success) {
      setFeedback(result.message);
      return;
    }

    setFeedback("Skor tersimpan.");
    router.refresh();
  }

  return (
    <div
      className={cn(
        "rounded-2xl border p-5 shadow-sm transition-opacity flex flex-col gap-4",
        isHidden
          ? "bg-gray-50 border-gray-200 opacity-50"
          : "bg-white border-gray-200",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#E12828] font-bold shrink-0">
            {item.nama.charAt(0)}
          </div>
          <div className="min-w-0">
            <h4 className="font-bold text-gray-900 text-sm truncate">
              {item.nama}
            </h4>
            <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
              <MapPin className="w-3 h-3 shrink-0" /> {item.asalDaerah}
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
              <Phone className="w-3 h-3 shrink-0" /> {item.noHp}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleToggleHide}
          disabled={isTogglingHide}
          className={cn(
            "shrink-0 p-2 rounded-full border transition-colors disabled:opacity-50",
            isHidden
              ? "border-gray-300 text-gray-400 hover:bg-gray-100"
              : "border-[#b8860b]/30 text-[#b8860b] hover:bg-[#b8860b]/10",
          )}
          title={isHidden ? "Tampilkan ucapan" : "Sembunyikan ucapan"}
        >
          {isHidden ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
        </button>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed italic">
        {item.isiUcapan}
      </p>

      <div className="flex items-end gap-3 pt-2 border-t border-gray-100">
        <div className="space-y-1">
          <label className="text-xs font-medium text-gray-500">
            Skor (0-100)
          </label>
          <input
            type="number"
            min={0}
            max={100}
            value={skorInput}
            onChange={(e) => setSkorInput(e.target.value)}
            placeholder="-"
            className="w-20 px-3 py-2 rounded-lg border border-gray-300 text-sm focus:ring-2 focus:ring-[#b8860b]/20 focus:border-[#b8860b] outline-none"
          />
        </div>

        <Button
          type="button"
          size="sm"
          onClick={handleSaveSkor}
          disabled={isSaving}
          className="gap-1.5"
        >
          <Save className="w-3.5 h-3.5" />
          {isSaving ? "Menyimpan..." : "Simpan Skor"}
        </Button>

        {feedback && (
          <p className="text-xs text-gray-500 ml-auto">{feedback}</p>
        )}
      </div>
    </div>
  );
}
