import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Issue state filter for the `issue_stream` data source.
 */
export type ListStreamIssueState =
  | typeof OPEN
  | typeof IGNORED
  | typeof ACKNOWLEDGED
  | typeof RESOLVED
  | UnparsedObject;
export const OPEN = "OPEN";
export const IGNORED = "IGNORED";
export const ACKNOWLEDGED = "ACKNOWLEDGED";
export const RESOLVED = "RESOLVED";
