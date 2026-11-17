import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Bar chart widget stacked display type.
 */
export type BarChartWidgetStackedType = typeof STACKED | UnparsedObject;
export const STACKED = "stacked";
