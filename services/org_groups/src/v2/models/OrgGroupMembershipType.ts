import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Org group memberships resource type.
 */
export type OrgGroupMembershipType =
  | typeof ORG_GROUP_MEMBERSHIPS
  | UnparsedObject;
export const ORG_GROUP_MEMBERSHIPS = "org_group_memberships";
