import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Granularity for tag metadata results. `true` returns one row per day, `false` (or omitted) returns the monthly roll-up.
 */
export type CostTagMetadataDailyFilter =
  | typeof TRUE
  | typeof FALSE
  | UnparsedObject;
export const TRUE = "true";
export const FALSE = "false";
