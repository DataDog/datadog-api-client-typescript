import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The aggregation type.
 */
export type SecurityMonitoringRuleQueryAggregation =
  | typeof COUNT
  | typeof CARDINALITY
  | typeof SUM
  | typeof MAX
  | typeof NEW_VALUE
  | typeof GEO_DATA
  | typeof EVENT_COUNT
  | typeof NONE
  | UnparsedObject;
export const COUNT = "count";
export const CARDINALITY = "cardinality";
export const SUM = "sum";
export const MAX = "max";
export const NEW_VALUE = "new_value";
export const GEO_DATA = "geo_data";
export const EVENT_COUNT = "event_count";
export const NONE = "none";
