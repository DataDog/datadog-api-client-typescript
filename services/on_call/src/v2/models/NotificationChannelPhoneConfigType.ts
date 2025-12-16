import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the notification channel is a phone
 */
export type NotificationChannelPhoneConfigType = typeof PHONE | UnparsedObject;
export const PHONE = "phone";
