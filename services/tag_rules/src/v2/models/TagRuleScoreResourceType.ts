import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for a tag rule compliance score. Responses use `tag_policy_score`.
 */
export type TagRuleScoreResourceType =
  | typeof TAG_RULE_SCORE
  | typeof TAG_POLICY_SCORE
  | UnparsedObject;
export const TAG_RULE_SCORE = "tag_rule_score";
export const TAG_POLICY_SCORE = "tag_policy_score";
