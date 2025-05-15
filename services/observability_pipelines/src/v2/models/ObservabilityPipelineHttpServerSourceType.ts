import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type. The value should always be `http_server`.
 */
export type ObservabilityPipelineHttpServerSourceType =
  | typeof HTTP_SERVER
  | UnparsedObject;
export const HTTP_SERVER = "http_server";
