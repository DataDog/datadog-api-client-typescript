import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the scatter plot widget.
 */
export type ScatterPlotWidgetDefinitionType =
  | typeof SCATTERPLOT
  | UnparsedObject;
export const SCATTERPLOT = "scatterplot";
