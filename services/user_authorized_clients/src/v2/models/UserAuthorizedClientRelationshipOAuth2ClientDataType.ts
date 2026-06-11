import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * OAuth2 client resource type.
 */
export type UserAuthorizedClientRelationshipOAuth2ClientDataType =
  | typeof OAUTH2_CLIENTS
  | UnparsedObject;
export const OAUTH2_CLIENTS = "oauth2_clients";
