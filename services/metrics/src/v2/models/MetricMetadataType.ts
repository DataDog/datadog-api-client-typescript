import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The metric metadata resource type.
 */
export type MetricMetadataType = typeof METRIC_METADATA | UnparsedObject;
export const METRIC_METADATA = "metric_metadata";
