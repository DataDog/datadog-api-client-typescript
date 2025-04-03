import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Team permission setting type
 */
export type TeamPermissionSettingType =
  | typeof TEAM_PERMISSION_SETTINGS
  | UnparsedObject;
export const TEAM_PERMISSION_SETTINGS = "team_permission_settings";
