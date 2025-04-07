import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data source for APM dependency stats queries.
 */
export type FormulaAndFunctionApmDependencyStatsDataSource =
  | typeof APM_DEPENDENCY_STATS
  | UnparsedObject;
export const APM_DEPENDENCY_STATS = "apm_dependency_stats";
