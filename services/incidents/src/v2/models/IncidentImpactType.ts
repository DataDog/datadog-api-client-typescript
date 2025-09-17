import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident impact resource type.
 */
export type IncidentImpactType = typeof INCIDENT_IMPACTS | UnparsedObject;
export const INCIDENT_IMPACTS = "incident_impacts";
