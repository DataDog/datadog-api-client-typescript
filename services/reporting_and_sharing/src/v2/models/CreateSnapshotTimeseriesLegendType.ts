import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The legend display type for timeseries widgets. A value of `none` hides the legend entirely; omitting the field lets the frontend choose automatically.
 */
export type CreateSnapshotTimeseriesLegendType =
  | typeof COMPACT
  | typeof EXPANDED
  | typeof NONE
  | UnparsedObject;
export const COMPACT = "compact";
export const EXPANDED = "expanded";
export const NONE = "none";
