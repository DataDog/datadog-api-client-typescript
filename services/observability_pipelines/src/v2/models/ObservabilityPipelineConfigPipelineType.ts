import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of data being ingested. Defaults to `logs` if not specified.
 */
export type ObservabilityPipelineConfigPipelineType =
  | typeof LOGS
  | typeof METRICS
  | typeof TRACES
  | UnparsedObject;
export const LOGS = "logs";
export const METRICS = "metrics";
export const TRACES = "traces";
