import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Aggregation value.
 */
export type ListStreamComputeAggregation =
  | typeof COUNT
  | typeof CARDINALITY
  | typeof MEDIAN
  | typeof PC75
  | typeof PC90
  | typeof PC95
  | typeof PC98
  | typeof PC99
  | typeof SUM
  | typeof MIN
  | typeof MAX
  | typeof AVG
  | typeof EARLIEST
  | typeof LATEST
  | typeof MOST_FREQUENT
  | UnparsedObject;
export const COUNT = "count";
export const CARDINALITY = "cardinality";
export const MEDIAN = "median";
export const PC75 = "pc75";
export const PC90 = "pc90";
export const PC95 = "pc95";
export const PC98 = "pc98";
export const PC99 = "pc99";
export const SUM = "sum";
export const MIN = "min";
export const MAX = "max";
export const AVG = "avg";
export const EARLIEST = "earliest";
export const LATEST = "latest";
export const MOST_FREQUENT = "most_frequent";
