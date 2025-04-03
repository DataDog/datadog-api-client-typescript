import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Timeseries, scalar, or event list response. Event list response formats are supported by Geomap widgets.
 */
export type FormulaAndFunctionResponseFormat =
  | typeof TIMESERIES
  | typeof SCALAR
  | typeof EVENT_LIST
  | UnparsedObject;
export const TIMESERIES = "timeseries";
export const SCALAR = "scalar";
export const EVENT_LIST = "event_list";
