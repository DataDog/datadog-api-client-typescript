import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Segment resource type.
 */
export type SegmentResourceType = typeof SEGMENT | UnparsedObject;
export const SEGMENT = "segment";
