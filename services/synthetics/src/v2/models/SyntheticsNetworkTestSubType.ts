import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Subtype of the Synthetic Network Path test: `tcp`, `udp`, or `icmp`.
 */
export type SyntheticsNetworkTestSubType =
  | typeof TCP
  | typeof UDP
  | typeof ICMP
  | UnparsedObject;
export const TCP = "tcp";
export const UDP = "udp";
export const ICMP = "icmp";
