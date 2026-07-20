import { getUcapanUser } from "@/lib/actions/ucapanUser";
import UcapanForm from "@/components/hut/ucapan/form";
import UcapanGrid from "@/components/hut/ucapan/grid";
import BannerPemenang from "@/components/hut/ucapan/bannerPemenang";

interface UcapanSectionProps {
  searchParams?: { page?: string | string[] };
}

export default async function UcapanSection({
  searchParams,
}: UcapanSectionProps) {
  const ucapanUser = await getUcapanUser();

  const rawPage = Array.isArray(searchParams?.page)
    ? searchParams?.page[0]
    : searchParams?.page;
  const page = Math.max(1, Number(rawPage) || 1);

  return (
    <section
      id="kirim-ucapan"
      className="w-full bg-white py-20 px-6 border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="text-center max-w-2xl mb-10">
          <h2 className="font-bold text-3xl md:text-4xl text-gray-900 mb-4">
            Kirim Ucapan Kemerdekaan
          </h2>
          <p className="font-normal text-base text-gray-600 leading-relaxed">
            Tuliskan harapan dan semangat kemerdekaanmu untuk Indonesia di
            usianya yang ke-81.
          </p>
        </div>

        <BannerPemenang />

        <UcapanForm initialData={ucapanUser} />

        <UcapanGrid page={page} />
      </div>
    </section>
  );
}
