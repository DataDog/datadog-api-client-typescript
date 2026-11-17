import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Team membership type
 */
export type UserTeamType = typeof TEAM_MEMBERSHIPS | UnparsedObject;
export const TEAM_MEMBERSHIPS = "team_memberships";
