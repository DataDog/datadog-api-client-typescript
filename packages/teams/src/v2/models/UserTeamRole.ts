import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The user's role within the team. A value of `null` represents a regular member.
 */
export type UserTeamRole = typeof ADMIN | UnparsedObject;
export const ADMIN = "admin";
