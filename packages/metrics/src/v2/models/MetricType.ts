import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The metric resource type.
 */
export type MetricType = typeof METRICS | UnparsedObject;
export const METRICS = "metrics";
