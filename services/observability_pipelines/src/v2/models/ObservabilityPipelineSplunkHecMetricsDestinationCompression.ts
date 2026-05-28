import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Compression algorithm applied when sending metrics to Splunk HEC.
 */
export type ObservabilityPipelineSplunkHecMetricsDestinationCompression =
  | typeof NONE
  | typeof GZIP
  | UnparsedObject;
export const NONE = "none";
export const GZIP = "gzip";
