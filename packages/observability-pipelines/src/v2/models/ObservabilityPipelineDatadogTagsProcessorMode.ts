import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The processing mode.
 */
export type ObservabilityPipelineDatadogTagsProcessorMode =
  | typeof FILTER
  | UnparsedObject;
export const FILTER = "filter";
