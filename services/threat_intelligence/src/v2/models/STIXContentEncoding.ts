import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The content encoding applied to the request body.
 */
export type STIXContentEncoding = typeof GZIP | UnparsedObject;
export const GZIP = "gzip";
