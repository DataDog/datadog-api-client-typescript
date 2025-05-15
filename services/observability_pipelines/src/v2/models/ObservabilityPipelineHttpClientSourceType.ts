import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type. The value should always be `http_client`.
 */
export type ObservabilityPipelineHttpClientSourceType =
  | typeof HTTP_CLIENT
  | UnparsedObject;
export const HTTP_CLIENT = "http_client";
