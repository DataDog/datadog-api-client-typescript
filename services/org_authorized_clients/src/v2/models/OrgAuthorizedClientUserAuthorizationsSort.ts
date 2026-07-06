import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Field to sort user authorizations by.
 */
export type OrgAuthorizedClientUserAuthorizationsSort =
  | typeof USER_NAME
  | typeof USER_EMAIL
  | typeof OAUTH2_CLIENT_NAME
  | UnparsedObject;
export const USER_NAME = "user.name";
export const USER_EMAIL = "user.email";
export const OAUTH2_CLIENT_NAME = "oauth2_client.name";
