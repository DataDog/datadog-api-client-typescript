import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Change request resource type.
 */
export type ChangeRequestResourceType = typeof CHANGE_REQUEST | UnparsedObject;
export const CHANGE_REQUEST = "change_request";
