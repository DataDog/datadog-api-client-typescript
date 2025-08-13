import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value should always be `datadog_tags`.
 */
export type ObservabilityPipelineDatadogTagsProcessorType =
  | typeof DATADOG_TAGS
  | UnparsedObject;
export const DATADOG_TAGS = "datadog_tags";
