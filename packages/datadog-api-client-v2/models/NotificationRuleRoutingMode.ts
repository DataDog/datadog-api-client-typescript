/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The routing mode for the notification rule. `manual` sends notifications to the configured targets.
 */

export type NotificationRuleRoutingMode = typeof MANUAL | UnparsedObject;
export const MANUAL = "manual";
