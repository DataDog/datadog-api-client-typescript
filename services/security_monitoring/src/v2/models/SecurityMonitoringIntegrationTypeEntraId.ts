import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type for an Entra ID entity context sync.
 */
export type SecurityMonitoringIntegrationTypeEntraId =
  | typeof ENTRA_ID
  | UnparsedObject;
export const ENTRA_ID = "ENTRA_ID";
