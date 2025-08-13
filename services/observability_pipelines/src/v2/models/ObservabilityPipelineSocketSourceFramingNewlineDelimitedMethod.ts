import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Byte frames which are delimited by a newline character.
 */
export type ObservabilityPipelineSocketSourceFramingNewlineDelimitedMethod =
  | typeof NEWLINE_DELIMITED
  | UnparsedObject;
export const NEWLINE_DELIMITED = "newline_delimited";
