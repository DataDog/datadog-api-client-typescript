import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Team type
 */
export type TeamType = typeof TEAM | UnparsedObject;
export const TEAM = "team";
