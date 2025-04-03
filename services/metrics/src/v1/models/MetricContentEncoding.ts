import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * HTTP header used to compress the media-type.
 */
export type MetricContentEncoding =
  | typeof DEFLATE
  | typeof GZIP
  | UnparsedObject;
export const DEFLATE = "deflate";
export const GZIP = "gzip";
