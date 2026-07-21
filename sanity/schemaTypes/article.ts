import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "article",
  title: "Artikel",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Judul",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Ringkasan",
      description:
        "Tampil di card listing, dan otomatis jadi meta description untuk SEO.",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "coverImage",
      title: "Gambar Sampul",
      description:
        "Dipakai di card, hero, dan otomatis jadi OG image untuk SEO.",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Kategori",
      type: "string",
      options: {
        list: [
          { title: "Budaya", value: "budaya" },
          { title: "Cerita", value: "cerita" },
          { title: "Berita", value: "berita" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "content",
      title: "Konten",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
        }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "caption",
              title: "Caption (opsional)",
              type: "string",
            },
          ],
        }),
        defineArrayMember({ type: "youtubeEmbed" }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Penulis",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Tanggal Publish",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isFeatured",
      title: "Tampilkan di Hero Carousel",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "coverImage",
    },
  },
});
