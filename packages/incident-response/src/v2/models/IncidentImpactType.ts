import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Incident impact resource type.
 */
export type IncidentImpactType = typeof INCIDENT_IMPACTS | UnparsedObject;
export const INCIDENT_IMPACTS = "incident_impacts";
