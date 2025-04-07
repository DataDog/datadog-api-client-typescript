import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The metric estimate resource type.
 */
export type MetricEstimateResourceType =
  | typeof METRIC_CARDINALITY_ESTIMATE
  | UnparsedObject;
export const METRIC_CARDINALITY_ESTIMATE = "metric_cardinality_estimate";
