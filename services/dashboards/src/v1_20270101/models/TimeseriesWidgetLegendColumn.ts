import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type TimeseriesWidgetLegendColumn =
  | typeof SUM
  | typeof MIN
  | typeof MAX
  | typeof AVG
  | typeof VALUE
  | UnparsedObject;
export const SUM = "sum";
export const MIN = "min";
export const MAX = "max";
export const AVG = "avg";
export const VALUE = "value";
