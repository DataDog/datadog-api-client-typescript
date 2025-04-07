import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * If an alert event is enabled, its status is one of the following:
 * `failure`, `error`, `warning`, `info`, `success`, `user_update`,
 * `recommendation`, or `snapshot`.
 */
export type EventStatusType =
  | typeof FAILURE
  | typeof ERROR
  | typeof WARNING
  | typeof INFO
  | typeof SUCCESS
  | typeof USER_UPDATE
  | typeof RECOMMENDATION
  | typeof SNAPSHOT
  | UnparsedObject;
export const FAILURE = "failure";
export const ERROR = "error";
export const WARNING = "warning";
export const INFO = "info";
export const SUCCESS = "success";
export const USER_UPDATE = "user_update";
export const RECOMMENDATION = "recommendation";
export const SNAPSHOT = "snapshot";
