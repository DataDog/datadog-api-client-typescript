import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Mode for creating the Jira issue. Can be "single" or "multiple".
 */
export type JiraIssueDataAttributesRequestMode =
  | typeof SINGLE
  | typeof MULTIPLE
  | UnparsedObject;
export const SINGLE = "single";
export const MULTIPLE = "multiple";
