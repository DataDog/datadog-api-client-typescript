import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Category of network health insight. Indicates whether the insight relates to a DNS issue (`dns`),
 * a TCP issue (`tcp`), a TLS certificate issue (`tls-cert`), or a security group denial (`security-group`).
 */
export type NetworkHealthInsightCategory =
  | typeof DNS
  | typeof TCP
  | typeof TLS_CERT
  | typeof SECURITY_GROUP
  | UnparsedObject;
export const DNS = "dns";
export const TCP = "tcp";
export const TLS_CERT = "tls-cert";
export const SECURITY_GROUP = "security-group";
