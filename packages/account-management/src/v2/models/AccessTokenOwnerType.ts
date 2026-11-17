import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Owner resource type. Either a user or a service account.
 */
export type AccessTokenOwnerType =
  | typeof USERS
  | typeof SERVICE_ACCOUNT
  | UnparsedObject;
export const USERS = "users";
export const SERVICE_ACCOUNT = "service_account";
