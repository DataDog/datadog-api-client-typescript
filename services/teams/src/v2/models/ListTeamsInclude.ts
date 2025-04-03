import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Included related resources optionally requested.
 */
export type ListTeamsInclude =
  | typeof TEAM_LINKS
  | typeof USER_TEAM_PERMISSIONS
  | UnparsedObject;
export const TEAM_LINKS = "team_links";
export const USER_TEAM_PERMISSIONS = "user_team_permissions";
