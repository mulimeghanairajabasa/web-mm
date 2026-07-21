import { defineField, defineType } from "sanity";

export default defineType({
  name: "author",
  title: "Penulis",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nama",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "photo",
      title: "Foto",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "bio",
      title: "Bio",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "externalUrl",
      title: "Link Eksternal (opsional)",
      description:
        "Kalau diisi, nama penulis akan jadi link ke sini (misal web pribadi). Kalau kosong, nama tampil sebagai teks biasa.",
      type: "url",
    }),
  ],
  preview: {
    select: { title: "name", media: "photo" },
  },
});
