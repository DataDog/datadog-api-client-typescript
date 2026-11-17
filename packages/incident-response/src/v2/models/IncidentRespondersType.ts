import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The incident responders type.
 */
export type IncidentRespondersType =
  | typeof INCIDENT_RESPONDERS
  | UnparsedObject;
export const INCIDENT_RESPONDERS = "incident_responders";
