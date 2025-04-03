import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The order to use, ascending or descending
 */
export type LogsSortOrder =
  | typeof ASCENDING
  | typeof DESCENDING
  | UnparsedObject;
export const ASCENDING = "asc";
export const DESCENDING = "desc";
