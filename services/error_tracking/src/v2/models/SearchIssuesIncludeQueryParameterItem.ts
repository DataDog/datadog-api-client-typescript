import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Relationship object that should be included in the search response.
 */
export type SearchIssuesIncludeQueryParameterItem =
  | typeof ISSUE
  | typeof ISSUE_ASSIGNEE
  | typeof ISSUE_CASE
  | typeof ISSUE_TEAM_OWNERS
  | UnparsedObject;
export const ISSUE = "issue";
export const ISSUE_ASSIGNEE = "issue.assignee";
export const ISSUE_CASE = "issue.case";
export const ISSUE_TEAM_OWNERS = "issue.team_owners";
