import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Audience dimension to group by, instead of an event facet.
 */
export type ProductAnalyticsGraphQueryGroupBySource =
  | typeof USERS
  | typeof ACCOUNTS
  | UnparsedObject;
export const USERS = "product_analytics_audience_filters.users";
export const ACCOUNTS = "product_analytics_audience_filters.accounts";
