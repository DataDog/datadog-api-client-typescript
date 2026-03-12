import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Comma-separated list of additional data to include in the response. Allowed values are `metric_volumes`.
 */
export type MetricVolumesInclude =
  | typeof METRIC_VOLUMES
  | typeof GENERATED_METRIC_ATTRIBUTES
  | UnparsedObject;
export const METRIC_VOLUMES = "metric_volumes";
export const GENERATED_METRIC_ATTRIBUTES = "generated_metric_attributes";
