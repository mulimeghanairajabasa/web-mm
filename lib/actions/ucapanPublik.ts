"use server";

import { prisma } from "@/lib/prisma";

const PAGE_SIZE = 12;

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */

export interface UcapanPublikItem {
  id: string;
  nama: string;
  asalDaerah: string;
  isiUcapan: string;
  skor: number | null; // null -> badge tampilkan "??/100" di UI
  createdAt: Date;
}

export interface UcapanPublikResult {
  items: UcapanPublikItem[];
  currentPage: number;
  totalPages: number;
  totalItems: number;
}

export interface Top3PemenangItem {
  id: string;
  nama: string;
  asalDaerah: string;
  isiUcapan: string;
  skor: number;
}

/* ─────────────────────────────────────────────
   Ucapan publik (grid + pagination)
───────────────────────────────────────────── */

export async function getUcapanPublik(
  page: number = 1,
): Promise<UcapanPublikResult> {
  const currentPage = Math.max(1, page);

  const [items, totalItems] = await Promise.all([
    prisma.ucapan.findMany({
      where: { isHidden: false },
      orderBy: { createdAt: "desc" },
      skip: (currentPage - 1) * PAGE_SIZE,
      take: PAGE_SIZE,
      select: {
        id: true,
        nama: true,
        asalDaerah: true,
        isiUcapan: true,
        skor: true,
        createdAt: true,
        // noHp sengaja TIDAK di-select -> tidak boleh bocor ke publik
      },
    }),
    prisma.ucapan.count({
      where: { isHidden: false },
    }),
  ]);

  return {
    items,
    currentPage,
    totalPages: Math.max(1, Math.ceil(totalItems / PAGE_SIZE)),
    totalItems,
  };
}

/* ─────────────────────────────────────────────
   Top 3 pemenang
   (dipakai oleh banner publik & dashboard panitia)
───────────────────────────────────────────── */

export async function isPemenangTampil(): Promise<boolean> {
  const setting = await prisma.eventSetting.findUnique({
    where: { key: "pemenang_tampil" },
  });

  return setting?.value === "true";
}

export async function getTop3Pemenang(): Promise<Top3PemenangItem[]> {
  const top3 = await prisma.ucapan.findMany({
    where: {
      isHidden: false,
      skor: { not: null },
    },
    orderBy: [{ skor: "desc" }, { createdAt: "asc" }],
    take: 3,
    select: {
      id: true,
      nama: true,
      asalDaerah: true,
      isiUcapan: true,
      skor: true,
    },
  });

  // skor dijamin bukan null karena sudah difilter di `where`,
  // tapi TypeScript tidak tahu itu -> cast aman di sini
  return top3.map((item) => ({
    ...item,
    skor: item.skor as number,
  }));
}
