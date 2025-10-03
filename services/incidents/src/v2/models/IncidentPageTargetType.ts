import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of page target for incident pages.
 */
export type IncidentPageTargetType =
  | typeof TEAM_HANDLE
  | typeof TEAM_UUID
  | typeof USER_UUID
  | UnparsedObject;
export const TEAM_HANDLE = "team_handle";
export const TEAM_UUID = "team_uuid";
export const USER_UUID = "user_uuid";
