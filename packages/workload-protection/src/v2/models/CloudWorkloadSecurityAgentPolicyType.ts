import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of the resource, must always be `policy`
 */
export type CloudWorkloadSecurityAgentPolicyType =
  | typeof POLICY
  | UnparsedObject;
export const POLICY = "policy";
