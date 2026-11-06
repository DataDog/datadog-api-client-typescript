import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data source for metrics queries.
 */
export type MonitorFormulaAndFunctionMetricQueryDataSource =
  | typeof METRICS
  | UnparsedObject;
export const METRICS = "metrics";
