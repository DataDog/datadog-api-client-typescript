import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the point plot widget.
 */
export type PointPlotWidgetDefinitionType = typeof POINT_PLOT | UnparsedObject;
export const POINT_PLOT = "point_plot";
