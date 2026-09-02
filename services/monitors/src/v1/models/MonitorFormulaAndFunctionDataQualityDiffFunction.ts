import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Function applied to the measure before it is compared against the predicted bounds.
 */
export type MonitorFormulaAndFunctionDataQualityDiffFunction =
  | typeof DIFF
  | typeof DIFF_PERCENT
  | UnparsedObject;
export const DIFF = "DIFF";
export const DIFF_PERCENT = "DIFF_PERCENT";
