/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of notification destination.
 */

export type ControlNotificationTargetType =
  | typeof EMAIL
  | typeof SLACK
  | typeof AT_MENTION
  | typeof CASE
  | UnparsedObject;
export const EMAIL = "email";
export const SLACK = "slack";
export const AT_MENTION = "at_mention";
export const CASE = "case";
