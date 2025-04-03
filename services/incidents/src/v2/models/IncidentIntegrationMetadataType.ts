import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Integration metadata resource type.
 */
export type IncidentIntegrationMetadataType =
  | typeof INCIDENT_INTEGRATIONS
  | UnparsedObject;
export const INCIDENT_INTEGRATIONS = "incident_integrations";
