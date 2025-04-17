import { UnparsedObject } from "@datadog/datadog-api-client";

import { MonitorNotificationRuleFilterTags } from "./MonitorNotificationRuleFilterTags";

/**
 * Filter used to associate the notification rule with monitors.
 */
export type MonitorNotificationRuleFilter =
  | MonitorNotificationRuleFilterTags
  | UnparsedObject;
