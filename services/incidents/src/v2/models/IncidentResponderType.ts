import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident responder resource type.
 */
export type IncidentResponderType = typeof INCIDENT_RESPONDERS | UnparsedObject;
export const INCIDENT_RESPONDERS = "incident_responders";
