import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for analytics list requests.
 */
export type ProductAnalyticsAnalyticsListRequestType =
  | typeof FORMULA_ANALYTICS_EXTENDED_LIST_REQUEST
  | UnparsedObject;
export const FORMULA_ANALYTICS_EXTENDED_LIST_REQUEST =
  "formula_analytics_extended_list_request";
