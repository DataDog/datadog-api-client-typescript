import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Reasoning-control mechanism.
 */
export type AiGatewayModelReasoningControlType =
  | typeof TOGGLE
  | typeof EFFORT
  | typeof BUDGET_TOKENS
  | UnparsedObject;
export const TOGGLE = "toggle";
export const EFFORT = "effort";
export const BUDGET_TOKENS = "budget_tokens";
