import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Legend column.
 */
export type TimeseriesWidgetLegendColumn =
  | typeof VALUE
  | typeof AVG
  | typeof SUM
  | typeof MIN
  | typeof MAX
  | UnparsedObject;
export const VALUE = "value";
export const AVG = "avg";
export const SUM = "sum";
export const MIN = "min";
export const MAX = "max";
