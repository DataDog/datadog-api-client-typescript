import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Specific failure type within the insight category. For DNS insights: `timeout`, `nxdomain`,
 * `servfail`, or `general_failure`. For TLS certificate insights: `expired` or `expiring_soon`.
 * For security group insights: `denied`.
 */
export type NetworkHealthInsightFailureType =
  | typeof TIMEOUT
  | typeof NXDOMAIN
  | typeof SERVFAIL
  | typeof GENERAL_FAILURE
  | typeof EXPIRED
  | typeof EXPIRING_SOON
  | typeof DENIED
  | UnparsedObject;
export const TIMEOUT = "timeout";
export const NXDOMAIN = "nxdomain";
export const SERVFAIL = "servfail";
export const GENERAL_FAILURE = "general_failure";
export const EXPIRED = "expired";
export const EXPIRING_SOON = "expiring_soon";
export const DENIED = "denied";
