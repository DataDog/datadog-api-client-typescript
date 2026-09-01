import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of notification target.
 */
export type NotificationRuleTargetType =
  | typeof EMAIL
  | typeof SLACK_CHANNEL
  | typeof SLACK_USER
  | typeof WEBHOOK
  | typeof PAGERDUTY_SERVICE
  | typeof MS_TEAMS_CHANNEL
  | UnparsedObject;
export const EMAIL = "EMAIL";
export const SLACK_CHANNEL = "SLACK_CHANNEL";
export const SLACK_USER = "SLACK_USER";
export const WEBHOOK = "WEBHOOK";
export const PAGERDUTY_SERVICE = "PAGERDUTY_SERVICE";
export const MS_TEAMS_CHANNEL = "MS_TEAMS_CHANNEL";
