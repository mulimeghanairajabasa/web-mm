import { defineField, defineType } from "sanity";

export default defineType({
  name: "youtubeEmbed",
  title: "Video YouTube",
  type: "object",
  fields: [
    defineField({
      name: "url",
      title: "URL YouTube",
      type: "url",
      validation: (Rule) => Rule.required().uri({ scheme: ["http", "https"] }),
    }),
  ],
  preview: {
    select: { title: "url" },
    prepare({ title }) {
      return { title: "Video YouTube", subtitle: title };
    },
  },
});
