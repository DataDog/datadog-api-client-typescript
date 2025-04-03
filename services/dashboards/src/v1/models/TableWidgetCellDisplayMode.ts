import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Define a display mode for the table cell.
 */
export type TableWidgetCellDisplayMode =
  | typeof NUMBER
  | typeof BAR
  | typeof TREND
  | UnparsedObject;
export const NUMBER = "number";
export const BAR = "bar";
export const TREND = "trend";
