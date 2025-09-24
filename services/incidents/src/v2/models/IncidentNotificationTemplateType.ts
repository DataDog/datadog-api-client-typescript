import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Notification templates resource type.
 */
export type IncidentNotificationTemplateType =
  | typeof NOTIFICATION_TEMPLATES
  | UnparsedObject;
export const NOTIFICATION_TEMPLATES = "notification_templates";
