import { UnparsedObject } from "@datadog/datadog-api-client";

import { TeamHierarchyMemberTeam } from "./TeamHierarchyMemberTeam";
import { TeamHierarchyMemberUser } from "./TeamHierarchyMemberUser";

/**
 * An included user or the requested team, distinguished by resource type.
 */
export type TeamHierarchyMemberIncluded =
  | TeamHierarchyMemberUser
  | TeamHierarchyMemberTeam
  | UnparsedObject;
