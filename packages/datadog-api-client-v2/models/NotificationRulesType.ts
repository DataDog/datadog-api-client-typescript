/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The rule type associated to notification rules.
 */

export type NotificationRulesType = typeof NOTIFICATION_RULES | UnparsedObject;
export const NOTIFICATION_RULES = "notification_rules";
