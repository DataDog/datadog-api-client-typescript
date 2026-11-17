import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Teams resource type.
 */
export type TeamReferenceType = typeof TEAMS | UnparsedObject;
export const TEAMS = "teams";
