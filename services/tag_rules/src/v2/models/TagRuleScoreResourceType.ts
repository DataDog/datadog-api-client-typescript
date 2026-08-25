import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for a tag rule compliance score.
 */
export type TagRuleScoreResourceType = typeof TAG_RULE_SCORE | UnparsedObject;
export const TAG_RULE_SCORE = "tag_rule_score";
