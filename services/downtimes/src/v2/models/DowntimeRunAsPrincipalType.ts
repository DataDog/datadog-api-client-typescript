import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of principal allowed to act on behalf of the downtime.
 */
export type DowntimeRunAsPrincipalType =
  | typeof USER
  | typeof ROLE
  | typeof TEAM
  | UnparsedObject;
export const USER = "user";
export const ROLE = "role";
export const TEAM = "team";
