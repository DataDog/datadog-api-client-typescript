import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Compression algorithm.
 */
export type ObservabilityPipelineHttpClientDestinationCompressionAlgorithm =
  | typeof GZIP
  | UnparsedObject;
export const GZIP = "gzip";
