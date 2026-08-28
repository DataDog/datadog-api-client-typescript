/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The event status. Legacy events can use `failure`, `error`, `warning`,
 * `info`, `success`, `user_update`, `recommendation`, or `snapshot`.
 * Alert events can use `error`, `warn`, or `ok`.
 */

export type EventStatusType =
  | typeof FAILURE
  | typeof ERROR
  | typeof WARN
  | typeof WARNING
  | typeof OK
  | typeof INFO
  | typeof SUCCESS
  | typeof USER_UPDATE
  | typeof RECOMMENDATION
  | typeof SNAPSHOT
  | UnparsedObject;
export const FAILURE = "failure";
export const ERROR = "error";
export const WARN = "warn";
export const WARNING = "warning";
export const OK = "ok";
export const INFO = "info";
export const SUCCESS = "success";
export const USER_UPDATE = "user_update";
export const RECOMMENDATION = "recommendation";
export const SNAPSHOT = "snapshot";
