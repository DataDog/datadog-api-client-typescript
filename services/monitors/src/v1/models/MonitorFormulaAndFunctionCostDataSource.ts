import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data source for cost queries.
 */
export type MonitorFormulaAndFunctionCostDataSource =
  | typeof METRICS
  | typeof CLOUD_COST
  | typeof DATADOG_USAGE
  | UnparsedObject;
export const METRICS = "metrics";
export const CLOUD_COST = "cloud_cost";
export const DATADOG_USAGE = "datadog_usage";
