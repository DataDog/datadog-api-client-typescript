import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The encoding format for the logs sent to Chronicle.
 */
export type ObservabilityPipelineGoogleChronicleDestinationEncoding =
  | typeof JSON
  | typeof RAW_MESSAGE
  | UnparsedObject;
export const JSON = "json";
export const RAW_MESSAGE = "raw_message";
