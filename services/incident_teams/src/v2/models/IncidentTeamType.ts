import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident Team resource type.
 */
export type IncidentTeamType = typeof TEAMS | UnparsedObject;
export const TEAMS = "teams";
