import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data source for APM metrics queries.
 */
export type FormulaAndFunctionApmMetricsDataSource =
  | typeof APM_METRICS
  | UnparsedObject;
export const APM_METRICS = "apm_metrics";
