import {
  intersection,
  object,
  string,
  array,
  partial,
  StructType,
} from "superstruct";

const Struct = intersection([
  object({
    name: string(),
    color: string(),
  }),
  partial({
    places: array(string()),
  }),
]);

export type Category = StructType<typeof Struct>;
