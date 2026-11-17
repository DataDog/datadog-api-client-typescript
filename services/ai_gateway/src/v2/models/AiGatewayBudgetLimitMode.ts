import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How the budget limit applies. `shared` is one limit for all matching traffic. `per_instance` is one
 * limit for each counter of a template budget that splits by value.
 */
export type AiGatewayBudgetLimitMode =
  | typeof SHARED
  | typeof PER_INSTANCE
  | UnparsedObject;
export const SHARED = "shared";
export const PER_INSTANCE = "per_instance";
