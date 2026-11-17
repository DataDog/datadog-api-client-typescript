import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { NotificationChannelEmailConfig } from "./NotificationChannelEmailConfig";
import { NotificationChannelPhoneConfig } from "./NotificationChannelPhoneConfig";
import { NotificationChannelPushConfig } from "./NotificationChannelPushConfig";

/**
 * Defines the configuration for an On-Call notification channel
 */
export type NotificationChannelConfig =
  | NotificationChannelPhoneConfig
  | NotificationChannelEmailConfig
  | NotificationChannelPushConfig
  | UnparsedObject;
