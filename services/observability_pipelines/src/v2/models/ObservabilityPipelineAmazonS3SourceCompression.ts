import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Compression format for objects retrieved from the S3 bucket. Use `auto` to detect compression from the object's Content-Encoding header or file extension.
 */
export type ObservabilityPipelineAmazonS3SourceCompression =
  | typeof AUTO
  | typeof NONE
  | typeof GZIP
  | typeof ZSTD
  | UnparsedObject;
export const AUTO = "auto";
export const NONE = "none";
export const GZIP = "gzip";
export const ZSTD = "zstd";
