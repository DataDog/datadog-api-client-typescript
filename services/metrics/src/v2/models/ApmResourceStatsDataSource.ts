import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A data source for APM resource statistics queries.
 */
export type ApmResourceStatsDataSource =
  | typeof APM_RESOURCE_STATS
  | UnparsedObject;
export const APM_RESOURCE_STATS = "apm_resource_stats";
