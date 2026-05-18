import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the scatterplot data projection.
 */
export type ScatterplotDataProjectionProjectionType =
  | typeof SCATTERPLOT
  | UnparsedObject;
export const SCATTERPLOT = "scatterplot";
