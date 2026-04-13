import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Org groups resource type.
 */
export type OrgGroupType = typeof ORG_GROUPS | UnparsedObject;
export const ORG_GROUPS = "org_groups";
