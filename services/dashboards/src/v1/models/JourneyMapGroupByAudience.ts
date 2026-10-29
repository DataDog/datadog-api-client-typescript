import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Audience the group by facet is read from.
 */
export type JourneyMapGroupByAudience =
  | typeof USERS
  | typeof ACCOUNTS
  | UnparsedObject;
export const USERS = "product_analytics_audience_filters.users";
export const ACCOUNTS = "product_analytics_audience_filters.accounts";
