import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Budget split dimension values resource type.
 */
export type AiGatewayBudgetInstanceDimensionType =
  | typeof BUDGET_INSTANCE_DIMENSIONS
  | UnparsedObject;
export const BUDGET_INSTANCE_DIMENSIONS = "budget-instance-dimensions";
