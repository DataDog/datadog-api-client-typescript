import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Org group policy configs resource type.
 */
export type OrgGroupPolicyConfigType =
  | typeof ORG_GROUP_POLICY_CONFIGS
  | UnparsedObject;
export const ORG_GROUP_POLICY_CONFIGS = "org_group_policy_configs";
