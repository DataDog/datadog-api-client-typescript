import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * An aggregation function. `count` counts events and needs no metric. `cardinality` counts the distinct values of the metric. `sum`, `min`, `max`, `avg`, `median` and the percentiles (`pc75` to `pc99`) apply to a numeric metric such as `@view.loading_time`.
 */
export type RUMAggregationFunction =
  | typeof COUNT
  | typeof CARDINALITY
  | typeof PERCENTILE_75
  | typeof PERCENTILE_90
  | typeof PERCENTILE_95
  | typeof PERCENTILE_98
  | typeof PERCENTILE_99
  | typeof SUM
  | typeof MIN
  | typeof MAX
  | typeof AVG
  | typeof MEDIAN
  | UnparsedObject;
export const COUNT = "count";
export const CARDINALITY = "cardinality";
export const PERCENTILE_75 = "pc75";
export const PERCENTILE_90 = "pc90";
export const PERCENTILE_95 = "pc95";
export const PERCENTILE_98 = "pc98";
export const PERCENTILE_99 = "pc99";
export const SUM = "sum";
export const MIN = "min";
export const MAX = "max";
export const AVG = "avg";
export const MEDIAN = "median";
