/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Control notification settings resource type.
 */

export type ControlNotificationSettingsResourceType =
  | typeof CONTROL_NOTIFICATION_SETTINGS
  | UnparsedObject;
export const CONTROL_NOTIFICATION_SETTINGS = "control_notification_settings";
