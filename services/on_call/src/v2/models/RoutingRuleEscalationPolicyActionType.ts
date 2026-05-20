import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the action pages an escalation policy. This action can be set once per routing rule item, and is mutually exclusive with the top-level `policy_id` field on the routing rule.
 */
export type RoutingRuleEscalationPolicyActionType =
  | typeof ESCALATION_POLICY
  | UnparsedObject;
export const ESCALATION_POLICY = "escalation_policy";
