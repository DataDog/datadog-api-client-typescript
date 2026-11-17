import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * User team user type
 */
export type UserTeamUserType = typeof USERS | UnparsedObject;
export const USERS = "users";
