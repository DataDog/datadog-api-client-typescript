import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * A data source for APM dependency statistics queries.
 */
export type ApmDependencyStatsDataSource =
  | typeof APM_DEPENDENCY_STATS
  | UnparsedObject;
export const APM_DEPENDENCY_STATS = "apm_dependency_stats";
