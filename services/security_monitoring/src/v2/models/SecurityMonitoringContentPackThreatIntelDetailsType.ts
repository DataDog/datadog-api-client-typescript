import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type for threat intelligence content pack details.
 */
export type SecurityMonitoringContentPackThreatIntelDetailsType =
  | typeof THREAT_INTEL
  | UnparsedObject;
export const THREAT_INTEL = "threat_intel";
