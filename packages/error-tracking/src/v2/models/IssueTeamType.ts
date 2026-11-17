import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the object.
 */
export type IssueTeamType = typeof TEAM | UnparsedObject;
export const TEAM = "team";
