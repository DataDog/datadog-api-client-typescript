import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Controls how dataset ownership is determined. `disabled` turns off ownership-based access
 * entirely. `team_tag_based` assigns dataset ownership based on the team tags applied to the
 * data, allowing team members to see their own team's datasets.
 */
export type DatasetRestrictionOwnershipMode =
  | typeof DISABLED
  | typeof TEAM_TAG_BASED
  | UnparsedObject;
export const DISABLED = "disabled";
export const TEAM_TAG_BASED = "team_tag_based";
