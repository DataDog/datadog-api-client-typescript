import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processing mode.
 */
export type ObservabilityPipelineDatadogTagsProcessorMode =
  | typeof FILTER
  | UnparsedObject;
export const FILTER = "filter";
