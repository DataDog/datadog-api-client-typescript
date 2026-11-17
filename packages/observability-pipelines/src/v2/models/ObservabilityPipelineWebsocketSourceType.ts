import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The source type. The value should always be `websocket`.
 */
export type ObservabilityPipelineWebsocketSourceType =
  | typeof WEBSOCKET
  | UnparsedObject;
export const WEBSOCKET = "websocket";
