/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Specifies the method in which a phone is used in a notification rule
 */

export type OnCallPhoneNotificationRuleMethod =
  | typeof SMS
  | typeof VOICE
  | UnparsedObject;
export const SMS = "sms";
export const VOICE = "voice";
