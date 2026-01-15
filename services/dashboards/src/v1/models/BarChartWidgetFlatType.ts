import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Bar chart widget flat display type.
 */
export type BarChartWidgetFlatType = typeof FLAT | UnparsedObject;
export const FLAT = "flat";
