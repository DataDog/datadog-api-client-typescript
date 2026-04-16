import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of SLO definition being queried.
 */
export type SlosQueryType =
  | typeof METRIC
  | typeof TIME_SLICE
  | typeof MONITOR
  | UnparsedObject;
export const METRIC = "metric";
export const TIME_SLICE = "time_slice";
export const MONITOR = "monitor";
