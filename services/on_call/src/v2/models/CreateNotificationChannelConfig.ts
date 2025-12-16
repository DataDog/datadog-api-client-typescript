import { UnparsedObject } from "@datadog/datadog-api-client";

import { CreateEmailNotificationChannelConfig } from "./CreateEmailNotificationChannelConfig";
import { CreatePhoneNotificationChannelConfig } from "./CreatePhoneNotificationChannelConfig";

/**
 * Defines the configuration for creating an On-Call notification channel
 */
export type CreateNotificationChannelConfig =
  | CreatePhoneNotificationChannelConfig
  | CreateEmailNotificationChannelConfig
  | UnparsedObject;
