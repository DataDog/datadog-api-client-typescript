import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A time aggregation for use in query.
 */
export type MetricCustomTimeAggregation =
  | typeof AVG
  | typeof COUNT
  | typeof MAX
  | typeof MIN
  | typeof SUM
  | UnparsedObject;
export const AVG = "avg";
export const COUNT = "count";
export const MAX = "max";
export const MIN = "min";
export const SUM = "sum";
