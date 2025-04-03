import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Sorting options for roles.
 */
export type RolesSort =
  | typeof NAME_ASCENDING
  | typeof NAME_DESCENDING
  | typeof MODIFIED_AT_ASCENDING
  | typeof MODIFIED_AT_DESCENDING
  | typeof USER_COUNT_ASCENDING
  | typeof USER_COUNT_DESCENDING
  | UnparsedObject;
export const NAME_ASCENDING = "name";
export const NAME_DESCENDING = "-name";
export const MODIFIED_AT_ASCENDING = "modified_at";
export const MODIFIED_AT_DESCENDING = "-modified_at";
export const USER_COUNT_ASCENDING = "user_count";
export const USER_COUNT_DESCENDING = "-user_count";
