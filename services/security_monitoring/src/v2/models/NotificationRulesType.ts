import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The rule type associated to notification rules.
 */
export type NotificationRulesType = typeof NOTIFICATION_RULES | UnparsedObject;
export const NOTIFICATION_RULES = "notification_rules";
