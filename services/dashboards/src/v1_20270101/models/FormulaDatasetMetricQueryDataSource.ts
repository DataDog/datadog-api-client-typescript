import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type FormulaDatasetMetricQueryDataSource =
  | typeof METRICS
  | typeof CLOUD_COST
  | UnparsedObject;
export const METRICS = "metrics";
export const CLOUD_COST = "cloud_cost";
