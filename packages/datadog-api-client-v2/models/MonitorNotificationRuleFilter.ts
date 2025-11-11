/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorNotificationRuleFilterScope } from "./MonitorNotificationRuleFilterScope";
import { MonitorNotificationRuleFilterTags } from "./MonitorNotificationRuleFilterTags";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Filter used to associate the notification rule with monitors.
 */

export type MonitorNotificationRuleFilter =
  | MonitorNotificationRuleFilterTags
  | MonitorNotificationRuleFilterScope
  | UnparsedObject;
