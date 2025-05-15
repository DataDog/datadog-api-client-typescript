import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The deduplication mode to apply to the fields.
 */
export type ObservabilityPipelineDedupeProcessorMode =
  | typeof MATCH
  | typeof IGNORE
  | UnparsedObject;
export const MATCH = "match";
export const IGNORE = "ignore";
