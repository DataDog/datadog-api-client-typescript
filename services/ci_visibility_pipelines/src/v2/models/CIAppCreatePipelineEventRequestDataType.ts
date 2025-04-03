import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the event.
 */
export type CIAppCreatePipelineEventRequestDataType =
  | typeof CIPIPELINE_RESOURCE_REQUEST
  | UnparsedObject;
export const CIPIPELINE_RESOURCE_REQUEST = "cipipeline_resource_request";
