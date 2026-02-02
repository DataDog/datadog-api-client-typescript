import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `tag_policy_score`.
 */
export type TagPolicyScoreType = typeof TAG_POLICY_SCORE | UnparsedObject;
export const TAG_POLICY_SCORE = "tag_policy_score";
