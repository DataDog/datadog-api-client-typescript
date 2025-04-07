import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * HTTP header used to compress the media-type.
 */
export type MetricContentEncoding =
  | typeof DEFLATE
  | typeof ZSTD1
  | typeof GZIP
  | UnparsedObject;
export const DEFLATE = "deflate";
export const ZSTD1 = "zstd1";
export const GZIP = "gzip";
