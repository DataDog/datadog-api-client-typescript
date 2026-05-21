import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident role assignment resource type.
 */
export type IncidentRoleAssignmentType =
  | typeof INCIDENT_ROLE_ASSIGNMENTS
  | UnparsedObject;
export const INCIDENT_ROLE_ASSIGNMENTS = "incident_role_assignments";
