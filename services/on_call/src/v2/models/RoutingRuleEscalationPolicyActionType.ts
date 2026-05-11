import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the action routes to an escalation policy.
 */
export type RoutingRuleEscalationPolicyActionType =
  | typeof ESCALATION_POLICY
  | UnparsedObject;
export const ESCALATION_POLICY = "escalation_policy";
