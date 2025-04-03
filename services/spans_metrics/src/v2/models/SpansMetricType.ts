import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of resource. The value should always be spans_metrics.
 */
export type SpansMetricType = typeof SPANS_METRICS | UnparsedObject;
export const SPANS_METRICS = "spans_metrics";
