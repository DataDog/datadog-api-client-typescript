import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `datadog_traces`.
 */
export type ObservabilityPipelineDatadogTracesDestinationType =
  | typeof DATADOG_TRACES
  | UnparsedObject;
export const DATADOG_TRACES = "datadog_traces";
