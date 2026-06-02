import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Webhooks auth method resource type.
 */
export type WebhooksAuthMethodType =
  | typeof WEBHOOKS_AUTH_METHOD
  | UnparsedObject;
export const WEBHOOKS_AUTH_METHOD = "webhooks-auth-method";
