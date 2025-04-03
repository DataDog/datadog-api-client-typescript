import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of sort to use on the calculated value.
 */
export type EventsSortType =
  | typeof ALPHABETICAL
  | typeof MEASURE
  | UnparsedObject;
export const ALPHABETICAL = "alphabetical";
export const MEASURE = "measure";
