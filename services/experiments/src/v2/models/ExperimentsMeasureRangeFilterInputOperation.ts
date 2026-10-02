import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Comparison applied by this filter.
 */
export type ExperimentsMeasureRangeFilterInputOperation =
  | typeof BETWEEN
  | UnparsedObject;
export const BETWEEN = "BETWEEN";
