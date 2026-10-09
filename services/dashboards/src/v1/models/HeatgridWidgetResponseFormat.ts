import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Response format for heatgrid queries.
 */
export type HeatgridWidgetResponseFormat = typeof TIMESERIES | UnparsedObject;
export const TIMESERIES = "timeseries";
