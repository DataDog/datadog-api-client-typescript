import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the timeseries utilization response resource.
 */
export type CommitmentsUtilizationTimeseriesResponseType =
  | typeof UTILIZATION_TIMESERIES_RESPONSE
  | UnparsedObject;
export const UTILIZATION_TIMESERIES_RESPONSE =
  "utilization_timeseries_response";
