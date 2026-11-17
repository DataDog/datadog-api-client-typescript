import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Timeseries is made using an area or bars.
 */
export type TimeseriesBackgroundType =
  | typeof BARS
  | typeof AREA
  | UnparsedObject;
export const BARS = "bars";
export const AREA = "area";
