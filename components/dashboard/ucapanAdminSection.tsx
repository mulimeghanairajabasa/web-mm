import { cn } from "@/lib/utils";
import { getUcapanDashboard, type SortDashboard } from "@/lib/actions/admin";
import UcapanAdminCard from "./ucapanAdminCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface UcapanAdminSectionProps {
  page: number;
  sort: SortDashboard;
}

const SORT_TABS: { value: SortDashboard; label: string }[] = [
  { value: "terbaru", label: "Terbaru" },
  { value: "belum_dinilai", label: "Belum Dinilai" },
  { value: "skor_tertinggi", label: "Skor Tertinggi" },
];

function buildHref(page: number, sort: SortDashboard) {
  return `/dashboard?page=${page}&sort=${sort}#ucapan`;
}

export default async function UcapanAdminSection({
  page,
  sort,
}: UcapanAdminSectionProps) {
  const { items, currentPage, totalPages, totalItems } =
    await getUcapanDashboard(page, sort);

  return (
    <section id="ucapan" className="scroll-mt-24">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="font-bold text-2xl text-gray-900">
          Ucapan{" "}
          <span className="text-gray-400 font-normal text-base">
            ({totalItems})
          </span>
        </h2>

        <div className="flex gap-2">
          {SORT_TABS.map((tab) => (
            <a
              key={tab.value}
              href={buildHref(1, tab.value)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
                sort === tab.value
                  ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-300",
              )}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </div>

      {items.length === 0 ? (
        <p className="text-center text-gray-400 py-10">Belum ada ucapan.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {items.map((item) => (
            <UcapanAdminCard key={item.id} item={item} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={
                  currentPage > 1 ? buildHref(currentPage - 1, sort) : undefined
                }
                className={cn(
                  currentPage <= 1 && "pointer-events-none opacity-40",
                )}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <PaginationItem key={p}>
                <PaginationLink
                  href={buildHref(p, sort)}
                  isActive={p === currentPage}
                >
                  {p}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext
                href={
                  currentPage < totalPages
                    ? buildHref(currentPage + 1, sort)
                    : undefined
                }
                className={cn(
                  currentPage >= totalPages && "pointer-events-none opacity-40",
                )}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </section>
  );
}
