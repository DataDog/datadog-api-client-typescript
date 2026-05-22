import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value must be `rename_metric_tags`.
 */
export type ObservabilityPipelineRenameMetricTagsProcessorType =
  | typeof RENAME_METRIC_TAGS
  | UnparsedObject;
export const RENAME_METRIC_TAGS = "rename_metric_tags";
