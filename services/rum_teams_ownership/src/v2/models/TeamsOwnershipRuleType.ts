import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be teams_ownership_grouped_mappings.
 */
export type TeamsOwnershipRuleType =
  | typeof TEAMS_OWNERSHIP_GROUPED_MAPPINGS
  | UnparsedObject;
export const TEAMS_OWNERSHIP_GROUPED_MAPPINGS =
  "teams_ownership_grouped_mappings";
