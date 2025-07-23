import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Encoding format for log events.
 */
export type ObservabilityPipelineSocketDestinationEncoding =
  | typeof JSON
  | typeof RAW_MESSAGE
  | UnparsedObject;
export const JSON = "json";
export const RAW_MESSAGE = "raw_message";
