import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Set the sort type to formula.
 */
export type FormulaType = typeof FORMULA | UnparsedObject;
export const FORMULA = "formula";
