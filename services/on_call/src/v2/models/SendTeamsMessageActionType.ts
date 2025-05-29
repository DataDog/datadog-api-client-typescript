import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the action is a send Microsoft Teams message action.
 */
export type SendTeamsMessageActionType =
  | typeof SEND_TEAMS_MESSAGE
  | UnparsedObject;
export const SEND_TEAMS_MESSAGE = "send_teams_message";
