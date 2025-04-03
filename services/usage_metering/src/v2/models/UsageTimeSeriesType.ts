import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of usage data.
 */
export type UsageTimeSeriesType = typeof USAGE_TIMESERIES | UnparsedObject;
export const USAGE_TIMESERIES = "usage_timeseries";
