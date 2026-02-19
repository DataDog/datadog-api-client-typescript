import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the static segment creation request resource.
 */
export type RumStaticSegmentRequestType =
  | typeof CREATE_STATIC_SEGMENT_REQUEST
  | UnparsedObject;
export const CREATE_STATIC_SEGMENT_REQUEST = "create_static_segment_request";
