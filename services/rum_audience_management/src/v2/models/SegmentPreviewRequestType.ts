import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Segment preview request resource type.
 */
export type SegmentPreviewRequestType =
  | typeof SEGMENT_PREVIEW_REQUEST
  | UnparsedObject;
export const SEGMENT_PREVIEW_REQUEST = "segment_preview_request";
