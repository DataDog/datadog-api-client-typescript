import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be timeseries_response.
 */
export type TimeseriesFormulaResponseType =
  | typeof TIMESERIES_RESPONSE
  | UnparsedObject;
export const TIMESERIES_RESPONSE = "timeseries_response";
