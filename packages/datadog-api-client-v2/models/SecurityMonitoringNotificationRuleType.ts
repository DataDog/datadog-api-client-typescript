/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the resource. The value should always be `notification_rules`.
 */

export type SecurityMonitoringNotificationRuleType =
  | typeof NOTIFICATION_RULES
  | UnparsedObject;
export const NOTIFICATION_RULES = "notification_rules";
