import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How the policy is enforced. `blocking` rejects telemetry that violates the policy.
 * `surfacing` only highlights non-compliant telemetry without blocking it.
 */
export type TagPolicyType = typeof BLOCKING | typeof SURFACING | UnparsedObject;
export const BLOCKING = "blocking";
export const SURFACING = "surfacing";
