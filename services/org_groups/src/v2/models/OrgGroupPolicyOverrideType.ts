import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Org group policy overrides resource type.
 */
export type OrgGroupPolicyOverrideType =
  | typeof ORG_GROUP_POLICY_OVERRIDES
  | UnparsedObject;
export const ORG_GROUP_POLICY_OVERRIDES = "org_group_policy_overrides";
