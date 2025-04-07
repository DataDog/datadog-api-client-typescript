import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the service level objective.
 */
export type SLOType =
  | typeof METRIC
  | typeof MONITOR
  | typeof TIME_SLICE
  | UnparsedObject;
export const METRIC = "metric";
export const MONITOR = "monitor";
export const TIME_SLICE = "time_slice";
