import {
  getPemenangTampilStatus,
  type SortDashboard,
} from "@/lib/actions/admin";
import UcapanAdminSection from "@/components/dashboard/ucapanAdminSection";
import Top3AdminSection from "@/components/dashboard/top3Section";
import SettingsSection from "@/components/dashboard/setSection";

interface DashboardPageProps {
  searchParams: Promise<{ page?: string; sort?: string }>;
}

const VALID_SORTS: SortDashboard[] = [
  "terbaru",
  "belum_dinilai",
  "skor_tertinggi",
];

export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  const params = await searchParams;

  const page = Math.max(1, Number(params.page) || 1);
  const sort: SortDashboard = VALID_SORTS.includes(params.sort as SortDashboard)
    ? (params.sort as SortDashboard)
    : "terbaru";

  const pemenangTampil = await getPemenangTampilStatus();

  return (
    <main className="min-h-screen bg-[#fafafa] py-10 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div>
          <h1 className="font-bold text-3xl text-gray-900 mb-1">
            Dashboard Panitia
          </h1>
          <p className="text-gray-500 text-sm">
            Kelola ucapan, pantau Top 3, dan atur pengumuman pemenang.
          </p>
        </div>

        <Top3AdminSection />
        <UcapanAdminSection page={page} sort={sort} />
        <SettingsSection initialTampil={pemenangTampil} />
      </div>
    </main>
  );
}
