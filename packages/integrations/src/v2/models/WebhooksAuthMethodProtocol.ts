import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Authentication protocol used by the auth method.
 */
export type WebhooksAuthMethodProtocol =
  | typeof OAUTH2_CLIENT_CREDENTIALS
  | UnparsedObject;
export const OAUTH2_CLIENT_CREDENTIALS = "oauth2-client-credentials";
