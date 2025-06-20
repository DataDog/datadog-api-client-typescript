import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Member team type
 */
export type MemberTeamType = typeof MEMBER_TEAMS | UnparsedObject;
export const MEMBER_TEAMS = "member_teams";
