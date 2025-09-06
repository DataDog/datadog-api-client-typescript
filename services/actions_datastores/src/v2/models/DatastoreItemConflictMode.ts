import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How to handle conflicts when inserting items that already exist in the datastore.
 */
export type DatastoreItemConflictMode =
  | typeof FAIL_ON_CONFLICT
  | typeof OVERWRITE_ON_CONFLICT
  | UnparsedObject;
export const FAIL_ON_CONFLICT = "fail_on_conflict";
export const OVERWRITE_ON_CONFLICT = "overwrite_on_conflict";
