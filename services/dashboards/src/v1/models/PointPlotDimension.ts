import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Dimension of the point plot.
 */
export type PointPlotDimension =
  | typeof GROUP
  | typeof TIME
  | typeof Y
  | typeof RADIUS
  | UnparsedObject;
export const GROUP = "group";
export const TIME = "time";
export const Y = "y";
export const RADIUS = "radius";
