import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type identifier for a retention list request.
 */
export type ProductAnalyticsRetentionListRequestType =
  | typeof RETENTION_LIST_REQUEST
  | UnparsedObject;
export const RETENTION_LIST_REQUEST = "retention_list_request";
