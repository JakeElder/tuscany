import { optional, object, string, array, StructType } from "superstruct";

const Struct = object({
  name: string(),
  color: string(),
  places: optional(array(string())),
});

export type Category = StructType<typeof Struct>;
