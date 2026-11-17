import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type of the Page target.
 */
export type OnCallPageTargetRelationshipDataType =
  | typeof TEAMS
  | typeof USERS
  | typeof CROSS_ORG_HANDLES
  | UnparsedObject;
export const TEAMS = "teams";
export const USERS = "users";
export const CROSS_ORG_HANDLES = "cross_org_handles";
