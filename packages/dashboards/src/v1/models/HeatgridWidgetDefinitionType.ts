import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the heatgrid widget.
 */
export type HeatgridWidgetDefinitionType = typeof HEATGRID | UnparsedObject;
export const HEATGRID = "heatgrid";
