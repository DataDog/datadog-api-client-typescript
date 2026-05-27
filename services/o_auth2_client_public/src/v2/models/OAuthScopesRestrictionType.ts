import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for an OAuth2 client scopes restriction.
 */
export type OAuthScopesRestrictionType =
  | typeof SCOPES_RESTRICTION
  | UnparsedObject;
export const SCOPES_RESTRICTION = "scopes_restriction";
