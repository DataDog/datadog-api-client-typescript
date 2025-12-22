/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { NotificationChannelData } from "./NotificationChannelData";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Represents additional included resources for a on-call notification rules
 */

export type OnCallNotificationRulesIncluded =
  | NotificationChannelData
  | UnparsedObject;
