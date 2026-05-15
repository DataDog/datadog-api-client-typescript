import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Cloud Cost Management billing currency resource.
 */
export type CostCurrencyType = typeof COST_CURRENCY | UnparsedObject;
export const COST_CURRENCY = "cost_currency";
