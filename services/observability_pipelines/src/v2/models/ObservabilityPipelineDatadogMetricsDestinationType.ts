import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `datadog_metrics`.
 */
export type ObservabilityPipelineDatadogMetricsDestinationType =
  | typeof DATADOG_METRICS
  | UnparsedObject;
export const DATADOG_METRICS = "datadog_metrics";
