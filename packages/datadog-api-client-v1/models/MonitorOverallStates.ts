/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The different states your monitor can be in.
 */

export type MonitorOverallStates =
  | typeof ALERT
  | typeof IGNORED
  | typeof NO_DATA
  | typeof OK
  | typeof SKIPPED
  | typeof UNKNOWN
  | typeof WARN
  | UnparsedObject;
export const ALERT = "Alert";
export const IGNORED = "Ignored";
export const NO_DATA = "No Data";
export const OK = "OK";
export const SKIPPED = "Skipped";
export const UNKNOWN = "Unknown";
export const WARN = "Warn";
