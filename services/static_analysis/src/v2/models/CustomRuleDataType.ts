import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type
 */
export type CustomRuleDataType = typeof CUSTOM_RULE | UnparsedObject;
export const CUSTOM_RULE = "custom_rule";
