import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type identifier for Jira account resources
 */
export type JiraAccountType = typeof JIRA_ACCOUNT | UnparsedObject;
export const JIRA_ACCOUNT = "jira-account";
