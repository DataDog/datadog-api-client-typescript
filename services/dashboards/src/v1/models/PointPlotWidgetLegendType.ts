import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of legend to show for the point plot widget.
 */
export type PointPlotWidgetLegendType =
  | typeof AUTOMATIC
  | typeof NONE
  | UnparsedObject;
export const AUTOMATIC = "automatic";
export const NONE = "none";
