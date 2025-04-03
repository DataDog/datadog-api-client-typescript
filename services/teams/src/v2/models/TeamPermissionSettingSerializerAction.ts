import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The identifier for the action
 */
export type TeamPermissionSettingSerializerAction =
  | typeof MANAGE_MEMBERSHIP
  | typeof EDIT
  | UnparsedObject;
export const MANAGE_MEMBERSHIP = "manage_membership";
export const EDIT = "edit";
