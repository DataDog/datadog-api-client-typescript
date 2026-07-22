import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Control notification settings resource type.
 */
export type ControlNotificationSettingsResourceType =
  | typeof CONTROL_NOTIFICATION_SETTINGS
  | UnparsedObject;
export const CONTROL_NOTIFICATION_SETTINGS = "control_notification_settings";
