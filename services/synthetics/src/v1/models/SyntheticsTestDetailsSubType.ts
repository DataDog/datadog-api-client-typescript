import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The subtype of the Synthetic API test, `http`, `ssl`, `tcp`,
 * `dns`, `icmp`, `udp`, `websocket`, `grpc` or `multi`.
 */
export type SyntheticsTestDetailsSubType =
  | typeof HTTP
  | typeof SSL
  | typeof TCP
  | typeof DNS
  | typeof MULTI
  | typeof ICMP
  | typeof UDP
  | typeof WEBSOCKET
  | typeof GRPC
  | UnparsedObject;
export const HTTP = "http";
export const SSL = "ssl";
export const TCP = "tcp";
export const DNS = "dns";
export const MULTI = "multi";
export const ICMP = "icmp";
export const UDP = "udp";
export const WEBSOCKET = "websocket";
export const GRPC = "grpc";
