import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Group mode to query measures.
 */
export type FormulaAndFunctionSLOGroupMode =
  | typeof OVERALL
  | typeof COMPONENTS
  | UnparsedObject;
export const OVERALL = "overall";
export const COMPONENTS = "components";
