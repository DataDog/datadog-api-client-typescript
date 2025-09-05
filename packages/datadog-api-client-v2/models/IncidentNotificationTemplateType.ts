/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Notification templates resource type.
 */

export type IncidentNotificationTemplateType =
  | typeof NOTIFICATION_TEMPLATES
  | UnparsedObject;
export const NOTIFICATION_TEMPLATES = "notification_templates";
