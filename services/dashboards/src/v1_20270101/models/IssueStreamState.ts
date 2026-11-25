import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type IssueStreamState =
  | typeof OPEN
  | typeof RESOLVED
  | typeof IGNORED
  | typeof EXCLUDED
  | typeof IN_PROGRESS
  | typeof ACKNOWLEDGED
  | UnparsedObject;
export const OPEN = "OPEN";
export const RESOLVED = "RESOLVED";
export const IGNORED = "IGNORED";
export const EXCLUDED = "EXCLUDED";
export const IN_PROGRESS = "IN_PROGRESS";
export const ACKNOWLEDGED = "ACKNOWLEDGED";
