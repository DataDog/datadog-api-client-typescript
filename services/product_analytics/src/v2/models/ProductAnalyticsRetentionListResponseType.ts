import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type identifier for a retention list response.
 */
export type ProductAnalyticsRetentionListResponseType =
  | typeof RETENTION_LIST_RESPONSE
  | UnparsedObject;
export const RETENTION_LIST_RESPONSE = "retention_list_response";
