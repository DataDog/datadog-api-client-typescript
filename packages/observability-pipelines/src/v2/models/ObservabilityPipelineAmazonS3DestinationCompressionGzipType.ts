import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The compression type. Always `gzip`.
 */
export type ObservabilityPipelineAmazonS3DestinationCompressionGzipType =
  | typeof GZIP
  | UnparsedObject;
export const GZIP = "gzip";
