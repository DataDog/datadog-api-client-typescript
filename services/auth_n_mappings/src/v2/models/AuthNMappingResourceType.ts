import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of resource being mapped to.
 */
export type AuthNMappingResourceType =
  | typeof ROLE
  | typeof TEAM
  | UnparsedObject;
export const ROLE = "role";
export const TEAM = "team";
