/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of notification target.
 */

export type NotificationRuleTargetType =
  | typeof EMAIL
  | typeof SLACK_CHANNEL
  | typeof SLACK_USER
  | typeof WEBHOOK
  | typeof PAGERDUTY_SERVICE
  | typeof MS_TEAMS_CHANNEL
  | UnparsedObject;
export const EMAIL = "EMAIL";
export const SLACK_CHANNEL = "SLACK_CHANNEL";
export const SLACK_USER = "SLACK_USER";
export const WEBHOOK = "WEBHOOK";
export const PAGERDUTY_SERVICE = "PAGERDUTY_SERVICE";
export const MS_TEAMS_CHANNEL = "MS_TEAMS_CHANNEL";
