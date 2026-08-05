import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Governance notification settings resource type.
 */
export type GovernanceNotificationSettingsResourceType =
  | typeof GOVERNANCE_NOTIFICATION_SETTINGS
  | UnparsedObject;
export const GOVERNANCE_NOTIFICATION_SETTINGS =
  "governance_notification_settings";
