import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Notification rules resource type.
 */
export type IncidentNotificationRuleType =
  | typeof INCIDENT_NOTIFICATION_RULES
  | UnparsedObject;
export const INCIDENT_NOTIFICATION_RULES = "incident_notification_rules";
