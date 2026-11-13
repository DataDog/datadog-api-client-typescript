import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for a tag rule. Requests accept `tag_rule` or `tag_policy`; responses use `tag_policy`.
 */
export type TagRuleResourceType =
  | typeof TAG_RULE
  | typeof TAG_POLICY
  | UnparsedObject;
export const TAG_RULE = "tag_rule";
export const TAG_POLICY = "tag_policy";
