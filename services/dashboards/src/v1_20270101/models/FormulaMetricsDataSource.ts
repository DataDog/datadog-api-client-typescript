import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type FormulaMetricsDataSource =
  | typeof METRICS
  | typeof CLOUD_COST
  | typeof DATADOG_USAGE
  | UnparsedObject;
export const METRICS = "metrics";
export const CLOUD_COST = "cloud_cost";
export const DATADOG_USAGE = "datadog_usage";
