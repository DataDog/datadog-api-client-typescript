import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Team link type
 */
export type TeamLinkType = typeof TEAM_LINKS | UnparsedObject;
export const TEAM_LINKS = "team_links";
