import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the policy to filter by. `org_config` indicates a policy backed by an organization configuration setting. `role` indicates a policy backed by a Datadog custom role.
 */
export type OrgGroupPolicyFilterPolicyTypeValue =
  | typeof ORG_CONFIG
  | typeof ROLE
  | UnparsedObject;
export const ORG_CONFIG = "org_config";
export const ROLE = "role";
