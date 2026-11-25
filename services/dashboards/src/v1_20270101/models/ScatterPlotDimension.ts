import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ScatterPlotDimension =
  | typeof COLOR
  | typeof X
  | typeof Y
  | typeof RADIUS
  | UnparsedObject;
export const COLOR = "color";
export const X = "x";
export const Y = "y";
export const RADIUS = "radius";
