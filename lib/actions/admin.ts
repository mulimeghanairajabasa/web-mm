"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */

export type ActionResult =
  | { success: true }
  | { success: false; message: string };

export interface UcapanDashboardItem {
  id: string;
  nama: string;
  asalDaerah: string;
  noHp: string;
  isiUcapan: string;
  skor: number | null;
  isHidden: boolean;
  createdAt: Date;
}

export type SortDashboard = "terbaru" | "skor_tertinggi" | "belum_dinilai";

/* ─────────────────────────────────────────────
   Guard: hanya panitia (role admin) yang boleh lanjut
───────────────────────────────────────────── */

async function requireAdmin(): Promise<string> {
  const { userId, sessionClaims } = await auth();
  const role = (sessionClaims?.metadata as { role?: string } | undefined)?.role;

  if (!userId || role !== "admin") {
    throw new Error("Akses ditolak: halaman ini khusus panitia.");
  }

  return userId;
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

/* ─────────────────────────────────────────────
   Section "Ucapan" — list lengkap untuk panitia
───────────────────────────────────────────── */

export async function getUcapanDashboard(
  sortBy: SortDashboard = "terbaru",
): Promise<UcapanDashboardItem[]> {
  await requireAdmin();

  const orderBy =
    sortBy === "skor_tertinggi"
      ? [{ skor: "desc" as const }, { createdAt: "asc" as const }]
      : sortBy === "belum_dinilai"
        ? [{ skor: "asc" as const }, { createdAt: "desc" as const }] // null duluan (Postgres: NULLS FIRST default utk ASC)
        : [{ createdAt: "desc" as const }];

  return prisma.ucapan.findMany({
    orderBy,
    select: {
      id: true,
      nama: true,
      asalDaerah: true,
      noHp: true,
      isiUcapan: true,
      skor: true,
      isHidden: true,
      createdAt: true,
    },
  });
}

/* ─────────────────────────────────────────────
   Update skor (0-100)
───────────────────────────────────────────── */

export async function updateSkor(
  ucapanId: string,
  skor: number,
): Promise<ActionResult> {
  await requireAdmin();

  if (!Number.isInteger(skor) || skor < 0 || skor > 100) {
    return { success: false, message: "Skor harus berupa angka bulat 0-100." };
  }

  if (await isPemenangTampil()) {
    return {
      success: false,
      message: "Pemenang sudah diumumkan, penilaian tidak bisa diubah lagi.",
    };
  }

  const ucapan = await prisma.ucapan.findUnique({ where: { id: ucapanId } });
  if (!ucapan) {
    return { success: false, message: "Ucapan tidak ditemukan." };
  }

  await prisma.ucapan.update({
    where: { id: ucapanId },
    data: { skor },
  });

  revalidatePath("/dashboard");
  revalidatePath("/hut-81");

  return { success: true };
}

/* ─────────────────────────────────────────────
   Sembunyikan / tampilkan kembali ucapan
───────────────────────────────────────────── */

export async function toggleHideUcapan(
  ucapanId: string,
  hide: boolean,
): Promise<ActionResult> {
  await requireAdmin();

  const ucapan = await prisma.ucapan.findUnique({ where: { id: ucapanId } });
  if (!ucapan) {
    return { success: false, message: "Ucapan tidak ditemukan." };
  }

  await prisma.ucapan.update({
    where: { id: ucapanId },
    data: { isHidden: hide },
  });

  revalidatePath("/dashboard");
  revalidatePath("/hut-81");

  return { success: true };
}

/* ─────────────────────────────────────────────
   Toggle tampilkan pemenang (snapshot final)
───────────────────────────────────────────── */

export async function togglePemenangTampil(
  tampil: boolean,
): Promise<ActionResult> {
  await requireAdmin();

  await prisma.eventSetting.upsert({
    where: { key: "pemenang_tampil" },
    create: { key: "pemenang_tampil", value: String(tampil) },
    update: { value: String(tampil) },
  });

  revalidatePath("/dashboard");
  revalidatePath("/hut-81");

  return { success: true };
}

/* ─────────────────────────────────────────────
   Section "Settings" — status saat ini
───────────────────────────────────────────── */

export async function getPemenangTampilStatus(): Promise<boolean> {
  await requireAdmin();
  return isPemenangTampil();
}
