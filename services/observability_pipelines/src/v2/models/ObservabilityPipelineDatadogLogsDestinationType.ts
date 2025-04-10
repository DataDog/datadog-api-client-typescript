import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `datadog_logs`.
 */
export type ObservabilityPipelineDatadogLogsDestinationType =
  | typeof DATADOG_LOGS
  | UnparsedObject;
export const DATADOG_LOGS = "datadog_logs";
