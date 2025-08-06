import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type. The value should always be `socket`.
 */
export type ObservabilityPipelineSocketSourceType =
  | typeof SOCKET
  | UnparsedObject;
export const SOCKET = "socket";
