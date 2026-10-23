import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Requested team resource type.
 */
export type TeamHierarchyMemberTeamType = typeof TEAMS | UnparsedObject;
export const TEAMS = "teams";
