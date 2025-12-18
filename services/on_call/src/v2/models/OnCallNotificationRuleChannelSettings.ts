import { UnparsedObject } from "@datadog/datadog-api-client";

import { OnCallPhoneNotificationRuleSettings } from "./OnCallPhoneNotificationRuleSettings";

/**
 * Defines the configuration for a channel associated with a notification rule
 */
export type OnCallNotificationRuleChannelSettings =
  | OnCallPhoneNotificationRuleSettings
  | UnparsedObject;
