import { UnparsedObject } from "@datadog/datadog-api-client";

import { User } from "./User";

/**
 * An object related to a monitor notification rule.
 */
export type MonitorNotificationRuleResponseIncludedItem = User | UnparsedObject;
