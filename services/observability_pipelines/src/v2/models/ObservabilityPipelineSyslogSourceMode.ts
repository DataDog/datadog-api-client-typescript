import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Protocol used by the syslog source to receive messages.
 */
export type ObservabilityPipelineSyslogSourceMode =
  | typeof TCP
  | typeof UDP
  | UnparsedObject;
export const TCP = "tcp";
export const UDP = "udp";
