import React from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { getUcapanPublik } from "@/lib/actions/ucapanPublik";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface UcapanGridProps {
  page: number;
}

function SkorBadge({ skor }: { skor: number | null }) {
  return (
    <span
      className={cn(
        "absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full border",
        skor !== null
          ? "bg-[#b8860b]/10 text-[#b8860b] border-[#b8860b]/30"
          : "bg-gray-100 text-gray-400 border-gray-200",
      )}
    >
      {skor !== null ? `${skor}/100` : "??/100"}
    </span>
  );
}

function buildPageHref(page: number) {
  return `/hut-81?page=${page}#kirim-ucapan`;
}

function buildPaginationItems(currentPage: number, totalPages: number) {
  // Tampilkan: 1 ... (current-1) current (current+1) ... total
  const items = new Set<number>([1, totalPages, currentPage]);

  if (currentPage - 1 > 1) items.add(currentPage - 1);
  if (currentPage + 1 < totalPages) items.add(currentPage + 1);

  return [...items]
    .filter((p) => p >= 1 && p <= totalPages)
    .sort((a, b) => a - b);
}

export default async function UcapanGrid({ page }: UcapanGridProps) {
  const { items, currentPage, totalPages } = await getUcapanPublik(page);

  const pageNumbers = buildPaginationItems(currentPage, totalPages);

  return (
    <div className="w-full">
      {/* Garis Pemisah */}
      <div className="w-full h-px bg-gray-200 mb-20 relative">
        <div className="absolute left-1/2 -translate-x-1/2 -top-3 bg-white px-4 text-gray-400 text-sm font-medium">
          Ucapan Masuk
        </div>
      </div>

      {items.length === 0 ? (
        <p className="text-center text-gray-400 mb-10">
          Belum ada ucapan. Jadilah yang pertama!
        </p>
      ) : (
        <div className="w-full mb-10 columns-1 md:columns-2 lg:columns-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid mb-6 relative bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <SkorBadge skor={item.skor} />

              <div className="flex items-start gap-3 pr-16">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#E12828] font-bold shrink-0">
                  {item.nama.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    {item.nama}
                  </h4>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mt-0.5">
                    <MapPin className="w-3 h-3" /> {item.asalDaerah}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed italic">
                {item.isiUcapan}
              </p>
            </div>
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={
                  currentPage > 1 ? buildPageHref(currentPage - 1) : undefined
                }
                aria-disabled={currentPage <= 1}
                className={cn(
                  currentPage <= 1 && "pointer-events-none opacity-40",
                )}
              />
            </PaginationItem>

            {pageNumbers.map((p, idx) => {
              const prev = pageNumbers[idx - 1];
              const showEllipsisBefore = prev !== undefined && p - prev > 1;

              return (
                <React.Fragment key={p}>
                  {showEllipsisBefore && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  <PaginationItem>
                    <PaginationLink
                      href={buildPageHref(p)}
                      isActive={p === currentPage}
                    >
                      {p}
                    </PaginationLink>
                  </PaginationItem>
                </React.Fragment>
              );
            })}

            <PaginationItem>
              <PaginationNext
                href={
                  currentPage < totalPages
                    ? buildPageHref(currentPage + 1)
                    : undefined
                }
                aria-disabled={currentPage >= totalPages}
                className={cn(
                  currentPage >= totalPages && "pointer-events-none opacity-40",
                )}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
