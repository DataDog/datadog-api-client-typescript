import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The metric distinct volume type.
 */
export type MetricDistinctVolumeType =
  | typeof DISTINCT_METRIC_VOLUMES
  | UnparsedObject;
export const DISTINCT_METRIC_VOLUMES = "distinct_metric_volumes";
