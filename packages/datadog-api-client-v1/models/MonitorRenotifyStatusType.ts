/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The different statuses for which renotification is supported.
 */

export type MonitorRenotifyStatusType =
  | typeof ALERT
  | typeof WARN
  | typeof NO_DATA
  | UnparsedObject;
export const ALERT = "alert";
export const WARN = "warn";
export const NO_DATA = "no data";
