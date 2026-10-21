import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * External team resource type.
 */
export type ConnectedTeamRefDataType =
  | typeof GITHUB_TEAM
  | typeof SERVICENOW_TEAM
  | UnparsedObject;
export const GITHUB_TEAM = "github_team";
export const SERVICENOW_TEAM = "servicenow_team";
