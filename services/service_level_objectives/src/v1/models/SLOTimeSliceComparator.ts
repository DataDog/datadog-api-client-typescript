import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The comparator used to compare the SLI value to the threshold.
 */
export type SLOTimeSliceComparator =
  | typeof GREATER
  | typeof GREATER_EQUAL
  | typeof LESS
  | typeof LESS_EQUAL
  | UnparsedObject;
export const GREATER = ">";
export const GREATER_EQUAL = ">=";
export const LESS = "<";
export const LESS_EQUAL = "<=";
