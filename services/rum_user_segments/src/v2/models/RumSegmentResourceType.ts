import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the segment resource.
 */
export type RumSegmentResourceType = typeof SEGMENT | UnparsedObject;
export const SEGMENT = "segment";
