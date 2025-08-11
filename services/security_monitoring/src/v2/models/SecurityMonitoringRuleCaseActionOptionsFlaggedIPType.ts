import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Used with the case action of type 'flag_ip'. The value specified in this field is applied as a flag to the IP addresses.
 */
export type SecurityMonitoringRuleCaseActionOptionsFlaggedIPType =
  | typeof SUSPICIOUS
  | typeof FLAGGED
  | UnparsedObject;
export const SUSPICIOUS = "SUSPICIOUS";
export const FLAGGED = "FLAGGED";
