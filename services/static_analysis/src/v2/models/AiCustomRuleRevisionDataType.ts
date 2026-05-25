import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * AI custom rule revision resource type.
 */
export type AiCustomRuleRevisionDataType =
  | typeof AI_RULE_REVISION
  | UnparsedObject;
export const AI_RULE_REVISION = "ai_rule_revision";
