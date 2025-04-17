import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the resource is of type `policies`.
 */
export type EscalationPolicyDataType = typeof POLICIES | UnparsedObject;
export const POLICIES = "policies";
