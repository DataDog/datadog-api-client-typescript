import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A data source that is powered by the Metrics platform.
 */
export type MetricsDataSource =
  | typeof METRICS
  | typeof CLOUD_COST
  | UnparsedObject;
export const METRICS = "metrics";
export const CLOUD_COST = "cloud_cost";
