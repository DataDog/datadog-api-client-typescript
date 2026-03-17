import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the deleted segment resource.
 */
export type RumSegmentDeleteType = typeof DELETED_SEGMENT | UnparsedObject;
export const DELETED_SEGMENT = "deleted_segment";
