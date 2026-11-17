import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Bar chart widget flat display type.
 */
export type BarChartWidgetFlatType = typeof FLAT | UnparsedObject;
export const FLAT = "flat";
