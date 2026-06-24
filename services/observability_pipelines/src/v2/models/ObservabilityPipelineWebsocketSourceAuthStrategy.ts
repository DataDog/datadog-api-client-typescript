import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Authentication strategy for the WebSocket source connection.
 */
export type ObservabilityPipelineWebsocketSourceAuthStrategy =
  | typeof NONE
  | typeof BASIC
  | typeof BEARER
  | typeof CUSTOM
  | UnparsedObject;
export const NONE = "none";
export const BASIC = "basic";
export const BEARER = "bearer";
export const CUSTOM = "custom";
