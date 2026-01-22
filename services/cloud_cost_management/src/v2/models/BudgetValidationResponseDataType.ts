import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Budget validation resource type.
 */
export type BudgetValidationResponseDataType =
  | typeof BUDGET_VALIDATION
  | UnparsedObject;
export const BUDGET_VALIDATION = "budget_validation";
