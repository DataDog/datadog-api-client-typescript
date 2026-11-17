import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Requested team resource type.
 */
export type TeamHierarchyMemberTeamType = typeof TEAMS | UnparsedObject;
export const TEAMS = "teams";
