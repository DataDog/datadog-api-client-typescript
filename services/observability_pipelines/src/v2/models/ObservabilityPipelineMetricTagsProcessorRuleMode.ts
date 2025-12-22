import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processing mode for tag filtering.
 */
export type ObservabilityPipelineMetricTagsProcessorRuleMode =
  | typeof FILTER
  | UnparsedObject;
export const FILTER = "filter";
