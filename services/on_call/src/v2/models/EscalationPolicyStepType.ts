import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Indicates that the resource is of type `steps`.
 */
export type EscalationPolicyStepType = typeof STEPS | UnparsedObject;
export const STEPS = "steps";
