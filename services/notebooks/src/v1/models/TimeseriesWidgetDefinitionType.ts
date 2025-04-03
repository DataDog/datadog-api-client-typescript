import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the timeseries widget.
 */
export type TimeseriesWidgetDefinitionType = typeof TIMESERIES | UnparsedObject;
export const TIMESERIES = "timeseries";
