import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of aggregation that can be performed on metrics-based queries.
 */
export type MetricsAggregator =
  | typeof AVG
  | typeof MIN
  | typeof MAX
  | typeof SUM
  | typeof LAST
  | typeof PERCENTILE
  | typeof MEAN
  | typeof L2NORM
  | typeof AREA
  | UnparsedObject;
export const AVG = "avg";
export const MIN = "min";
export const MAX = "max";
export const SUM = "sum";
export const LAST = "last";
export const PERCENTILE = "percentile";
export const MEAN = "mean";
export const L2NORM = "l2norm";
export const AREA = "area";
