import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Budget resource type.
 */
export type BudgetWithEntriesDataType = typeof BUDGET | UnparsedObject;
export const BUDGET = "budget";
