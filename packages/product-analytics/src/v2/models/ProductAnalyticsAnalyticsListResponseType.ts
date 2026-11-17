import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type identifier for an analytics list response.
 */
export type ProductAnalyticsAnalyticsListResponseType =
  | typeof LIST_RESPONSE
  | UnparsedObject;
export const LIST_RESPONSE = "list_response";
