import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The attribute to sort the search results by, in descending order. Defaults to `TOTAL_COUNT`.
 */
export type IssuesSearchRequestDataAttributesOrderBy =
  | typeof TOTAL_COUNT
  | typeof FIRST_SEEN
  | typeof IMPACTED_SESSIONS
  | typeof PRIORITY
  | typeof IMPACTED_ACCOUNTS
  | UnparsedObject;
export const TOTAL_COUNT = "TOTAL_COUNT";
export const FIRST_SEEN = "FIRST_SEEN";
export const IMPACTED_SESSIONS = "IMPACTED_SESSIONS";
export const PRIORITY = "PRIORITY";
export const IMPACTED_ACCOUNTS = "IMPACTED_ACCOUNTS";
