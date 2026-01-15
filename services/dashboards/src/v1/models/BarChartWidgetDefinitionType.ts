import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the bar chart widget.
 */
export type BarChartWidgetDefinitionType = typeof BAR_CHART | UnparsedObject;
export const BAR_CHART = "bar_chart";
