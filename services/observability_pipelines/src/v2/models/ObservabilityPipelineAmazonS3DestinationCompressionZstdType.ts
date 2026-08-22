import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The compression type. Always `zstd`.
 */
export type ObservabilityPipelineAmazonS3DestinationCompressionZstdType =
  | typeof ZSTD
  | UnparsedObject;
export const ZSTD = "zstd";
