import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Org group membership bulk update resource type.
 */
export type OrgGroupMembershipBulkUpdateType =
  | typeof ORG_GROUP_MEMBERSHIP_BULK_UPDATES
  | UnparsedObject;
export const ORG_GROUP_MEMBERSHIP_BULK_UPDATES =
  "org_group_membership_bulk_updates";
