import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * OAuth2 client credentials resource type.
 */
export type WebhooksOAuth2ClientCredentialsType =
  | typeof WEBHOOKS_AUTH_METHOD_OAUTH2_CLIENT_CREDENTIALS
  | UnparsedObject;
export const WEBHOOKS_AUTH_METHOD_OAUTH2_CLIENT_CREDENTIALS =
  "webhooks-auth-method-oauth2-client-credentials";
