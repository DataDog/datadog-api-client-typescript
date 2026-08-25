import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for a tag rule.
 */
export type TagRuleResourceType = typeof TAG_RULE | UnparsedObject;
export const TAG_RULE = "tag_rule";
