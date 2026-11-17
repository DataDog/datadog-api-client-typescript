import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Ruleset resource type.
 */
export type ReorderRulesetResourceDataType = typeof RULESET | UnparsedObject;
export const RULESET = "ruleset";
