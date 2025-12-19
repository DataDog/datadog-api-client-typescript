import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Bar chart widget scaling definition.
 */
export type BarChartWidgetScaling =
  | typeof ABSOLUTE
  | typeof RELATIVE
  | UnparsedObject;
export const ABSOLUTE = "absolute";
export const RELATIVE = "relative";
