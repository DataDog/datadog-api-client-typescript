import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How the difference between the source and target measures is computed.
 * `absolute` subtracts the two values, `diff_percent` expresses the difference
 * as a percentage of the source value.
 */
export type MonitorFormulaAndFunctionDataQualityDiffType =
  | typeof ABSOLUTE
  | typeof DIFF_PERCENT
  | UnparsedObject;
export const ABSOLUTE = "absolute";
export const DIFF_PERCENT = "diff_percent";
