import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type
 */
export type CustomRulesetDataType = typeof CUSTOM_RULESET | UnparsedObject;
export const CUSTOM_RULESET = "custom_ruleset";
