import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the action is an escalation policy action.
 */
export type EscalationPolicyActionType =
  | typeof ESCALATION_POLICY
  | UnparsedObject;
export const ESCALATION_POLICY = "escalation_policy";
