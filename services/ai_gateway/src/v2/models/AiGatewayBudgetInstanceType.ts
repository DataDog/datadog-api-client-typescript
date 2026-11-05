import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Budget instance counter resource type.
 */
export type AiGatewayBudgetInstanceType =
  | typeof BUDGET_INSTANCES
  | UnparsedObject;
export const BUDGET_INSTANCES = "budget-instances";
