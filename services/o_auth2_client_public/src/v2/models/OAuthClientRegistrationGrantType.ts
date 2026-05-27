import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * OAuth 2.0 grant type that a registered client may use.
 */
export type OAuthClientRegistrationGrantType =
  | typeof AUTHORIZATION_CODE
  | typeof REFRESH_TOKEN
  | UnparsedObject;
export const AUTHORIZATION_CODE = "authorization_code";
export const REFRESH_TOKEN = "refresh_token";
