import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * External team resource type.
 */
export type ConnectedTeamRefDataType = typeof GITHUB_TEAM | UnparsedObject;
export const GITHUB_TEAM = "github_team";
