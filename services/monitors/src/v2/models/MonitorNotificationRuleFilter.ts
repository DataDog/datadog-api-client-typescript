import { UnparsedObject } from "@datadog/datadog-api-client";

import { MonitorNotificationRuleFilterScope } from "./MonitorNotificationRuleFilterScope";
import { MonitorNotificationRuleFilterTags } from "./MonitorNotificationRuleFilterTags";

/**
 * Specifies the matching criteria for monitor notifications.
 */
export type MonitorNotificationRuleFilter =
  | MonitorNotificationRuleFilterTags
  | MonitorNotificationRuleFilterScope
  | UnparsedObject;
