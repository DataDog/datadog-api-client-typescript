import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Dimension of the Scatterplot.
 */
export type ScatterplotDimension =
  | typeof X
  | typeof Y
  | typeof RADIUS
  | typeof COLOR
  | UnparsedObject;
export const X = "x";
export const Y = "y";
export const RADIUS = "radius";
export const COLOR = "color";
