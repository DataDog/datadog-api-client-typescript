import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of basic authentication to use when performing the test.
 */
export type SyntheticsBasicAuthOauthClientType =
  | typeof OAUTH_CLIENT
  | UnparsedObject;
export const OAUTH_CLIENT = "oauth-client";
