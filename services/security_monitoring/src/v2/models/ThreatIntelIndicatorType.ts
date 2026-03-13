import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of threat indicator.
 */
export type ThreatIntelIndicatorType =
  | typeof IP_ADDRESS
  | typeof DOMAIN
  | typeof SHA256
  | UnparsedObject;
export const IP_ADDRESS = "ip_address";
export const DOMAIN = "domain";
export const SHA256 = "sha256";
