/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OnCallPhoneNotificationRuleSettings } from "./OnCallPhoneNotificationRuleSettings";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Defines the configuration for a channel associated with a notification rule
 */

export type OnCallNotificationRuleChannelSettings =
  | OnCallPhoneNotificationRuleSettings
  | UnparsedObject;
