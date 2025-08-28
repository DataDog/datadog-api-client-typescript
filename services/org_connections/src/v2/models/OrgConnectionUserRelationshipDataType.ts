import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the user relationship.
 */
export type OrgConnectionUserRelationshipDataType =
  | typeof USERS
  | UnparsedObject;
export const USERS = "users";
