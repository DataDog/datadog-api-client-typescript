import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The policy action for a tool named by the property. Tool policies override
 * the recommendation after evaluation; they do not skip evaluation.
 * Any BLOCK takes precedence over PASS and EVALUATE. The Supply Chain Firewall
 * is applied afterward and can still return DENY.
 */
export type AIGuardToolPolicyAction =
  | typeof PASS
  | typeof BLOCK
  | typeof EVALUATE
  | UnparsedObject;
export const PASS = "PASS";
export const BLOCK = "BLOCK";
export const EVALUATE = "EVALUATE";
