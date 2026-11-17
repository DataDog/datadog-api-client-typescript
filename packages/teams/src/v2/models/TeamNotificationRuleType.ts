import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Team notification rule type
 */
export type TeamNotificationRuleType =
  | typeof TEAM_NOTIFICATION_RULES
  | UnparsedObject;
export const TEAM_NOTIFICATION_RULES = "team_notification_rules";
