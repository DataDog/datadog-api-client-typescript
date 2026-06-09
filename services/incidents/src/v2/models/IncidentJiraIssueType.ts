import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident Jira issue resource type.
 */
export type IncidentJiraIssueType =
  | typeof INCIDENT_JIRA_ISSUES
  | UnparsedObject;
export const INCIDENT_JIRA_ISSUES = "incident_jira_issues";
