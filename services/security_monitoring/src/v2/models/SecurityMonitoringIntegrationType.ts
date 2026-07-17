import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of external source that provides entities to Cloud SIEM.
 */
export type SecurityMonitoringIntegrationType =
  | typeof GOOGLE_WORKSPACE
  | typeof OKTA
  | typeof ENTRA_ID
  | typeof CROWDSTRIKE
  | typeof SENTINELONE
  | UnparsedObject;
export const GOOGLE_WORKSPACE = "GOOGLE_WORKSPACE";
export const OKTA = "OKTA";
export const ENTRA_ID = "ENTRA_ID";
export const CROWDSTRIKE = "CROWDSTRIKE";
export const SENTINELONE = "SENTINELONE";
