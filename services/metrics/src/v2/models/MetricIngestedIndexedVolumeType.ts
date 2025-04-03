import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The metric ingested and indexed volume type.
 */
export type MetricIngestedIndexedVolumeType =
  | typeof METRIC_VOLUMES
  | UnparsedObject;
export const METRIC_VOLUMES = "metric_volumes";
