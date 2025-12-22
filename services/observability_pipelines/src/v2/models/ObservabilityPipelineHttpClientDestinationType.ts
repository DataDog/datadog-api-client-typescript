import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `http_client`.
 */
export type ObservabilityPipelineHttpClientDestinationType =
  | typeof HTTP_CLIENT
  | UnparsedObject;
export const HTTP_CLIENT = "http_client";
