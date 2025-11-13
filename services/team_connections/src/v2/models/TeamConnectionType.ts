import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Team connection resource type.
 */
export type TeamConnectionType = typeof TEAM_CONNECTION | UnparsedObject;
export const TEAM_CONNECTION = "team_connection";
