import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The processor type. Always `generate_metrics`.
 */
export type ObservabilityPipelineGenerateMetricsV2ProcessorType =
  | typeof GENERATE_METRICS
  | UnparsedObject;
export const GENERATE_METRICS = "generate_metrics";
