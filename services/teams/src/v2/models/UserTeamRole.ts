import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The user's role within the team
 */
export type UserTeamRole = typeof ADMIN | UnparsedObject;
export const ADMIN = "admin";
