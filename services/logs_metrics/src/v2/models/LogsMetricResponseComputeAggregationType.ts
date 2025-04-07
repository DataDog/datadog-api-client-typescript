import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of aggregation to use.
 */
export type LogsMetricResponseComputeAggregationType =
  | typeof COUNT
  | typeof DISTRIBUTION
  | UnparsedObject;
export const COUNT = "count";
export const DISTRIBUTION = "distribution";
