import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * User resource type.
 */
export type UserAuthorizedClientRelationshipUserDataType =
  | typeof USERS
  | UnparsedObject;
export const USERS = "users";
