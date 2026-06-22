import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Pull request status for a linked code session.
 */
export type RemediationPullRequestStatus =
  | typeof OPEN
  | typeof CLOSED
  | typeof MERGED
  | UnparsedObject;
export const OPEN = "open";
export const CLOSED = "closed";
export const MERGED = "merged";
