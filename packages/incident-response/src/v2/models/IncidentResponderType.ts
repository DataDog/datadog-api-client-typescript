import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Incident responder resource type.
 */
export type IncidentResponderType = typeof INCIDENT_RESPONDERS | UnparsedObject;
export const INCIDENT_RESPONDERS = "incident_responders";
