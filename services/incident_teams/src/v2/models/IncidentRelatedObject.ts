import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Object related to an incident.
 */
export type IncidentRelatedObject =
  | typeof USERS
  | typeof ATTACHMENTS
  | UnparsedObject;
export const USERS = "users";
export const ATTACHMENTS = "attachments";
