import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Byte frames which are chunked GELF messages.
 */
export type ObservabilityPipelineSocketSourceFramingChunkedGelfMethod =
  | typeof CHUNKED_GELF
  | UnparsedObject;
export const CHUNKED_GELF = "chunked_gelf";
