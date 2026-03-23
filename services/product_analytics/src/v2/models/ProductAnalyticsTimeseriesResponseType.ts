import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type identifier for a timeseries analytics response.
 */
export type ProductAnalyticsTimeseriesResponseType =
  | typeof TIMESERIES_RESPONSE
  | UnparsedObject;
export const TIMESERIES_RESPONSE = "timeseries_response";
