import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of sorting algorithm. `alphabetical` sorts buckets by the facet value, `measure` sorts them by a computed aggregation.
 */
export type RUMAggregateSortType =
  | typeof ALPHABETICAL
  | typeof MEASURE
  | UnparsedObject;
export const ALPHABETICAL = "alphabetical";
export const MEASURE = "measure";
