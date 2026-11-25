import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type SloQueryType =
  | typeof MONITOR
  | typeof METRIC
  | typeof TIME_SLICE
  | UnparsedObject;
export const MONITOR = "monitor";
export const METRIC = "metric";
export const TIME_SLICE = "time_slice";
