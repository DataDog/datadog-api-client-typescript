import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Team type
 */
export type TeamType = typeof TEAM | UnparsedObject;
export const TEAM = "team";
