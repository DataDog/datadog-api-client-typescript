import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Byte frames are passed through as-is according to the underlying I/O boundaries (for example, split between messages or stream segments).
 */
export type ObservabilityPipelineSocketSourceFramingBytesMethod =
  | typeof BYTES
  | UnparsedObject;
export const BYTES = "bytes";
