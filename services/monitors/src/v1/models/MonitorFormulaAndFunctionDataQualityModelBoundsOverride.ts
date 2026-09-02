import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Restricts which predicted bound the monitor alerts on. `UPPER_ONLY` alerts only when
 * the measure rises above the upper bound, `LOWER_ONLY` only when it falls below the
 * lower bound. When unset, the monitor alerts on both.
 */
export type MonitorFormulaAndFunctionDataQualityModelBoundsOverride =
  | typeof UPPER_ONLY
  | typeof LOWER_ONLY
  | UnparsedObject;
export const UPPER_ONLY = "UPPER_ONLY";
export const LOWER_ONLY = "LOWER_ONLY";
