import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident org settings resource type.
 */
export type IncidentOrgSettingsType =
  | typeof INCIDENT_ORG_SETTINGS
  | UnparsedObject;
export const INCIDENT_ORG_SETTINGS = "incident_org_settings";
