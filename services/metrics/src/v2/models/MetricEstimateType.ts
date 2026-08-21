import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Estimate type based on the queried configuration. `count_or_gauge` is returned by default, and `distribution` is returned for distribution metrics. The `filter[pct]` query parameter has no effect on this value.
 */
export type MetricEstimateType =
  | typeof COUNT_OR_GAUGE
  | typeof DISTRIBUTION
  | typeof PERCENTILE
  | UnparsedObject;
export const COUNT_OR_GAUGE = "count_or_gauge";
export const DISTRIBUTION = "distribution";
export const PERCENTILE = "percentile";
