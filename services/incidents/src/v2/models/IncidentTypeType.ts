import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident type resource type.
 */
export type IncidentTypeType = typeof INCIDENT_TYPES | UnparsedObject;
export const INCIDENT_TYPES = "incident_types";
