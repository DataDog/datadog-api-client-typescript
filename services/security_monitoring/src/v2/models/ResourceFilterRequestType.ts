import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Constant string to identify the request type.
 */
export type ResourceFilterRequestType =
  | typeof CSM_RESOURCE_FILTER
  | UnparsedObject;
export const CSM_RESOURCE_FILTER = "csm_resource_filter";
