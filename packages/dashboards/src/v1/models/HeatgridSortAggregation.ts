import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Aggregation used to order rows over the displayed time range.
 */
export type HeatgridSortAggregation =
  | typeof AVG
  | typeof MIN
  | typeof MAX
  | typeof SUM
  | UnparsedObject;
export const AVG = "avg";
export const MIN = "min";
export const MAX = "max";
export const SUM = "sum";
