import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of sorting algorithm.
 */
export type CIAppAggregateSortType =
  | typeof ALPHABETICAL
  | typeof MEASURE
  | UnparsedObject;
export const ALPHABETICAL = "alphabetical";
export const MEASURE = "measure";
