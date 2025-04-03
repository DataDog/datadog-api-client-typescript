import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be logs_metrics.
 */
export type LogsMetricType = typeof LOGS_METRICS | UnparsedObject;
export const LOGS_METRICS = "logs_metrics";
