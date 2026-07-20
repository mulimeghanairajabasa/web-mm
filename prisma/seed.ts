// import { PrismaClient } from '@/lib/generated/prisma';

// const prisma = new PrismaClient();

// async function main() {
//   console.log('Memulai proses seeding data Ucapan...');

//   const ucapanData = [

//   ];

//   // Menggunakan createMany untuk memasukkan 12 data sekaligus
//   // skipDuplicates: true digunakan agar seed aman dijalankan berulang kali
//   const insertUcapan = await prisma.ucapan.createMany({
//     data: ucapanData,
//     skipDuplicates: true,
//   });

//   console.log(`Seeding selesai. Berhasil menambahkan ${insertUcapan.count} data Ucapan.`);
// }

// main()
//   .catch((e) => {
//     console.error('Terjadi kesalahan saat seeding:', e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

// prisma/seed.ts
import "dotenv/config";
import { PrismaClient } from "../lib/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const data = [
    {
      clerkUserId: "seed-user-1",
      nama: "Budi Santoso",
      asalDaerah: "Rajabasa, Lampung",
      noHp: "081234567890",
      isiUcapan:
        "Dirgahayu Indonesiaku! Semoga semakin maju dan sejahtera rakyatnya. Merdeka!",
      skor: null,
      isHidden: false,
      createdAt: new Date("2026-07-10T10:00:00Z"),
    },
    {
      clerkUserId: "seed-user-2",
      nama: "Siti Aminah",
      asalDaerah: "Jakarta Selatan",
      noHp: "081234567890",
      isiUcapan:
        "Selamat HUT RI ke-81. Mari kita terus jaga persatuan dan kesatuan bangsa.",
      skor: null,
      isHidden: false,
      createdAt: new Date("2026-07-11T10:00:00Z"),
    },
    {
      clerkUserId: "seed-user-3",
      nama: "Andi Saputra",
      asalDaerah: "Bandung",
      noHp: "081234567890",
      isiUcapan:
        "Sekali merdeka tetap merdeka! Bangga menjadi bagian dari pemuda yang terus berkarya.",
      skor: null,
      isHidden: false,
      createdAt: new Date("2026-07-12T10:00:00Z"),
    },
    {
      clerkUserId: "seed-user-4",
      nama: "Bimo",
      asalDaerah: "Yogyakarta",
      noHp: "081234567890",
      isiUcapan:
        "Dirgahayu, Indonesiaku! Mari kita rajut masa depan bangsa dengan benang-benang tradisi. Sebagai pemuda, kita siap berlari kencang di era digital tanpa pernah lupa pada luhurnya budaya Nusantara. Merdeka!",
      skor: null,
      isHidden: false,
      createdAt: new Date("2026-07-13T10:00:00Z"),
    },
    {
      clerkUserId: "seed-user-5",
      nama: "Nadin",
      asalDaerah: "Bandung",
      noHp: "081234567890",
      isiUcapan:
        "Wilujeng tepang taun, Indonesia! Pemuda yang hebat adalah mereka yang mampu menciptakan inovasi baru sambil tetap menjaga silih asah, silih asih, silih asuh. Mari bawa kearifan lokal kita ke panggung dunia!",
      skor: null,
      isHidden: false,
      createdAt: new Date("2026-07-11T14:30:00Z"),
    },
    {
      clerkUserId: "seed-user-6",
      nama: "Wayan",
      asalDaerah: "Denpasar",
      noHp: "081234567890",
      isiUcapan:
        "Selamat Ulang Tahun kebanggaanku, Republik Indonesia! Mari kita jaga keharmonisan bangsa ini seperti indahnya tarian Bali. Pemuda berbudaya adalah kunci Indonesia yang damai dan maju!",
      skor: null,
      isHidden: false,
      createdAt: new Date("2026-07-12T09:15:00Z"),
    },
    {
      clerkUserId: "seed-user-7",
      nama: "Tigor",
      asalDaerah: "Medan",
      noHp: "081234567890",
      isiUcapan:
        "Horas, Merdeka! Dirgahayu Republik Indonesia. Kemajuan zaman tidak akan mengikis identitas kita. Mari satukan langkah, dari ujung barat hingga timur, merawat keberagaman menjadi kekuatan utama pemuda masa kini.",
      skor: null,
      isHidden: false,
      createdAt: new Date("2026-07-13T16:45:00Z"),
    },
    {
      clerkUserId: "seed-user-8",
      nama: "Cut Nisa",
      asalDaerah: "Banda Aceh",
      noHp: "081234567890",
      isiUcapan:
        "Selamat bertambah usia, Ibu Pertiwi. Semangat pantang menyerah pahlawan masa lalu hidup dalam kreativitas pemuda masa kini. Mari kita rawat seni, sastra, dan budaya kita sebagai benteng identitas bangsa.",
      skor: null,
      isHidden: false,
      createdAt: new Date("2026-07-14T11:20:00Z"),
    },
    {
      clerkUserId: "seed-user-9",
      nama: "Laode",
      asalDaerah: "Makassar",
      noHp: "081234567890",
      isiUcapan:
        "Dirgahayu Indonesia! Ibarat kapal Phinisi yang tangguh menerjang ombak, pemuda Indonesia siap berlayar menaklukkan tantangan global dengan membawa kompas kearifan budaya leluhur.",
      skor: null,
      isHidden: false,
      createdAt: new Date("2026-07-15T08:10:00Z"),
    },
    {
      clerkUserId: "seed-user-10",
      nama: "Rian",
      asalDaerah: "Jakarta",
      noHp: "081234567890",
      isiUcapan:
        "Selamat ulang tahun, Indonesia! Menjadi modern dan metropolitan bukan berarti lupa daratan. Pemuda sejati adalah yang pikirannya global, namun jiwa dan karakternya tetap berakar pada budaya lokal.",
      skor: null,
      isHidden: false,
      createdAt: new Date("2026-07-16T19:05:00Z"),
    },
    {
      clerkUserId: "seed-user-11",
      nama: "Sari",
      asalDaerah: "Palembang",
      noHp: "081234567890",
      isiUcapan:
        "Dirgahayu negeriku tercinta! Ingatlah kejayaan bahari Nusantara di masa lampau. Saatnya kita, generasi muda, kembali mengukir emas sejarah dengan inovasi dan karya yang mencerminkan kekayaan budaya kita.",
      skor: null,
      isHidden: false,
      createdAt: new Date("2026-07-17T13:40:00Z"),
    },
    {
      clerkUserId: "seed-user-12",
      nama: "Yohanes",
      asalDaerah: "Jayapura",
      noHp: "081234567890",
      isiUcapan:
        "Selamat Ulang Tahun, Indonesia! Dari ufuk timur, kami pemuda Papua siap menggemakan suara persatuan. Mari padukan kemajuan teknologi dengan rasa cinta kita pada alam dan warisan budaya nenek moyang.",
      skor: null,
      isHidden: false,
      createdAt: new Date("2026-07-18T07:55:00Z"),
    },
  ];

  for (const item of data) {
    await prisma.ucapan.upsert({
      where: { clerkUserId: item.clerkUserId },
      update: item,
      create: item,
    });
  }

  console.log(`Seed selesai: ${data.length} ucapan ditambahkan/diperbarui.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
