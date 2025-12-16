import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the notification channel is a mobile device for push notifications
 */
export type NotificationChannelPushConfigType = typeof PUSH | UnparsedObject;
export const PUSH = "push";
