import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Notification rule resource type
 */
export type CaseNotificationRuleResourceType =
  | typeof NOTIFICATION_RULE
  | UnparsedObject;
export const NOTIFICATION_RULE = "notification_rule";
