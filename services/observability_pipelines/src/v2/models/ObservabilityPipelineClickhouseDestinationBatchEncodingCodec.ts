import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The codec used for batch encoding. Only `arrow_stream` is supported.
 */
export type ObservabilityPipelineClickhouseDestinationBatchEncodingCodec =
  | typeof ARROW_STREAM
  | UnparsedObject;
export const ARROW_STREAM = "arrow_stream";
