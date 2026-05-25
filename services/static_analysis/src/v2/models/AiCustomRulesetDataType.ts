import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * AI custom ruleset resource type.
 */
export type AiCustomRulesetDataType = typeof AI_RULESET | UnparsedObject;
export const AI_RULESET = "ai_ruleset";
