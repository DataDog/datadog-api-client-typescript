import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Jira issue resource type
 */
export type JiraIssueResourceType = typeof ISSUES | UnparsedObject;
export const ISSUES = "issues";
