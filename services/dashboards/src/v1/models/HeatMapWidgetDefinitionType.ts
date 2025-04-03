import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the heat map widget.
 */
export type HeatMapWidgetDefinitionType = typeof HEATMAP | UnparsedObject;
export const HEATMAP = "heatmap";
