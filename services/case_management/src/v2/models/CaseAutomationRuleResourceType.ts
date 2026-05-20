import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for case automation rules.
 */
export type CaseAutomationRuleResourceType = typeof RULE | UnparsedObject;
export const RULE = "rule";
