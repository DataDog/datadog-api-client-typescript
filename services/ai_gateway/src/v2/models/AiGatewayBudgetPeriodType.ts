import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * AI Gateway budget period resource type.
 */
export type AiGatewayBudgetPeriodType = typeof BUDGET_PERIODS | UnparsedObject;
export const BUDGET_PERIODS = "budget-periods";
