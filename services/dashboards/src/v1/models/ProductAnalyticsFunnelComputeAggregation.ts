import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Aggregation type for user journey funnel compute.
 */
export type ProductAnalyticsFunnelComputeAggregation =
  | typeof CARDINALITY
  | typeof COUNT
  | UnparsedObject;
export const CARDINALITY = "cardinality";
export const COUNT = "count";
