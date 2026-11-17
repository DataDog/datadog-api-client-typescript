import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type identifier for Jira issue template resources
 */
export type JiraIssueTemplateType = typeof JIRA_ISSUE_TEMPLATE | UnparsedObject;
export const JIRA_ISSUE_TEMPLATE = "jira-issue-template";
