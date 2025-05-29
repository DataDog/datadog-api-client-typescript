import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The kind of target, `team_id` | `team_handle` | `user_id`.
 */
export type OnCallPageTargetType =
  | typeof TEAM_ID
  | typeof TEAM_HANDLE
  | typeof USER_ID
  | UnparsedObject;
export const TEAM_ID = "team_id";
export const TEAM_HANDLE = "team_handle";
export const USER_ID = "user_id";
