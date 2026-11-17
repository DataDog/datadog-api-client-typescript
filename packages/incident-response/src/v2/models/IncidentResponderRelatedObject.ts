import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Object related to an incident responder.
 */
export type IncidentResponderRelatedObject =
  | typeof USERS
  | typeof ROLE_ASSIGNMENTS
  | UnparsedObject;
export const USERS = "users";
export const ROLE_ASSIGNMENTS = "role_assignments";
