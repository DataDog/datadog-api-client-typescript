import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be timeseries_request.
 */
export type TimeseriesFormulaRequestType =
  | typeof TIMESERIES_REQUEST
  | UnparsedObject;
export const TIMESERIES_REQUEST = "timeseries_request";
