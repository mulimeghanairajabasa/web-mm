import { defineField, defineType } from "sanity";

export default defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  fields: [
    defineField({
      name: "internalName",
      title: "Nama Internal",
      description:
        "Label untuk memudahkan panitia membedakan banner di Studio, tidak tampil ke publik. Contoh: 'Promo HUT 81 - Sidebar Artikel'.",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Gambar",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Judul",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Deskripsi",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "ctaText",
      title: "Teks Tombol",
      type: "string",
    }),
    defineField({
      name: "ctaUrl",
      title: "Link Tombol",
      type: "url",
    }),
    defineField({
      name: "placement",
      title: "Penempatan",
      description: "Menandai di mana banner ini akan dipakai.",
      type: "string",
      options: {
        list: [{ title: "Sidebar Artikel", value: "artikel-sidebar" }],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "internalName", subtitle: "placement", media: "image" },
  },
});
