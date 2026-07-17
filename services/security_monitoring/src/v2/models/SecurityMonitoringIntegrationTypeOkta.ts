import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type for an Okta entity context sync.
 */
export type SecurityMonitoringIntegrationTypeOkta =
  | typeof OKTA
  | UnparsedObject;
export const OKTA = "OKTA";
