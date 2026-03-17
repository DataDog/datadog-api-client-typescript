import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The compression type. Always `zstd`.
 */
export type ObservabilityPipelineAmazonS3GenericCompressionZstdType =
  | typeof ZSTD
  | UnparsedObject;
export const ZSTD = "zstd";
