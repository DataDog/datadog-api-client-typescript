import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for work item automation rules.
 */
export type CaseAutomationRuleResourceType = typeof RULE | UnparsedObject;
export const RULE = "rule";
