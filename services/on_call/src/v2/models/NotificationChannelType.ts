import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the resource is of type 'notification_channels'.
 */
export type NotificationChannelType =
  | typeof NOTIFICATION_CHANNELS
  | UnparsedObject;
export const NOTIFICATION_CHANNELS = "notification_channels";
