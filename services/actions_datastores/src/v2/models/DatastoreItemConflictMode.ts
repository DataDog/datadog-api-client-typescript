import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The definition of `DatastoreItemConflictMode` object.
 */
export type DatastoreItemConflictMode =
  | typeof FAIL_ON_CONFLICT
  | typeof OVERWRITE_ON_CONFLICT
  | UnparsedObject;
export const FAIL_ON_CONFLICT = "fail_on_conflict";
export const OVERWRITE_ON_CONFLICT = "overwrite_on_conflict";
