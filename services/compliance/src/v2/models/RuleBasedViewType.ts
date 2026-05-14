import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `rule_based_view`.
 */
export type RuleBasedViewType = typeof RULE_BASED_VIEW | UnparsedObject;
export const RULE_BASED_VIEW = "rule_based_view";
