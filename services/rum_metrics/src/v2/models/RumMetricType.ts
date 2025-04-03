import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be rum_metrics.
 */
export type RumMetricType = typeof RUM_METRICS | UnparsedObject;
export const RUM_METRICS = "rum_metrics";
