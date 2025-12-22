import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * HTTP authentication strategy.
 */
export type ObservabilityPipelineHttpClientDestinationAuthStrategy =
  | typeof BASIC
  | typeof BEARER
  | UnparsedObject;
export const BASIC = "basic";
export const BEARER = "bearer";
