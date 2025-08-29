import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * State of the issue
 */
export type IssueState =
  | typeof OPEN
  | typeof ACKNOWLEDGED
  | typeof RESOLVED
  | typeof IGNORED
  | typeof EXCLUDED
  | UnparsedObject;
export const OPEN = "OPEN";
export const ACKNOWLEDGED = "ACKNOWLEDGED";
export const RESOLVED = "RESOLVED";
export const IGNORED = "IGNORED";
export const EXCLUDED = "EXCLUDED";
