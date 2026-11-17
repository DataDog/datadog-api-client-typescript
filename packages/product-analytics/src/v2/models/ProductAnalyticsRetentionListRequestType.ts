import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type identifier for a retention list request.
 */
export type ProductAnalyticsRetentionListRequestType =
  | typeof RETENTION_LIST_REQUEST
  | UnparsedObject;
export const RETENTION_LIST_REQUEST = "retention_list_request";
