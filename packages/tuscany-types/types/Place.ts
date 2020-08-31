import { object, string, StructType } from "superstruct";

const Place = object({
  id: string(),
  nameRoman: string(),
  slug: string(),
  description: string(),
});

export type Place = StructType<typeof Place>;
