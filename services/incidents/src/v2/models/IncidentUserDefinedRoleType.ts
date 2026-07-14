import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident user-defined role resource type.
 */
export type IncidentUserDefinedRoleType =
  | typeof INCIDENT_USER_DEFINED_ROLES
  | UnparsedObject;
export const INCIDENT_USER_DEFINED_ROLES = "incident_user_defined_roles";
