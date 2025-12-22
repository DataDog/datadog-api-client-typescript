/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Specifies the category a notification rule will apply to
 */

export type OnCallNotificationRuleCategory =
  | typeof HIGH_URGENCY
  | typeof LOW_URGENCY
  | UnparsedObject;
export const HIGH_URGENCY = "high_urgency";
export const LOW_URGENCY = "low_urgency";
