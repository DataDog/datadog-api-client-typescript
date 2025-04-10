import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Name of the query for use in formulas.
 */
export type FormulaAndFunctionSLOQueryType =
  | typeof METRIC
  | typeof MONITOR
  | typeof TIME_SLICE
  | UnparsedObject;
export const METRIC = "metric";
export const MONITOR = "monitor";
export const TIME_SLICE = "time_slice";
