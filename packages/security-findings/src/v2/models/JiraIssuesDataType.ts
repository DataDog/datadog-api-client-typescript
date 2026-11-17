import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Jira issues resource type.
 */
export type JiraIssuesDataType = typeof JIRA_ISSUES | UnparsedObject;
export const JIRA_ISSUES = "jira_issues";
