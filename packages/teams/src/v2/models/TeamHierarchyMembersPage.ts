import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { TeamHierarchyMembersNumberPage } from "./TeamHierarchyMembersNumberPage";
import { TeamHierarchyMembersOffsetPage } from "./TeamHierarchyMembersOffsetPage";

/**
 * Pagination metadata for the selected pagination mode.
 */
export type TeamHierarchyMembersPage =
  | TeamHierarchyMembersOffsetPage
  | TeamHierarchyMembersNumberPage
  | UnparsedObject;
