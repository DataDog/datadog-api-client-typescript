import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type for analytics requests.
 */
export type ProductAnalyticsAnalyticsRequestType =
  | typeof FORMULA_ANALYTICS_EXTENDED_REQUEST
  | UnparsedObject;
export const FORMULA_ANALYTICS_EXTENDED_REQUEST =
  "formula_analytics_extended_request";
