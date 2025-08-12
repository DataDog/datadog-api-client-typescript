import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Protocol used to send logs.
 */
export type ObservabilityPipelineSocketDestinationMode =
  | typeof TCP
  | typeof UDP
  | UnparsedObject;
export const TCP = "tcp";
export const UDP = "udp";
