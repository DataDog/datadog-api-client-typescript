import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The tag indexing rule resource type.
 */
export type TagIndexingRuleType = typeof TAG_INDEXING_RULES | UnparsedObject;
export const TAG_INDEXING_RULES = "tag_indexing_rules";
