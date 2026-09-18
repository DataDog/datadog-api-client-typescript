/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of trigger for the investigation.
 */

export type TriggerType =
  | typeof MONITOR_ALERT_TRIGGER
  | typeof GENERAL_INVESTIGATION
  | UnparsedObject;
export const MONITOR_ALERT_TRIGGER = "monitor_alert_trigger";
export const GENERAL_INVESTIGATION = "general_investigation";
