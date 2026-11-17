import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * A space aggregation for use in query.
 */
export type MetricCustomSpaceAggregation =
  | typeof AVG
  | typeof MAX
  | typeof MIN
  | typeof SUM
  | UnparsedObject;
export const AVG = "avg";
export const MAX = "max";
export const MIN = "min";
export const SUM = "sum";
