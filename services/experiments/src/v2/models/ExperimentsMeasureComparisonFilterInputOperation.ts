import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Comparison applied by this filter.
 */
export type ExperimentsMeasureComparisonFilterInputOperation =
  | typeof EQ
  | typeof NEQ
  | typeof GT
  | typeof GT_EQ
  | typeof LT
  | typeof LT_EQ
  | UnparsedObject;
export const EQ = "=";
export const NEQ = "!=";
export const GT = ">";
export const GT_EQ = ">=";
export const LT = "<";
export const LT_EQ = "<=";
