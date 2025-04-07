import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * HTTP header used to compress the media-type.
 */
export type ContentEncoding = typeof GZIP | typeof DEFLATE | UnparsedObject;
export const GZIP = "gzip";
export const DEFLATE = "deflate";
