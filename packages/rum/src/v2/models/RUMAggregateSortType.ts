import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of sorting algorithm.
 */
export type RUMAggregateSortType =
  | typeof ALPHABETICAL
  | typeof MEASURE
  | UnparsedObject;
export const ALPHABETICAL = "alphabetical";
export const MEASURE = "measure";
