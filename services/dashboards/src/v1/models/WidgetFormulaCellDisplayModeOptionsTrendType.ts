import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Trend type for the cell display mode options.
 */
export type WidgetFormulaCellDisplayModeOptionsTrendType =
  | typeof AREA
  | typeof LINE
  | typeof BARS
  | UnparsedObject;
export const AREA = "area";
export const LINE = "line";
export const BARS = "bars";
