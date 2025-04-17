import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Monitor notification rule resource type.
 */
export type MonitorNotificationRuleResourceType =
  | typeof MONITOR_NOTIFICATION_RULE
  | UnparsedObject;
export const MONITOR_NOTIFICATION_RULE = "monitor-notification-rule";
