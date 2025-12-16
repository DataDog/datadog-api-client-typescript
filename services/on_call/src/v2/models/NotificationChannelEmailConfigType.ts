import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the notification channel is an e-mail address
 */
export type NotificationChannelEmailConfigType = typeof EMAIL | UnparsedObject;
export const EMAIL = "email";
