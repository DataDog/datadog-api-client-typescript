import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Types of related objects to include.
 */
export type IncidentSearchIncidentsIncludeType =
  | typeof INCIDENT_TYPE
  | typeof IMPACTS
  | typeof USERS
  | typeof RESPONDERS
  | typeof INTEGRATIONS
  | typeof ATTACHMENTS
  | UnparsedObject;
export const INCIDENT_TYPE = "incident_type";
export const IMPACTS = "impacts";
export const USERS = "users";
export const RESPONDERS = "responders";
export const INTEGRATIONS = "integrations";
export const ATTACHMENTS = "attachments";
