import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Data source for metrics queries.
 */
export type FormulaAndFunctionMetricDataSource =
  | typeof METRICS
  | UnparsedObject;
export const METRICS = "metrics";
