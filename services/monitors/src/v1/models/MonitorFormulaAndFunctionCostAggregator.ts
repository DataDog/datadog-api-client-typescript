import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Aggregation methods for metric queries.
 */
export type MonitorFormulaAndFunctionCostAggregator =
  | typeof AVG
  | typeof SUM
  | typeof MAX
  | typeof MIN
  | typeof LAST
  | typeof AREA
  | typeof L2NORM
  | typeof PERCENTILE
  | typeof STDDEV
  | UnparsedObject;
export const AVG = "avg";
export const SUM = "sum";
export const MAX = "max";
export const MIN = "min";
export const LAST = "last";
export const AREA = "area";
export const L2NORM = "l2norm";
export const PERCENTILE = "percentile";
export const STDDEV = "stddev";
