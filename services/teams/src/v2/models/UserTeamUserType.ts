import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * User team user type
 */
export type UserTeamUserType = typeof USERS | UnparsedObject;
export const USERS = "users";
