import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * A data source for APM metrics queries.
 */
export type ApmMetricsDataSource = typeof APM_METRICS | UnparsedObject;
export const APM_METRICS = "apm_metrics";
