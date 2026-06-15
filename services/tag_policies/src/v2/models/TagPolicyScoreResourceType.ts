import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for a tag policy compliance score.
 */
export type TagPolicyScoreResourceType =
  | typeof TAG_POLICY_SCORE
  | UnparsedObject;
export const TAG_POLICY_SCORE = "tag_policy_score";
