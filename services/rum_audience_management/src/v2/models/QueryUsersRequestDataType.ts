import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Query users request resource type.
 */
export type QueryUsersRequestDataType =
  | typeof QUERY_USERS_REQUEST
  | UnparsedObject;
export const QUERY_USERS_REQUEST = "query_users_request";
