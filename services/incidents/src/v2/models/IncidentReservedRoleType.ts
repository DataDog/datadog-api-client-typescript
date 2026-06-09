import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident reserved role resource type.
 */
export type IncidentReservedRoleType =
  | typeof INCIDENT_RESERVED_ROLES
  | UnparsedObject;
export const INCIDENT_RESERVED_ROLES = "incident_reserved_roles";
