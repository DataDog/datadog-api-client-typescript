import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for user authorized clients.
 */
export type UserAuthorizedClientType =
  | typeof USER_AUTHORIZED_CLIENTS
  | UnparsedObject;
export const USER_AUTHORIZED_CLIENTS = "user_authorized_clients";
