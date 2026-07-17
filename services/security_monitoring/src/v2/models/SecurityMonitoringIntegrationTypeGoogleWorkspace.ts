import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type for a Google Workspace entity context sync.
 */
export type SecurityMonitoringIntegrationTypeGoogleWorkspace =
  | typeof GOOGLE_WORKSPACE
  | UnparsedObject;
export const GOOGLE_WORKSPACE = "GOOGLE_WORKSPACE";
