import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be teams_ownership_mappings.
 */
export type TeamsOwnershipMappingType =
  | typeof TEAMS_OWNERSHIP_MAPPINGS
  | UnparsedObject;
export const TEAMS_OWNERSHIP_MAPPINGS = "teams_ownership_mappings";
