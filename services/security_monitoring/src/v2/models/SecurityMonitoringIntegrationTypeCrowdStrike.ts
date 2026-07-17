import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type for a CrowdStrike entity context sync.
 */
export type SecurityMonitoringIntegrationTypeCrowdStrike =
  | typeof CROWDSTRIKE
  | UnparsedObject;
export const CROWDSTRIKE = "CROWDSTRIKE";
