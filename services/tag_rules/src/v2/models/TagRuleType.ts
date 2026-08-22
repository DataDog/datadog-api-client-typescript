import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How the rule is enforced. `blocking` rejects telemetry that violates the rule.
 * `surfacing` only highlights non-compliant telemetry without blocking it.
 */
export type TagRuleType = typeof BLOCKING | typeof SURFACING | UnparsedObject;
export const BLOCKING = "blocking";
export const SURFACING = "surfacing";
