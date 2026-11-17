import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Indicates that the resource is of type `teams`.
 */
export type TeamTargetType = typeof TEAMS | UnparsedObject;
export const TEAMS = "teams";
