import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Represents the resource type for a group of users assigned to handle on-call duties within a team.
 */
export type TeamOnCallRespondersDataType =
  | typeof TEAM_ONCALL_RESPONDERS
  | UnparsedObject;
export const TEAM_ONCALL_RESPONDERS = "team_oncall_responders";
