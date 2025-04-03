import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Layout of the legend.
 */
export type TimeseriesWidgetLegendLayout =
  | typeof AUTO
  | typeof HORIZONTAL
  | typeof VERTICAL
  | UnparsedObject;
export const AUTO = "auto";
export const HORIZONTAL = "horizontal";
export const VERTICAL = "vertical";
