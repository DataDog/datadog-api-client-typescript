import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Stored tier ordering is inconsistent. mixed means targets have different supported orderings, and unknown means a target has an unsupported ordering. The tier is reported as configured without weights. Replace the rule to repair it. Omitted for consistent tiers. A forced deletion cannot rewrite a surviving tier with an unknown issue.
 */
export type AiGatewayRoutingRuleTierOrderingIssue =
  | typeof MIXED
  | typeof UNKNOWN
  | UnparsedObject;
export const MIXED = "mixed";
export const UNKNOWN = "unknown";
