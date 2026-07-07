import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Scope resource type.
 */
export type UserAuthorizedClientRelationshipScopeDataType =
  | typeof SCOPES
  | UnparsedObject;
export const SCOPES = "scopes";
