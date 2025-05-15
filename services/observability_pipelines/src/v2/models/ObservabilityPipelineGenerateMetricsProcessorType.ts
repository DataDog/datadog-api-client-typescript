import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. Always `generate_datadog_metrics`.
 */
export type ObservabilityPipelineGenerateMetricsProcessorType =
  | typeof GENERATE_DATADOG_METRICS
  | UnparsedObject;
export const GENERATE_DATADOG_METRICS = "generate_datadog_metrics";
