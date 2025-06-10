import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The subtype of the Synthetic multi-step API test step.
 */
export type SyntheticsAPITestStepSubtype =
  | typeof HTTP
  | typeof GRPC
  | typeof SSL
  | typeof DNS
  | typeof TCP
  | typeof UDP
  | typeof ICMP
  | typeof WEBSOCKET
  | UnparsedObject;
export const HTTP = "http";
export const GRPC = "grpc";
export const SSL = "ssl";
export const DNS = "dns";
export const TCP = "tcp";
export const UDP = "udp";
export const ICMP = "icmp";
export const WEBSOCKET = "websocket";
