import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Whether the policy allows or denies matching actions.
 */
export type ExecutionPolicyEffect = typeof ALLOW | typeof DENY | UnparsedObject;
export const ALLOW = "allow";
export const DENY = "deny";
