import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Bar chart widget stacked legend behavior.
 */
export type BarChartWidgetLegend =
  | typeof AUTOMATIC
  | typeof INLINE
  | typeof NONE
  | UnparsedObject;
export const AUTOMATIC = "automatic";
export const INLINE = "inline";
export const NONE = "none";
