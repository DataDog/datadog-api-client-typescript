import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Relationship object that should be included in the response.
 */
export type GetIssueIncludeQueryParameterItem =
  | typeof ASSIGNEE
  | typeof CASE
  | typeof TEAM_OWNERS
  | UnparsedObject;
export const ASSIGNEE = "assignee";
export const CASE = "case";
export const TEAM_OWNERS = "team_owners";
