import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Estimate type based on the queried configuration. By default, `count_or_gauge` is returned. `distribution` is returned for distribution metrics without percentiles enabled. Lastly, `percentile` is returned if `filter[pct]=true` is queried with a distribution metric.
 */
export type MetricEstimateType =
  | typeof COUNT_OR_GAUGE
  | typeof DISTRIBUTION
  | typeof PERCENTILE
  | UnparsedObject;
export const COUNT_OR_GAUGE = "count_or_gauge";
export const DISTRIBUTION = "distribution";
export const PERCENTILE = "percentile";
