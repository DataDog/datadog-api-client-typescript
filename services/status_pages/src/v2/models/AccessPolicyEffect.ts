import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The effect applied when an email address matches the policy. Deny policies take precedence over allow policies.
 */
export type AccessPolicyEffect = typeof ALLOW | typeof DENY | UnparsedObject;
export const ALLOW = "allow";
export const DENY = "deny";
