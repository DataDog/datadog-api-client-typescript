import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the timeseries savings response resource.
 */
export type CommitmentsSavingsTimeseriesResponseType =
  | typeof SAVINGS_TIMESERIES_RESPONSE
  | UnparsedObject;
export const SAVINGS_TIMESERIES_RESPONSE = "savings_timeseries_response";
