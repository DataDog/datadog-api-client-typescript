import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * HTTP header used to compress the media-type.
 */
export type DistributionPointsContentEncoding = typeof DEFLATE | UnparsedObject;
export const DEFLATE = "deflate";
