"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */

export interface UcapanFormInput {
  nama: string;
  asalDaerah: string;
  noHp: string;
  isiUcapan: string;
}

export type SubmitUcapanResult =
  | { success: true; mode: "created" | "updated" }
  | {
      success: false;
      reason:
        | "unauthenticated"
        | "event_locked"
        | "already_scored"
        | "validation";
      message: string;
    };

export interface UcapanUserData {
  id: string;
  nama: string;
  asalDaerah: string;
  noHp: string;
  isiUcapan: string;
  skor: number | null;
  isLocked: boolean; // true kalau sudah dinilai -> form tidak boleh diedit lagi
}

/* ─────────────────────────────────────────────
   Helper internal
───────────────────────────────────────────── */

async function isPemenangTampil(): Promise<boolean> {
  const setting = await prisma.eventSetting.findUnique({
    where: { key: "pemenang_tampil" },
  });

  return setting?.value === "true";
}

function validateInput(input: UcapanFormInput): string | null {
  if (!input.nama.trim()) return "Nama tidak boleh kosong.";
  if (input.nama.length > 100) return "Nama maksimal 100 karakter.";

  if (!input.asalDaerah.trim()) return "Asal daerah tidak boleh kosong.";
  if (input.asalDaerah.length > 100)
    return "Asal daerah maksimal 100 karakter.";

  if (!input.noHp.trim()) return "Nomor HP tidak boleh kosong.";

  if (!input.isiUcapan.trim()) return "Ucapan tidak boleh kosong.";
  if (input.isiUcapan.length > 1000) return "Ucapan maksimal 1000 karakter.";

  return null;
}

/* ─────────────────────────────────────────────
   Action: submit atau edit ucapan
───────────────────────────────────────────── */

export async function submitUcapan(
  input: UcapanFormInput,
): Promise<SubmitUcapanResult> {
  const { userId } = await auth();

  if (!userId) {
    return {
      success: false,
      reason: "unauthenticated",
      message: "Kamu harus masuk terlebih dahulu untuk mengirim ucapan.",
    };
  }

  // Acara sudah selesai / pemenang sudah diumumkan -> tolak halus
  if (await isPemenangTampil()) {
    return {
      success: false,
      reason: "event_locked",
      message:
        "Terimakasih atas semangatnya, tapi sayangnya acara sudah selesai, jangan khawatir tulisan kamu tetap akan kami simpan dan kami baca.",
    };
  }

  const existing = await prisma.ucapan.findUnique({
    where: { clerkUserId: userId },
  });

  // Sudah pernah dinilai panitia -> kunci, tidak boleh diedit lagi
  if (existing && existing.skor !== null) {
    return {
      success: false,
      reason: "already_scored",
      message: "Ucapanmu sudah dinilai panitia dan tidak bisa diubah lagi.",
    };
  }

  const validationError = validateInput(input);
  if (validationError) {
    return {
      success: false,
      reason: "validation",
      message: validationError,
    };
  }

  await prisma.ucapan.upsert({
    where: { clerkUserId: userId },
    create: {
      clerkUserId: userId,
      nama: input.nama.trim(),
      asalDaerah: input.asalDaerah.trim(),
      noHp: input.noHp.trim(),
      isiUcapan: input.isiUcapan.trim(),
    },
    update: {
      nama: input.nama.trim(),
      asalDaerah: input.asalDaerah.trim(),
      noHp: input.noHp.trim(),
      isiUcapan: input.isiUcapan.trim(),
    },
  });

  revalidatePath("/hut-81");

  return { success: true, mode: existing ? "updated" : "created" };
}

/* ─────────────────────────────────────────────
   Action: ambil ucapan milik user yang sedang login
───────────────────────────────────────────── */

export async function getUcapanUser(): Promise<UcapanUserData | null> {
  const { userId } = await auth();

  if (!userId) return null;

  const ucapan = await prisma.ucapan.findUnique({
    where: { clerkUserId: userId },
  });

  if (!ucapan) return null;

  return {
    id: ucapan.id,
    nama: ucapan.nama,
    asalDaerah: ucapan.asalDaerah,
    noHp: ucapan.noHp,
    isiUcapan: ucapan.isiUcapan,
    skor: ucapan.skor,
    isLocked: ucapan.skor !== null,
  };
}
