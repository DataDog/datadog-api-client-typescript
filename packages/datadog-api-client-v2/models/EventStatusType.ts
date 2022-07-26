/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

export type EventStatusType =
  | typeof FAILURE
  | typeof ERROR
  | typeof WARNING
  | typeof INFO
  | typeof SUCCESS
  | typeof USER_UPDATE
  | typeof RECOMMENDATION
  | typeof SNAPSHOT;
export const FAILURE = "failure";
export const ERROR = "error";
export const WARNING = "warning";
export const INFO = "info";
export const SUCCESS = "success";
export const USER_UPDATE = "user_update";
export const RECOMMENDATION = "recommendation";
export const SNAPSHOT = "snapshot";
