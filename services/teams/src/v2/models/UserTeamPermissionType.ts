import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * User team permission type
 */
export type UserTeamPermissionType =
  | typeof USER_TEAM_PERMISSIONS
  | UnparsedObject;
export const USER_TEAM_PERMISSIONS = "user_team_permissions";
