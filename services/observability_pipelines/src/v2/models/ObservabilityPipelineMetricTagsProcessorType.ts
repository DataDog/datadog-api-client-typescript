import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value should always be `metric_tags`.
 */
export type ObservabilityPipelineMetricTagsProcessorType =
  | typeof METRIC_TAGS
  | UnparsedObject;
export const METRIC_TAGS = "metric_tags";
