import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type IssueStreamOrderingKey =
  | typeof TOTAL_COUNT
  | typeof FIRST_SEEN
  | typeof IMPACTED_SESSIONS
  | typeof IMPACTED_ACCOUNTS
  | typeof PRIORITY
  | UnparsedObject;
export const TOTAL_COUNT = "TOTAL_COUNT";
export const FIRST_SEEN = "FIRST_SEEN";
export const IMPACTED_SESSIONS = "IMPACTED_SESSIONS";
export const IMPACTED_ACCOUNTS = "IMPACTED_ACCOUNTS";
export const PRIORITY = "PRIORITY";
