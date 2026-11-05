import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Action taken when spend exceeds the budget.
 */
export type AiGatewayBudgetEnforcement =
  | typeof BLOCK
  | typeof NOTIFY
  | UnparsedObject;
export const BLOCK = "BLOCK";
export const NOTIFY = "NOTIFY";
