import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Team hierarchy link type
 */
export type TeamHierarchyLinkType =
  | typeof TEAM_HIERARCHY_LINKS
  | UnparsedObject;
export const TEAM_HIERARCHY_LINKS = "team_hierarchy_links";
