import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * HTTP header used to compress the JSON request body.
 */
export type CILogContentEncoding =
  | typeof IDENTITY
  | typeof GZIP
  | UnparsedObject;
export const IDENTITY = "identity";
export const GZIP = "gzip";
