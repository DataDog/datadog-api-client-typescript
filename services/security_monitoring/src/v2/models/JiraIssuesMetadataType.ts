import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Jira issues metadata resource type.
 */
export type JiraIssuesMetadataType = typeof JIRA_ISSUES | UnparsedObject;
export const JIRA_ISSUES = "jira_issues";
