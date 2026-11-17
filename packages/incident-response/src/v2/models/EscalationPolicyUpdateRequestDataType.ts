import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Indicates that the resource is of type `policies`.
 */
export type EscalationPolicyUpdateRequestDataType =
  | typeof POLICIES
  | UnparsedObject;
export const POLICIES = "policies";
