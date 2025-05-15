import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Team routing rules resource type.
 */
export type TeamRoutingRulesDataType =
  | typeof TEAM_ROUTING_RULES
  | UnparsedObject;
export const TEAM_ROUTING_RULES = "team_routing_rules";
