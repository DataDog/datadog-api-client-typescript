/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Current alert status of the monitor. `No Data` is returned when the monitor has not been evaluated yet.
 */

export type ProductAnalyticsMonitorStatus =
  | typeof OK
  | typeof ALERT
  | typeof WARN
  | typeof NO_DATA
  | UnparsedObject;
export const OK = "OK";
export const ALERT = "Alert";
export const WARN = "Warn";
export const NO_DATA = "No Data";
