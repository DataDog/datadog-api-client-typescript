import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Deleted segment resource type.
 */
export type SegmentDeletedType = typeof DELETED_SEGMENT | UnparsedObject;
export const DELETED_SEGMENT = "deleted_segment";
