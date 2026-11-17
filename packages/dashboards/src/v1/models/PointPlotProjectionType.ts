import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the projection.
 */
export type PointPlotProjectionType = typeof POINT_PLOT | UnparsedObject;
export const POINT_PLOT = "point_plot";
