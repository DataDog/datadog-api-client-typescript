import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Encoding format for log events.
 */
export type ObservabilityPipelineCrowdStrikeNextGenSiemDestinationEncoding =
  | typeof JSON
  | typeof RAW_MESSAGE
  | UnparsedObject;
export const JSON = "json";
export const RAW_MESSAGE = "raw_message";
