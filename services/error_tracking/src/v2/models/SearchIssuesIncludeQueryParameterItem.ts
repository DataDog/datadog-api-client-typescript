import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Relationship object that should be included in the search response.
 */
export type SearchIssuesIncludeQueryParameterItem =
  | typeof ISSUE
  | typeof ISSUE_ASSIGNEE
  | typeof ISSUE_BITS_INVESTIGATION
  | typeof ISSUE_CASE
  | typeof ISSUE_IMPACTED_SESSIONS
  | typeof ISSUE_IMPACTED_USERS
  | typeof ISSUE_PULL_REQUESTS
  | typeof ISSUE_TEAM_OWNERS
  | typeof ISSUE_WATCHES
  | UnparsedObject;
export const ISSUE = "issue";
export const ISSUE_ASSIGNEE = "issue.assignee";
export const ISSUE_BITS_INVESTIGATION = "issue.bits_investigation";
export const ISSUE_CASE = "issue.case";
export const ISSUE_IMPACTED_SESSIONS = "issue.impacted_sessions";
export const ISSUE_IMPACTED_USERS = "issue.impacted_users";
export const ISSUE_PULL_REQUESTS = "issue.pull_requests";
export const ISSUE_TEAM_OWNERS = "issue.team_owners";
export const ISSUE_WATCHES = "issue.watches";
