import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The compression algorithm used for HTTP client destinations.
 */
export type ObservabilityPipelineHttpClientDestinationCompressionAlgorithm =
  | typeof GZIP
  | UnparsedObject;
export const GZIP = "gzip";
