import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Incident role assignment resource type.
 */
export type IncidentRoleAssignmentType =
  | typeof INCIDENT_ROLE_ASSIGNMENTS
  | UnparsedObject;
export const INCIDENT_ROLE_ASSIGNMENTS = "incident_role_assignments";
