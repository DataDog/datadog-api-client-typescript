/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Notification rules resource type.
 */

export type IncidentNotificationRuleType =
  | typeof INCIDENT_NOTIFICATION_RULES
  | UnparsedObject;
export const INCIDENT_NOTIFICATION_RULES = "incident_notification_rules";
