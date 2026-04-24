import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the policy. Only `org_config` is supported, indicating a policy backed by an organization configuration setting.
 */
export type OrgGroupPolicyPolicyType = typeof ORG_CONFIG | UnparsedObject;
export const ORG_CONFIG = "org_config";
