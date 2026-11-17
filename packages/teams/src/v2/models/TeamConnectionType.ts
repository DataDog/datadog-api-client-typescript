import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Team connection resource type.
 */
export type TeamConnectionType = typeof TEAM_CONNECTION | UnparsedObject;
export const TEAM_CONNECTION = "team_connection";
