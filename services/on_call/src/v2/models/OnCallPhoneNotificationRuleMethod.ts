import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Specifies the method in which a phone is used in a notification rule
 */
export type OnCallPhoneNotificationRuleMethod =
  | typeof SMS
  | typeof VOICE
  | UnparsedObject;
export const SMS = "sms";
export const VOICE = "voice";
