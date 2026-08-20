import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type identifier for a journey timeseries response.
 */
export type ProductAnalyticsJourneyTimeseriesResponseType =
  | typeof JOURNEY_TIMESERIES_RESPONSE
  | UnparsedObject;
export const JOURNEY_TIMESERIES_RESPONSE = "journey_timeseries_response";
