import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sorting options
 */
export type APIKeysSort =
  | typeof CREATED_AT_ASCENDING
  | typeof CREATED_AT_DESCENDING
  | typeof LAST4_ASCENDING
  | typeof LAST4_DESCENDING
  | typeof MODIFIED_AT_ASCENDING
  | typeof MODIFIED_AT_DESCENDING
  | typeof NAME_ASCENDING
  | typeof NAME_DESCENDING
  | UnparsedObject;
export const CREATED_AT_ASCENDING = "created_at";
export const CREATED_AT_DESCENDING = "-created_at";
export const LAST4_ASCENDING = "last4";
export const LAST4_DESCENDING = "-last4";
export const MODIFIED_AT_ASCENDING = "modified_at";
export const MODIFIED_AT_DESCENDING = "-modified_at";
export const NAME_ASCENDING = "name";
export const NAME_DESCENDING = "-name";
