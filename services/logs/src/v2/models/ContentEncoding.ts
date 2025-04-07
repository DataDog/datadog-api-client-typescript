import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * HTTP header used to compress the media-type.
 */
export type ContentEncoding =
  | typeof IDENTITY
  | typeof GZIP
  | typeof DEFLATE
  | UnparsedObject;
export const IDENTITY = "identity";
export const GZIP = "gzip";
export const DEFLATE = "deflate";
