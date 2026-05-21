import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Statuspage incident integration resource type.
 */
export type IncidentStatuspageIncidentType =
  | typeof INCIDENT_INTEGRATIONS
  | UnparsedObject;
export const INCIDENT_INTEGRATIONS = "incident_integrations";
