import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value must be `add_metric_tags`.
 */
export type ObservabilityPipelineAddMetricTagsProcessorType =
  | typeof ADD_METRIC_TAGS
  | UnparsedObject;
export const ADD_METRIC_TAGS = "add_metric_tags";
