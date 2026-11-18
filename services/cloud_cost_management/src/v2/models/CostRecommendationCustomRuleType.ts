import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Custom recommendation rule resource type.
 */
export type CostRecommendationCustomRuleType =
  | typeof CUSTOM_RULES
  | UnparsedObject;
export const CUSTOM_RULES = "custom_rules";
