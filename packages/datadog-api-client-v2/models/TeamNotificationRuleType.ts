/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Team notification rule type
 */

export type TeamNotificationRuleType =
  | typeof TEAM_NOTIFICATION_RULES
  | UnparsedObject;
export const TEAM_NOTIFICATION_RULES = "team_notification_rules";
