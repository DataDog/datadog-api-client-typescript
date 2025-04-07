import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * What type of user is allowed to perform the specified action
 */
export type TeamPermissionSettingValue =
  | typeof ADMINS
  | typeof MEMBERS
  | typeof ORGANIZATION
  | typeof USER_ACCESS_MANAGE
  | typeof TEAMS_MANAGE
  | UnparsedObject;
export const ADMINS = "admins";
export const MEMBERS = "members";
export const ORGANIZATION = "organization";
export const USER_ACCESS_MANAGE = "user_access_manage";
export const TEAMS_MANAGE = "teams_manage";
