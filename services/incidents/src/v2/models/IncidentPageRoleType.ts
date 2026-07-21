import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of incident role for a page.
 */
export type IncidentPageRoleType =
  | typeof INCIDENT_USER_DEFINED_ROLES
  | typeof INCIDENT_RESERVED_ROLES
  | UnparsedObject;
export const INCIDENT_USER_DEFINED_ROLES = "incident_user_defined_roles";
export const INCIDENT_RESERVED_ROLES = "incident_reserved_roles";
