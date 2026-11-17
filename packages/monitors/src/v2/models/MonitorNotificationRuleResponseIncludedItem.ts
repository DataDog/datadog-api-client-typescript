import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { User } from "./User";

/**
 * An object related to a monitor notification rule.
 */
export type MonitorNotificationRuleResponseIncludedItem = User | UnparsedObject;
