import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Incident postmortem resource type.
 */
export type IncidentPostmortemType =
  | typeof INCIDENT_POSTMORTEMS
  | UnparsedObject;
export const INCIDENT_POSTMORTEMS = "incident_postmortems";
