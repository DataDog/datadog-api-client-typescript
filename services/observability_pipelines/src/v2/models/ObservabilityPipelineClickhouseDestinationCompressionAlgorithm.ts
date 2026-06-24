import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The compression algorithm applied to outbound HTTP requests.
 */
export type ObservabilityPipelineClickhouseDestinationCompressionAlgorithm =
  | typeof GZIP
  | typeof NONE
  | UnparsedObject;
export const GZIP = "gzip";
export const NONE = "none";
