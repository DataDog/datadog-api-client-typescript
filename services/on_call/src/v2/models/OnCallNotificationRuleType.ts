import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the resource is of type 'notification_rules'.
 */
export type OnCallNotificationRuleType =
  | typeof NOTIFICATION_RULES
  | UnparsedObject;
export const NOTIFICATION_RULES = "notification_rules";
