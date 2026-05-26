import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * AI custom rule resource type.
 */
export type AiCustomRuleDataType = typeof AI_RULE | UnparsedObject;
export const AI_RULE = "ai_rule";
