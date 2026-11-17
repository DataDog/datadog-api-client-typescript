import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the heat map widget.
 */
export type HeatMapWidgetDefinitionType = typeof HEATMAP | UnparsedObject;
export const HEATMAP = "heatmap";
