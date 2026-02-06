import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sorting options for personal access tokens.
 */
export type PersonalAccessTokensSort =
  | typeof NAME_ASCENDING
  | typeof NAME_DESCENDING
  | typeof CREATED_AT_ASCENDING
  | typeof CREATED_AT_DESCENDING
  | typeof EXPIRES_AT_ASCENDING
  | typeof EXPIRES_AT_DESCENDING
  | UnparsedObject;
export const NAME_ASCENDING = "name";
export const NAME_DESCENDING = "-name";
export const CREATED_AT_ASCENDING = "created_at";
export const CREATED_AT_DESCENDING = "-created_at";
export const EXPIRES_AT_ASCENDING = "expires_at";
export const EXPIRES_AT_DESCENDING = "-expires_at";
