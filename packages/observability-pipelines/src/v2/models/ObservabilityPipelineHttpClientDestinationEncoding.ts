import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Encoding format for log events.
 */
export type ObservabilityPipelineHttpClientDestinationEncoding =
  | typeof JSON
  | UnparsedObject;
export const JSON = "json";
