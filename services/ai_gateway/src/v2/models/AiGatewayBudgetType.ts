import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * AI Gateway budget resource type.
 */
export type AiGatewayBudgetType = typeof BUDGETS | UnparsedObject;
export const BUDGETS = "budgets";
