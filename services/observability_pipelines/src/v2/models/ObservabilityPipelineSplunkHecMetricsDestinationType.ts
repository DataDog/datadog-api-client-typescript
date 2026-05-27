import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. Always `splunk_hec_metrics`.
 */
export type ObservabilityPipelineSplunkHecMetricsDestinationType =
  | typeof SPLUNK_HEC_METRICS
  | UnparsedObject;
export const SPLUNK_HEC_METRICS = "splunk_hec_metrics";
