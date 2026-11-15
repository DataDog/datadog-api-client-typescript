import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Recommendation notification rule resource type.
 */
export type CostRecommendationNotificationRuleType =
  | typeof NOTIFICATION_RULES
  | UnparsedObject;
export const NOTIFICATION_RULES = "notification_rules";
