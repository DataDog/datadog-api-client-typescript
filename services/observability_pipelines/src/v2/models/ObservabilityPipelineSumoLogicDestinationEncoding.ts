import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The output encoding format.
 */
export type ObservabilityPipelineSumoLogicDestinationEncoding =
  | typeof JSON
  | typeof RAW_MESSAGE
  | typeof LOGFMT
  | UnparsedObject;
export const JSON = "json";
export const RAW_MESSAGE = "raw_message";
export const LOGFMT = "logfmt";
