import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Team hierarchy membership resource type.
 */
export type TeamHierarchyMemberType =
  | typeof USER_TEAM_RELATIONSHIP
  | UnparsedObject;
export const USER_TEAM_RELATIONSHIP = "user_team_relationship";
