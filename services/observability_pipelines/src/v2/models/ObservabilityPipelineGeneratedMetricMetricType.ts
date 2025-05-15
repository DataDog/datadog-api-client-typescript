import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of metric to create.
 */
export type ObservabilityPipelineGeneratedMetricMetricType =
  | typeof COUNT
  | typeof GAUGE
  | typeof DISTRIBUTION
  | UnparsedObject;
export const COUNT = "count";
export const GAUGE = "gauge";
export const DISTRIBUTION = "distribution";
