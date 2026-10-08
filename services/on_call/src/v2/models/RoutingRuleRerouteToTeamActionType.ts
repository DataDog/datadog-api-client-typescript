import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the action reroutes the page to another team's routing rules.
 */
export type RoutingRuleRerouteToTeamActionType =
  | typeof REROUTE_TO_TEAM
  | UnparsedObject;
export const REROUTE_TO_TEAM = "reroute_to_team";
