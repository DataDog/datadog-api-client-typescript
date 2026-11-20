import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type AlertGraphVizType =
  | typeof TIMESERIES
  | typeof TOPLIST
  | UnparsedObject;
export const TIMESERIES = "timeseries";
export const TOPLIST = "toplist";
