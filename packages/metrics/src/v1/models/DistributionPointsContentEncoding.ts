import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * HTTP header used to compress the media-type.
 */
export type DistributionPointsContentEncoding = typeof DEFLATE | UnparsedObject;
export const DEFLATE = "deflate";
