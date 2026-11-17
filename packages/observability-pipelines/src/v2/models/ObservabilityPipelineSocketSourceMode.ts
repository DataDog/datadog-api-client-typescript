import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Protocol used to receive logs.
 */
export type ObservabilityPipelineSocketSourceMode =
  | typeof TCP
  | typeof UDP
  | UnparsedObject;
export const TCP = "tcp";
export const UDP = "udp";
