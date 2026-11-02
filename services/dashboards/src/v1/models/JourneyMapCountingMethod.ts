import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether to count unique journeys or all journeys.
 */
export type JourneyMapCountingMethod =
  | typeof UNIQUES
  | typeof TOTALS
  | UnparsedObject;
export const UNIQUES = "uniques";
export const TOTALS = "totals";
