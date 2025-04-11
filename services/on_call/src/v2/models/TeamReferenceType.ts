import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Teams resource type.
 */
export type TeamReferenceType = typeof TEAMS | UnparsedObject;
export const TEAMS = "teams";
