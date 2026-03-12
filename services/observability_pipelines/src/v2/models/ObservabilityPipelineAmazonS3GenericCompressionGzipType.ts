import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The compression type. Always `gzip`.
 */
export type ObservabilityPipelineAmazonS3GenericCompressionGzipType =
  | typeof GZIP
  | UnparsedObject;
export const GZIP = "gzip";
