import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `socket`.
 */
export type ObservabilityPipelineSocketDestinationType =
  | typeof SOCKET
  | UnparsedObject;
export const SOCKET = "socket";
