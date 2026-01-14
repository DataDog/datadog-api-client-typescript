import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Optional authentication strategy for HTTP requests.
 */
export type ObservabilityPipelineHttpClientSourceAuthStrategy =
  | typeof NONE
  | typeof BASIC
  | typeof BEARER
  | UnparsedObject;
export const NONE = "none";
export const BASIC = "basic";
export const BEARER = "bearer";
