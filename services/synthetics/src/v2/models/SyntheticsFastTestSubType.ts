import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Subtype of the Synthetic test that produced this result.
 */
export type SyntheticsFastTestSubType =
  | typeof DNS
  | typeof GRPC
  | typeof HTTP
  | typeof ICMP
  | typeof MCP
  | typeof MULTI
  | typeof SSL
  | typeof TCP
  | typeof UDP
  | typeof WEBSOCKET
  | UnparsedObject;
export const DNS = "dns";
export const GRPC = "grpc";
export const HTTP = "http";
export const ICMP = "icmp";
export const MCP = "mcp";
export const MULTI = "multi";
export const SSL = "ssl";
export const TCP = "tcp";
export const UDP = "udp";
export const WEBSOCKET = "websocket";
