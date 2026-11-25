/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The notification status for the given rule type. `SUCCESS` means a matching event was found and the test notification was queued. `DEFAULT` means no matching event was found and a placeholder test notification was queued instead. `ERROR` means the test notification couldn't be built or queued. A queued notification can still fail to reach its target later, and this status doesn't report it.
 */

export type NotificationRulePreviewNotificationStatus =
  | typeof SUCCESS
  | typeof DEFAULT
  | typeof ERROR
  | UnparsedObject;
export const SUCCESS = "SUCCESS";
export const DEFAULT = "DEFAULT";
export const ERROR = "ERROR";
