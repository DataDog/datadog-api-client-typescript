import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Why no optimal variant is reported. Absent when one is, or when the cause isn't known.
 */
export type ExperimentsBanditOptimalVariantUnavailableReason =
  | typeof NO_RESULTS_YET
  | typeof WARMUP
  | typeof NOT_ENOUGH_DATA
  | typeof NO_DIFFERENCE
  | typeof STATS_UNAVAILABLE
  | UnparsedObject;
export const NO_RESULTS_YET = "NO_RESULTS_YET";
export const WARMUP = "WARMUP";
export const NOT_ENOUGH_DATA = "NOT_ENOUGH_DATA";
export const NO_DIFFERENCE = "NO_DIFFERENCE";
export const STATS_UNAVAILABLE = "STATS_UNAVAILABLE";
