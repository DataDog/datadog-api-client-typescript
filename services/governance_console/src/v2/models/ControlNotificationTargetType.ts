import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of notification destination.
 */
export type ControlNotificationTargetType =
  | typeof EMAIL
  | typeof SLACK
  | typeof AT_MENTION
  | typeof CASE
  | UnparsedObject;
export const EMAIL = "email";
export const SLACK = "slack";
export const AT_MENTION = "at_mention";
export const CASE = "case";
