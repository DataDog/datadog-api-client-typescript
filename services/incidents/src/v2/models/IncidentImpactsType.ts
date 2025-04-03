import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The incident impacts type.
 */
export type IncidentImpactsType = typeof INCIDENT_IMPACTS | UnparsedObject;
export const INCIDENT_IMPACTS = "incident_impacts";
