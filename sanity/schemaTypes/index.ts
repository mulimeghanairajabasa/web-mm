import { type SchemaTypeDefinition } from "sanity";

import article from "./article";
import author from "./author";
import banner from "./banner";
import youtubeEmbed from "./youtubeEmbed";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article, author, banner, youtubeEmbed],
};
