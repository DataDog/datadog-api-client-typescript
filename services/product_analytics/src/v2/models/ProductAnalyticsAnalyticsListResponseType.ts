import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type identifier for an analytics list response.
 */
export type ProductAnalyticsAnalyticsListResponseType =
  | typeof LIST_RESPONSE
  | UnparsedObject;
export const LIST_RESPONSE = "list_response";
