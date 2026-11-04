import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of aggregation to use.
 * `count` counts the matching events. `distribution` aggregates the values found at `path`.
 */
export type RumMetricComputeAggregationType =
  | typeof COUNT
  | typeof DISTRIBUTION
  | UnparsedObject;
export const COUNT = "count";
export const DISTRIBUTION = "distribution";
