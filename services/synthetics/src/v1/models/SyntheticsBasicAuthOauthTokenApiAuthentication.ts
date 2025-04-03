import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of token to use when performing the authentication.
 */
export type SyntheticsBasicAuthOauthTokenApiAuthentication =
  | typeof HEADER
  | typeof BODY
  | UnparsedObject;
export const HEADER = "header";
export const BODY = "body";
