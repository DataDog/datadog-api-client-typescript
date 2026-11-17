import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Action taken when spend exceeds the budget.
 */
export type AiGatewayBudgetEnforcement =
  | typeof BLOCK
  | typeof NOTIFY
  | UnparsedObject;
export const BLOCK = "BLOCK";
export const NOTIFY = "NOTIFY";
