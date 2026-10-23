import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Jira issue resource type.
 */
export type OnCallPageJiraIssueType = typeof JIRA_ISSUES | UnparsedObject;
export const JIRA_ISSUES = "jira_issues";
