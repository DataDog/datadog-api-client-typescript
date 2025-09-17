import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A reference to a resource related to an incident impact.
 */
export type IncidentImpactRelatedObject =
  | typeof INCIDENT
  | typeof CREATED_BY_USER
  | typeof LAST_MODIFIED_BY_USER
  | UnparsedObject;
export const INCIDENT = "incident";
export const CREATED_BY_USER = "created_by_user";
export const LAST_MODIFIED_BY_USER = "last_modified_by_user";
