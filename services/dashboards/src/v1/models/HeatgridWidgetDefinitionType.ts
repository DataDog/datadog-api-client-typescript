import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the heatgrid widget.
 */
export type HeatgridWidgetDefinitionType = typeof HEATGRID | UnparsedObject;
export const HEATGRID = "heatgrid";
