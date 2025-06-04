import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Represents the resource type for individual steps in an escalation policy used during incident response.
 */
export type EscalationType = typeof ESCALATION_POLICY_STEPS | UnparsedObject;
export const ESCALATION_POLICY_STEPS = "escalation_policy_steps";
