import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Specifies how this escalation step will assign targets (example `default` or `round-robin`).
 */
export type EscalationPolicyStepAttributesAssignment =
  | typeof DEFAULT
  | typeof ROUND_ROBIN
  | UnparsedObject;
export const DEFAULT = "default";
export const ROUND_ROBIN = "round-robin";
