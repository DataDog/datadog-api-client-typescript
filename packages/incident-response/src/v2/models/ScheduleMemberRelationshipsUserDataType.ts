import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Users resource type.
 */
export type ScheduleMemberRelationshipsUserDataType =
  | typeof USERS
  | UnparsedObject;
export const USERS = "users";
