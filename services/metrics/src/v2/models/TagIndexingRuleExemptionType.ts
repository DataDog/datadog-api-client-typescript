import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The tag indexing rule exemption resource type.
 */
export type TagIndexingRuleExemptionType =
  | typeof TAG_INDEXING_RULE_EXEMPTIONS
  | UnparsedObject;
export const TAG_INDEXING_RULE_EXEMPTIONS = "tag_indexing_rule_exemptions";
