import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type. The value should always be `datadog_agent`.
 */
export type ObservabilityPipelineDatadogAgentSourceType =
  | typeof DATADOG_AGENT
  | UnparsedObject;
export const DATADOG_AGENT = "datadog_agent";
