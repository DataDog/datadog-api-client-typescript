import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the timeseries coverage response resource.
 */
export type CommitmentsCoverageTimeseriesResponseType =
  | typeof COVERAGE_TIMESERIES_RESPONSE
  | UnparsedObject;
export const COVERAGE_TIMESERIES_RESPONSE = "coverage_timeseries_response";
