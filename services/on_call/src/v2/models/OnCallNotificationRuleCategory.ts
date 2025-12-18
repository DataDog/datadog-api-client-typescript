import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Specifies the category a notification rule will apply to
 */
export type OnCallNotificationRuleCategory =
  | typeof HIGH_URGENCY
  | typeof LOW_URGENCY
  | UnparsedObject;
export const HIGH_URGENCY = "high_urgency";
export const LOW_URGENCY = "low_urgency";
