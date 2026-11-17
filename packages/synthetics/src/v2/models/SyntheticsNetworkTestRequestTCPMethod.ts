import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * For TCP tests, the TCP traceroute strategy.
 */
export type SyntheticsNetworkTestRequestTCPMethod =
  | typeof PREFER_SACK
  | typeof SYN
  | typeof SACK
  | UnparsedObject;
export const PREFER_SACK = "prefer_sack";
export const SYN = "syn";
export const SACK = "sack";
