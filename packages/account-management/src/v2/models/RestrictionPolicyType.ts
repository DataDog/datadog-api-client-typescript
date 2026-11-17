import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Restriction policy type.
 */
export type RestrictionPolicyType = typeof RESTRICTION_POLICY | UnparsedObject;
export const RESTRICTION_POLICY = "restriction_policy";
