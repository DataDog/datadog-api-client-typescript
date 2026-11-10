import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Why the pull request is linked to the issue. `fix` means the pull request fixes the issue, and `trigger` means the pull request introduced the issue.
 */
export type IssuePullRequestReason =
  | typeof UNKNOWN
  | typeof FIX
  | typeof TRIGGER
  | UnparsedObject;
export const UNKNOWN = "unknown";
export const FIX = "fix";
export const TRIGGER = "trigger";
