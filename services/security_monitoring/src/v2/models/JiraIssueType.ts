import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Jira issue resource type.
 */
export type JiraIssueType = typeof JIRA_ISSUE | UnparsedObject;
export const JIRA_ISSUE = "jira_issue";
