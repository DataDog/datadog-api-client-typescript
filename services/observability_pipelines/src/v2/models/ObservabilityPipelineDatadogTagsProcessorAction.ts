import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The action to take on tags with matching keys.
 */
export type ObservabilityPipelineDatadogTagsProcessorAction =
  | typeof INCLUDE
  | typeof EXCLUDE
  | UnparsedObject;
export const INCLUDE = "include";
export const EXCLUDE = "exclude";
