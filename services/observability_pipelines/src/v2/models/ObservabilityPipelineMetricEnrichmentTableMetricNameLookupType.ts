import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The lookup source type. The value should always be `metric_name`.
 */
export type ObservabilityPipelineMetricEnrichmentTableMetricNameLookupType =
  | typeof METRIC_NAME
  | UnparsedObject;
export const METRIC_NAME = "metric_name";
