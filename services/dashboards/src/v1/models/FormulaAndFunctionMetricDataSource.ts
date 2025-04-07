import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data source for metrics queries.
 */
export type FormulaAndFunctionMetricDataSource =
  | typeof METRICS
  | UnparsedObject;
export const METRICS = "metrics";
