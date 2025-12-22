import { UnparsedObject } from "@datadog/datadog-api-client";

import { NotificationChannelData } from "./NotificationChannelData";

/**
 * Represents additional included resources for a on-call notification rules
 */
export type OnCallNotificationRulesIncluded =
  | NotificationChannelData
  | UnparsedObject;
