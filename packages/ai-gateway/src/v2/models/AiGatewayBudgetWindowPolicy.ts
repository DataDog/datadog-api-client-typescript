import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * UTC accounting period for a budget.
 */
export type AiGatewayBudgetWindowPolicy =
  | typeof DAILY
  | typeof WEEKLY
  | typeof MONTHLY
  | UnparsedObject;
export const DAILY = "DAILY";
export const WEEKLY = "WEEKLY";
export const MONTHLY = "MONTHLY";
