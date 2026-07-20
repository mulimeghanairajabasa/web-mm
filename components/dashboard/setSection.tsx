"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Switch } from "@/components/ui/switch";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { togglePemenangTampil } from "@/lib/actions/admin";

interface SettingsSectionProps {
  initialTampil: boolean;
}

export default function SettingsSection({
  initialTampil,
}: SettingsSectionProps) {
  const router = useRouter();
  const [tampil, setTampil] = React.useState(initialTampil);
  const [confirmOpen, setConfirmOpen] = React.useState(false);
  const [isSaving, setIsSaving] = React.useState(false);

  function handleSwitchChange(checked: boolean) {
    if (checked) {
      // Nyalakan -> butuh konfirmasi dulu (aksi ini mengunci penilaian)
      setConfirmOpen(true);
    } else {
      // Matikan -> tidak perlu konfirmasi
      void applyChange(false);
    }
  }

  async function applyChange(value: boolean) {
    setIsSaving(true);
    const result = await togglePemenangTampil(value);
    setIsSaving(false);

    if (result.success) {
      setTampil(value);
      router.refresh();
    }
  }

  return (
    <section id="settings" className="scroll-mt-24">
      <h2 className="font-bold text-2xl text-gray-900 mb-6">Settings</h2>

      <div className="rounded-2xl border border-gray-200 bg-white p-6 flex items-start justify-between gap-6 max-w-2xl">
        <div>
          <h3 className="font-bold text-gray-900 mb-1">
            Tampilkan Pengumuman Pemenang
          </h3>
          <p className="text-sm text-gray-500">
            Setelah diaktifkan, banner Top 3 akan tampil ke publik dan{" "}
            <strong>penilaian skor dikunci permanen</strong> — tidak bisa
            dinilai ulang.
          </p>
        </div>

        <Switch
          checked={tampil}
          onCheckedChange={handleSwitchChange}
          disabled={isSaving}
        />
      </div>

      <AlertDialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Umumkan pemenang sekarang?</AlertDialogTitle>
            <AlertDialogDescription>
              Setelah ini aktif, banner Top 3 langsung tampil ke publik dan{" "}
              <strong>semua penilaian skor akan terkunci</strong> — panitia
              tidak bisa menilai atau mengubah skor ucapan manapun lagi.
              Tindakan ini tidak bisa dibatalkan lewat toggle biasa.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction onClick={() => applyChange(true)}>
              Ya, Umumkan Sekarang
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
