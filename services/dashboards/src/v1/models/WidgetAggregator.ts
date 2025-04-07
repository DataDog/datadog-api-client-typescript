import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Aggregator used for the request.
 */
export type WidgetAggregator =
  | typeof AVERAGE
  | typeof LAST
  | typeof MAXIMUM
  | typeof MINIMUM
  | typeof SUM
  | typeof PERCENTILE
  | UnparsedObject;
export const AVERAGE = "avg";
export const LAST = "last";
export const MAXIMUM = "max";
export const MINIMUM = "min";
export const SUM = "sum";
export const PERCENTILE = "percentile";
