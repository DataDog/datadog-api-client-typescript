import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Semantic mode for metrics queries. This determines how metrics from different sources are combined or displayed.
 */
export type FormulaAndFunctionMetricSemanticMode =
  | typeof COMBINED
  | typeof NATIVE
  | UnparsedObject;
export const COMBINED = "combined";
export const NATIVE = "native";
