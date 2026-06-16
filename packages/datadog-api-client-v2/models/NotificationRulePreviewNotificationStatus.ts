/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The notification status for the given rule type. `SUCCESS` means a matching event was found and the notification was sent successfully. `DEFAULT` means no matching event was found and a default placeholder notification was sent instead. `ERROR` means an error occurred while sending the notification.
 */

export type NotificationRulePreviewNotificationStatus =
  | typeof SUCCESS
  | typeof DEFAULT
  | typeof ERROR
  | UnparsedObject;
export const SUCCESS = "SUCCESS";
export const DEFAULT = "DEFAULT";
export const ERROR = "ERROR";
