import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Comparison applied by this filter.
 */
export type ExperimentsMeasureRangeFilterInputOperation =
  | typeof BETWEEN
  | UnparsedObject;
export const BETWEEN = "BETWEEN";
