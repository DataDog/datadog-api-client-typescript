import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * OAuth 2.0 response type that a registered client may use.
 */
export type OAuthClientRegistrationResponseType = typeof CODE | UnparsedObject;
export const CODE = "code";
