import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data source for APM resource stats queries.
 */
export type FormulaAndFunctionApmResourceStatsDataSource =
  | typeof APM_RESOURCE_STATS
  | UnparsedObject;
export const APM_RESOURCE_STATS = "apm_resource_stats";
