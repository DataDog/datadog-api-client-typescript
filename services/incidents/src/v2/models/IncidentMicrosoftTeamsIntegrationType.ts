import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident integration resource type.
 */
export type IncidentMicrosoftTeamsIntegrationType =
  | typeof INCIDENT_INTEGRATIONS
  | UnparsedObject;
export const INCIDENT_INTEGRATIONS = "incident_integrations";
