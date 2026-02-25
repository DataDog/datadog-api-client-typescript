import { UnparsedObject } from "@datadog/datadog-api-client";
export type ProductAnalyticsTimeseriesResponseType =
  | typeof TIMESERIES_RESPONSE
  | UnparsedObject;
export const TIMESERIES_RESPONSE = "timeseries_response";
