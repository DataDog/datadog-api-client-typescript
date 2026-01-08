import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Compression algorithm.
 */
export type ObservabilityPipelineHttpClientDestinationCompressionAlgorithm =
  | typeof GZIP
  | UnparsedObject;
export const GZIP = "gzip";
