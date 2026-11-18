import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Segment preview response resource type.
 */
export type SegmentPreviewResponseType =
  | typeof UNIFIED_SEGMENT_PREVIEW_RESPONSE
  | UnparsedObject;
export const UNIFIED_SEGMENT_PREVIEW_RESPONSE =
  "unified_segment_preview_response";
