import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Object related to an incident that can be included in the response.
 */
export type IncidentImportRelatedObject =
  | typeof LAST_MODIFIED_BY_USER
  | typeof CREATED_BY_USER
  | typeof COMMANDER_USER
  | typeof DECLARED_BY_USER
  | typeof INCIDENT_TYPE
  | UnparsedObject;
export const LAST_MODIFIED_BY_USER = "last_modified_by_user";
export const CREATED_BY_USER = "created_by_user";
export const COMMANDER_USER = "commander_user";
export const DECLARED_BY_USER = "declared_by_user";
export const INCIDENT_TYPE = "incident_type";
