/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotificationChannelEmailConfig } from "./NotificationChannelEmailConfig";
import { NotificationChannelPhoneConfig } from "./NotificationChannelPhoneConfig";
import { NotificationChannelPushConfig } from "./NotificationChannelPushConfig";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Defines the configuration for an On-Call notification channel
 */

export type NotificationChannelConfig =
  | NotificationChannelPhoneConfig
  | NotificationChannelEmailConfig
  | NotificationChannelPushConfig
  | UnparsedObject;
