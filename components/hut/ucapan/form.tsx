"use client";

import * as React from "react";
import { useActionState, startTransition } from "react";
import { useRouter } from "next/navigation";
import { useUser, useClerk } from "@clerk/nextjs";
import {
  ChevronDown,
  Lock,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  User,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { submitUcapan, type UcapanUserData } from "@/lib/actions/ucapanUser";
import UcapanFeedbackDialog from "./feedbackDialog";

const DRAFT_KEY = "draft-ucapan-mmr";

interface DraftFields {
  nama: string;
  asalDaerah: string;
  noHp: string;
  isiUcapan: string;
}

const EMPTY_FIELDS: DraftFields = {
  nama: "",
  asalDaerah: "",
  noHp: "",
  isiUcapan: "",
};

interface UcapanFormProps {
  initialData: UcapanUserData | null;
}

export default function UcapanForm({ initialData }: UcapanFormProps) {
  const router = useRouter();
  const { isSignedIn, isLoaded } = useUser();
  const { openSignIn } = useClerk();

  const [state, formAction, isPending] = useActionState(submitUcapan, null);

  const [fields, setFields] = React.useState<DraftFields>(
    initialData
      ? {
          nama: initialData.nama,
          asalDaerah: initialData.asalDaerah,
          noHp: initialData.noHp,
          isiUcapan: initialData.isiUcapan,
        }
      : EMPTY_FIELDS,
  );

  const [open, setOpen] = React.useState(!initialData);
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const isLocked = initialData?.isLocked ?? false;
  const isEditMode = Boolean(initialData);

  // Muat draft dari localStorage (guest yang belum login, atau baru saja login setelah ngetik draft)
  React.useEffect(() => {
    if (initialData) return; // sudah ada data asli dari server, jangan timpa dengan draft lama

    try {
      const raw = window.localStorage.getItem(DRAFT_KEY);
      if (raw) {
        const draft = JSON.parse(raw) as DraftFields;
        const timer = setTimeout(() => {
          setFields(draft);
          setOpen(true);
        }, 0);
        return () => clearTimeout(timer);
      }
    } catch {
      // draft rusak/tidak valid -> abaikan saja
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Tanggapi hasil submit
  React.useEffect(() => {
    if (!state) return;

    // Wrap in setTimeout to avoid synchronous cascading renders
    const timer = setTimeout(() => {
      setDialogOpen(true);

      if (state.success) {
        window.localStorage.removeItem(DRAFT_KEY);
        setOpen(false);
        router.refresh();
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [state, router]);

  function handleChange(field: keyof DraftFields, value: string) {
    setFields((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmitClick() {
    if (isLocked || isPending) return;

    if (isLoaded && !isSignedIn) {
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify(fields));
      openSignIn();
      return;
    }

    const formData = new FormData();
    formData.set("nama", fields.nama);
    formData.set("asalDaerah", fields.asalDaerah);
    formData.set("noHp", fields.noHp);
    formData.set("isiUcapan", fields.isiUcapan);

    startTransition(() => {
      formAction(formData);
    });
  }

  return (
    <>
      <Collapsible
        open={open}
        onOpenChange={setOpen}
        className="w-full max-w-3xl bg-gray-50 rounded-2xl border border-gray-200 shadow-sm mb-20 overflow-hidden"
      >
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="w-full flex items-center justify-between p-6 md:p-8 text-left"
          >
            <div>
              <h3 className="font-bold text-xl text-gray-900">
                {isEditMode ? "Edit Ucapan" : "Berikan Ucapan"}
              </h3>
              {isLocked && (
                <p className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                  <Lock className="w-3.5 h-3.5" />
                  Ucapanmu sudah dinilai panitia dan tidak bisa diubah lagi.
                </p>
              )}
            </div>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-gray-400 transition-transform shrink-0",
                open && "rotate-180",
              )}
            />
          </button>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="px-6 md:px-8 pb-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-400" /> Nama Lengkap
                </label>
                <input
                  type="text"
                  value={fields.nama}
                  disabled={isLocked}
                  maxLength={100}
                  onChange={(e) => handleChange("nama", e.target.value)}
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E12828]/20 focus:border-[#E12828] outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" /> Asal
                  Daerah/Instansi
                </label>
                <input
                  type="text"
                  value={fields.asalDaerah}
                  disabled={isLocked}
                  maxLength={100}
                  onChange={(e) => handleChange("asalDaerah", e.target.value)}
                  placeholder="Contoh: Rajabasa, Lampung"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E12828]/20 focus:border-[#E12828] outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-400" /> No. Handphone
                  (WhatsApp)
                </label>
                <input
                  type="tel"
                  value={fields.noHp}
                  disabled={isLocked}
                  onChange={(e) => handleChange("noHp", e.target.value)}
                  placeholder="0812-xxxx-xxxx"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E12828]/20 focus:border-[#E12828] outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-gray-400" /> Tulis Ucapan
              </label>
              <textarea
                rows={4}
                value={fields.isiUcapan}
                disabled={isLocked}
                maxLength={1000}
                onChange={(e) => handleChange("isiUcapan", e.target.value)}
                placeholder="Tulis harapan, doa, atau semangat kemerdekaan Anda di sini..."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#E12828]/20 focus:border-[#E12828] outline-none transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <p className="text-xs text-gray-400 text-right">
                {fields.isiUcapan.length}/1000
              </p>
            </div>

            <Button
              type="button"
              disabled={isLocked || isPending}
              onClick={handleSubmitClick}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#E12828] hover:bg-red-700 text-white font-semibold rounded-lg shadow-md transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
              {isPending
                ? "Mengirim..."
                : isEditMode
                  ? "Simpan Perubahan"
                  : "Kirim Ucapan Sekarang"}
            </Button>
          </div>
        </CollapsibleContent>
      </Collapsible>

      <UcapanFeedbackDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        success={state?.success ?? false}
        message={
          state?.success
            ? state.mode === "created"
              ? "Terima kasih! Ucapanmu berhasil dikirim dan akan tampil di daftar ucapan."
              : "Perubahan ucapanmu berhasil disimpan."
            : state && "message" in state
              ? state.message
              : ""
        }
      />
    </>
  );
}
