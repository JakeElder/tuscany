import { object, string, StructType } from "superstruct";

const Plot = object({
  id: string(),
  name: string(),
  location: string(),
  description: string(),
  slug: string(),
});

export type Plot = StructType<typeof Plot>;
