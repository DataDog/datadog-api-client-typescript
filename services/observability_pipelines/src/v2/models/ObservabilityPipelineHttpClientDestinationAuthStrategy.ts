import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * HTTP authentication strategy.
 */
export type ObservabilityPipelineHttpClientDestinationAuthStrategy =
  | typeof NONE
  | typeof BASIC
  | typeof BEARER
  | typeof CUSTOM
  | UnparsedObject;
export const NONE = "none";
export const BASIC = "basic";
export const BEARER = "bearer";
export const CUSTOM = "custom";
