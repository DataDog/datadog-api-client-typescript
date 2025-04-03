import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Team membership type
 */
export type UserTeamType = typeof TEAM_MEMBERSHIPS | UnparsedObject;
export const TEAM_MEMBERSHIPS = "team_memberships";
