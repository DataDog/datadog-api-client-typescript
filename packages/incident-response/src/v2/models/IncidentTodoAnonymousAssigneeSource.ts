import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The source of the anonymous assignee.
 */
export type IncidentTodoAnonymousAssigneeSource =
  | typeof SLACK
  | typeof MICROSOFT_TEAMS
  | UnparsedObject;
export const SLACK = "slack";
export const MICROSOFT_TEAMS = "microsoft_teams";
