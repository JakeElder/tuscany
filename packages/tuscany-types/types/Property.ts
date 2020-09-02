import { object, string, StructType, boolean } from "superstruct";

const Property = object({
  id: string(),
  name: string(),
  location: string(),
  fullDescription: string(),
  shortDescription: string(),
  slug: string(),
  availableForRent: boolean(),
  availableForSale: boolean(),
});

export type Property = StructType<typeof Property>;
