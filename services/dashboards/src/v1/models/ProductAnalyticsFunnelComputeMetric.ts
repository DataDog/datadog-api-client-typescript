import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Metric for user journey funnel compute. `__dd.conversion` and `__dd.conversion_rate` accept `count` (unique users/sessions) and `cardinality` (total users/sessions) as aggregations.
 */
export type ProductAnalyticsFunnelComputeMetric =
  | typeof CONVERSION
  | typeof CONVERSION_RATE
  | UnparsedObject;
export const CONVERSION = "__dd.conversion";
export const CONVERSION_RATE = "__dd.conversion_rate";
