import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Whether or not to show a table legend.
 */
export type SunburstWidgetLegendTableType =
  | typeof TABLE
  | typeof NONE
  | UnparsedObject;
export const TABLE = "table";
export const NONE = "none";
