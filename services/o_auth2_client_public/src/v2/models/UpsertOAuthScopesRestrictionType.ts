import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for an upsert OAuth2 client scopes restriction request.
 */
export type UpsertOAuthScopesRestrictionType =
  | typeof UPSERT_SCOPES_RESTRICTION
  | UnparsedObject;
export const UPSERT_SCOPES_RESTRICTION = "upsert_scopes_restriction";
