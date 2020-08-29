import { object, string, StructType } from "superstruct";

const Struct = object({
  id: string(),
  name: string(),
});

export type Category = StructType<typeof Struct>;
